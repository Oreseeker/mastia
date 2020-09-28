<template>
  <div class="right-arrow" @click="$emit('click')">
    <font-awesome-icon :icon="{ prefix: 'fa', iconName: 'chevron-right' }" />
  </div>
</template>

<style>
.right-arrow {
    width: 68px;
    height: 68px;
    border: 1pt solid white;
    color: white;
    font-size: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

</style>