<template>
  <div class="input">
    <textarea class="input-area" rows="1"></textarea>
    <div class="input-options">
      <svg class="input-options-btns" width="25" height="25">
        <use href="../../assets/symbol-defs.svg#icon-send"></use>
      </svg>
      <svg class="input-options-btns" width="25" height="25">
        <use href="../../assets/symbol-defs.svg#icon-voice"></use>
      </svg>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.input {
  width: 100%;
  position: relative;
  resize: none;

  &-area {
    display: flex;
    width: 100%;
    overflow-y: scroll;
    outline: none;
    border: 1px solid #cfd6da;
    border-radius: 23px;
    padding: 10px 75px 10px 20px;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    color: #787b7b;
    resize: none;

    &::-webkit-scrollbar {
      display: none;
      width: 3px;
      height: 1px;
      transition: all 0.5s;
      z-index: 10;
    }
    &::-webkit-scrollbar-track {
      background-color: white;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #bec4c8;
      border-radius: 3px;
    }
    scroll-behavior: smooth;
  }

  &-options {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 5px;
    top: calc(50% - 12.5px);
    right: 10px;
  }
}
</style>
