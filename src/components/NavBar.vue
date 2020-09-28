<template>
  <div class="nav-bar">
    <router-link :to="item.link" v-for="item in menuItems" :key="item.name">
      {{ item.name }}
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          name: "Home",
          link: "/"
        },
        {
          name: "About us",
          link: "/about-us"
        },
        {
          name: "Pages",
          link: "/pages"
        },
        {
          name: "Projects",
          link: "/projects"
        },
        {
          name: "Blog",
          link: "/blog"
        },
        {
          name: "Contact us",
          link: "/contact-us"
        }
      ]
    };
  }
};
</script>

<style>
.nav-bar a {
    margin: 0 10px;
    color: #4b4b4b;
    font-size: 14px;
}
.nav-bar .router-link-exact-active {
    color: #34a7e6;
}
</style>