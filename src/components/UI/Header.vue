<template>
  <header class="parent-header">
    <div @click="router.push('/dashboard-links')">
      <svg class="main-logo" height="40" width="180">
        <use href="@/assets/symbol-defs.svg#icon-logo"></use>
      </svg>
    </div>
    <div class="user">
      <div @click="toShowMenu" class="user-level">
        <img
          width="40"
          height="40"
          :src="
            require(`@/assets/ranks/rank-${
              store.state.user.userData.rating.rating || 1
            }.png`)
          "
          :alt="store.state.user.userData.rating.rating"
        />
        <span class="user-level-points">{{
          store.state.user.userData.rating.rating
        }}</span>
      </div>
      <div class="user-info">
        <p class="user-info-name">{{ store.state.user.userData.first_name }}</p>
        <div class="user-time">
          <p class="user-time-text">在線時間</p>
          :
          <p class="user-time-online">{{ timeOnline }}</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();

const timeOnline = ref("1 sec");

const toShowMenu = () => {
  store.commit("user/setShowMenu", !store.state.user.showMenu);
  console.log(store.state.user.showMenu);
};

let startTime = new Date();
const displayElapsedTime = () => {
  let currentTime = new Date();
  let elapsedTimeInSeconds = Math.floor((currentTime - startTime) / 1000);
  console.log("here");
  if (elapsedTimeInSeconds < 60) {
    timeOnline.value = elapsedTimeInSeconds + " sec";
  } else if (elapsedTimeInSeconds < 3600) {
    let minutes = Math.floor(elapsedTimeInSeconds / 60);
    timeOnline.value = minutes + " min";
  } else if (elapsedTimeInSeconds < 86400) {
    let hours = Math.floor(elapsedTimeInSeconds / 3600);
    timeOnline.value = hours + " h";
  } else {
    let days = Math.floor(elapsedTimeInSeconds / 86400);
    timeOnline.value = days + " days";
  }
};

onMounted(() => {
  setInterval(() => {
    displayElapsedTime();
  }, 1000);
});
</script>

<style scoped lang="scss">
.main-logo {
  cursor: pointer;

  @media (320px <= width <= 340px) {
    max-width: 140px;
  }
}
.parent-header {
  width: 100%;

  display: flex;
  justify-content: space-between;
  //   align-items: baseline;

  padding: 20px;
  @media (320px <= width <= 330px) {
    padding: 10px;
  }
}

.user {
  display: flex;
  align-items: center;
  margin-right: 10px;

  &-level {
    position: relative;
    max-width: 40px;
    max-height: 40px;

    &-points {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      font-size: 15px;
      font-weight: bold;
      color: var(--gr-grey);
      cursor: default;
    }
  }

  &-info {
    &-name {
      font-family: "Montserrat";
      font-weight: 700;
      color: #363636;
    }
  }
  &-time {
    display: flex;
    align-items: center;

    color: #5c6b8a;

    &-text {
      font-family: "DFYuanMedium";
    }
    &-online {
      width: 20px;
      white-space: nowrap;
    }
  }
}
</style>
