<template>
  <card-back class="back h-fit py-5 text-white">
    <div id="circle"></div>
    <h1>30+</h1>
    <h2>{{ $t('bentoCards.doneProjects') }}</h2>
  </card-back>
</template>
<script>
export default {
  name: 'done-card'
}
</script>
<style scoped>
.back {
  cursor: pointer;
}
@media (min-width: 768px) {
  .back {
    @apply h-[15rem] justify-center;
  }
}
h1 {
  @apply text-center text-4xl font-bold;

  transform: translate(0%, -6.5rem);
}
h2 {
  @apply -mt-16 text-center text-lg opacity-75;
}

@media (min-width: 1440px) {
  .back {
    @apply ml-5 w-[25rem] scale-125 !important;
    cursor: default;
  }
}

#circle {
  @apply sticky;
  transform: rotate(-45deg);
  border: 0.4rem solid rgba(255, 255, 255, 0.3);

  border-bottom: 0.4rem solid white;
  border-right: 0.4rem solid white;
  border-radius: 50%;
  width: 7.5rem;
  height: 7.5rem;
}
</style>
