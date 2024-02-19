<template>
  <div id="container" v-if="isVisible">
    <button type="button" @click="close" id="closeBtn">
      <img :src="closeSideBarIcon" alt="close icon" />
    </button>
    <div id="contactInf">
      <h1 id="title">
        {{ $t('contactPopup.readyToDiscuss') }}
      </h1>
      <div id="inner">
        <h3>
          {{ $t('contactPopup.phoneNumber') }}
        </h3>
        <h2 class="mb-5">+7 771 677 41 85</h2>
        <h3>
          {{ $t('contactPopup.messengers') }}
        </h3>
        <div id="messangerContainer">
          <button
            @touchstart="toggleActive1"
            @touchend="toggleActive1"
            :class="{ active1: isActive1 }"
            class="btn"
          >
            WhatsApp
          </button>
          <button
            @touchstart="toggleActive2"
            @touchend="toggleActive2"
            :class="{ active2: isActive2 }"
            class="btn"
          >
            Telegram
          </button>
        </div>
      </div>
    </div>

    <form @submit.prevent>
      <h4>
        {{ $t('contactPopup.leaveYourData') }}
      </h4>
      <base-input
        id="nameInput"
        v-model="name"
        :placeholder="$t('contactPopup.placeHolders.name')"
      ></base-input>
      <phone-input v-model:rawNumber="phone"></phone-input>
      <base-textarea
        class="messageInput"
        v-model="message"
        :placeholder="$t('contactPopup.placeHolders.message')"
      ></base-textarea>
      <button
        @touchstart="toggleActive3"
        @touchend="toggleActive3"
        :class="{ active1: isActive3 }"
        class="btn"
        id="submit"
      >
        {{ $t('buttons.submitApplication') }}
      </button>
    </form>
  </div>
</template>

<script setup>
import closeSideBarIcon from '../../../../public/closeSideBarBtn.svg'
</script>

<script>
export default {
  name: 'contact-popup',
  props: {
    isVisible: { type: Boolean }
  },
  methods: {
    close() {
      this.$emit('closePopup')
    },
    toggleActive1() {
      this.isActive1 = !this.isActive1
    },
    toggleActive2() {
      this.isActive2 = !this.isActive2
    },
    toggleActive3() {
      this.isActive3 = !this.isActive3
    }
  },
  data() {
    return {
      isActive1: false,
      isActive2: false,
      isActive3: false,

      isNameReady: false,
      isPhoneReady: false,
      isEmailReady: false,
      isMessageReady: false,

      name: '',
      phone: '',
      email: '',
      message: ''
    }
  }
}
</script>
<style scoped>
#container {
  @apply fixed flex h-[60vh] w-[95vw] flex-col items-center justify-between overflow-scroll rounded-xl bg-black bg-opacity-25 text-white shadow-2xl backdrop-blur-lg;
  border: 1px rgb(255, 255, 255, 0.16) solid;
  z-index: 1999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%);
}
@media (min-width: 768px) {
  #container {
    @apply h-[31rem] flex-row gap-16 overflow-hidden;
  }
  #closeBtn {
    @apply mb-[27rem] ml-[86vw];
  }
  h4 {
    @apply w-[85%] text-left !important;
  }
  form {
    @apply items-start !important;
  }
  #contactInf {
    @apply ml-3 mt-0 h-[55vh] justify-evenly gap-0 !important;
  }
  #title {
    @apply w-[35vw] !important;
  }
  #inner {
    @apply -mt-10 scale-110;
  }
}
@media (min-width: 1440px) {
  #container {
    @apply w-[76rem] justify-between gap-[5rem];
  }
  #contactInf {
    @apply -mt-10 ml-[3rem] h-full scale-125 !important;
  }
  form {
    @apply w-[45rem] scale-105;
  }

  #title {
    @apply w-[20vw] !important;
  }

  #closeBtn {
    @apply mb-[27rem] ml-[72rem];
  }
  #submit {
    @apply w-[20rem] self-center !important;
  }
}
#container::-webkit-scrollbar {
  display: none;
}
#contactInf {
  @apply mt-12 flex flex-col items-center justify-center gap-5;
}
#closeBtn {
  @apply absolute self-end p-5;
}
#title {
  @apply w-[90%] text-center text-2xl font-semibold;
}
#inner {
  @apply flex flex-col items-center justify-center;
}
h3 {
  @apply text-base font-light;
}
h4 {
  @apply w-[90%] text-center text-sm font-light;
}
h2 {
  @apply text-lg font-medium;
}
#messangerContainer {
  @apply mt-3 flex flex-col items-center justify-around gap-5;
}
.btn {
  @apply w-[10rem] rounded-xl py-1 text-center;
  border: 1px white solid;
  transition: all 0.3s ease;
}
#submit {
  @apply mb-5 mt-5 w-[13rem];
  transition: all 0.3s ease;
}

form {
  @apply mt-5 flex flex-col items-center justify-center;
}

@media (hover: none) {
  .active1 {
    @apply bg-white;
    color: black;
    transition: all ease 0.3s;
  }
  .active2 {
    @apply bg-white;
    color: black;
    transition: all ease 0.3s;
  }
}
@media (hover: hover) {
  .btn:hover {
    @apply scale-105 bg-white;
    color: black;
  }
  .btn:active {
    @apply scale-100;
  }
}
</style>
