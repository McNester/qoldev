<template>
  <div id="container">
    <article id="langSwitcher">
      <button
        @click="switchRu(), changeLang(0)"
        :class="currentLang == 0 ? { chosen: true } : { chosen: false }"
        type="button"
        aria-label="Russian"
      >
        Ru
      </button>

      <button
        @click="switchKz(), changeLang(1)"
        :class="currentLang == 1 ? { chosen: true } : { chosen: false }"
        type="button"
        aria-label="Russian"
      >
        Kaz
      </button>

      <button
        @click="switchEn(), changeLang(2)"
        :class="currentLang == 2 ? { chosen: true } : { chosen: false }"
        type="button"
        aria-label="Russian"
      >
        Eng
      </button>
    </article>

    <div id="mainLine"></div>

    <article id="options">
      <side-bar-option :name="$t('menu.' + option.name)" v-for="option in options" :key="option.id">
      </side-bar-option>
    </article>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const animationStarted = ref(true)
const animate = () => {
  animationStarted.value = !animationStarted.value
}

const { t, locale } = useI18n({ useScope: 'global' })
const switchRu = () => {
  locale.value = 'ru'
  localStorage.setItem('lang', locale.value)
}
const switchKz = () => {
  locale.value = 'kz'
  localStorage.setItem('lang', locale.value)
}
const switchEn = () => {
  locale.value = 'en'
  localStorage.setItem('lang', locale.value)
}
</script>

<script>
export default {
  name: 'my-side-bar',
  data() {
    return {
      currentLang: this.$store.getters['lang/getLangId'],
      options: [
        { id: 1, name: 'about' },
        { id: 2, name: 'portfolio' },
        { id: 3, name: 'service' },
        { id: 4, name: 'contact' }
      ]
    }
  },
  methods: {
    changeLang(id) {
      this.currentLang = id
      //$store.getters['lang/getStyleByLang']
      if (id == 0) {
        this.$store.commit('lang/changeLangRu')
      } else if (id == 1) {
        this.$store.commit('lang/changeLangKz')
      } else {
        this.$store.commit('lang/changeLangEn')
      }
    }
  }
}
</script>

<style scoped>
#container {
  @apply fixed flex h-[100vh] w-[100vw] flex-col overflow-hidden bg-black bg-opacity-80 align-top;
  @apply sm:bg-opacity-0;
  padding-top: 22vh;
  z-index: 10000;
}
#mainLine {
  @apply sm:hidden;
  position: fixed;
  width: 100vw;
  height: 0.2rem;
  background-color: white;
}
#langSwitcher {
  @apply -mt-10 flex h-fit w-[60vw] flex-row justify-around self-end text-xl;
  @apply sm:-mt-20 sm:mr-7 sm:w-fit sm:flex-col sm:items-center sm:justify-center sm:gap-10;
  margin-bottom: 10vw;
}
button {
  @apply text-white;
}
.chosen {
  @apply font-bold;
}
#options {
  @apply flex h-full w-[100vw] flex-col;
  @apply sm:hidden;
}
</style>
