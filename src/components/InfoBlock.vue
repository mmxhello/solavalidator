<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  title: String,
  text: String
})
</script>

<template>
<!-- Блок для раздела "О нас" -->
  <div class="info-block-container">
    <div class="title">{{ props.title }}</div>
    <div class="text">{{ props.text }}</div>
  </div>
</template>

<style scoped>

.info-block-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    height: auto;
    background: var(--main-color-dark-grey-opacity);
    width: 600px;
    max-width: 100%;
    margin: 0;
    border: none;
    border-radius: 10px;
    padding: 15px;
    gap: 15px;
    box-sizing: border-box;
    cursor: pointer;
}

.title {
    font-size: 25px;
    font-weight: 600;
    line-height: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
}

.text {
    font-size: 14px;
    line-height: 120%;
    margin: 0;
    padding: 0;
    text-align: center;
}
</style>
