<template>
  <card-back class="back h-fit pb-14 pt-5 text-white">
    <h1>{{ $t('bentoCards.speed') }}</h1>
    <h2>{{ $t('bentoCards.effectiveDev') }}</h2>
  </card-back>
</template>
<script>
export default {
  name: 'speed-card'
}
</script>
<style scoped>
@media (min-width: 768px) {
  .back {
    @apply h-[15rem] w-[12rem] justify-center;
  }
  h2 {
    @apply w-[90%] text-sm !important;
  }
  h1 {
    @apply text-[1.5rem] !important;
  }
}
.back {
  cursor: pointer;
}

h1 {
  @apply text-center text-[2.4rem] font-bold;

  background: -webkit-linear-gradient(0deg, #ff3dd4, #ff4d00);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

h2 {
  @apply w-[70%] text-center text-lg;
}
@media (min-width: 1440px) {
  .back {
    @apply scale-125 !important;
    cursor: default;
  }
}
</style>
