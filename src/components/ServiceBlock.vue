<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  title: String,
  text: String
})
</script>

<template>
<!-- Блок для раздела "Услуги" -->
  <div class="service-block-container">
    <div class="title">{{ props.title }}</div>
    <div class="text">{{ props.text }}</div>
  </div>
</template>

<style scoped>

.service-block-container {
    display: grid;
    grid-template-columns: 1;
    grid-template-rows: 0.2fr 0.8fr;
    justify-items: center;
    align-items: center;
    height: auto;
    background: var(--main-color-light-grey-opacity);
    height: 100%;
    width: 100%;
    max-height: 300px;
    max-width: 300px;
    margin: 0;
    border: none;
    border-radius: 10px;
    padding: 15px 20px;
    gap: 15px;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.075s ease-in-out;
}

.service-block-container:hover {
    background: var(--main-color-light-violet-opacity);
    transform: scale(1.02);
}

.title {
    align-self: flex-start;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 100%;
    text-align: center;
    margin: 0;
    padding: 0;
    text-align: center;
}

.text {
    display: flex;
    align-self: flex-start;
    font-size: 0.9rem;
    line-height: 120%;
    margin: 0;
    padding: 0;
    text-align: center;
}

@media only screen and (max-width: 550px) {
    .service-block-container {
        padding: 15px 10px;
    }
    .title {
        font-size: 1rem;
    }
    .text {
        font-size: 0.75rem;
    }
}
</style>
