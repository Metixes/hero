<template>
  <div class="camera-container">
    <Camera
      :resolution="{ width: windowSize.width, height: windowSize.height }"
      @camera-change="cameraChange"
      @loading="loading"
      @error="error"
      ref="camera"
      autoplay
    >
      <div class="camera-btns">
        <button @click="closeCamera">
          <img src="@/assets/delete.png" alt="" />
        </button>
        <button @click="snapshot">
          <img src="@/assets/camera.png" alt="" />
        </button>
        <button @click="cameraChange">
          <img src="@/assets/refresh.png" alt="" />
        </button>
      </div>
    </Camera>
  </div>
</template>

<script setup>
import { ref, reactive, compile } from "vue";
import Camera from "simple-vue-camera";

const camera = ref();

const windowSize = reactive({
  width: window.innerWidth,
  height: window.innerHeight,
});

const emits = defineEmits(["snapshot", "close"]);

const cameraChange = (deviceID) =>
  console.log(`Camera has been changed to ${deviceID}`);

const snapshot = async () => {
  const blob = await camera.value?.snapshot(
    { width: 1920, height: 1080 },
    "image/png",
    1
  );

  // To show the screenshot with an image tag, create a url
  const date = Date.now();
  const extension = "png";
  const url = URL.createObjectURL(blob);
  const file = new File([blob], `snapshot${date}.${extension}`, {
    lastModified: date,
    type: "image/" + extension,
    name: `snapshot${date}.${extension}`,
  });

  emits("snapshot", {
    file,
    url,
  });
};

const closeCamera = () => {
  emits("close", true);
  camera.value = null;
};

const loading = (data) => {
  console.log("Loading", data);
};

const error = (data) => {
  console.log("Error", data);
};
</script>

<style scoped lang="scss">
.camera-container {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  width: 100%;
}

.camera-btns {
  position: absolute;
  bottom: 30px;

  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;

  & button {
    background: transparent;
    border: none;
    outline: none;
  }
}
</style>