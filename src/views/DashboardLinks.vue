<template>
  <div class="content">
    <MainHeader />
    <img
      class="content-clouds-bg"
      src="../assets/dashboard-links/bg/clouds.png"
      alt="clouds"
    />
    <div class="first-section">
      <img
        @click="redirectToClasses"
        class="bg"
        src="../assets/dashboard-links/first-section/first-link.png"
        alt="link"
      />
      <span class="first-section-title">問功課</span>
    </div>
    <div class="second-section">
      <img
        @click="redirectToClasses"
        class="bg"
        src="../assets/dashboard-links/second-section/second-link.png"
        alt="link"
      />
      <span class="second-section-title">認識宜蘭</span>
    </div>
    <div class="third-section">
      <img
        @click="redirectToClasses"
        class="bg"
        src="../assets/dashboard-links/third-section/third-link.png"
        alt="link"
      />
      <span class="third-section-title">學英語</span>
    </div>
  </div>
</template>

<script setup>
import MainHeader from "@/components/UI/MainHeader.vue";
import { useRouter } from "vue-router";
const router = useRouter();

const redirectToClasses = () => {
  router.push("/");
};
</script>

<style scoped lang="scss">
.content {
  padding: 10px 0 14px;
  position: relative;
  width: 100%;
  height: 100dvh;
  overflow-x: hidden;

  background-image: url("../assets/dashboard-links/bg/bg.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #fdfdfe;

  &-clouds-bg {
    max-width: 170px;
    position: absolute;
    top: 20%;
    right: 40px;
    z-index: 4;
  }

  .first-section {
    max-width: 210px;
    width: 100%;
    position: absolute;
    top: 25%;
    left: 5px;
    z-index: 3;
    border-radius: 50%;

    &-wrapper {
      position: relative;
    }

    &-title {
      position: absolute;
      left: 36%;
      top: 4%;
      letter-spacing: 0.2rem;
      font-size: 14px;
      color: var(--white);
    }

    @media (width >= 480px) {
      max-width: 280px;
    }

    @media (width >= 600px) {
      left: 65px;
    }

    @media (width >= 640px) {
      left: 85px;
    }

    @media (width >= 720px) {
      left: 140px;
    }

    @media (width >= 768px) {
      max-width: 300px;
      top: 20%;
    }

    @media (width >= 1024px) {
      max-width: 400px;
      top: 15%;
      left: 160px;
    }
  }

  .second-section {
    max-width: 205px;
    width: 100%;
    position: absolute;
    right: 5px;
    top: 40%;
    z-index: 2;
    border-radius: 50%;

    &-title {
      position: absolute;
      left: 46%;
      bottom: 10%;
      font-size: 14px;
      letter-spacing: 0.2rem;
      color: var(--white);
      transform: rotateZ(350deg);
    }

    @media (width >= 480px) {
      max-width: 285px;
      top: 30%;
    }

    @media (width >= 768px) {
      right: 80px;
    }

    @media (width >= 1024px) {
      max-width: 385px;
    }
  }

  .third-section {
    max-width: 280px;
    width: 100%;
    position: absolute;
    left: 5px;
    bottom: 5%;
    z-index: 3;
    border-radius: 50%;

    &-title {
      position: absolute;
      left: 35%;
      bottom: 9%;
      font-size: 14px;
      letter-spacing: 0.2rem;
      color: var(--white);
    }

    @media (width >= 480px) {
      max-width: 355px;
    }

    @media (width >= 768px) {
      left: 80px;
    }

    @media (width >= 1024px) {
      max-width: 455px;
    }
  }

  .bg {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
  }
}
</style>
