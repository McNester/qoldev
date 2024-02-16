<template>
  <card-back class="back">
    <h2>{{ $t('bentoCards.forAllTime') }}</h2>
    <h1>256</h1>
    <h2>{{ $t('bentoCards.cansDrunk') }}</h2>
  </card-back>
</template>
<script>
export default {
  name: 'redbull-card'
}
</script>
<style scoped>
h2 {
  @apply text-center text-[2rem] font-semibold opacity-75;
}
h1 {
  @apply text-center text-9xl font-extrabold;
}
.back {
  @apply h-[45rem] py-5 text-white;
  background-image: url('../../../../public/redbullBack2.svg') !important;
  background-size: auto;
  background-repeat: no-repeat;
  border: solid 1px rgba(255, 255, 255, 0.3);
  cursor: pointer;
}

@media (max-width: 320px) {
  h2 {
    @apply text-3xl;
  }
}
@media (min-width: 768px) {
  .back {
    @apply mb-[6rem] h-[31rem] w-[16rem];
    background-size: cover;
  }
  h1 {
    @apply text-8xl;
  }
  h2 {
    @apply text-[1.5rem] opacity-100 !important;
  }
}
@media (min-width: 1440px) {
  .back {
    @apply mb-[18rem] h-[32rem] w-[17rem] scale-125 !important;
    background-image: url('../../../../public/redbullBack3.svg') !important;
    background-size: auto/1;
    background-position: 1%;
    cursor: default;
  }
  h2 {
    @apply w-[80%];
  }
}
</style>
