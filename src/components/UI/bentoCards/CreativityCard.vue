<template>
  <card-back class="back h-fit pb-10 pt-5 text-white">
    <h2>{{ $t('bentoCards.offerIdeas') }}</h2>
    <h1>{{ $t('bentoCards.creativity') }}</h1>
  </card-back>
</template>
<script>
export default {
  name: 'creativity-card'
}
</script>
<style scoped>
@media (min-width: 768px) {
  .back {
    @apply h-[15rem] justify-center;
  }
}
h1 {
  @apply text-center text-4xl font-bold;

  background: -webkit-linear-gradient(0deg, #ff3dd4, #ff4d00);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
h2 {
  @apply w-[70%] text-center text-lg opacity-75;
}
.back {
  cursor: pointer;
}
@media (min-width: 1440px) {
  .back {
    @apply ml-5 w-[25rem] scale-125 !important;
    cursor: default;
  }
}
@media (min-width: 1024px) {
  .back {
    @apply w-[20rem];
  }
}
</style>
