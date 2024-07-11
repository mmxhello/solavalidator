<script setup lang="ts">
import { ref } from 'vue'
import SocialLinksBlock from '../components/UI/SocialLinks.vue'

</script>

<template>
  <div class="contact-block-container">
    <div class="title">{{ $t('message.contact-block-title') }}</div>
    <div class="text">{{ $t('message.contact-block-text') }}</div>
    <div class="contact-info-container">
        <div class="contact-links-container">
            <!-- Email в дополнение к соц.сетям -->
            <a class="contact-email" href="mailto:support@solavalidator.mix"> support@solavalidator.mix </a>
            <SocialLinksBlock />
        </div>
        <form class="contact-form">
            <div class="input-container">
                <input class="contact-form-input" type="text" :placeholder="$t('message.contact-form-input-name')">
                <input class="contact-form-input" type="text" :placeholder="$t('message.contact-form-input-email')">
                <textarea class="contact-form-input" :placeholder="$t('message.contact-form-input-message')"></textarea>
                <button class="contact-form-submit-button">{{ $t('message.contact-submit-button') }}</button>
            </div>
        </form>
    </div>
  </div>
</template>

<style scoped>

.contact-block-container {
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

.contact-info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    height: auto;
    background: var(--main-color-light-grey-opacity);
    border: solid 1px var(--main-color-pink);
    width: calc(100% - 0.5rem);
    max-width: 330px;
    border-radius: 10px;
    margin: 0.1em 0;
    padding: 5px 10px;
}

.contact-links-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-self: center;
    height: auto;
    width: 100%;
    max-width: 100%;
    gap: 15px;
    padding: 10px;
    margin: 0;
}

.contact-email {
    font-size: 1rem;
    font-weight: 400;
    line-height: 120%;
    margin: 0;
    padding: 0;
    text-align: center;
    text-decoration: underline;
    color: white;
    cursor: pointer;
}

.contact-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    background: var(--main-color-light-violet-opacity);
    height: auto;
    width: 100%;
    max-width: 100%;
    gap: 5px;
    padding: 5px 10px;
    margin: 0;
}

.input-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 7px;
    padding: 5px 10px;
    margin: 0;
}

.contact-form-input {
    font-size: 1rem;
    font-weight: 300;
    line-height: 120%;
    margin: 0;
    text-align: center;
    width: 250px;
    max-width: 100%;
    border: none;
    border-radius: 7.5px;
    background: var(--main-color-dark-violet);
    color: white;
    padding: 5px 10px;
}

.contact-form-input:focus {
    outline: 1px solid var(--main-color-pink);
}

.contact-form-submit-button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 120%;
    margin: 0;
    text-align: center;
    width: 250px;
    min-width: 100%;
    max-width: 100%;
    border: none;
    border-radius: 7.5px;
    background: var(--main-color-violet);
    color: white;
    padding: 10px 15px;
    cursor: pointer;
    transition: all 0.075s ease-in-out;
}

.contact-form-submit-button:hover {
    background: var(--main-color-pink);
}

@media only screen and (max-width: 400px) {
    .contact-block-container {
        padding: 10px;
    }
}

@media only screen and (max-width: 350px) {
    .contact-info-container {
        width: 100%;
    }
}
</style>
