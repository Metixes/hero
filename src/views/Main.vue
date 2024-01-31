<template>
  <div class="parent-page">
    <div class="header">
      <Header />
      <div class="tab-header">
        <p class="tab-header-title">{{ tabHeaders.title }}</p>
        <p class="tab-header-subtitle">{{ tabHeaders.chiTitle }}</p>
      </div>
    </div>
    <div class="tab-view">
      <router-view v-slot="{ Component }">
        <transition name="scale" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      <!-- <router-view></router-view> -->
    </div>
    <FooterNav @getTitle="setTitle" />
  </div>
</template>

<script setup>
import Header from "@/components/UI/Header.vue";
import FooterNav from "@/components/UI/FooterNav.vue";
import { useRoute } from "vue-router";
import { reactive } from "vue";

const route = useRoute();

const tabHeaders = reactive({
  title: "Homework helper",
  chiTitle: "問功課",
});

const setTitle = ({ title, chiTitle }) => {
  tabHeaders.title = title;
  tabHeaders.chiTitle = chiTitle;
};
</script>

<style scoped lang="scss">
.parent-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: inherit;

  background-image: url("@/assets/main-bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.header {
  width: 100%;
}

.tab-header {
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &-title {
    color: #5c6b8a;
  }
  &-subtitle {
    font-family: "HanWangYenHeavy";
    font-size: 22px;
    color: #091e4a;
  }
}

.tab-view {
  width: 100%;
  height: 100%;

  overflow: auto;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.4s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
