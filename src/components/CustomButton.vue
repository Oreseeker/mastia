<template>
    <button class="custom-button">
        <slot></slot>
    </button>
</template>

<script>
export default {

}
</script>

<style scoped>
.custom-button {
    border: 1pt solid white;
    padding: 16px 40px;
    color: white;
    background-color: transparent;
    font-size: 14px;
    cursor: pointer;
}
</style>