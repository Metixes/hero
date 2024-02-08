<template>
  <section class="homework-section">
    <div v-if="!dataLoaded" class="loader-container"><Loader /></div>
    <div ref="chartRef" v-if="dataLoaded" class="chat-container">
      <div v-intersection="getHistoryOnScroll" style="height: 1px"></div>
      <div v-for="(message, index) in chatMessages" :key="index">
        <div :class="[message.side === 'server' ? 'server-message' : 'user-message']">
          <div class="avatar">
            <svg width="30" height="30">
              <use
                :href="
                  message.side === 'server'
                    ? getChatIcon('icon-logo-icon')
                    : getChatIcon('icon-fmale')
                "
              ></use>
            </svg>
          </div>
          <span v-if="!message.isLoaded" class="message-loader"
            ><a-spin size="small"
          /></span>
          <div v-else class="message-content">
            <figure
              v-if="message.contentType === 'audio' && message.audioContent"
              class="message-audio"
            >
              <audio controls>
                <source type="audio/mp3" :src="message.audioContent" />
                <source type="audio/wav" :src="message.audioContent" />
                Browser doesn't support audio element
              </audio>
            </figure>
            <p v-else>{{ message.content }}</p>
            <span class="message-send-time">{{ message.time }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="dataLoaded" class="hw-remaining">
      <p v-if="!chattingAbility">Will be available after: {{ remainingTimeDay }}</p>
      <p v-else>Time left: {{ remainingTime90 }}</p>
    </div>
    <div :class="[{ disabled: !dataLoaded || !chattingAbility }, 'input-container']">
      <div class="uploads">
        <button @click="cameraOpened = true">
          <svg width="25" height="25">
            <use href="../../assets/symbol-defs.svg#icon-photo"></use>
          </svg>
        </button>
        <button @click="open">
          <svg width="25" height="25">
            <use href="../../assets/symbol-defs.svg#icon-upload-img"></use>
          </svg>
        </button>
      </div>

      <div class="input">
        <input
          placeholder="Ask question"
          @keydown.enter="sendInputText"
          type="text"
          v-model="textMessage"
          autofocus
        />
        <div class="send-container">
          <button :disabled="!sendInputText.length">
            <svg @click="sendInputText" width="24" height="24">
              <use href="../../assets/symbol-defs.svg#icon-send"></use>
            </svg>
          </button>
          <VoiceRecorder
            svgName="icon-voice"
            svgNameActive="icon-stop"
            svgWidth="24"
            svgHeight="24"
            @getVoice="getRecord"
          />
        </div>
      </div>
    </div>

    <VueCamera v-if="cameraOpened" @close="cameraOpened = false" @snapshot="getPhoto" />
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, watch } from "vue";
import { useFileDialog } from "@vueuse/core";
import { useStore } from "vuex";
import Loader from "@/components/UI/Loader.vue";
import VueCamera from "@/components/camera/VueCamera.vue";
import VoiceRecorder from "@/components/recorder/VoiceRecorder.vue";
import request from "@/config/request.js";
import { airpetFetch } from "@/utils/airpetFetcher.js";
import { getTime } from "@/utils/getTime.js";
import {
  timeUntilEndOfDay,
  timeUntil90Minutes,
} from "../../utils/functionsUtils/homework.js";

const TEST_USER = {
  subject: "數學",
  school_year: 5,
  student_name: "yunfei ydes@ip",
  action: "Start",
};

const chartRef = ref(null);

const store = useStore();

//getting chat response type
const response_type = store.getters["getResponseType"];

//!TEST FUTURE
TEST_USER.response_type = response_type;

/**
 * This blok for HomeworkHelper
 */
const REMAINING_MULTIPLIER = 90;
const remainingTime90 = ref("");
const remainingTimeDay = ref("");
//END HomeworkHelper BLOCK

// if data loading (onMounted fn works) show loader
const dataLoaded = ref(false);

//token for making requests to airpet ai api
const TOKEN = ref(null);
//id for continue conversation with ai
const CONVERSATION_SESSION_ID = ref(null);

/**
 * chatting ability for current user
 * user can chat with ai only 90 mins per day
 *
 * by default ability is disabled until server check is chatting
 * possible for current user
 */
const chattingAbility = ref(false);

/**
 * if getChattingAbilityAndHistory() crashed it needs
 * to set tis variable to false
 * user still can chat with ai, but without history saving
 */
let canSaveChatHistory = true;

//conversation timeline
const conversationsStartedAt = ref(0);
const conversationFinishedAt = ref(0);

