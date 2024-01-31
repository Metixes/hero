<template>
  <div class="area">
    <textarea class="area-input" rows="1" placeholder="請造句"></textarea>
    <svg class="area-input-btn" width="25" height="25">
      <use href="../../assets/symbol-defs.svg#icon-voice"></use>
    </svg>
  </div>
</template>

<script setup></script>

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
