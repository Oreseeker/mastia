<template>
  <div class="work-time">
    <img src="../../assets/images/clock.svg" alt="Business hours" />
    <slot></slot>
  </div>
</template>

<style scoped>
.work-time {
  display: flex;
  position: absolute;
  left: 51.4557%;/* 813 / 1580 * 100 */
  top: 36.7347%; /* 18 / 49 * 100 */
  align-items: center;
}
img {
  width: 15px;
  height: 15px;
  display: block;
  margin-right: 10px;
}
</style>