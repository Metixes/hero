<template>
  <header class="parent-header">
    <div @click="router.push('/dashboard-links')">
      <svg class="main-logo" height="40" width="180">
        <use href="@/assets/sprite.svg#logo"></use>
      </svg>
    </div>
    <div class="user">
      <div @click="toShowMenu" class="user-level">
        <svg class="user-level-icon">
          <use href="@/assets/symbol-defs.svg#icon-star"></use>
        </svg>
        <span class="user-level-points">{{
          store.state.user.userData.rating.rating
        }}</span>
      </div>
      <div class="user-info">
        <p class="user-info-name">{{ store.state.user.userData.first_name }}</p>
        <div class="user-time">
          <p class="user-time-text">在線時間</p>
          :
          <p class="user-time-online">60min</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();

const toShowMenu = () => {
  store.commit("user/setShowMenu", !store.state.user.showMenu);
  console.log(store.state.user.showMenu);
};
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

  &-level {
    position: relative;

    &-icon {
      max-width: 40px;
      max-height: 40px;
    }

    &-points {
      position: absolute;
      left: calc(50% - 5px);
      bottom: calc(50% - 9px);
      font-size: 18px;
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
    }
  }
}
</style>
