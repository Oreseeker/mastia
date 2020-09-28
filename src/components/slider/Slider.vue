<template>
  <div class="slider">
    <left-arrow @click="nextSlide"/>
    <right-arrow @click="previousSlide"/>
    <div class="slide" v-if="currentSlide == 0">
      <div class="slide-inner">
        <h1>WE CARE ABOUT YOUR BUSINESS</h1>
        <div class="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          elementum consectetur egestas. Nulla nisi nisi, rutrum vitae nunc non,
          bibendum euismod nulla
        </div>
        <custom-button>
          ABOUT US
        </custom-button>
      </div>
    </div>
    <div class="slide" v-else-if="currentSlide == 1">
      <div class="slide-inner">
        <h1>ACTUALLY WE DON'T CARE</h1>
        <div class="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          elementum consectetur egestas. Nulla nisi nisi, rutrum vitae nunc non,
          bibendum euismod nulla
        </div>
        <custom-button>
          ABOUT OUR COMPETITORS
        </custom-button>
      </div>
    </div>
  </div>
</template>

<script>
import LeftArrow from "./LeftArrow.vue";
import RightArrow from "./RightArrow.vue";
import CustomButton from "../CustomButton.vue";
export default {
  components: {
    LeftArrow,
    RightArrow,
    CustomButton
  },
  data() {
    return {
      slide: 0
    };
  },
  methods: {
    nextSlide() {
      this.slide += 1;
    },
    previousSlide() {
      this.slide -= 1;
    }
  },
  computed: {
    currentSlide() {
      return Math.abs(this.slide) % 2;
    }
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

.slide {
  width: 51.519%; /* 814 / 1580 * 100 */
  display: table;
  margin: 0 auto;
  height: 100%;
}
.slide-inner {
  display: table-cell;
  vertical-align: middle;
  width: 100%;
  text-align: center;
  color: white;
}
.custom-button {
  margin-top: 38px;
}
</style>