<template>
  <div class="area">
    <textarea class="area-input" rows="1" placeholder="請造句"></textarea>
    <!-- <svg class="area-input-btn" width="25" height="25">
      <use href="../../assets/symbol-defs.svg#icon-voice"></use>
    </svg> -->
    <VoiceRecorder
      class="area-input-btn"
      svgName="icon-voice"
      svgNameActive="icon-stop"
      svgWidth="24"
      svgHeight="24"
      @getVoice="getRecord" />
  </div>
</template>

<script setup>
import VoiceRecorder from "@/components/recorder/VoiceRecorder.vue";
import { airpetFetch } from "@/utils/airpetFetcher.js";

const TEST_USER = {
  subject: "數學",
  response_type: "Text",
  school_year: 5,
  student_name: "yunfei ydes@ip",
  action: "Start",
};

const getRecord = async ({ file, audioUrl }) => {
  console.log(file, audioUrl);
  // getText;
};

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
</style>
