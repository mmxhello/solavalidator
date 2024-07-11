<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
    address: String
})

const cryptoAddress = props.address ? props.address : ''

let showCopyInfo = ref(false)

const copyCryptoAddress = () => {
    navigator.clipboard.writeText(cryptoAddress)
    showCopyInfo.value = true
    setTimeout(() => {
        showCopyInfo.value = false
    }, 3000)
}
</script>

<template>
  <div class="staking-address-block">
    <div class="stake-block-title">{{ $t('message.stake-block-title') }}</div>
    <div class="stake-block-instructions">{{ $t('message.stake-block-instructions') }}</div>
    <div class="crypto-address-container">
        <div class="crypto-address">
            {{ props.address }}
        </div>
        <img src="../assets/copy-icon.svg" alt="Copy address icon" class="copy-address-icon" @click="copyCryptoAddress">
    </div>
    <Transition name="fade">
    <div class="address-copy-info success" v-if="showCopyInfo">
        {{ $t('message.crypto-address-copy-success', 1) }}
    </div>
    </Transition>
  </div>
</template>

<style scoped>
.staking-address-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    height: auto;
    width: 400px;
    max-width: 100%;
    margin: 0;
    padding: 1rem;
    gap: 0.3rem;
    box-sizing: border-box;
    background-color: var(--main-color-black-grey);
    border: none;
    border-radius: 15px;
}

.stake-block-title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 100%;
    color: var(--main-color-light-pink);
    margin-bottom: 10px;
}

.stake-block-instructions {
    text-align: center;
    font-size: 0.9rem;
    color: var(--main-color-light-violet);
    margin-bottom: 5px;
}

.crypto-address-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: 6px 10px;
    gap: 3px;
    box-sizing: border-box;
    background-color: var(--main-color-dark-violet);
    border: none;
    border-radius: 10px;
    color: #ffffffc8;
    font-size: 0.8rem;
}

.crypto-address {
    font-size: 0.8rem;
}

.copy-address-icon {
    width: 15px;
    height: 15px;
    cursor: pointer;
}

.address-copy-info {
    font-size: 0.8rem;
    margin: 0;
}.success {
    color: var(--main-color-light-green);
}

@media screen and (max-width: 500px) {
    .staking-address-block {
        width: 95%;
    }

    .crypto-address {
        font-size: 0.7rem;
        max-width: 90%;
    }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
