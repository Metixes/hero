<template>
  <section class="homework-section">
    <div v-if="!dataLoaded" class="loader-container"><Loader /></div>
    <div v-else v-scroll-down class="chat-container">
      <div v-for="(message, index) in chatMessages" :key="index">
        <div
          :class="[
            message.side === 'server' ? 'server-message' : 'user-message',
          ]"
        >
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
            <p v-if="message.contentType === 'text'">{{ message.content }}</p>
            <figure
              v-if="message.contentType === 'audio'"
              class="message-audio"
            >
              <audio :src="message.content" controls></audio>
            </figure>
            <span class="message-send-time">{{ message.time }}</span>
          </div>
        </div>
      </div>
    </div>
    <div :class="[{ disabled: !dataLoaded }, 'input-container']">
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
        <input placeholder="Ask question" type="text" v-model="textMessage" />
        <div class="send-container">
          <button @click="sendInputText">
            <svg width="24" height="24">
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
    <VueCamera
      v-if="cameraOpened"
      @close="cameraOpened = false"
      @snapshot="getPhoto"
    />
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { useFileDialog } from "@vueuse/core";
import Loader from "@/components/UI/Loader.vue";
import VueCamera from "@/components/camera/VueCamera.vue";
import VoiceRecorder from "@/components/recorder/VoiceRecorder.vue";

import { airpetFetch } from "@/utils/airpetFetcher.js";
import { getTime } from "@/utils/getTime.js";

const TEST_USER = {
  subject: "數學",
  response_type: "Text",
  school_year: 5,
  student_name: "yunfei ydes@ip",
  action: "Start",
};

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

//conversation timeline
const conversationsStartedAt = ref(0);
const conversationFinishedAt = ref(0);

//array of user`s chat messages with ai
const chatMessages = reactive([]);

//camera state. will shows if true
const cameraOpened = ref(false);

//user`s text message
const textMessage = ref("");

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
      contentType: "text",
      isLoaded: false,
      time: 0,
    });

    const data = await airpetFetch(
      "start-conversation",
      TEST_USER,
      TOKEN.value
    );

    CONVERSATION_SESSION_ID.value = data.caller_id;
    chatMessages.at(-1).content = data.response;
    chatMessages.at(-1).isLoaded = true;
    chatMessages.at(-1).time = getTime();
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
    if (!CONVERSATION_SESSION_ID) {
      //MABYE??
      await getToken();
      await startConversation();
    }

    let dataToSend = data;

    if (contentType === "text") {
      chatMessages.push({
        side: "client",
        title: "",
        content: Object.values(data)[0],
        contentType: "text",
        isLoaded: true,
        time: getTime(),
      });
    } else if (contentType === "audio") {
      chatMessages.push({
        side: "client",
        title: "",
        content: data.audioUrl,
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
      content: "",
      contentType: "text",
      isLoaded: false,
      time: 0,
    });

    const continueConversation = await airpetFetch(
      "continue-conversation",
      {
        ...dataToSend,
        response_type: "Text",
        action: "Continue",
      },
      TOKEN.value,
      CONVERSATION_SESSION_ID.value
    );

    chatMessages.at(-1).content = continueConversation.response;
    chatMessages.at(-1).isLoaded = true;
    chatMessages.at(-1).time = getTime();
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
      contentType: "text",
      isLoaded: false,
      time: 0,
    });

    const extractText = await airpetFetch(
      "extract-image-text",
      data,
      TOKEN.value
    );

    chatMessages.at(-1).content = extractText.extracted_text;
    chatMessages.at(-1).isLoaded = true;
    chatMessages.at(-1).time = getTime();

    chatMessages.push({
      side: "server",
      title: "伴讀小雲飛",
      content: "",
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
      TOKEN.value
    );

    chatMessages.at(-1).content = explanation.response;
    chatMessages.at(-1).isLoaded = true;
    chatMessages.at(-1).time = getTime();
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
const storeUserChat = async () => {
  localStorage.setItem("user_chat", JSON.stringify(chatMessages));
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
 * getting data on page load
 * @returns void
 */
onMounted(async () => {
  dataLoaded.value = false;
  if (!TOKEN.value) {
    await getToken();
    dataLoaded.value = true;

    await startConversation();

    return;
  }

  dataLoaded.value = true;
});
</script>

<style scoped lang="scss">
.homework-section {
  display: flex;
  flex-direction: column;

  width: inherit;
  height: inherit;
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
    font-family: "DFYuanMedium";
    color: #787b7b;
  }
}

.user-message {
  position: relative;
  flex-direction: row-reverse;
  overflow-wrap: break-word;

  & > .message-content > .message-send-time {
    position: absolute;
    right: 0;
    bottom: -40%;

    color: #8898df;
  }

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

  & > .message-content > .message-send-time {
    position: absolute;
    left: 0;
    bottom: -40%;

    color: #8898df;
  }

  & > .message-content::before {
    position: absolute;
    content: "";
    width: 1px;
    left: -20px;
    bottom: 0;
    border-bottom: 17px solid #f2f4f7;
    border-left: 27px solid transparent;
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
