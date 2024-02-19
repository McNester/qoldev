<template>
  <div v-if="isVisible" id="container">
    <button type="button" @click="close" id="closeBtn">
      <img :src="closeSideBarIcon" alt="close icon" />
    </button>

    <h1 :class="$store.getters['lang/getStyleByLang']">
      {{ $t(title) }}
    </h1>

    <div id="servicesContainer">
      <h3 v-for="index in getServiceIds" :key="index">
        {{ index + 1 + '.' }}
        {{ $t(popupInf.baseService + '[' + index + ']' + '.name') }}
      </h3>
    </div>

    <div id="notIncludeContainer">
      <div id="title">
        <h3 id="blue">{{ $t(popupInf.baseNotInclude + '.title[0]') }}</h3>
        <h3>{{ $t(popupInf.baseNotInclude + '.title[1]') }}</h3>
      </div>
      <h3>{{ $t('') }}</h3>
      <h3 v-for="index in [0, 1]" :key="index">
        {{ index + 1 + '.' }}
        {{ $t(popupInf.baseNotInclude + '.serviceList[' + index + ']' + '.name') }}
      </h3>
    </div>
  </div>
</template>

<script setup>
import closeSideBarIcon from '../../../../public/closeSideBarBtn.svg'
</script>

<script>
export default {
  name: 'service-popup',
  props: {
    isVisible: { type: Boolean },
    title: { type: String },
    popupInf: { type: Object }
  },
  methods: {
    close() {
      this.$emit('closePopup')
    }
  },
  computed: {
    getServiceIds() {
      var arr = []
      for (let i = 0; i < this.popupInf.serviceLen; i++) {
        arr.push(i)
      }
      return arr
    }
  }
}
</script>

<style scoped>
#container {
  @apply absolute flex h-[32rem] w-[90vw] flex-col items-center rounded-2xl font-medium text-white backdrop-blur-xl;
  border: 1px white solid;

  z-index: 2000;
}
#container::-webkit-scrollbar {
  display: none;
}
#servicesContainer::-webkit-scrollbar {
  display: none;
}
@media (min-width: 768px) {
  #container {
    @apply -ml-[1.3rem] h-[22rem] w-[47vw];
  }
  #servicesContainer {
    @apply h-[45%] !important;
  }
  #notIncludeContainer {
    @apply mt-[16.5rem] gap-0 !important;
  }
}
@media (min-width: 1440px) {
  #container {
    @apply xl:h-[30rem];
  }
  #closeBtn {
    @apply mr-5 mt-[10%] scale-125 self-end px-3;
  }
  h1 {
    @apply mt-[3.5%] pl-5 text-4xl !important;
  }
  h3 {
    @apply text-lg !important;
  }
  #notIncludeContainer {
    @apply mt-[23rem] !important;
  }
}
#servicesContainer {
  @apply h-[55%] w-[90%] items-center justify-center overflow-scroll;
}
h1 {
  @apply mb-5 mt-[5%] w-[90%] self-start justify-self-start pl-3 text-left text-xl text-white;
}
#closeBtn {
  @apply absolute mt-[5%] self-end px-3;
}
#notIncludeContainer {
  @apply absolute mt-[24rem] flex w-[90%] flex-col items-center justify-center gap-2;
}
#notIncludeContainer > #title {
  @apply flex w-full flex-row gap-3;
}
#notIncludeContainer > #title > h3 {
  @apply w-fit;
}
#notIncludeContainer > #title > #blue {
  color: #2622ff !important;
}
h3 {
  @apply w-full text-sm;
}
</style>
