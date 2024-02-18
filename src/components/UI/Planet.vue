<template>
  <div id="planetContainer" class="regular" :class="$store.getters['lang/getStyleByLang']">
    <div id="verticalLine"></div>
    <div class="flex w-full flex-col items-center justify-center">
      <a target="_blank" :href="link.link">{{ link.name }}</a>
      <img :src="getImage(link.id)" alt="planet image" />
      <transition-group name:fade>
        <div id="centerLine"></div>
        <h2>{{ $t('linksDescription.' + link.description) }}</h2>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
import planet1 from '/public/planet1.svg'
import planet2 from '/public/planet2.svg'
import planet3 from '/public/planet3.svg'
import planet4 from '/public/planet4.svg'
import planet5 from '/public/planet5.svg'
import planet6 from '/public/planet6.svg'
import planet7 from '/public/planet7.svg'
import planet8 from '/public/planet8.svg'

function getImage(id) {
  switch (id) {
    case 1:
      return planet1
    case 2:
      return planet2
    case 3:
      return planet3
    case 4:
      return planet4
    case 5:
      return planet5
    case 6:
      return planet6
    case 7:
      return planet7
    case 8:
      return planet8
  }
}
</script>

<script>
export default {
  name: 'planet',
  props: {
    link: { type: Object },
    isChosen: { type: Boolean }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap');

#planetContainer {
  @apply flex h-fit w-[10rem] flex-row items-center justify-around;
  z-index: 1000;
  cursor: pointer;
}

a {
  font-family: 'Ubuntu Mono', monospace;
  transition: all 0.5s ease;
  @apply text-base opacity-30;
}
h2 {
  @apply text-center text-sm opacity-65;
}
#verticalLine {
  transition: all 0.5s ease;
  @apply mr-2 h-[107%] w-[0.02rem] bg-white bg-opacity-65;
}
#centerLine {
  @apply h-[4rem] w-[0.05rem] bg-white bg-opacity-65;
  display: none;
}
img {
  transition: all 0.5s ease;
}

@media only screen and (min-width: 1024px) {
  @keyframes fadeIn {
    0% {
      opacity: 0;
      height: 0px;
    }
    100% {
      @apply h-[4rem];
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    0% {
      @apply h-[4rem];
      opacity: 1;
    }
    100% {
      opacity: 0;
      height: 0px;
    }
  }
  #verticalLine {
    display: none;
  }
  #centerLine {
    display: block;
    height: 0px;
    opacity: 0;
    @apply mb-2;
  }
  h2 {
    opacity: 0;
    height: 0px;
  }
  .fade-enter-active {
    animation: fadeIn 0.5s ease;
  }
  .fade-leave-active {
    animation: fadeOut 0.5s ease forwards;
  }

  .chosenLarge #centerLine {
    animation: fadeIn 0.5s ease forwards !important;
  }
  .chosenLarge h2 {
    animation: fadeIn 0.5s ease forwards !important;
  }
  .regular #centerLine {
    animation: fadeOut 0.5s ease forwards;
  }
  .regular h2 {
    animation: fadeOut 0.5s ease forwards;
  }
}

.chosen img {
  @apply scale-150;
}
.chosen #verticalLine {
  @apply bg-opacity-100;
}
.chosen a {
  @apply pb-6 opacity-100;
}
</style>
