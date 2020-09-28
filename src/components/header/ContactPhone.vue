<template>
  <div class="contact-phone">
      <img src="../../assets/images/phone.svg" alt="Contact phone">
      <slot></slot>
  </div>
</template>

<style>
.contact-phone {
  display: flex;
  position: absolute;
  left: 63.8608%; /* 1009 / 1580 * 100 */
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