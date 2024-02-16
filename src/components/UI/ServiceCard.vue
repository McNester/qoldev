<template>
  <div class="container">
    <h1 id="inner1">{{ $t(this.title) }}</h1>
    <h3 id="inner2">
      {{ $t(this.body) }}
    </h3>
    <div id="inner3" class="flex h-fit w-fit flex-col items-center justify-between gap-2">
      <h2 class="text-right">{{ $t(this.price) }}</h2>
      <h4>{{ $t(this.time) }}</h4>
    </div>

    <gradient-btn id="inner4">{{ $t('buttons.orderWebsite') }}</gradient-btn>
  </div>
</template>
<script>
export default {
  name: 'service-card',
  props: {
    title: { type: String },
    body: { type: String },
    price: { type: String },
    time: { type: String }
  }
}
</script>
<style scoped>
.container {
  @apply flex h-[32rem] w-[90vw] flex-col items-center justify-around rounded-2xl px-5;
  border: 1px rgba(255, 255, 255, 0.3) solid;
}
h1 {
  @apply text-center text-[1.7rem] font-semibold text-white;
}
h2 {
  @apply text-2xl font-semibold;
  background: -webkit-linear-gradient(0deg, #ff7f22, #2622ff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
h3 {
  @apply w-[70vw] text-center text-base text-white text-opacity-70;
}
h4 {
  @apply text-center text-[0.8rem] font-light  text-white text-opacity-70;
}

@media (min-width: 768px) {
  .container {
    @apply h-[22rem] w-[47vw];

    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 6rem auto auto;
  }
  h1 {
    @apply w-[80%] text-left text-lg;
  }
  h2 {
    white-space: nowrap;
    @apply text-sm;
  }
  h3 {
    @apply text-left;
  }
  h4 {
    @apply w-[160%] text-right;
  }
  #inner1 {
    grid-row: 1;
    grid-column: 1;
  }
  #inner2 {
    grid-row: 2;
    grid-column: 1;
  }
  #inner3 {
    @apply -ml-[1.4rem] w-[140%] items-end self-end;
    grid-row: 1;
    grid-column: 2 / span 5;
  }
  #inner4 {
    @apply -ml-[0.9rem];
    grid-row: 3;
    grid-column: 1;
  }
  h3 {
    @apply w-[30vw] text-sm;
  }
}

@media (min-width: 1024px) {
  #inner3 {
    @apply -ml-[2rem];
  }
  #inner4 {
    @apply -ml-[0.6rem];
  }
}
@media (min-width: 1440px) {
  .container {
    @apply h-[30rem];
  }
  h1 {
    @apply text-3xl;
  }
  h2 {
    @apply text-2xl;
  }
  h3 {
    @apply text-xl;
  }
  h4 {
    @apply text-lg;
  }

  #inner3 {
    @apply -ml-[4rem];
  }
  #inner4 {
    @apply -ml-[0rem];
  }
}
</style>
