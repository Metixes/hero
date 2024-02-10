<template>
  <section class="content">
    <Loader v-if="!store.state.user.isLoaded" />
    <div v-else class="content-wrapper">
      <div class="translation">
        <div
          v-for="task of store.state.user.userTasks"
          :key="task.id"
          @click="listenEngText(task.audio)"
          class="translation-items"
          :style="{ background: generateRandomColor() }"
        >
          <span class="translation-btn">{{ task.eng }} {{ task.chi }} </span>
          <svg class="translation-icon-horn">
            <use href="@/assets/symbol-defs.svg#icon-horn" />
          </svg>
        </div>
      </div>
      <div class="server-area">
        <textarea readonly v-model="areaText" class="server-area-input" rows="1" />
        <div class="server-area-options">
          <a-spin v-if="isLoadingAudio" :class="[{ disabled: isLoadingAudio }]" />
          <svg
            v-else
            @click="listenEngText(aiAudio)"
            :class="['server-area-options-icon', { disabled: !areaText.length }]"
          >
            <use href="@/assets/symbol-defs.svg#icon-horn" />
          </svg>
          <a-popconfirm
            :disabled="
              dayjs(store.state.user.currentDate).format('YYYY-MM-DD') !==
              dayjs(new Date()).format('YYYY-MM-DD')
            "
            title="Using hint will cost 1 star"
            ok-text="Agree"
            cancel-text="Cancel"
            placement="bottomRight"
            @confirm="agreeToHelp"
            @cancel="cancel"
            :class="{ disabled: areaText.length }"
          >
            <span class="server-area-options-gpt">ChatGPT範例</span>
          </a-popconfirm>
        </div>
      </div>
      <div class="client-area">
        <textarea
          :inert="
            store.state.user.userStoryAnswer.length ||
            dayjs(store.state.user.currentDate).format('YYYY-MM-DD') !==
              dayjs(new Date()).format('YYYY-MM-DD')
          "
          v-model="transcriptText"
          class="client-area-input"
          rows="1"
          maxlength="100"
          placeholder="請仿照範例作一篇100字內故事"
        />
        <SpeechToText
          @click="isRecording = !isRecording"
          v-model:transcriptText="transcriptText"
          :class="[
            'client-area-btn',
            { disabled: store.state.user.userStoryAnswer.length },
          ]"
        />
      </div>
      <button
        :disabled="store.state.user.userStoryAnswer.length || disabledSubmitBtn"
        @click="submitUserAnswer"
        @keydown.enter="submitUserAnswer"
        class="submit-button"
      >
        提交
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { useStore } from "vuex";
import { notify } from "@kyvg/vue3-notification";
import { airpetFetch } from "@/utils/airpetFetcher.js";
import { useSpeechSynthesis } from "@vueuse/core";

import Loader from "@/components/UI/Loader.vue";
import SpeechToText from "@/components/UI/SpeechToText.vue";
import request from "@/config/request";
import dayjs from "dayjs";

const store = useStore();
let speechObj = null;
const isLoadingAudio = ref(false);
const aiAudio = ref(null);
const transcriptText = ref(store.state.user.userStoryAnswer);
const TOKEN = ref("");
const areaText = ref("");
const aiTextValue = ref("");
const isRecording = ref(false);
const disabledSubmitBtn = computed(() => {
  if (transcriptText.value) {
    return false;
  } else {
    return true;
  }
});

console.log(
  dayjs(store.state.user.currentDate).format("YYYY-MM-DD") !==
    dayjs(new Date()).format("YYYY-MM-DD"),
);

const listenEngText = (audio) => {
  const audioObj = new Audio(audio);
  audioObj.play();
};

const getEngAudio = async (engText) => {
  try {
    isLoadingAudio.value = true;

    const data = await airpetFetch("text-to-speech", { text: engText }, TOKEN.value);

    isLoadingAudio.value = false;
    aiAudio.value = data.audio;
  } catch (error) {
    console.log(error);
  }
  // var msg = new SpeechSynthesisUtterance();
  // var voices = window.speechSynthesis.getVoices();
  // msg.voice = voices[10];
  // msg.volume = 1; // From 0 to 1
  // msg.rate = 1; // From 0.1 to 10
  // msg.pitch = 2; // From 0 to 2
  // msg.text = aiTextValue.value;
  // msg.lang = "en";
  // window.webkitSpeechSynthesis.speak(msg);
  // textContent.split(".").forEach((text) => {
  //   const trimmed = text.trim();
  //   if (trimmed) {
  //     const U = getUtterance(target, text);
  //     speechSynthesis.speak(U);
  //   }
  // });
  // speechObj = useSpeechSynthesis(aiTextValue.value.trim(), {
  //   lang: "en-US",
  //   pitch: 1,
  //   rate: 1,
  //   volume: 1,
  // });
  // speechObj.speak();
};

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

