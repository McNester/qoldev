export const langModule = {
  state: () => ({
    currentLang: localStorage.getItem('lang') || 'ru'
  }),
  getters: {
    getStyleByLang(state) {
      if (state.currentLang == 'ru' || state.currentLang == 'kz') {
        return { ruTextfont: true }
      }
      return { ruTextfont: false }
    },
    getLangId(state) {
      if (state.currentLang == 'ru') {
        return 0
      } else if (state.currentLang == 'kz') {
        return 1
      }
      return 2
    }
  },
  mutations: {
    changeLangRu(state) {
      state.currentLang = 'ru'
    },
    changeLangKz(state) {
      state.currentLang = 'kz'
    },
    changeLangEn(state) {
      state.currentLang = 'en'
    }
  },
  namespaced: true
}
