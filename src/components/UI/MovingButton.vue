<template>
  <button @touchstart="toggleActive" @touchend="toggleActive" :class="{ active: isActive }">
    <span class="front">
      {{ $t('buttons.contactUs') }}
    </span>
  </button>
</template>
<script>
export default {
  name: 'moving-button',
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive
    }
  }
}
</script>
<style scoped>
button {
  @apply relative h-10 w-[80vw] rounded-lg;
  @apply md:w-[50vw];
  @apply xl:w-[30vw];
  padding-left: 0px;
  border: 1px solid white;
  font-family: 'Montserrat', sans-serif;
}
@media (hover: hover) {
  button:active .front {
    transform: translateY(0.1rem) translateX(0.1rem);
  }
}
@media (hover: none) {
  .active .front {
    transform: translateY(0.1rem) translateX(0.1rem);
  }
}
.front {
  @apply -ml-[41.2vw] -mt-[1.6rem] h-10 w-[80vw] bg-black p-2;
  @apply md:-ml-[25.8vw] md:w-[50vw];
  @apply xl:-ml-[15.4vw] xl:w-[30vw];
  position: absolute;
  border: 1px solid white;
  border-radius: inherit;
  color: white;
}
</style>
