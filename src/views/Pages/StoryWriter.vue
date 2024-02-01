<template>
  <section class="content">
    <div class="translation">
      <div class="translation-items">
        <span class="translation-btn">frog 青蛙 </span>
        <svg class="translation-icon-horn">
          <use href="@/assets/symbol-defs.svg#icon-horn" />
        </svg>
      </div>
    </div>
    <div class="server-area">
      <AreaInputAi />
    </div>
    <div class="client-area">
      <AreaInput />
    </div>
    <SubmitButton />
  </section>
</template>

<script setup>
import { ref } from "vue";
import AreaInputAi from "@/components/UI/AreaInputAi.vue";
import AreaInput from "@/components/UI/AreaInput.vue";
import SubmitButton from "@/components/UI/SubmitButton.vue";

const speechTranslate = (event) => {};
</script>

<style scoped lang="scss">
.content {
  padding: 20px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
}
.client-area {
  margin-bottom: 20px;
  flex: 1 1 auto;
  width: 80%;
  margin-top: 10px;
}
</style>
