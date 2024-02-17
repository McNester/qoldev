<template>
  <transition name="fade">
    <my-side-bar v-if="isSideBarOpen == true"></my-side-bar>
  </transition>
  <header>
    <img class="scale-125 pt-2" src="../public/fullLogo.svg" alt="qoldev" />
    <img class="hidden" src="../public/sideBarBtn.svg" alt="pseudo" />
    <img class="hidden" src="../public/closeSideBarBtn.svg" alt="pseudo" />

    <div class="mr-5 hidden flex-row gap-6 sm:flex">
      <side-bar-option
        class="hidden sm:block"
        :name="$t('menu.' + option.name)"
        v-for="option in options"
        :key="option.id"
      >
      </side-bar-option>
    </div>

    <button
      id="langChangerBtn"
      @click="sideBarAction"
      type="button"
      aria-label="change lang"
      class="hidden sm:block"
    >
      <img src="../public/globeIcon.svg" alt="globe icons" />
    </button>

    <button @click="sideBarAction" class="sm:hidden" type="button" aria-label="menu">
      <img :src="menuIconSrc" alt="menu" />
    </button>
  </header>

  <section id="intro" class="xl:scale-110">
    <div id="firstBack"></div>

    <div class="flex flex-col items-start justify-center sm:mt-24 sm:w-[80vw]">
      <div :class="$store.getters['lang/getStyleByLang']" id="titleContainer">
        <h1 id="titleFirstPart">{{ $t('everythingYouNeed') }}</h1>
        <h1 id="titleSecondPart">{{ $t('yourBusiness') }}</h1>
      </div>

      <div
        class="z-[1] mt-12 flex h-fit w-[95vw] flex-row items-center justify-around pl-2 sm:w-[40vw] sm:justify-between sm:pl-2"
      >
        <transparent-btn></transparent-btn>
        <filled-btn></filled-btn>
      </div>
    </div>

    <spline-viewer
      v-once
      id="host"
      class="absolute ml-[40vw] mt-[40vh] hidden h-[100%] w-[80vw] scale-75 sm:block lg:ml-[38vw] lg:mt-[20vh] lg:w-[62vw] lg:scale-100"
      url="https://prod.spline.design/2G3jeOzqv99KdzDk/scene.splinecode"
    ></spline-viewer>
  </section>

  <section id="portfolio">
    <img class="absolute hidden w-full sm:block" src="../public/firstOrbit.svg" alt="" />
    <h2 :class="$store.getters['lang/getStyleByLang']">{{ $t('businessSolution') }}</h2>

    <div id="planetsContainer">
      <planet
        @click="currentPlanet = planet.id"
        :class="{
          alignRight: planet.id % 2 === 0,
          alignLeft: planet.id % 2 !== 0,
          chosen: currentPlanet === planet.id,
          chosenLarge: currentPlanet === planet.id,
          marginBottom10: planet.id == 1,
          marginBottom20: planet.id == 2,
          marginBottom30: planet.id == 3,
          marginBottom40: planet.id == 4,
          marginBottom50: planet.id == 5,
          marginBottom60: planet.id == 6,
          marginBottom70: planet.id == 7,
          marginBottom80: planet.id == 8
        }"
        :link="planet"
        v-for="planet in $store.getters['planet/getLinks']"
        :key="planet.id"
      >
      </planet>
    </div>
  </section>

  <section id="about">
    <bento-grid></bento-grid>
  </section>

  <section id="service">
    <h1 id="itemText" :class="$store.getters['lang/getStyleByLang']">
      {{ $t('serviceAndPrice') }}
    </h1>
    <service-card
      :elementId="service.id"
      :id="'item' + service.id"
      v-for="service in services"
      :key="service.id"
      :title="service.title"
      :body="service.body"
      :price="service.price"
      :time="service.time"
    ></service-card>
  </section>

  <section :class="$store.getters['lang/getStyleByLang']" id="contact">
    <h1>{{ $t('tryIt') }}</h1>
    <h2>{{ $t('experienceService') }}</h2>

    <moving-button class="btn"></moving-button>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })
</script>

