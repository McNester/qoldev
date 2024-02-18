<template>
  <div
    @touchstart="toggleActive"
    @touchend="toggleActive"
    :class="{ active: isActive }"
    class="gradient-border"
  >
    <button>
      <h1>
        <slot></slot>
      </h1>
    </button>
  </div>
</template>
<script>
export default {
  name: 'gradient-btn',
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
.gradient-border {
  @apply xl:scale-[100%];
  background: -webkit-linear-gradient(right, #ff7f22, #2622ff);
  padding: 0.5px;
  border-radius: 8px;
  display: inline-block;
  transition: all 0.3s ease;
}

button {
  @apply flex items-center justify-center py-2 text-center text-base font-medium;
  color: white;
  border: none;
  cursor: pointer;
  background: black;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  display: block;
  transition: all 0.5s ease;
}

@media (hover: hover) {
  .gradient-border:hover {
    @apply scale-105;
  }
  .gradient-border:hover button {
    background: none;
  }
  .gradient-border:active {
    @apply scale-100;
  }
}
@media (hover: none) {
  .active button {
    background: none;
    transition: all 0.2s ease;
  }
}

h1 {
  @apply w-[80vw];
}

@media (min-width: 768px) {
  div {
    @apply flex scale-90 items-center justify-center;
  }
  h1 {
    @apply w-[100%] text-center !important;
  }
  .gradient-border {
    @apply w-[25vw];
  }
}
@media (min-width: 1024px) {
  h1 {
    @apply w-[100%] !important;
  }
  .gradient-border {
    width: 20vw;
    padding: 1.5px;
    border-radius: 9px;
  }
  button {
    border-radius: 9px;
  }
}
</style>
