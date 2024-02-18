<template>
  <button @mousemove="getMousePos" @mouseleave="resetPos" class="skw">
    {{ $t('buttons.orderWebsite') }}
  </button>
</template>

<script setup>
import { ref } from 'vue'

const rotateX = ref(0)
const rotateY = ref(0)

const hue = ref()
const saturation = ref(0)
const lightness = ref(0)
const getMousePos = (e) => {
  const width = e.target.clientWidth
  const height = e.target.clientHeight
  const { clientX, clientY } = e
  const { innerWidth, innerHeight } = window
  const x = (clientX / innerWidth) * width - width / 2
  const y = (clientY / innerHeight) * height - height / 2
  rotateX.value = x / 10 + 'deg'
  rotateY.value = y / 10 + 'deg'
  hue.value = clientY / height + (clientX / width) * 360
  saturation.value = clientY / height + (clientX / width) * 100 + '%'
  lightness.value = 50 + '%'
}
const resetPos = () => {
  rotateX.value = 0
  rotateY.value = 0
  hue.value = 0
  saturation.value = 0
  lightness.value = 0
}
</script>

<script>
export default {
  name: 'filled-btn'
}
</script>

<style scoped>
button {
  @apply w-[60vw] rounded-md py-2;
  @apply sm:w-[25vw]  sm:rounded-lg sm:py-2;
  background-color: #5f15fc;
  transition: all ease 0.4s;
}

@media (hover: hover) {
  button:hover {
    @apply sm:scale-[110%];
  }
  button:active {
    @apply sm:scale-[105%];
    background-color: #5713eb;
    transition: all ease 0.2s;
  }
}
@media (hover: none) {
  button:focus-within {
    background-color: #4610bb;
    transition: all ease 0.5s;
  }
}

@media only screen and (min-width: 1024px) {
  .skw {
    transition: all 0.2s linear;
    transform: rotateX(v-bind(rotateY)) rotateY(v-bind(rotateX));
    filter: drop-shadow(0 0 10px hsl(v-bind(hue), v-bind(saturation), v-bind(lightness), 1));
  }
}
</style>
