<template>
  <section class="content">
    <div v-if="!store.state.user.isLoaded">
      <Loader />
    </div>
    <div v-else class="content-wrapper">
      <a-carousel ref="slider" :after-change="currentSlideIndex" class="carousel">
        <div v-for="slide of store.state.user.userTasks" :key="slide.id" class="slides">
          <div class="slides-img">
            <img :src="slide.image" :alt="slide.eng" />
          </div>
          <div class="slides-task">
            <h3 class="slides-task-first">{{ slide.eng }}</h3>
            <h3 class="slides-task-second">{{ slide.chi }}</h3>
          </div>
          <p class="slides-question">
            {{ slide.sentence_eng }}
          </p>
        </div>
      </a-carousel>
      <div class="form-input">
        <textarea
          :inert="
            store.state.user.userAnswers[currentSlide].value.length ||
            dayjs(store.state.user.currentDate).format('YYYY-MM-DD') !==
              dayjs(new Date()).format('YYYY-MM-DD')
          "
          v-model="transcriptText"
          class="form-input-area"
          rows="1"
          maxlength="100"
          placeholder="請造句"
        />
        <!-- :class="[
            'form-input-btn',
            {
              disabled:
                store.state.user.userAnswers[currentSlide].value.length ||
                dayjs(store.state.user.currentDate).format('YYYY-MM-DD') !== 
                  dayjs(new Date()).format('YYYY-MM-DD'),
            },
          ]" -->
        <SpeechToText
          @click="() => (isRecording = !isRecording)"
          v-model:transcriptText="transcriptText"
          :class="[
            'form-input-btn',
            {
              disabled:
                store.state.user.userAnswers[currentSlide].value.length ||
                dayjs(store.state.user.currentDate).format('YYYY-MM-DD') !==
                  dayjs(new Date()).format('YYYY-MM-DD'),
            },
          ]"
        />
      </div>
      <button
        :disabled="
          store.state.user.userAnswers[currentSlide].value.length ||
          disabledSubmitBtn ||
          dayjs(store.state.user.currentDate).format('YYYY-MM-DD') !==
            dayjs(new Date()).format('YYYY-MM-DD')
        "
        @click="submitTask"
        class="submit-button"
      >
        提交
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { notify } from "@kyvg/vue3-notification";

import SpeechToText from "@/components/UI/SpeechToText.vue";
import Loader from "@/components/UI/Loader.vue";
import request from "@/config/request";
import dayjs from "dayjs";

const store = useStore();
const transcriptText = ref(store.state.user.userAnswers[0].value);
const disabledSubmitBtn = computed(() => {
  if (transcriptText.value) {
    return false;
  } else {
    return true;
  }
});
const slider = ref(null);
const isRecording = ref(false);
const currentSlide = ref(0);
const userAnswers = [
  "firstWordAnswer",
  "secondWordAnswer",
  "thirdWordAnswer",
  "fourthWordAnswer",
  "fiveWordAnswer",
];
const currentSlideIndex = (current) => {
  if (store.state.user.userAnswers[current].value) {
    transcriptText.value = store.state.user.userAnswers[current].value;
  } else {
    transcriptText.value = "";
  }
  currentSlide.value = current;
};

const submitTask = async () => {
  store
    .dispatch("user/submitTask", {
      [userAnswers[currentSlide.value]]: transcriptText.value,
      slide: currentSlide.value,
    })
    .then((data) => {
      data ? slider.value.next() : null;
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
      transcriptText.value = store.state.user.userAnswers[0].value;

      const idx = store.state.user.userAnswers.findIndex((el) => !el.value.length);

      if (idx !== -1) {
        setTimeout(() => {
          slider.value.goTo(idx, true);
          currentSlide.value = idx;
        }, 0);
      }
    }
  },
);

onMounted(() => {
  if (!store.state.user.userTasks.length) {
    store.dispatch("user/getTasks");
  }
});
</script>

<style scoped lang="scss">
.content {
  padding: 20px 0;
  height: 100%;

  &-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.history-answers {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 15px;
  padding-right: 20px;
}

.carousel {
  min-width: 0;
  width: 80%;
  margin: 0 auto;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 18px 18px 25px -1px rgba(143, 189, 230, 0.2);
}
.slides {
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &-img {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    max-width: 300px;
    min-height: 120px;
    border-radius: 8px;

    & > img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  &-task {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-first {
      font-size: 16px;
      font-weight: 500;
      color: #413a89;
    }
    &-second {
      font-family: "HanWangYenHeavy";
      color: #807afa;
    }
  }
  &-question {
    margin-top: 10px;
  }
}

.ant-carousel {
  &:deep(.slick-dots) {
    display: flex !important;
    gap: 20px;
    bottom: -30px !important;
  }
  &:deep(.slick-dots) > li {
    width: 8px !important;
    height: 8px !important;
    margin-inline: 0 !important;
  }
  &:deep(.slick-dots) > li > button {
    width: 8px !important;
    height: 8px !important;
    border-radius: 50% !important;
    background: #bfbfbf;
  }
  &:deep(.slick-active) > button {
    background: #807afa !important;
  }
}

.form-input {
  position: relative;
  flex: 1 1 auto;
  margin: 50px auto 30px;
  max-width: 80%;
  width: 100%;

  &-area {
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
    max-width: 25px;
    max-height: 25px;
    position: absolute;
    padding: 4px;
    bottom: 6px;
    right: 6px;
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
