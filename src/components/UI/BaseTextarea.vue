<template>
  <div class="input-container">
    <textarea @input="update" :value="modelValue" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: 'base-textarea',
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
.input-container textarea {
  @apply mt-5 rounded-md bg-white bg-opacity-15 py-1 pl-2 pr-14 text-white;
  @apply sm:w-[46vw];
  @apply xl:w-[47vw];
  border: none;
  outline: none;
  transition: all 0.3s ease;
}
.red textarea {
  @apply bg-red-400 bg-opacity-15 !important;
}
.input-container textarea:focus {
  @apply bg-opacity-20;
}

.messageInput textarea {
  @apply h-[10rem] pb-[7rem] !important;
}
.messageInput::-webkit-scrollbar {
  display: none;
}
.messageInput textarea::-webkit-scrollbar {
  display: none;
}
</style>