<script>
import MySideBar from '@/components/MySideBar.vue'
import BentoGrid from '@/components/BentoGrid.vue'
export default {
  components: {
    MySideBar,
    BentoGrid
  },
  data() {
    return {
      menuIconSrc: '../public/sideBarBtn.svg',
      isSideBarOpen: false,
      isSideBarClosed: true,
      options: [
        { id: 1, name: 'about' },
        { id: 2, name: 'portfolio' },
        { id: 3, name: 'service' },
        { id: 4, name: 'contact' }
      ],
      currentPlanet: 1,
      services: [
        {
          id: 1,
          title: 'priceCards.first.title',
          body: 'priceCards.first.body',
          price: 'priceCards.first.price',
          time: 'priceCards.first.time'
        },
        {
          id: 2,
          title: 'priceCards.second.title',
          body: 'priceCards.second.body',
          price: 'priceCards.second.price',
          time: 'priceCards.second.time'
        },
        {
          id: 3,
          title: 'priceCards.third.title',
          body: 'priceCards.third.body',
          price: 'priceCards.third.price',
          time: 'priceCards.third.time'
        },
        {
          id: 4,
          title: 'priceCards.fourth.title',
          body: 'priceCards.fourth.body',
          price: 'priceCards.fourth.price',
          time: 'priceCards.fourth.time'
        },
        {
          id: 5,
          title: 'priceCards.fifth.title',
          body: 'priceCards.fifth.body',
          price: 'priceCards.fifth.price',
          time: 'priceCards.fifth.time'
        },
        {
          id: 6,
          title: 'priceCards.sixth.title',
          body: 'priceCards.sixth.body',
          price: 'priceCards.sixth.price',
          time: 'priceCards.sixth.time'
        }
      ]
    }
  },
  methods: {
    sideBarAction() {
      if (this.isSideBarOpen == true) {
        this.isSideBarOpen = false
      } else {
        this.isSideBarOpen = true
      }
      this.changeMenuIconSrc()
    },
    changeMenuIconSrc() {
      if (this.menuIconSrc == '../public/sideBarBtn.svg') {
        this.menuIconSrc = '../public/closeSideBarBtn.svg'
      } else {
        this.menuIconSrc = '../public/sideBarBtn.svg'
      }
    }
  },
  mounted() {
    if (
      !document.querySelector(
        'script[src="https://unpkg.com/@splinetool/viewer@1.0.47/build/spline-viewer.js"]'
      )
    ) {
      console.log('Adding Spline viewer script to the document.')
      const script = document.createElement('script')
      script.type = 'module'
      script.src = 'https://unpkg.com/@splinetool/viewer@1.0.47/build/spline-viewer.js'

      script.onload = () => {
        console.log('Spline viewer script loaded.')
        console.log('must be here111:')
        const shadowHost = document.getElementById('host')
        const shadowRoot = shadowHost.shadowRoot
        const logoElement = shadowRoot.querySelector('#logo')
        console.log(logoElement)
        logoElement.style.cssText = 'opacity: 0 !important;'

        setTimeout(() => {
          console.log('must be here2:')
          //console.log(document.getElementById('logo'))

          const shadowHost = document.getElementById('host')

          // Access the shadow root from the host element
          const shadowRoot = shadowHost.shadowRoot

          // Query inside the shadow root for the #logo element
          const logoElement = shadowRoot.querySelector('#logo')

          logoElement.style.cssText = 'display: none !important;'
        }, 1000)
      }

      document.head.appendChild(script)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800&display=swap');
html,
body {
  overflow-x: hidden;
  max-width: 100vw;
  overscroll-behavior: none;
}
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden !important;
  overscroll-behavior-y: none;
  background-color: #0a0a11;

  font-family: 'Montserrat', sans-serif;
}
.ruTextfont {
  font-family: 'Montserrat Alternates', sans-serif;
}
section {
  height: 100vh;
  width: 100vw;
}
#intro {
  @apply flex flex-col items-center justify-start text-white;
}
#titleContainer {
  @apply mt-28 flex w-[100vw] flex-shrink flex-col items-start justify-start pl-5;
  @apply sm:w-fit sm:pl-0;
}
#titleContainer > h1 {
  @apply p-2 text-[2.5rem];
  @apply sm:w-fit sm:text-6xl;
  text-align: left;
  width: 94vw;
  margin: 0 !important;
  padding: 0 !important;
}
#titleFirstPart {
  @apply sm:w-[35vw] lg:w-[40vw] !important;
  color: rgb(255, 255, 255, 0.7) !important;
}

