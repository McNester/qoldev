<template>
  <div class="input-container">
    <input @input="update" :value="modelValue" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: 'base-input',
  props: {
    placeholder: { type: String },
    modelValue: [String, Number]
  },
  methods: {
    update(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.input-container input {
  @apply mt-5 rounded-md bg-white bg-opacity-15 py-1 pl-2 pr-14 text-white;
  @apply sm:w-[46vw];
  @apply xl:w-[47vw];
  border: none;
  outline: none;
  transition: all 0.3s ease;
}
.input-container input:focus {
  @apply bg-opacity-20;
}
</style>