//array of user`s chat messages with ai
const chatMessages = reactive([]);

//camera state. will shows if true
const cameraOpened = ref(false);

//user`s text message
const textMessage = ref("");

// scroll to bottom of chat-content

const scrollToBottom = () => {
  const chatElement = document.querySelector(".chat-container");
  chatElement.scrollTop = chatElement.scrollHeight;
  // chartRef.value.scrollTop = chartRef.value.scrollHeight;
};

/**
 * getting image file from input image and send in sendMedia switcher
 * @returns void
 */
const { files, open, reset, onChange } = useFileDialog({
  accept: "image/*",
});
onChange((files) => {
  sendMedia(files[0]);
});

/**
 * getting image file camera and send in sendMedia switcher
 * @returns void
 */
const getPhoto = (files) => {
  cameraOpened.value = false;
  sendMedia(files.file);
};

/**
 * getting audio file and send in sendMedia switcher
 * @returns void
 */
const getRecord = ({ file, audioUrl }) => {
  sendMedia({ file, audioUrl }, "audio");
};

//starting conversation with ai
const startConversation = async () => {
  try {
    chatMessages.push({
      side: "server",
      title: "伴讀小雲飛",
      content: "",
      audioContent: null,
      contentType: "text",
      isLoaded: false,
      time: 0,
    });

    const data = await airpetFetch("start-conversation", TEST_USER, TOKEN.value);

    CONVERSATION_SESSION_ID.value = data.caller_id;
    chatMessages.at(-1).content = data.response;
    chatMessages.at(-1).isLoaded = true;
    chatMessages.at(-1).time = getTime();

    storeUserChat(chatMessages.at(-1));
    updateHomeworkAbility(data.caller_id);
    scrollToBottom();
  } catch (error) {
    console.log(error);
  }
};

/**
 * @param {object} data is an object that contains type on user input - input_text(text) or audio(binary)
 * @returns void
 */
const continueConversation = async (data, contentType = "text") => {
  try {
    if (!CONVERSATION_SESSION_ID.value) {
      //MABYE??
      await getToken();
      await startConversation();
      return;
    }

    let dataToSend = data;

    if (contentType === "text") {
      chatMessages.push({
        side: "client",
        title: "",
        audioContent: null,
        content: Object.values(data)[0],
        contentType: "text",
        isLoaded: true,
        time: getTime(),
      });
    } else if (contentType === "audio") {
      chatMessages.push({
        side: "client",
        title: "",
        content: "",
        audioContent: data.audioUrl,
        contentType: "audio",
        isLoaded: true,
        time: getTime(),
      });

      dataToSend = {
        audio: data.file,
      };
    }

    chatMessages.push({
      side: "server",
      title: "伴讀小雲飛",
      audioContent: null,
      content: "",
      contentType: "text",
      isLoaded: false,
      time: 0,
    });

    const continueConversation = await airpetFetch(
      "continue-conversation",
      {
        ...dataToSend,
        response_type,
        action: "Continue",
      },
      TOKEN.value,
      CONVERSATION_SESSION_ID.value,
    );

    if (response_type === "Audio") {
      const textToSpeech = await airpetFetch(
        "text-to-speech-chinese",
        {
          text: continueConversation.response,
        },
        TOKEN.value,
      );

      chatMessages.at(-1).audioContent = textToSpeech.audio;
      chatMessages.at(-1).contentType = "audio";
    }

    chatMessages.at(-1).content = continueConversation.response;
    chatMessages.at(-1).isLoaded = true;
    chatMessages.at(-1).time = getTime();
    storeUserChat(chatMessages.at(-1));

    chatMessages.at(-2).content = continueConversation.requested_text;
    storeUserChat(chatMessages.at(-2));
    scrollToBottom();
  } catch (error) {
    console.log(error);
  }
};

/**
 * extract text from image and explain it
 * @returns void
 */
