<template>
  <div class="slide">
    <div class="slide-inner">
      <h1>
        <slot name="header"></slot>
      </h1>
      <div class="text">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
</style>