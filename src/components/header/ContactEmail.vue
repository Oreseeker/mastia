<template>
  <div class="contact-email">
    <img src="../../assets/images/envelope.svg" alt="Contact email" />
    <slot></slot>
  </div>
</template>

<style scoped>
.contact-email {
  display: flex;
  position: absolute;
  left: 75.2532%; /* 1189 / 1580 * 100 */
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