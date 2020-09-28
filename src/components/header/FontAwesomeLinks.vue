<template>
  <div class="font-awesome-links">
    <a href="#">
      <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" />
    </a>
    <a href="#">
      <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" />
    </a>
    <a href="#">
      <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }" />
    </a>
    <a href="#">
      <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'google-plus' }" />
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.font-awesome-links {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
a {
  display: block;
  margin: 0 8px;
  font-size: 14px;
  color: #353535;
}
</style>