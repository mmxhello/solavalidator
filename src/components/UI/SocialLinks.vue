<script setup lang="ts">

</script>

<template>
<!-- Ссылки на соц.сети (без email). Для примера - Павел Дуров -->
  <div class="social-links">
        <a href="https://vk.com/durov" class="social-links-item">
            <img src="../../assets/vk-logo.svg" alt="VK logo" class="social-links-item-img">
        </a>
        <a href="https://t.me/durov" class="social-links-item">
            <img src="../../assets/telegram-logo.svg" alt="Telegram logo" class="social-links-item-img">
        </a>
    </div>
</template>

<style scoped>
    .social-links {
        display: flex;
        align-self: center;
        justify-self: flex-end;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 7.5px;
        color: #fff;
        text-decoration: none;
        cursor: pointer;
    }

    .social-links-item {
        display: flex;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: var(--main-color-dark-violet);
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .social-links-item-img {
        width: inherit;
        height: inherit;
        object-fit: cover;
    }
</style>
