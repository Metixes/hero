<template>
  <button
    @click="toggleRecording"
    style="outline: none; border: none; background: transparent"
  >
    <svg :width="props.svgWidth" :height="props.svgHeight">
      <use
        :href="
          !isRecording ? getIcon(props.svgName) : getIcon(props.svgNameActive)
        "
      ></use>
    </svg>
  </button>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["getVoice"]);

const props = defineProps({
  svgName: String,
  svgNameActive: String,
  svgWidth: String,
  svgHeight: String,
});

const getIcon = (name) => {
  const sprite = require(`@/assets/symbol-defs.svg`);
  return sprite + "#" + name;
};

const isRecording = ref(false);
let mediaRecorder = null;
let recordedChunks = [];

const startRecording = () => {
  recordedChunks = [];

  navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia;

  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then((stream) => {
      isRecording.value = true;
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.addEventListener("dataavailable", (event) => {
        if (event.data.size > 0) {
          recordedChunks.push(event.data);
        }
      });
      mediaRecorder.addEventListener("stop", () => {
        const blobMp3 = new Blob(recordedChunks, {
          type: "audio/mp3; codecs=opus",
        });
        const blobWav = new Blob(recordedChunks, {
          type: "audio/wav",
        });
        let url = window.URL || window.webkitURL || window.mozURL;
        const audioUrl = url.createObjectURL(blobMp3);

        emit("getVoice", {
          file: new File([blobWav], `${Date.now()}.wav`, {
            type: "audio/wav",
          }),
          audioUrl,
        });
      });
      mediaRecorder.start();
    })
    .catch((error) => {
      console.error("Error accessing microphone:", error);
    });
};

const toggleRecording = () => {
  if (!isRecording.value) {
    startRecording();
  } else {
    stopRecording();
  }
};

const stopRecording = () => {
  isRecording.value = false;
  mediaRecorder.stop();
};
</script>
