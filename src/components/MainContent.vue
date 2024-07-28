<script setup lang="ts">
import { ref } from 'vue'
import StakingBlock from './StakingBlock.vue'
import MainPageTitle from './MainPageTitle.vue'
import InfoBlock from './InfoBlock.vue'
import ServiceBlock from './ServiceBlock.vue'
import ContactBlock from './ContactBlock.vue'

const props = defineProps({
  currentSection: String
})

let currentSection = ref('home')
</script>

<template>
  <!-- Одностраничный сайт состоит из 3 разделов: "Home", "Services" и "About us" ("Главный", "Услуги" и "О нас"). Сайт работает без роутера, а разделы переключаются через кнопки в хедере и условия v-if и v-else. Это обеспечивает плавный переход без перезагрузки страницы, хотя и немного увеличивает вес проекта. -->
  <main class="home-container" v-if="props.currentSection === 'home'">
    <!-- Главная страница состоит из двухстрочного заголовка и блока с адресом для стейкинга -->
    <div class="main-title-container">
      <MainPageTitle :title="$t('message.main-title-1')"/>
      <MainPageTitle :title="$t('message.main-title-2')"/>
    </div>

    <!-- Рандомный адрес с интернетов -->
    <StakingBlock :address="'крипто-адрес'"/>
  </main>
  <!-- Блоки в разделах "Услуги" и "О нас" пронумерованы по порядку -->
  <main class="services-container" v-else-if="props.currentSection === 'services'">
    <ServiceBlock v-for="i in 6" :key="i" :title="$t(`message.service-block-${i}-title`)" :text="$t(`message.service-block-${i}-text`)"/>
  </main>
  <main class="about-us-container" v-else>
    <InfoBlock v-for="i in 3" :key="i" :title="$t(`message.about-us-block-${i}-title`)" :text="$t(`message.about-us-block-${i}-text`)"/>
    <ContactBlock />
  </main>
</template>

<style scoped>
/* Не вижу особого смысла использовать в этом проекте CSS-фреймворки, поэтому пишу стили прямо в файлах */
main {
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 2rem;
  padding-top: calc(70px + 2rem);
  box-sizing: border-box;
}

.home-container {
  display: grid;
  grid-template-rows: 2;
  grid-template-columns: 1;
  justify-items: center;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: auto;
  max-width: 600px;
  gap: 15px;
  box-sizing: border-box;
}

.services-container {
  display: grid;
  grid-template-rows: repeat(2, calc((100vw - 4rem) / 3));
  grid-template-columns: repeat(3, calc((100vw - 4rem) / 3));
  justify-items: center;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: auto;
  max-width: 600px;
  gap: 15px;
  box-sizing: border-box;
}

.about-us-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  gap: 15px;
  box-sizing: border-box;
}

.main-title-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  padding: 15px;
  gap: 10px;
  box-sizing: border-box;
}

@media only screen and (max-width: 500px) {
    main {
      padding-top: calc(50px + 1rem);;
    }

    .services-container {
      grid-template-rows: repeat(3, calc((100vw - 4rem) / 2));
      grid-template-columns: repeat(2, calc((100vw - 4rem) / 2));
    }
}

@media only screen and (min-width: 900px) {
    .services-container {
      grid-template-rows: repeat(2, calc((100vh - 4rem) / 3));
      grid-template-columns: repeat(3, calc((100vh - 4rem) / 3));
    }
}
</style>
