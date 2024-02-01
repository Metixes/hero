<template>
  <footer class="thumbnail">
    <div class="parent-footer">
      <button
        v-for="(navItem, index) in footerNavMenu"
        :key="index"
        @click="handleButtonClick(index)">
        <svg width="30" height="30">
          <use :href="getIconPath(index)"></use>
        </svg>
      </button>
    </div>
  </footer>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const emits = defineEmits(["getTitle"]);

const activeIndex = ref(0);
const footerNavMenu = reactive([
  {
    path: "/homework-helper",
    title: "Homework helper",
    icon: "icon-chat",
    activeIcon: "icon-chat-active",
    chiTitle: "問功課",
  },
  {
    path: "/five-lines-a-day",
    title: "5 lines a day",
    icon: "icon-home-works",
    activeIcon: "icon-home-work-active",
    chiTitle: "每日造五句",
  },
  {
    path: "/story-writer",
    title: "Story writer",
    icon: "icon-ai",
    activeIcon: "icon-ai-active",
    chiTitle: "小小寫作家",
  },
  {
    path: "/write-my-diaries",
    title: "Write my diaries",
    icon: "icon-daries",
    activeIcon: "icon-daries-active",
    chiTitle: "用口寫日誌",
  },
  {
    path: "/settings",
    title: "Settings",
    icon: "icon-settings",
    activeIcon: "icon-settings-active",
    enTitle: "",
    chiTitle: "",
  },
]);

const handleButtonClick = (index) => {
  activeIndex.value = index;
  router.push(`/main${footerNavMenu[index].path}`);

  emits("getTitle", {
    title: footerNavMenu[index].title,
    chiTitle: footerNavMenu[index].chiTitle,
  });
};

const getIconPath = (index) => {
  const icon =
    activeIndex.value === index
      ? footerNavMenu[index].activeIcon
      : footerNavMenu[index].icon;

  const sprite = require("@/assets/symbol-defs.svg");

  return sprite + "#" + icon;
};

onMounted(() => {
  activeIndex.value = route.meta.indexNumber;

  emits("getTitle", {
    title: footerNavMenu[activeIndex.value].title,
    chiTitle: footerNavMenu[activeIndex.value].chiTitle,
  });
});
</script>

<style scoped lang="scss">
.thumbnail {
  width: 100%;
  background: var(--gr-grey);

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}

.parent-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  padding: 25px 20px;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  background-color: var(--gr-white);

  & button {
    background: transparent;
    border: none;
    outline: none;
  }
}
</style>
