<template>
  <section class="content">
    <Loader v-if="!store.state.user.isLoaded" />
    <div v-else class="content-wrapper">
      <div class="translation">
        <div
          v-for="task of store.state.user.userTasks"
          :key="task.id"
          @click="listenTasks(task.audio)"
          class="translation-items"
        >
          <span class="translation-btn">{{ task.eng }} {{ task.chi }} </span>
          <svg class="translation-icon-horn">
            <use href="@/assets/symbol-defs.svg#icon-horn" />
          </svg>
        </div>
      </div>
      <div class="server-area">
        <textarea class="server-area-input" rows="1" />
        <div class="server-area-options">
          <svg
            class="server-area-options-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 4.923 4.025"
          >
            <path
              d="M597.405,687.24a.272.272,0,0,1,.168.252v3.282a.272.272,0,0,1-.326.268.269.269,0,0,1-.14-.074l-1.014-1.014h-.707a.273.273,0,0,1-.274-.274v-1.094a.273.273,0,0,1,.274-.273h.707l1.014-1.014a.272.272,0,0,1,.3-.059Zm1.442-.04a.272.272,0,0,1,.387,0,2.733,2.733,0,0,1,0,3.867.274.274,0,0,1-.387-.387,2.187,2.187,0,0,0,0-3.094.273.273,0,0,1,0-.386Zm-.774.773a.262.262,0,0,1,.089-.059.27.27,0,0,1,.105-.021.274.274,0,0,1,.1.021.248.248,0,0,1,.088.059,1.641,1.641,0,0,1,0,2.321.274.274,0,0,1-.387-.387,1.092,1.092,0,0,0,0-1.547.294.294,0,0,1-.059-.089.27.27,0,0,1-.021-.1.265.265,0,0,1,.021-.1.271.271,0,0,1,.059-.089Z"
              transform="translate(-595.112 -687.119)"
              fill="#fff"
            />
          </svg>
          <span class="server-area-options-gpt">ChatGPT範例</span>
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
        @click="submitUserAnswer"
        :disabled="store.state.user.userStoryAnswer.length || disabledSubmitBtn"
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

import Loader from "@/components/UI/Loader.vue";
import SpeechToText from "@/components/UI/SpeechToText.vue";
import request from "@/config/request";
import dayjs from "dayjs";

const store = useStore();

const transcriptText = ref(store.state.user.userStoryAnswer);
const isRecording = ref(false);
const disabledSubmitBtn = computed(() => {
  if (transcriptText.value) {
    return false;
  } else {
    return true;
  }
});

const listenTasks = (audio) => {
  const audioObj = new Audio(audio);
  audioObj.play();
};

const submitUserAnswer = () => {
  store.dispatch("user/submitTask", {
    storyAnswer: transcriptText.value,
  });
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
  flex-wrap: wrap;
  gap: 10px 5px;

  &-items {
    padding: 8px 5px 8px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    border-radius: 18px;
    background-color: #9f3fde;

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
