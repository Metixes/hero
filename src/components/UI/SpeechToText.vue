<template>
  <svg v-if="!isRecording" @click="showRecognitionText" class="recording-btn">
    <use href="../../assets/symbol-defs.svg#icon-voices"></use>
  </svg>
  <svg
    v-else
    @click="showRecognitionText"
    class="recording-btn"
    width="25"
    height="25">
    <use href="../../assets/symbol-defs.svg#icon-stop"></use>
  </svg>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";

const emit = defineEmits();

const isRecording = ref(false);
const transcript = ref("");
const Recognition =
  window.SpeechRecognition ||
  window.webkitSpeechRecognition ||
  window.mozSpeechRecognition;
const recognition = new Recognition();

const showRecognitionText = () => {
  if (isRecording.value) {
    recognition.stop();
  } else {
    recognition.start();
  }
};

onMounted(() => {
  recognition.continuous = true;
  recognition.interimResult = true;

  recognition.onstart = () => {
    isRecording.value = true;
  };

  recognition.onend = () => {
    isRecording.value = false;
  };

  recognition.onresult = (event) => {
    const text = Array.from(event.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join("");

    transcript.value = text;
    emit("update:transcriptText", text);
  };
});
</script>

<style scoped lang="scss">
.recording-btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #8898df;
}
</style>
