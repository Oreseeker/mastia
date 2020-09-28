<template>
  <div class="slider">
    <left-arrow />
    <right-arrow />
  </div>
</template>

<script>
import LeftArrow from "./LeftArrow.vue";
import RightArrow from "./RightArrow.vue";
export default {
  components: {
    LeftArrow,
    RightArrow
  }
};
</script>

<style scoped>
.slider {
  width: 100%;
  height: 966px;
  background-color: #353535;
  position: relative;
}
.left-arrow {
  position: absolute;
  z-index: 2;
  left: 1.8354%; /* 29 / 1580 * 100 */
  top: 56.6253%; /* 547 / 966 * 100, 966 - height of the slider */
}

.right-arrow {
  position: absolute;
  z-index: 2;
  right: 1.8354%; /* 29 / 1580 * 100 */
  top: 56.6253%; /* 547 / 966 * 100, 966 - height of the slider */
}
</style>