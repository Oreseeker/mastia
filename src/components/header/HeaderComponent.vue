<template>
  <header>
    <header-component-bar />
    <div class="lower-header">
      <img src="../../assets/images/logo.png" alt="Mastia logo" class="logo" />
      <nav-bar/>
    </div>
  </header>
</template>

<script>
import HeaderComponentBar from "./HeaderComponentBar.vue";
import NavBar from "../NavBar.vue";
export default {
  components: {
    HeaderComponentBar,
    NavBar
  }
};
</script>

<style scoped>
.header {
  position: relative;
  width: 100%;
}

.lower-header {
    height: 221px;
    position: relative;
}

img.logo {
  position: absolute;
  left: 13.9241%; /* 220 / 1580 *100 */
  top: 12.6697%; /* (77 - 49)/221, 77px - y-offset of logo, 49px - height of the upper bar, 221 - height of the block */
  width: 281px;
  height: 99px;
}
.nav-bar {
    position: absolute;
    display: flex;
    flex-flow: row nowrap;
    left:  52.4684%;/* (839-10) / 1580 * 100, 10px account for margin around nav-bar elements */
    top: 30.7692%;/* (117-49) / 221 * 100, 117px - y-offset of navbar, 49px - height of the upper bar, 221 - height of the block */
}
</style>