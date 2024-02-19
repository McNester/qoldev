<template>
  <div class="phone-input-container">
    <input type="tel" :value="getPhoneNumber" @input="update" placeholder="+7 (___) ___-__-__" />
  </div>
</template>

<script>
export default {
  name: 'phone-input',
  data() {
    return {
      phoneNumber: ''
    }
  },
  props: {
    rawNumber: { type: Number } //11
  },
  methods: {
    formatPhoneNumber() {
      let char = { 1: '(', 4: ') ', 7: '- ', 9: '-', 0: '+' }
      let numbers = this.rawNumber.replace(/\D/g, '') // Remove all non-digit character

      this.phoneNumber = ''
      for (let i = 0; i < numbers.length; i++) {
        this.phoneNumber += (char[i] || '') + numbers[i]
      }
      if (this.rawNumber.length >= 11) {
        this.phoneNumber = this.phoneNumber.slice(0, 18)
      }
    },
    update(event) {
      let numbers = event.target.value.replace(/\D/g, '') // Remove all non-digit character
      if (numbers.length <= 11) {
        this.$emit('update:rawNumber', numbers)
      } else {
        event.target.value = this.phoneNumber
      }
    }
  },
  computed: {
    getPhoneNumber() {
      if (this.rawNumber.length <= 11) {
        this.formatPhoneNumber()
      }
      return this.phoneNumber
    }
  }
}
</script>

<style scoped>
.phone-input-container input[type='tel'] {
  @apply mt-5 rounded-md bg-white bg-opacity-15 py-1 pl-2 pr-14 text-white;
  @apply sm:w-[46vw];
  @apply xl:w-[47vw];
  border: none;
  outline: none;
  transition: all 0.3s ease;
}
.phone-input-container input[type='tel']:focus {
  @apply bg-opacity-20;
}

.red input {
  @apply bg-red-400 bg-opacity-15 !important;
}
</style>