const askForHelpAi = async () => {
  try {
    if (!TOKEN.value) {
      await getToken();
    }

    const engWords = [];

    store.state.user.userTasks.forEach((el) => {
      if (el.eng) {
        engWords.push(el.eng);
      }
    });

    const translatedEngText = await airpetFetch(
      "word-to-para",
      { text: engWords.join(", "), length: 100 },
      TOKEN.value,
    );

    aiTextValue.value = translatedEngText.response;

    await getEngAudio(translatedEngText.response);
  } catch (error) {
    console.log(error);
  }
};

const decrementUserStar = async () => {
  try {
    const { data } = await request.put(
      "linesstoryfn/decrementstar",
      {},
      {
        headers: {
          token: store.state.token,
        },
      },
    );

    if (data.error) {
      console.log("error");
      return;
    }

    // console.log(data);

    store.commit("user/setUserData", { ...store.state.user.userData, rating: data.data });
    // console.log(store.state.user.userData);
  } catch (error) {
    console.log(error);
  }
};

const agreeToHelp = () => {
  if (!store.state.user.userData.rating.stars) {
    notify({
      title: "Error",
      text: "You don't have enough stars.",
    });
    return;
  }

  areaText.value = aiTextValue.value;
  decrementUserStar();
};

const submitUserAnswer = () => {
  store.dispatch("user/submitTask", {
    storyAnswer: transcriptText.value,
  });
};

const generateRandomColor = () => {
  const red = Math.floor(Math.random() * (192 - 25) + 65);
  const green = Math.floor(Math.random() * (192 - 25) + 65);
  const blue = Math.floor(Math.random() * (192 - 25) + 65);

  return (
    "#" +
    red.toString(16).toUpperCase().padStart(2, "0") +
    green.toString(16).toUpperCase().padStart(2, "0") +
    blue.toString(16).toUpperCase().padStart(2, "0")
  );
};

watch(
  () => transcriptText.value,
  (n, o) => {
    if (n.length) {
      transcriptText.value = n;
    }
  },
);

watch(
  () => store.state.user.isLoaded,
  (n, o) => {
    if (n) {
      if (store.state.user.isTasksCompleted) {
        notify({
          title: "All done!",
          text: "Next tasks will be available tomorrow",
        });
      }
      transcriptText.value = store.state.user.userStoryAnswer;
    }
  },
);

onMounted(async () => {
  if (!store.state.user.userTasks.length) {
    await store.dispatch("user/getTasks");
  }
  await askForHelpAi();
});
</script>

<style scoped lang="scss">
.content {
  padding: 20px 0;
  height: 100%;

  &-wrapper {
    width: 100%;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.translation {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px 5px;

  &-items {
    padding: 8px 5px 8px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    border-radius: 18px;

    cursor: pointer;
  }

  // &-btn {
  //   padding: 8px 5px 8px 10px;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   border-radius: 18px;
  //   background-color: #9f3fde;
  // }

  &-icon-horn {
    width: 14px;
    height: 14px;
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    background-color: #8898df;
  }
}
.server-area {
  flex: 1 2 auto;
  width: 100%;
  margin-top: 20px;
  position: relative;

  &-input {
    width: 100%;
    height: 100%;
    padding: 10px 45px 10px 20px;

    overflow-y: scroll;
    outline: none;
    border: none;
    resize: none;
    scroll-behavior: smooth;
    color: #787b7b;
    background-color: #e58f7e;

    font-family: "DFYuanMedium";
    font-size: 14px;

    &::-webkit-scrollbar {
      display: none;
    }
    &::placeholder {
      font-family: "DFYuanMedium";
      color: #787b7b;
    }
  }

  &-options {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 5px;
    bottom: 10px;
    right: 10px;

    &-icon {
      max-width: 25px;
      max-height: 25px;
      padding: 4px;

      border-radius: 50%;
      background-color: #8898df;
    }
    &-gpt {
      padding: 3px 5px;

      color: var(--white);
      border: 1px solid var(--white);
      border-radius: 14px;
      background: transparent;

      cursor: pointer;
    }
  }
}
.client-area {
  position: relative;
  margin-bottom: 20px;
  flex: 1 1 auto;
  width: 80%;
  margin-top: 10px;

  &-input {
    width: 100%;
    height: 100%;
    padding: 10px 45px 10px 20px;

    overflow-y: scroll;
    outline: none;
    border: none;
    border-radius: 8px;
    resize: none;
    scroll-behavior: smooth;
    color: #adadad;
    background-color: #f3f2f9;

    font-family: "Roboto";
    font-size: 14px;

    &::-webkit-scrollbar {
      display: none;
    }
    &::placeholder {
      font-family: "DFYuanMedium";
      color: #adadad;
    }
  }
  &-btn {
    position: absolute;
    padding: 4px;
    max-width: 25px;
    max-height: 25px;
    bottom: 6px;
    right: 6px;

    &[inert] {
      opacity: 0.5;
      pointer-events: none;
      cursor: default;
    }
  }
}
.submit-button {
  padding: 10px 40px;
  border-radius: 18px;
  outline: none;
  border: none;

  background-color: #8898df;
  color: var(--white);
  box-shadow: 0px 0px 25px 15px rgba(143, 189, 230, 0.2);

  font-family: "HanWangYenHeavy";
  color: var(--white);

  &:disabled {
    background-color: #adadad;
  }
}
</style>
