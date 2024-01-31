<template>
  <section class="content">
    <a-carousel class="carousel" :after-change="onChange">
      <div class="slides">
        <div class="slides-img">
          <img src="../../assets/five-lines-a-day/slide1.jpg" alt="img" />
        </div>
        <div class="slides-task">
          <h3 class="slides-task-first">vegetables</h3>
          <h3 class="slides-task-second">蔬菜</h3>
        </div>
        <p class="slides-question">
          He runs a fruit and vegetable stall in the market.
        </p>
      </div>
      <div class="slides">
        <div class="slides-img">
          <img src="../../assets/five-lines-a-day/slide1.jpg" alt="img" />
        </div>
        <div class="slides-task">
          <h3 class="slides-task-first">vegetables</h3>
          <h3 class="slides-task-second">蔬菜</h3>
        </div>
        <p class="slides-question">
          He runs a fruit and vegetable stall in the market.
        </p>
      </div>
    </a-carousel>
    <div class="form-input">
      <AreaInput />
    </div>
    <SubmitButton />
  </section>
</template>

<script setup>
import AreaInput from "@/components/UI/AreaInput.vue";
import SubmitButton from "@/components/UI/SubmitButton.vue";

const onChange = (current) => {};
</script>

<style scoped lang="scss">
.content {
  padding: 20px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carousel {
  min-width: 0;
  width: 80%;
  margin: 0 auto;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 18px 18px 25px -1px rgba(143, 189, 230, 0.2);
}
.slides {
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &-img {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    max-width: 300px;
    min-height: 100px;
    border-radius: 8px;

    & > img {
      //   position: absolute;
      width: 100%;
      height: auto;
      object-fit: cover;
      object-position: center;
    }
  }
  &-task {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-first {
      font-size: 16px;
      font-weight: 500;
      color: #413a89;
    }
    &-second {
      font-family: "HanWangYenHeavy";
      color: #807afa;
    }
  }
  &-question {
    margin-top: 10px;
  }
}

.ant-carousel {
  &:deep(.slick-dots) {
    display: flex !important;
    gap: 10px;
    bottom: -30px !important;
  }
  &:deep(.slick-dots) > li {
    width: 8px !important;
    height: 8px !important;
    margin-inline: 0 !important;
  }
  &:deep(.slick-dots) > li > button {
    width: 8px !important;
    height: 8px !important;
    border-radius: 50% !important;
    background: #bfbfbf;
  }
  &:deep(.slick-active) > button {
    background: #807afa !important;
  }
}

.form-input {
  flex: 1 1 auto;
  margin: 50px auto 30px;
  max-width: 80%;
  width: 100%;
}

.button {
  padding: 10px 40px;
  border-radius: 18px;
  outline: none;
  border: none;

  background-color: #8898df;
  color: var(--white);
  box-shadow: 0px 0px 25px 15px rgba(143, 189, 230, 0.2);

  font-family: "HanWangYenHeavy";
  color: var(--white);
}
</style>
