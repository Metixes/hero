<template>
  <header class="parent-header">
    <div class="main-logo">
      <svg height="40" width="180">
        <use href="@/assets/sprite.svg#logo"></use>
      </svg>
    </div>
    <div class="user">
      <div class="user-level">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 14.77 17.056"
        >
          <g transform="translate(-191.392 -625.074)">
            <path
              d="M203.7,633.6l2.462-4.264h-4.923l-2.462-4.264-2.462,4.264h-4.924l2.462,4.264-2.462,4.264h4.924l2.462,4.264,2.462-4.264h4.923Z"
              fill="#efc24b"
            />
            <path
              d="M198.777,625.074l-2.462,4.264h-4.924l7.385,4.264Z"
              fill="#f7e288"
            />
            <path
              d="M206.162,629.338h-4.924l-2.462-4.264V633.6Z"
              fill="#efc24b"
            />
            <path
              d="M206.162,637.865,203.7,633.6l2.462-4.264-7.385,4.264Z"
              fill="#dda237"
            />
            <path
              d="M198.777,642.129l2.462-4.264h4.924l-7.385-4.264Z"
              fill="#d47333"
            />
            <path
              d="M191.392,637.865h4.923l2.462,4.264V633.6Z"
              fill="#dda237"
            />
            <path
              d="M191.392,629.338l2.462,4.264-2.462,4.264,7.385-4.264Z"
              fill="#efc24b"
            />
            <path
              d="M202.47,631.47h-2.462l-1.231-2.132-1.231,2.132h-2.462l1.231,2.132-1.231,2.132h2.462l1.231,2.132h0l1.231-2.132h2.462l-1.231-2.132.78-1.352Z"
              fill="#f4d470"
            />
          </g>
        </svg>
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
const store = useStore();
</script>

<style scoped lang="scss">
.parent-header {
  width: 100%;

  display: flex;
  justify-content: space-between;
  //   align-items: baseline;

  padding: 20px;
}

.user {
  display: flex;
  align-items: center;

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
