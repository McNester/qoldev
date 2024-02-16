<template>
  <div id="optionsContainer" :class="$store.getters['lang/getStyleByLang']">
    <button type="button" aria-label="option">{{ name }}</button>
  </div>
  <div id="optionsLine"></div>
</template>

<script>
export default {
  name: 'side-bar-option',
  props: {
    name: {
      type: String
    }
  }
}
</script>

<style scoped>
#optionsContainer {
  @apply flex h-fit w-[100vw] flex-row justify-end pr-2 pt-7 text-xl text-white;
  @apply sm:w-fit sm:pr-0 sm:pt-0 sm:text-lg sm:text-opacity-70;
  @apply md:text-sm;
  @apply lg:text-lg;
}
#optionsLine {
  @apply mt-1 h-[0.02rem] w-[100vw] bg-white bg-opacity-15;
  @apply sm:hidden;
}
button {
  transition: all 0.5s ease;
}
#optionsContainer:hover {
  @apply text-opacity-100;
}
</style>
