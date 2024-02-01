<template>
  <div class="area">
    <textarea class="area-input" rows="1" placeholder="請造句"></textarea>
    <div class="area-options">
      <svg
        class="area-options-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 4.923 4.025">
        <path
          d="M597.405,687.24a.272.272,0,0,1,.168.252v3.282a.272.272,0,0,1-.326.268.269.269,0,0,1-.14-.074l-1.014-1.014h-.707a.273.273,0,0,1-.274-.274v-1.094a.273.273,0,0,1,.274-.273h.707l1.014-1.014a.272.272,0,0,1,.3-.059Zm1.442-.04a.272.272,0,0,1,.387,0,2.733,2.733,0,0,1,0,3.867.274.274,0,0,1-.387-.387,2.187,2.187,0,0,0,0-3.094.273.273,0,0,1,0-.386Zm-.774.773a.262.262,0,0,1,.089-.059.27.27,0,0,1,.105-.021.274.274,0,0,1,.1.021.248.248,0,0,1,.088.059,1.641,1.641,0,0,1,0,2.321.274.274,0,0,1-.387-.387,1.092,1.092,0,0,0,0-1.547.294.294,0,0,1-.059-.089.27.27,0,0,1-.021-.1.265.265,0,0,1,.021-.1.271.271,0,0,1,.059-.089Z"
          transform="translate(-595.112 -687.119)"
          fill="#fff" />
      </svg>
      <span class="area-options-gpt">ChatGPT範例</span>
    </div>
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
</style>
