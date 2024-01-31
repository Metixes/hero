<template>
  <div class="content-logo">
    <svg>
      <use xlink:href="@/assets/sprite.svg#logo" />
    </svg>
  </div>
</template>


<style scoped lang="scss">
.content-logo {
  max-width: 190px;
  height: 60px;
  margin: 0 auto;

  & > svg {
    width: 100%;
    height: 100%;
  }
}
</style>