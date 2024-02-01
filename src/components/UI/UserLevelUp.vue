<template>
  <section ref="modal" :class="['content', { hide: hideMenu }]">
    <div class="user-statistics">
      <div class="user-inner">
        <div class="user-info">
          <h3 class="user-info-name">
            {{ store.getters["user/getFullName"] }}
          </h3>
          <span class="user-info-class">宜蘭小學 三年級</span>
        </div>
        <div class="user-points">
          <svg class="user-points-icon">
            <use href="@/assets/symbol-defs.svg#icon-coin" />
          </svg>
          <span class="user-points-text">我的金幣</span>
          <span class="user-points-coins">{{
            store.state.user.userData.rating.stars
          }}</span>
        </div>
      </div>
      <div class="user-level">
        <a-progress
          type="circle"
          :percent="userRating * 10"
          :size="90"
          strokeLinecap="round"
          trailColor="#FFF"
          strokeColor="#FFF"
          gapPosition="top"
          :strokeWidth="4"
          :format="() => returnUserLevel()"
          direction="rtl" />
        <svg class="user-level-icon">
          <use href="@/assets/symbol-defs.svg#icon-achieve" />
        </svg>
      </div>
    </div>
    <div class="autocomplete">
      <h2 class="autocomplete-title">自動作答</h2>
      <a-segmented
        class="autocomplete-tab"
        v-model:value="tabValue"
        :options="data">
        <template #label="{ data }">
          <div style="padding: 4px 4px">
            <div>{{ data.label }}</div>
          </div>
        </template>
      </a-segmented>
      <p class="rule-title">規則說明</p>
      <div class="rules">
        <div class="rules-item">
          <svg width="20" height="20">
            <use href="@/assets/symbol-defs.svg#icon-diamond" />
          </svg>
          <p>每分鐘問功課 扣1金幣</p>
        </div>
        <div class="rules-item">
          <svg width="20" height="20">
            <use href="@/assets/symbol-defs.svg#icon-diamond" />
          </svg>
          <p>每天限定最多1小時</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h, reactive, ref, watch } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useStore } from "vuex";

const store = useStore();
const modal = ref();
const hideMenu = ref(true);

const userRating = ref(store.state.user.userData.rating.rating);

const data = reactive([
  { value: "text", label: "文字" },
  { value: "voice", label: "語音" },
]);
const tabValue = ref("text");

const returnUserLevel = () => {
  return [h("span", userRating.value), h("span", "LEVEL")];
};

onClickOutside(modal, () => {
  store.commit("user/setShowMenu", true);
});
watch(
  () => store.state.user.showMenu,
  (n, o) => {
    hideMenu.value = n;
  }
);
</script>

<style scoped lang="scss">
.content {
  position: absolute;
  width: 80%;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(229, 143, 126, 0.5) 0%,
    rgba(227, 133, 126, 0.5) 25%,
    rgba(223, 99, 126, 0.5) 80%,
    rgba(222, 86, 127, 0.5) 100%
  );
  border-top-right-radius: 10%;
  border-bottom-right-radius: 10%;
  z-index: 999;

  transform: translateX(0);
  transition: transform 1s ease;
}

.user-statistics {
  width: 100%;
  padding: 50px 20px 100px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-image: url("@/assets/user-level-up/bg.png");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #faab3b;

  border-bottom-left-radius: 75%;
  border-bottom-right-radius: 100%;
}

.user-inner {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.user-info {
  &-name {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 22px;
    line-height: 14, 11;
    color: var(--white);
  }

  &-class {
    font-family: "DFHei";
    color: var(--white);
  }
}

.user-level {
  position: relative;

  &:deep(.ant-progress-text) span:nth-child(1) {
    font-size: 22px;
  }

  &-icon {
    width: 50px;
    height: 50px;
    position: absolute;
    bottom: 22px;
    right: -22px;
  }
}

.user-points {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 10px;
  margin-left: 20px;
  position: relative;

  font-family: "HanWangYenHeavy";
  color: #8898df;

  border-radius: 18px;
  color: var(--white);
  background-color: #dfd1c6;

  &-icon {
    position: absolute;
    width: 40px;
    height: 40px;
    left: -30px;
    top: -12px;
  }

  &-text {
    color: #8898df;
  }

  &-coins {
    color: #8898df;
  }
}

.user-level:deep(.ant-progress-text) {
  display: flex;
  flex-direction: column;
  color: var(--white);
}
.user-level:deep(svg) {
  transform: scaleX(-1);
}
.user-level:deep(.ant-progress-circle-trail) {
  stroke-width: 2;
}

.autocomplete {
  width: 100%;

  &-title {
    padding: 5px 0;
    max-width: 65%;

    font-family: "HanWangYenHeavy";
    font-size: 22px;
    color: #656565;
    background-color: #fafaff;
    text-align: center;
  }
  &-tab {
    display: block;
    max-width: 217px;
    margin: 20px auto;
    border-radius: 25px;
    padding: 5px;
    background-color: #8898df;

    &:deep(.ant-segmented-item) {
      border-radius: 18px;
      color: var(--white);
    }
    &:deep(.ant-segmented-thumb) {
      border-radius: 18px;
    }
    &:deep(.ant-segmented-item):hover {
      color: var(--white);
    }
    &:deep(.ant-segmented-item-label) {
      padding: 0 40px;
      font-size: 12px;
    }
    &:deep(.ant-segmented-item):is(.ant-segmented-item-selected) {
      color: #8898df;
    }
  }
}

.rule-title {
  max-width: 65%;
  font-family: "HanWangYenHeavy";
  font-size: 20px;
  color: var(--white);
  text-align: center;
}
.rules {
  max-width: 50%;
  margin: 20px auto 0 auto;
  display: flex;
  flex-direction: column;
  gap: 5px;

  &-item {
    display: flex;
    align-items: center;
    gap: 10px;

    font-family: "DFHeiMedium";
    color: var(--white);
  }
}

.hide {
  transform: translateX(-100%);
  transition: transform 1s ease;
}
</style>