const imageTextExplanation = async (data) => {
  try {
    chatMessages.push({
      side: "client",
      title: "",
      content: "",
      audioContent: null,
      contentType: "text",
      isLoaded: false,
      time: 0,
    });

    const extractText = await airpetFetch("extract-image-text", data, TOKEN.value);

    chatMessages.at(-1).content = extractText.extracted_text;
    chatMessages.at(-1).isLoaded = true;
    chatMessages.at(-1).time = getTime();
    storeUserChat(chatMessages.at(-1));

    chatMessages.push({
      side: "server",
      title: "伴讀小雲飛",
      content: "",
      audioContent: null,
      contentType: "text",
      isLoaded: false,
      time: 0,
    });

    const explanation = await airpetFetch(
      "text-explaination",
      {
        subject: TEST_USER.subject,
        text: extractText.extracted_text,
      },
      TOKEN.value,
    );

    if (response_type === "Audio") {
      const textToSpeech = await airpetFetch(
        "text-to-speech-chinese",
        {
          text: explanation.response,
        },
        TOKEN.value,
      );

      chatMessages.at(-1).audioContent = textToSpeech.audio;
      chatMessages.at(-1).contentType = "audio";
    }

    chatMessages.at(-1).content = explanation.response;
    chatMessages.at(-1).isLoaded = true;
    chatMessages.at(-1).time = getTime();
    storeUserChat(chatMessages.at(-1));
  } catch (error) {
    console.log(error);
  }
};

/**
 * switching witch media need to send and make request
 * @returns void
 */
const sendMedia = (data, type) => {
  //clear text input field
  textMessage.value = "";

  switch (type) {
    case "audio":
      continueConversation(data, type);
      break;
    default:
      imageTextExplanation({
        image: data,
      });
      break;
  }
};

/**
 * sending text message to ai
 * @returns void
 */
const sendInputText = () => {
  continueConversation({
    input_text: textMessage.value,
  });
  textMessage.value = "";
  scrollToBottom();
};

/**
 * get token for airpet ai api
 * @returns void
 */
const getToken = async () => {
  try {
    const data = await airpetFetch("token", {
      username: process.env.VUE_APP_AIRPET_USERNAME,
      password: process.env.VUE_APP_AIRPET_PASSWORD,
    });

    TOKEN.value = data.access;
  } catch (error) {
    console.log(error);
  }
};

/**
 * save user conversation with ai to local storage or in database???
 * @returns void
 */
const storeUserChat = async (chatData) => {
  try {
    if (!canSaveChatHistory) return;
    await request.post("homeworkfn/savehistory", chatData, {
      headers: { token: store.state.token },
    });
  } catch (error) {
    console.log("storing history error ", error.message);
  }
};

/**
 * dynamically getting avatar from svg sprite
 * @returns string
 */
const getChatIcon = (name) => {
  const sprite = require("@/assets/symbol-defs.svg");
  return sprite + "#" + name;
};

/**
 * getChattingAbilityAndHistory
 */
const getChattingAbilityAndHistory = async () => {
  try {
    const { data } = await request.get("homeworkfn/getability", {
      headers: { token: store.state.token },
    });

    if (data.error) {
      console.log("Get ability failed: ", data.message);
      chattingAbility.value = true;
      return;
    }

    chattingAbility.value = data.data.ability.available;
    CONVERSATION_SESSION_ID.value = data.data.ability.aiConversationId;
    conversationsStartedAt.value = data.data.ability.startTime;
    conversationFinishedAt.value = data.data.ability.endTime;
    chatMessages.push(...data.data.history);
  } catch (error) {
    chattingAbility.value = true;
    canSaveChatHistory = false;
    console.log("Get ability failed: ", error.message);
    console.log("chat history will not be saved");
  }
};

/**
 * Getting chat history on scroll bottom per gage
 * @returns void
 */
let page = 1;
let isAvailableData = true;
const getHistoryOnScroll = async () => {
  try {
    if (!isAvailableData) return;

    page++;
    const { data } = await request.get(`homeworkfn/history?page=${page}`, {
      headers: { token: store.state.token },
    });

    if (!data.data.length) {
      isAvailableData = false;
      return;
    }

    chatMessages.unshift(...data.data);
  } catch (error) {
    console.log("Get history failed: ", error.message);
  }
};

/**
 * make request to backend for update end conversation time
 * @param {string | null}  aiConversationId the id of the conversation or null
 * @returns void
 */
const updateHomeworkAbility = async (aiConversationId = null) => {
  try {
    const body = aiConversationId ? { aiConversationId } : {};
    await request.put("homeworkfn/updateability", body, {
      headers: { token: store.state.token },
    });
  } catch (error) {
    console.log("Update homeworkAbility failed: ", error.message);
  }
};

watch(
  () => dataLoaded.value,
  (n, o) => {
    if (n) {
      setTimeout(() => {
        scrollToBottom();
      }, 1000);
    }
  },
);
// watch(
//   () => chartRef.value,
//   (n, o) => {
//     if (n) {
//       chartRef.value.scrollTo(1000, n);
//     }
//   },
// );

/**
 * getting data on page load
 * @returns void
 */
