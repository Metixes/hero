<template>
  <section :class="['content', { show: showContent }]">
    <div v-if="store.state.user.isTasksCompleted" ref="modal" class="completed">
      <img class="completed-bg" src="@/assets/level-up/completed.png" alt="level-up" />
      <div class="completed-points">
        <img
          class="completed-points-img"
          src="@/assets/user-level-up/coin.png"
          alt="coin"
        />
        <span class="completed-points-text">我的金幣</span>
        <span class="completed-points-coins">350</span>
      </div>
    </div>
    <div v-if="store.state.user.isTasksCompletedToday" ref="modal" class="completed">
      <img
        class="completed-bg"
        src="@/assets/level-up/completed-today.png"
        alt="level-up"
      />
      <div class="completed-points today">
        <p>All done for today. Next tasks will be available tomorrow.</p>
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
  () => [store.state.user.isTasksCompleted, store.state.user.isTasksCompletedToday],
  (n, o) => {
    if (n[0] || n[1]) {
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
  z-index: 999;
  opacity: 0;
  visibility: hidden;

  transition: opacity 1s ease, visibility 1s ease;
}

.completed {
  margin: 0 auto;
  position: relative;
  max-width: 280px;
  max-height: 250px;
  height: 100%;
  transform: translateY(60%);

  &-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }

  &-points {
    padding: 0 10px;
    position: absolute;
    display: flex;
    align-items: center;
    gap: 5px;
    bottom: 65px;
    left: 100px;

    color: #8898df;

    border-radius: 18px;
    color: var(--white);
    background-color: #dfd1c6;

    &-img {
      max-width: 25px;
      position: absolute;
      left: -20px;
    }

    &-text {
      font-family: "HanWangYenHeavy";
      color: #8898df;
    }

    &-coins {
      font-family: "HanWangYenHeavy";
      color: #8898df;
    }
  }
}

.show {
  opacity: 1;
  visibility: visible;
}

.today {
  max-width: 160px;
  bottom: 90px;
  left: 60px;

  & > p {
    text-align: center;
  }
}
</style>
