<template>
  <div id="app">
    <header-component />
    <slider/>
  </div>
</template>

<script>
import HeaderComponent from "./components/header/HeaderComponent.vue";
import Slider from "./components/slider/Slider.vue"
export default {
  components: {
    HeaderComponent,
    Slider
  }
}
</script>
<style>
body {
  margin: 0;
}
#app {
  width: 1580px;
}
a {
  text-decoration: none;
}

button {
  outline: none;
  border: 0;
  margin: 0;
  padding: 0;
}
</style>
