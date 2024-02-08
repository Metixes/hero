<template>
  <div class="content">
    <MainHeader />
    <div class="chat">
      <div class="message-server">
        <p class="message-server-text">{{ welcomeMessage }}</p>
        <div class="message-server-bg"></div>
        <div class="message-server-segment">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.7 44.094">
            <path
              d="M76.115,134.854v44.094s6.393-16.506,34.7-16.506"
              transform="translate(-76.115 -134.854)"
              fill="#e37c8c" />
          </svg>
        </div>
      </div>
    </div>

    <div class="man">
      <img src="../assets/man.png" alt="man" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import MainHeader from "@/components/UI/MainHeader.vue";

const store = useStore();
const router = useRouter();

const welcomeMessage = ref(`歡迎您回來, ${store.getters["user/getFullName"]}`);

onMounted(() => {
  setTimeout(() => {
    router.push("/dashboard-links");
  }, 3000);
});
</script>

<style scoped lang="scss">
.content {
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 10px 0 14px;
  height: 100svh;
  width: 100%;
  background: url("../assets/bg.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
}

.chat {
  flex: 1 0 auto;
  overflow-y: auto;
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
  scroll-behavior: smooth;
}

.message-server {
  position: relative;
  margin: 40px auto 0;
  width: 80%;

  &-text {
    position: relative;
    padding: 16px 14px;
    outline: 5px solid var(--pink);
    outline-offset: 2px;
    border-radius: 8px;
    background: linear-gradient(to right, #eceef0 0%, #f9f9fa 100%);
    z-index: 12;

    color: #d3628f;
  }
  &-bg {
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(to right, #f9f9fa 0%, #eceef0 100%);
    z-index: 1;
  }
  &-segment {
    max-width: 57px;
    position: absolute;
    left: -6px;
    bottom: -36px;

    & > svg {
      width: 100%;
      height: 100%;
    }
  }
}

.man {
  position: absolute;
  display: flex;
  top: calc(50% - 177px);
  left: calc(50% - 132px);
  max-width: 250px;
  width: 100%;
  margin: 20px auto 0;

  & > img {
    position: absolute;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
}

// .message-server:is(.client) {
//   margin-top: 40px;
//   .message-server-text {
//     outline: 5px solid var(--blue);
//     color: var(--blue);
//   }
//   .message-server-segment {
//     left: auto;
//     right: -6px;
//   }
// }
</style>
