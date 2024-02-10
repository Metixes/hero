<template>
  <section :class="['content', { show: showContent }]">
    <div ref="modal" class="level-up">
      <img class="level-up-bg" src="@/assets/level-up/level-up.png" alt="level-up" />
      <div class="level-up-info">
        <img
          class="level-up-info-achieve"
          :src="
            require(`@/assets/ranks/achieve-${
              store.state.user.userData.rating.rating || 1
            }.png`)
          "
          alt="achieve"
        />
        <span class="level-up-info-value">{{
          store.state.user.userData.rating.rating
        }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from "vue";
import { useStore } from "vuex";
import { onClickOutside } from "@vueuse/core";

const store = useStore();
const showContent = ref(false);
const modal = ref();

onClickOutside(modal, () => {
  showContent.value = false;
});

watch(
  () => store.state.user.userData.rating.rating,
  (n, o) => {
    if (n * 10 === 100) {
      showContent.value = true;
      setTimeout(() => {
        showContent.value = false;
      }, 4000);
    }
  },
);
</script>

<style scoped lang="scss">
.content {
  position: absolute;
  width: 100%;
  top: 85px;
  bottom: 65px;
  right: 0;
  left: 0;

  background-color: rgba(118, 118, 118, 0.5);
  z-index: 1;

  opacity: 0;
  visibility: hidden;

  transition: opacity 0.5s ease, visibility 0.5s ease;
}

.level-up {
  margin: 0 auto;
  position: relative;
  max-width: 255px;
  max-height: 245px;
  height: 100%;
  transform: translateY(60%);

  &-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &-info {
    position: absolute;
    max-width: 55px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    bottom: 80px;
    left: 100px;

    &-achieve {
      max-width: 30px;
    }

    &-value {
      font-family: "HanWangYenHeavy";
      font-size: 16px;
    }
  }
}

.show {
  opacity: 1;
  visibility: visible;
}
</style>
