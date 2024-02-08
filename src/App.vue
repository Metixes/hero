<template>
  <notifications />
  <transition v-show="!isLoaded" name="fade" mode="out-in">
    <Loader />
  </transition>
  <router-view v-show="isLoaded" v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import request from "./config/request.js";
import Loader from "@/components/UI/Loader.vue";

const store = useStore();
const router = useRouter();

const isLoaded = ref(false);

/**
 * make auth request to get user data by token
 * @returns {object} error: boolean, message: string | userData: object
 */
const login = async (token) => {
  try {
    const { data } = await request.get("auth/me", {
      headers: { token: token },
    });

    if (data.error) {
      return {
        error: true,
        message: data.message,
      };
    }

    return {
      error: false,
      userData: data.data,
    };
  } catch (error) {
    return {
      error: true,
      message: error.message,
    };
  }
};

onBeforeMount(async () => {
  isLoaded.value = false;
  const token = localStorage.getItem("token");

  if (!token) {
    router.push("/signup");
    isLoaded.value = true;
    return;
  }

  const response = await login(token);

  if (response.error) {
    console.log("Auth error", response.message);
    router.push("/signup");
  } else {
    store.commit("user/setUserData", response.userData);
    store.commit("setIsAuth", true);

    // router.push("/welcome-page");
  }

  isLoaded.value = true;
});
</script>

<style lang="scss">
@import "./assets/fonts/fonts.scss";

:root {
  --pink: #e37c8c;
  --blue: #8898df;
  --gr-grey: #eceef0;
  --gr-white: #f9f9fa;
  --white: #fff;
}
* {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 12px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  height: 100svh;
}

#app {
  position: relative;
  height: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: default;
}
.test {
}
</style>
