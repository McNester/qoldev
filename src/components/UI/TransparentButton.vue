<template>
  <button @mousemove="getMousePos" @mouseleave="resetPos" class="skw">
    {{ $t('buttons.price') }}
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
  name: 'transparent-btn'
}
</script>

<style scoped>
button {
  @apply w-[25vw] rounded-md border-white py-2;
  @apply sm:w-[12vw] sm:rounded-lg sm:py-[0.37rem];
  border: solid 0.07rem;
  transition: all ease 0.7s;
}

@media (hover: hover) {
  button:hover {
    @apply sm:scale-[110%];
    background-color: white;
    border: none;
    color: black;
  }
  button:active {
    @apply sm:scale-[105%];
    transition: all ease 0.2s;
  }
}

@media (hover: none) {
  button:focus-within {
    @apply bg-white;
    color: black;
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
