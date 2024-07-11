<script setup lang="ts">
const emits = defineEmits(['changeSection'])

</script>

<template>
  <div class="header">
    <a @click="$emit('changeSection', 'home')" class="logo">
        <img src="./assets/solavalidator-logo.svg" alt="SolaValidator logo" class="logo-img">
        <h1 class="logo-text">SolaValidator</h1>
    </a>
    <div class="menu">
        <div @click="$emit('changeSection', 'home')" class="menu-item">{{ $t('message.header-menu-home') }}</div>
        <div @click="$emit('changeSection', 'services')" class="menu-item">{{ $t('message.header-menu-services') }}</div>
        <div @click="$emit('changeSection', 'about')" class="menu-item">{{ $t('message.header-menu-about') }}</div>
    </div>
  </div>
</template>

<style scoped>
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        margin: 0;
        padding: 10px 15px;
        gap: 5px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        background: var(--main-color-grey-opacity);
        height: auto;
        box-sizing: border-box;
        transition: all 0.075s ease-in-out;
    }

    .logo {
        display: flex;
        align-self: flex-start;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 5px;
        color: #fff;
        text-decoration: none;
        cursor: pointer;
    }

    .logo-img {
        height: 50px;
        width: 50px;
        align-self: center;
    }

    .logo-text {
        margin: 0;
        padding: 0;
        font-size: 35px;
        line-height: 100%;
        align-self: center;
    }

    .menu {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        padding: 0 30px;
        gap: 50px;
        width: 100%;
        height: 50px;
    }

    .menu-item {
        text-decoration: none;
        text-align: center;
        color: #fff;
        font-size: 18px;
        line-height: 100%;
        width: auto;
        cursor: pointer;
        transition: all 0.075s ease-in-out;
    }

    .menu-item:hover {
        color: var(--main-color-light-violet);
    }

    @media only screen and (max-width: 700px) {
        .menu {
            padding: 0 25px;
            gap: 40px;
        }
    }

    @media only screen and (max-width: 500px) {
        .logo-img {
            height: 30px;
            width: 30px;
        }
        .logo-text {
            font-size: 20px;
        }
        .menu {
            gap: 10px;
            padding: 0 10px;
            height: 30px;
        }
        .menu-item {
            font-size: 14px;
        }
    }
</style>
