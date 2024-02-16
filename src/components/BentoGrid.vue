<template>
  <div id="bentoContainer">
    <speed-card
      class="left"
      @click="scaleOnClick(0)"
      :class="{ scaled: isFocused == 0 }"
    ></speed-card>
    <quality-card
      class="item2"
      @click="scaleOnClick(1)"
      :class="{ scaled: isFocused == 1 }"
    ></quality-card>
    <redbull-card
      class="item3"
      id="centered"
      @click="scaleOnClick(2)"
      :class="{ scaled: isFocused == 2 }"
    ></redbull-card>
    <creativity-card
      class="item4"
      @click="scaleOnClick(3)"
      :class="{ scaled: isFocused == 3 }"
    ></creativity-card>
    <done-card
      class="right"
      @click="this.scaleOnClick(4)"
      :class="{ scaled: isFocused == 4 }"
    ></done-card>
  </div>
</template>
<script>
export default {
  name: 'bento-grid',
  data() {
    return {
      isFocused: -1
    }
  },
  methods: {
    scaleOnClick(id) {
      if (this.isFocused == id) {
        this.isFocused = -1
      } else {
        this.isFocused = id
      }
    }
  }
}
</script>
<style scoped>
#bentoContainer {
  @apply flex h-fit w-full flex-grow flex-col items-center justify-center gap-10 px-5;
}
@media (min-width: 1440px) {
  #bentoContainer {
    gap: 6rem !important;
  }
}

@media (min-width: 640px) {
  #bentoContainer {
    @apply lg:scale-[115%];
    display: grid;
    grid-template-columns: auto auto auto;
    grid-auto-rows: auto;
    gap: 2vw;
  }

  .item3 {
    grid-column: 2;
    grid-row: 1 / span 5;
  }
  .item2 {
    grid-column: 1;
    grid-row: 2;
  }
  .item4 {
    grid-column: 3;
    grid-row: 1;
  }
}

.scaled {
  @apply scale-105;
}
</style>
