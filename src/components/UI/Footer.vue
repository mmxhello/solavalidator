<script setup lang="ts">
import SocialLinksBlock from '/SocialLinks.vue'
</script>

<template>
  <div class="footer">
    <div class="company-info">
        <p class="company-info-text">{{ $t('message.company-info-text') }}</p>
        <p class="company-info-text">{{ $t('message.all-rights-reserved-text') }}</p>
    </div>
    <SocialLinksBlock />
  </div>
</template>

<style scoped>
    .footer {
        background: var(--main-color-dark-grey);
        opacity: 0.9;
        width: 100%;
        margin: 0;
        padding: 10px 15px;
        gap: 5px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        height: auto;
        box-sizing: border-box;
    }

    .company-info {
        display: flex;
        flex-direction: column;
        align-self: center;
        align-items: flex-start;
        justify-content: center;
        gap: 5px;
        color: #fff;
        width: 100%;
        text-decoration: none;
    }

    .company-info-text {
        font-size: 14px;
        color: var(--main-color-light-violet);
        line-height: 100%;
        margin: 0;
        padding: 0;
    }

    .menu-item:hover {
        color: var(--main-color-light-violet);
    }

    @media only screen and (max-width: 500px) {
        .company-info {
            gap: 3px;
        }
        .company-info-text {
            font-size: 10px;
        }
        .social-links-item {
            width: 22.5px;
            height: 22.5px;
        }
    }
</style>
