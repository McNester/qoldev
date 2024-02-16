<template>
  <card-back class="back h-fit pb-7 pt-7 text-white">
    <img src="/public/stars.svg" alt="stars image" />
    <h1 id="percent">100%</h1>
    <h1>{{ $t('bentoCards.quality') }}</h1>
  </card-back>
</template>
<script>
export default {
  name: 'quality-card'
}
</script>
<style scoped>
@media (min-width: 768px) {
  .back {
    @apply h-[15rem] w-[12rem] justify-center;
  }
  h1 {
    @apply text-2xl !important;
  }
  #percent {
    @apply text-[2.5rem] !important;
  }
  img {
    @apply scale-75 !important;
  }
}
.back {
  cursor: pointer;
}

h1 {
  @apply text-center text-5xl font-bold;
}
#percent {
  @apply text-center text-6xl;
}
img {
  @apply scale-125;
}

@media (min-width: 1440px) {
  .back {
    @apply scale-125 !important;
    cursor: default;
  }
}
</style>
