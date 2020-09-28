<template>
  <div class="header-component-bar">
    <font-awesome-links />
    <work-time>
        Mon - Sat: 7:00 - 17:00
    </work-time>
    <contact-phone>
      + 386 40 111 5555
    </contact-phone>
    <contact-email>
      info@yourdomain.com
    </contact-email>
  </div>
</template>

<script>
import FontAwesomeLinks from "./FontAwesomeLinks.vue";
import WorkTime from "./WorkTime.vue";
import ContactPhone from "./ContactPhone.vue";
import ContactEmail from "./ContactEmail.vue";
export default {
  components: {
    FontAwesomeLinks,
    WorkTime,
    ContactPhone,
    ContactEmail
  }
};
</script>

<style scoped>
.header-component-bar {
    height: 49px;
    position: relative;
    box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 9%);
    background-color: #fffdfd;
}
.font-awesome-links {
    position: absolute;
    left: 13.8608%;/* 219 / 1580 * 100 */
    top: 36.7347%; /* 18 / 49 * 100 */
}
</style>