<template>
  <div :class="$store.getters['lang/getStyleByLang']">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'card-back'
}
</script>

<style scoped>
div {
  background-image: linear-gradient(150deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0));
  border: solid 0.5px rgba(255, 255, 255, 0.3);
  @apply flex w-full flex-col items-center gap-6 rounded-3xl;
  transition: all 0.5s ease;
}
</style>
