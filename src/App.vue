<script setup lang="ts">
import { ref } from 'vue'
import MainContent from '/components/MainContent.vue'
import LogoHeader from '/components/UI/Header.vue'
import PageFooter from '/components/UI/Footer.vue'

let currentSection = ref('home')

function changeSection(section: string) {
  currentSection.value = section
}
</script>

<template>
  <!-- Структура сайта: "Хедер - Основная часть (контент) - Футер". Переключение разделов сайта - через кнопки в хедере. -->
  <LogoHeader @changeSection="changeSection($event)"/>
  <MainContent :currentSection="currentSection"/>
  <PageFooter />
</template>

<style>
#app {
  height: 100%;
  width: 100vw;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: linear-gradient(to bottom right, var(--main-color-violet), var(--main-color-dark-green));
  color: #fff;
  background-color: rgba(255, 255, 255, 0.8);
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 1.5;
  min-width: 320px;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--main-color-dark-violet); 
}

::-webkit-scrollbar-thumb {
  background: #424242; 
  border: none;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--main-color-dark-violet); 
}
</style>
