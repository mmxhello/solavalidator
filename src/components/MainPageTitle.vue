<script setup lang="ts">
const props = defineProps({
    title: String
})
</script>

<template>
  <h1 class="main-title">{{props.title}}</h1>
</template>

<style scoped>
.main-title {
  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  padding: 0;
}
</style>
