<
<template>
  <div class="parent-page">
    <SideBar />
    <LevelUp />
    <CompletedTasks />
    <div class="header">
      <Header />
      <div class="tab-header">
        <div>
          <div>
            <p class="tab-header-title">{{ tabHeaders.title }}</p>
            <p class="tab-header-subtitle">{{ tabHeaders.chiTitle }}</p>
          </div>

          <a-select
            v-if="route.path === '/main/homework-helper'"
            ref="select"
            v-model:value="selectedSubject"
            style="width: 150px; margin-left: 10px"
            :options="subjectList"
            placeholder="請選擇科目"
          ></a-select>
        </div>
        <div v-if="showDataPicker" class="history-answers">
          <a-date-picker
            :allowClear="false"
            :disabled-date="disabledDate"
            v-model:value="currentDate"
            format="YYYY-MM-DD"
            @change="onSelectDate"
          />
        </div>
        <div v-if="route.path === '/main/homework-helper'" class="hw-remaining">
          <p v-if="!childData.chattingAbility">
            Will be available after: {{ childData.remainingTimeDay }}
          </p>
          <p v-else>Time left: {{ childData.remainingTime90 }}</p>
        </div>
      </div>
    </div>
    <div class="tab-view">
      <router-view v-slot="{ Component }">
        <transition name="scale" mode="out-in">
          <component
            :subject="selectedSubject"
            @childDataEmit="getChildData"
            :is="Component"
          />
        </transition>
      </router-view>
    </div>
    <FooterNav @getTitle="setTitle" />
  </div>
</template>

<script setup>
import { ref, reactive, watch, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import SideBar from "@/components/UI/SideBar.vue";
import LevelUp from "@/components/UI/LevelUp.vue";
import CompletedTasks from "@/components/UI/CompletedTasks.vue";
import Header from "@/components/UI/Header.vue";
import FooterNav from "@/components/UI/FooterNav.vue";
import dayjs from "dayjs";
import { subjects } from "@/utils/functionsUtils/subjects.js";

const childData = reactive({
  chattingAbility: false,
  remainingTimeDay: "",
  remainingTime90: "",
});

const selectedSubject = ref("國文");
const subjectList = reactive(subjects);

const getChildData = ({ component, data }) => {
  switch (component) {
    case "hw-helper":
      Object.keys(data).forEach((key) => (childData[key] = data[key]));
      break;

    default:
      break;
  }
};

const route = useRoute();
const router = useRoute();
const store = useStore();
const currentDate = ref(dayjs(store.state.user.currentDate), "YYYY-MM-DD");

const showDataPicker = computed(() => {
  switch (route.path) {
    case "/main/five-lines-a-day":
    case "/main/story-writer":
      return true;
      break;
    case "/main/write-my-diaries":
      return true;
      break;
    default:
      return false;
      break;
  }
});

const disabledDate = (current) => {
  return current > dayjs().endOf("day");
};

const onSelectDate = (date, dateString) => {
  currentDate.value = date;
  store.commit("user/setCurrentDate", dateString);
};

const tabHeaders = reactive({
  title: "Homework helper",
  chiTitle: "問功課",
});

const setTitle = ({ title, chiTitle }) => {
  tabHeaders.title = title;
  tabHeaders.chiTitle = chiTitle;
};

watch(
  () => store.state.user.currentDate,
  (n, o) => {
    if (n) {
      switch (route.path) {
        case "/main/five-lines-a-day":
        case "/main/story-writer":
          store.dispatch("user/getTasks", currentDate.value.format("YYYY-MM-DD"));
          break;
        case "/main/write-my-diaries":
          store.dispatch("user/updateStory", currentDate.value.format("YYYY-MM-DD"));
          break;

        default:
          break;
      }
    }
  },
);
</script>

<style scoped lang="scss">
.parent-page {
  max-width: 1024px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: inherit;

  overflow-x: hidden;
  background-image: url("@/assets/main-bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.header {
  width: 100%;
}

.tab-header {
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;

  & > div {
    display: flex;
    align-items: flex-end;
  }

  &-title {
    color: #5c6b8a;
  }
  &-subtitle {
    font-family: "HanWangYenHeavy";
    font-size: 22px;
    color: #091e4a;
  }
}

.history-answers {
  .ant-picker {
    :deep(input) {
      max-width: 0;

      &:focus {
        max-width: 90px;
      }
    }
    :deep(.ant-picker-suffix) {
      margin-inline-start: 0;
    }
  }
}

.tab-view {
  width: 100%;
  height: 100%;

  overflow: auto;

  &::-webkit-scrollbar {
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

.hw-remaining {
  padding: 1px;
  font-size: 12px;
}
</style>