let remainingInterval = null;
onMounted(async () => {
  dataLoaded.value = false;

  await getChattingAbilityAndHistory();

  if (!chattingAbility.value) {
    dataLoaded.value = true;

    remainingInterval = setInterval(() => {
      remainingTimeDay.value = timeUntilEndOfDay(conversationsStartedAt.value);
      if (!Number(remainingTimeDay.value.replace(/:/g, ""))) {
        chattingAbility.value = true;

        clearInterval(remainingInterval);
        conversationsStartedAt.value = Date.now();

        remainingInterval = setInterval(() => {
          remainingTime90.value = timeUntil90Minutes(
            conversationsStartedAt.value,
            REMAINING_MULTIPLIER,
          );
        }, 1000);
      }
    }, 1000);

    return;
  }

  if (!TOKEN.value) {
    await getToken();
  }

  if (!CONVERSATION_SESSION_ID.value || !chatMessages.length) {
    await startConversation();
  }

  dataLoaded.value = true;

  remainingInterval = setInterval(() => {
    remainingTime90.value = timeUntil90Minutes(
      conversationsStartedAt.value,
      REMAINING_MULTIPLIER,
    );

    if (!Number(remainingTime90.value.replace(/:/g, ""))) {
      chattingAbility.value = false;

      clearInterval(remainingInterval);
      conversationsStartedAt.value = Date.now();

      remainingInterval = setInterval(() => {
        remainingTimeDay.value = timeUntilEndOfDay(conversationsStartedAt.value);
      }, 1000);
    }
  }, 1000);
});

onUnmounted(() => {
  clearInterval(remainingInterval);
  updateHomeworkAbility();
});
</script>

<style scoped lang="scss">
.homework-section {
  display: flex;
  flex-direction: column;

  width: inherit;
  height: inherit;
}

.hw-remaining {
  padding: 1px;
  font-size: 12px;

  margin: 0 auto;
}

.chat-container,
.loader-container {
  height: 100%;
  padding: 10px;
}

.chat-container {
  overflow: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 3px;
    height: 1px;
    transition: all 0.5s;
    z-index: 10;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #bec4c8;
    border-radius: 3px;
  }
}

.input-container {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // opacity: 1;

  height: 40px;

  background: var(--gr-grey);

  & .uploads {
    display: flex;
    flex-wrap: nowrap;
  }

  & .uploads button {
    background: transparent;
    border: none;
    outline: none;
    margin: 0 8px;
  }

  // transition: opacity 0.8 ease;
}

.input {
  display: flex;
  align-items: center;

  width: 100%;

  padding: 8px 75px 8px 20px;

  background: var(--white);

  border-radius: 20px;

  & input {
    position: relative;
    width: 100%;

    border: none;
    outline: none;

    font-size: 12px;
    color: #787b7b;
  }

  & .send-container {
    position: absolute;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    right: 14px;

    & button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;

      border: none;
      outline: none;

      margin: 0 4px;
    }
  }
}

.server-message,
.user-message {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 20px;
  margin-bottom: 20px;

  font-family: "DFYuanMedium";

  & .message-loader,
  .message-content {
    margin: 0 4px;
    width: 70%;
  }
}

.message-content {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding-bottom: 15px;

  border-radius: 8px;
  background-color: #f2f4f7;

  & > p {
    position: relative;
    font-family: "DFYuanMedium";
    color: #787b7b;
  }
}

.message-send-time {
  position: absolute;
  right: 0;
  bottom: -20px;

  color: #8898df;
}

.user-message {
  position: relative;
  flex-direction: row-reverse;
  overflow-wrap: break-word;

  & > .message-content::before {
    position: absolute;
    content: "";
    width: 1px;
    right: -25px;
    bottom: 0;
    border-bottom: 17px solid #f2f4f7;
    border-right: 27px solid transparent;
  }

  &:has(.message-audio) .message-content {
    padding: 0;

    .message-audio {
      display: flex;
    }
  }
}

.server-message {
  position: relative;

  & > .message-content::before {
    position: absolute;
    content: "";
    width: 1px;
    left: -20px;
    bottom: 0;
    border-bottom: 17px solid #f2f4f7;
    border-left: 27px solid transparent;
  }

  &:deep(.message-send-time) {
    left: 0;
  }
}

.avatar {
  width: 35px;
  height: 35px;

  border-radius: 50%;

  background: var(--pink);

  display: flex;
  align-items: center;
  justify-content: center;
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
  // transition: opacity 0.8 ease;
}
</style>