header {
  @apply fixed flex h-11 w-full flex-row items-center justify-between bg-black bg-opacity-10 px-8 py-10 sm:bg-opacity-0;
  z-index: 20000;
  overflow: hidden;
}

#portfolio {
  @apply -mt-[30vh] flex h-[123rem] w-[100%] flex-col items-center justify-start text-center text-[2.9rem] text-white;
  @apply sm:mt-[30vh] sm:h-[150rem];
  @apply lg:h-[50rem];
  @apply xl:h-[70rem];
}

#portfolio > h2 {
  @apply sm:w-[90%];
}

#about {
  @apply h-fit pb-[20vh];
}

#service {
  @apply flex h-fit flex-col items-center justify-center gap-10;
}

@media (min-width: 768px) {
  #service {
    @apply w-[108vw] gap-5;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto auto;
  }
  #itemText {
    @apply pr-12;
    grid-row: 1;
    grid-column: 1 / span 5;
  }
  #item1 {
    grid-row: 2;
    grid-column: 1;
  }
  #item2 {
    grid-row: 2;
    grid-column: 2;
  }
  #item3 {
    grid-row: 3;
    grid-column: 1;
  }
  #item4 {
    grid-row: 3;
    grid-column: 2;
  }
  #item5 {
    grid-row: 4;
    grid-column: 1;
  }
  #item6 {
    grid-row: 4;
    grid-column: 2;
  }
}
@media (min-width: 1024px) {
  #service {
    @apply w-[105vw];
  }
}

#service > h1 {
  @apply mb-20 text-center text-3xl font-bold text-white;
}

#contact {
  @apply flex h-[160vh] flex-col items-center justify-center gap-14 text-white;
  background-image: url('../public/lastBack.svg');
  background-position: 35% 10%;
  background-repeat: no-repeat;
  background-size: auto;
}
@media (min-width: 768px) {
  #contact {
    background-image: url('../public/lastBack2.svg');
    background-position: 65% 10%;
    background-size: cover;
  }
}
@media (min-width: 1440px) {
  #contact {
    @apply h-[200vh];
    background-size: auto;
  }
}
#contact > h1 {
  @apply text-3xl;
  @apply md:text-6xl;
  @apply xl:text-7xl;
}
#contact > h2 {
  @apply w-[70%] text-center text-lg opacity-70;
  @apply md:w-[50%] md:text-2xl;
  @apply xl:text-3xl;
}
#contact > .btn {
  @apply md:mt-20;
  @apply xl:scale-125;
}

#firstBack {
  position: absolute;
  height: 200vh;
  width: inherit;
  background-repeat: no-repeat;

  background-image: url('../public/mobileBackOne.png');
  background-position-x: -50vw;
  background-position-y: -50vh;
  @media (min-width: 640px) {
    background-image: url('../public/bigBackOne.png');
    background-position-x: 0vw;
    background-position-y: -30vh;
  }
}

#langChangerBtn {
  transition: all 0.3s;
}
#langChangerBtn:hover {
  @apply scale-110;
}
#langChangerBtn:active {
  @apply scale-95;
}

#planetsContainer {
  @apply mt-[45rem] flex h-[50vh] w-[100vw] flex-col items-center justify-center gap-20 px-10;
  @apply sm:mt-[55rem] sm:scale-125 sm:px-36;
  @apply lg:mt-[3rem] lg:scale-[0.65] lg:flex-row xl:mt-[8rem] xl:scale-90;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.alignLeft {
  @apply self-start lg:self-auto;
}
.alignRight {
  @apply self-end lg:self-auto;
}

.fade-enter-active {
  animation: fadeIn 0.7s ease;
}
.fade-leave-active {
  animation: fadeOut 0.5s ease forwards;
}
.marginBottom10 {
  @apply lg:mb-[10rem];
}
.marginBottom20 {
  @apply lg:mb-[5rem];
}
.marginBottom30 {
  @apply lg:mb-[1rem];
}
.marginBottom40 {
  @apply lg:mb-[10rem];
}
.marginBottom50 {
  @apply lg:mb-[10rem];
}
.marginBottom60 {
  @apply lg:mb-[1rem];
}
.marginBottom70 {
  @apply lg:mb-[15rem];
}
.marginBottom80 {
  @apply lg:mb-[25rem];
}
</style>
