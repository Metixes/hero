<template>
  <div class="area">
    <textarea
      v-model="transcript"
      class="area-input"
      rows="1"
      placeholder="請造句"></textarea>
    <svg
      v-if="!isRecording"
      @click="showRecognitionText"
      class="area-input-btn"
      width="25"
      height="25">
      <use href="../../assets/symbol-defs.svg#icon-voice"></use>
    </svg>
    <svg
      v-else
      @click="showRecognitionText"
      class="area-input-btn"
      width="25"
      height="25">
      <use href="../../assets/symbol-defs.svg#icon-stop"></use>
    </svg>
  </div>

  <!-- <div>
    <button @click="toggleRecording" :disabled="!SpeechRecognitionSupported">
      Тогл запису
    </button>
    <div>
      <textarea
        v-model="transcribedText"
        placeholder="Текст з голосу"></textarea>
    </div>
  </div> -->
  <!-- <div class="flex items-center justify-center h-screen w-full">
    <div class="w-full">
      <div
        v-if="isRecording || transcript"
        class="w-1/4 m-auto rounded-md border p-4 bg-white">
        <div class="flex-1 flex w-full justify-between">
          <div class="space-y-1">
            <p class="text-sm font-medium leading-none">
              {{ recordingComplete ? "Recorded" : "Recording" }}
            </p>
            <p class="text-sm text-muted-foreground">
              {{
                recordingComplete ? "Thanks for talking." : "Start speaking..."
              }}
            </p>
          </div>
          <div
            v-if="isRecording"
            class="rounded-full w-4 h-4 bg-red-400 animate-pulse" />
        </div>

        <div v-if="transcript" class="border rounded-md p-2 h-full mt-4">
          <p class="mb-0">{{ transcript }}</p>
        </div>
      </div>

      <div class="flex items-center w-full">
        <button
          @click="handleToggleRecording"
          :class="{
            'bg-red-400 hover:bg-red-500': isRecording,
            'bg-blue-400 hover:bg-blue-500': !isRecording,
          }"
          class="mt-10 m-auto flex items-center justify-center rounded-full w-20 h-20 focus:outline-none">
          <svg
            v-if="isRecording"
            class="h-12 w-12"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path fill="white" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
          <svg
            v-else
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            class="w-12 h-12 text-white">
            <path
              fill="currentColor"
              d="M128 176a48.05 48.05 0 0 0 48-48V64a48 48 0 0 0-96 0v64a48.05
            48.05 0 0 0 48 48ZM96 64a32 32 0 0 1 64 0v64a32 32 0 0 1-64 0Zm40
            143.6V232a8 8 0 0 1-16 0v-24.4A80.11 80.11 0 0 1 48 128a8 8 0 0 1 16
            0a64 64 0 0 0 128 0a8 8 0 0 1 16 0a80.11 80.11 0 0 1-72 79.6Z" />
          </svg>
        </button>
      </div>
    </div>
  </div> -->
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from "vue";
import { airpetFetch } from "@/utils/airpetFetcher.js";
import VoiceRecorder from "@/components/recorder/VoiceRecorder.vue";

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
// const transcribedText = ref("");
// const recognition = new webkitSpeechRecognition();
// let isRecording = false;

// const toggleRecording = () => {
//   if (isRecording) {
//     recognition.stop();
//   } else {
//     recognition.start();
//   }
// };

// recognition.lang = "uk-UA";
// recognition.continuous = true;

// recognition.onresult = (event) => {
//   const transcript = event.results[event.results.length - 1][0].transcript;
//   console.log(transcript);
//   transcribedText.value += " " + transcript;
// };

// recognition.onend = () => {
//   if (isRecording) {
//     recognition.start();
//   }
// };

// const SpeechRecognitionSupported = "webkitSpeechRecognition" in window;

// const isRecording = ref(false);
// const recordingComplete = ref(false);
// const transcript = ref("");

// const recognitionRef = ref(null);

// const startRecording = () => {
//   isRecording.value = true;
//   recognitionRef.value = new window.webkitSpeechRecognition();
//   recognitionRef.value.continuous = true;
//   recognitionRef.value.interimResults = true;

//   recognitionRef.value.onresult = (event) => {
//     const { transcript: resultTranscript } =
//       event.results[event.results.length - 1][0];

//     console.log(event.results);
//     transcript.value = resultTranscript;
//   };

//   recognitionRef.value.start();
// };

// onUnmounted(() => {
//   if (recognitionRef.value) {
//     recognitionRef.value.stop();
//   }
// });

// const stopRecording = () => {
//   if (recognitionRef.value) {
//     recognitionRef.value.stop();
//     recordingComplete.value = true;
//   }
// };

// const handleToggleRecording = () => {
//   isRecording.value = !isRecording.value;
//   if (!isRecording.value) {
//     startRecording();
//   } else {
//     stopRecording();
//   }
// };

// const TEST_USER = {
//   subject: "數學",
//   response_type: "Text",
//   school_year: 5,
//   student_name: "yunfei ydes@ip",
//   action: "Start",
// };

// const getText = async (data, token) => {
//   // "continue-conversation",
//   //     {
//   //       ...dataToSend,
//   //       response_type: "Text",
//   //       action: "Continue",
//   //     },
//   const data = await airpetFetch(
//     "english-to-chinese",
//     "Hello",
//     localStorage.getItem("token")
//   );
//   console.log(data);
// };
</script>

<style scoped lang="scss">
.area {
  max-width: 100%;
  height: 100%;
  position: relative;

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

    &-btn {
      display: flex;
      position: absolute;
      bottom: 10px;
      right: 10px;

      // animation: isActive 2s ease 0s infinite normal none;
    }

    &::-webkit-scrollbar {
      display: none;
    }
    &::placeholder {
      font-family: "DFYuanMedium";
      color: #adadad;
    }
  }
}
// @keyframes isActive {
//   0% {
//   }

//   50% {
//   }

//   100% {
//   }
// }
</style>
