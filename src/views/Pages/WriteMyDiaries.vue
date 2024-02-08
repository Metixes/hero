<template>
  <section class="content">
    <div class="voice-message">
      <SpeechToText
        @click="isRecording = !isRecording"
        class="voice-message-icon"
        v-model:transcriptText="userTranscriptText"
      />
      <div class="description">
        <h3 class="description-title">請用語音輸入中文日誌</h3>
        <div class="description-timeline">
          <svg class="description-timeline-line">
            <use href="@/assets/symbol-defs.svg#icon-voice-line" />
          </svg>
          <span class="description-timeline-time">00:52</span>
        </div>
      </div>
    </div>
    <div class="chats">
      <div class="chats-ai chat">
        <div class="chats-wrapper ai-inner">
          <p v-html="userTranscriptText" class="chats-ai-text"></p>
        </div>
        <div class="chats-options">
          <span class="chats-btn">From: 中文</span>
        </div>
      </div>
      <div class="chats-user chat">
        <div class="chats-wrapper user-inner">
          <p v-html="aiTranscriptText" class="chats-user-text"></p>
        </div>
        <div class="chats-options">
          <svg @click="togglePlayStop" class="chats-icon">
            <use href="@/assets/symbol-defs.svg#icon-horn" />
          </svg>
          <span class="chats-btn">To: English</span>
        </div>
      </div>
    </div>
    <div class="voice-message">
      <SpeechToText
        class="voice-message-icon"
        v-model:transcriptText="aiTranscriptText"
      />
      <div class="description">
        <h3 class="description-title">請念出翻譯後的英文日誌後上傳</h3>
        <div class="description-timeline">
          <svg class="description-timeline-line">
            <use href="@/assets/symbol-defs.svg#icon-voice-line" />
          </svg>
          <span class="description-timeline-time">00:43</span>
        </div>
      </div>
      <span @click="submitDiary" class="voice-message-submit">提交</span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { notify } from "@kyvg/vue3-notification";
import { airpetFetch } from "@/utils/airpetFetcher";
import { useSpeechSynthesis } from "@vueuse/core";
import SpeechToText from "@/components/UI/SpeechToText.vue";
import request from "@/config/request";

const store = useStore();

let speechObj = null;
const TOKEN = ref("");
const isRecording = ref(false);
const aiTranscriptText = ref("");
const userTranscriptText = ref("");
const diary = ref([]);

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

const getDiary = async () => {
  try {
    const { data } = await request.get("/diary", {
      headers: {
        token: store.state.token,
      },
    });

    if (data.error) {
      notify({
        title: "Error",
        text: data.message,
      });
      return;
    }

    userTranscriptText.value = data.data.chiText;
    aiTranscriptText.value = data.data.enText;
  } catch (error) {
    console.log(error);
    console.log("error");
  }
};

const submitDiary = async () => {
  try {
    const { data } = await request.post(
      "/diary",
      {
        chiText: userTranscriptText.value,
        enText: aiTranscriptText.value,
      },
      {
        headers: {
          token: store.state.token,
        },
      },
    );

    if (data.error) {
      notify({
        title: "Error",
        text: data.message,
      });
      return;
    }

    console.log(data);
  } catch (error) {
    console.log(error);
    console.log("error");
  }
};

const listenEngText = () => {
  speechObj = useSpeechSynthesis(aiTranscriptText.value, {
    lang: "en-US",
    pitch: 1,
    rate: 1,
    volume: 1,
  });
  speechObj.speak();
};

const togglePlayStop = () => {
  if (speechObj === null) {
    listenEngText();
  } else if (speechObj.isPlaying) {
    speechObj.stop();
    speechObj = null;
  }
};

watch(
  () => isRecording.value,
  async (n, o) => {
    if (!n) {
      if (!TOKEN.value) {
        await getToken();
      }

      const translatedText = await airpetFetch(
        "text-to-speech",
        { text: "你好" },
        TOKEN.value,
      );

      aiTranscriptText.value = translatedText.translated_text;
    }
  },
);

onMounted(() => {
  getDiary();
});
</script>

<style scoped lang="scss">
.content {
  width: 100%;
  padding: 20px 0 10px;
}
.voice-message {
  max-width: 90%;
  margin: 0 auto;
  padding: 2px 10px;
  display: flex;
  align-items: center;
  gap: 5px;

  border: 6px solid #f0f0f2;
  border-radius: 14px;
  background-color: var(--white);
  box-shadow: 0px 5px 21px -5px rgba(199, 230, 244, 1);

  &-icon {
    padding: 10px;
    width: 50px;
    height: 50px;

    border: 4px solid #f0f0f2;
    border-radius: 50%;
    background-color: #8898df;
  }

  &-submit {
    padding: 10px 20px;

    border-radius: 18px;
    background-color: #8898df;
  }
}

.description {
  flex: 1 1 auto;
  padding: 2px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &-title {
    font-family: "HanWangYenHeavy";
    color: #807afa;
  }

  &-timeline {
    display: flex;
    align-items: center;
    gap: 5px;

    &-line {
      width: 100px;
      height: 18px;
    }

    &-time {
      font-family: "OpenSans";
      font-weight: 600;
      color: #bebefc;
    }
  }
}

.chat {
  position: relative;
  padding: 32px 20px 45px 20px;
}

.chats {
  margin: 10px 0;

  &-ai {
    font-family: "DFYuanMedium";

    background: linear-gradient(
      to right,
      #e58f7e 0%,
      #e3857e 13.9%,
      #df637e 69%,
      #de567f 100%
    );

    &-text {
      color: #787b7b;
    }
  }

  &-user {
    background-color: #8fbde6;

    &-text {
      color: #787b7b;
    }
  }

  &-wrapper {
    overflow-y: scroll;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &-options {
    display: flex;
    align-items: center;
    gap: 5px;
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

  &-icon {
    padding: 4px;
    width: 24px;
    height: 24px;

    border-radius: 50%;
    background-color: #8898df;
  }

  &-btn {
    padding: 5px 20px;

    border: 0.5px solid var(--white);
    border-radius: 18px;
    color: var(--white);
    cursor: default;
  }
}

.chats-wrapper {
  min-height: 50px;
  max-height: 130px;
}

.ai-inner {
  min-height: 50px;
  height: 11svh;
}

.user-inner {
  min-height: 50px;
  height: 13svh;
}
</style>
