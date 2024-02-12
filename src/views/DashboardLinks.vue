<template>
  <div class="content">
    <MainHeader />
    <div class="links-wrapper">
      <img
        class="content-clouds-bg"
        src="../assets/dashboard-links/bg/clouds.png"
        alt="clouds"
      />
      <div class="first-section">
        <img
          id="home-work"
          @click="redirectToClasses"
          class="bg"
          src="../assets/dashboard-links/first-section/first-link.png"
          alt="link"
        />
        <span class="first-section-title">問功課</span>
      </div>
      <div class="second-section">
        <img
          id="five-lines"
          @click="redirectToClasses"
          class="bg"
          src="../assets/dashboard-links/second-section/second-link.png"
          alt="link"
        />
        <span class="second-section-title">認識宜蘭</span>
      </div>
      <div class="third-section">
        <img
          id="story-writer"
          @click="redirectToClasses"
          class="bg"
          src="../assets/dashboard-links/third-section/third-link.png"
          alt="link"
        />
        <span class="third-section-title">學英語</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import MainHeader from "@/components/UI/MainHeader.vue";
import { useRouter } from "vue-router";
const router = useRouter();

const redirectToClasses = (event) => {
  switch (event.target.attributes[1].value) {
    case "home-work":
      router.push("/main/homework-helper");
      break;

    case "five-lines":
      router.push("/main/five-lines-a-day");
      break;

    case "story-writer":
      router.push("/main/story-writer");
      break;

    default:
      break;
  }
};
</script>

<style scoped lang="scss">
.content {
  max-width: 1024px;
  margin: 0 auto;
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
    width: 180px;
    position: absolute;
    top: 22%;
    right: 30px;
    z-index: 4;

    @media (width >= 400px) {
      top: 10%;
    }
  }

  .links-wrapper {
    position: relative;
    margin: 0 auto;
    max-width: 620px;
    height: 90%;
  }

  .first-section {
    width: clamp(220px, 55%, 280px);
    position: absolute;
    bottom: 38%;
    left: 5px;
    z-index: 1;
    border-radius: 50%;

    &-wrapper {
      position: relative;
    }

    &-title {
      position: absolute;
      left: 35%;
      top: 4%;
      letter-spacing: 0.2rem;
      font-size: 14px;
      color: var(--white);

      font-family: "HanWangYenHeavy";
      font-size: 16px;
    }
  }

  .second-section {
    width: clamp(200px, 50%, 260px);
    position: absolute;
    right: 5px;
    bottom: 22%;
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

      font-family: "HanWangYenHeavy";
      font-size: 16px;
    }
  }

  .third-section {
    width: clamp(300px, 75%, 370px);
    position: absolute;
    left: 5px;
    bottom: 0;
    z-index: 3;
    border-radius: 50%;

    &-title {
      position: absolute;
      left: 35%;
      bottom: 9%;
      font-size: 14px;
      letter-spacing: 0.2rem;
      color: var(--white);

      font-family: "HanWangYenHeavy";
      font-size: 16px;
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
