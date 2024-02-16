export const planetModule = {
  state: () => ({
    links: [
      { id: 1, description: 'cobra', link: 'https://www.youtube.com', name: 'cobra.ua' },
      { id: 2, description: 'qtap', link: 'https://www.youtube.com', name: 'qtap.kz' },
      { id: 3, description: 'steppeTech', link: 'https://www.youtube.com', name: 'SteppeTech.kz' },
      {
        id: 4,
        description: 'americanTaste',
        link: 'https://www.youtube.com',
        name: 'AmericanTaste.com'
      },
      {
        id: 5,
        description: 'bolshoiTravel',
        link: 'https://www.youtube.com',
        name: 'BolshoiTravel.ru'
      },
      { id: 6, description: 'almatyArt', link: 'https://www.youtube.com', name: 'AlmatyArt.kz' },
      {
        id: 7,
        description: 'innovateWest',
        link: 'https://www.youtube.com',
        name: 'InnovateWest.com'
      },
      { id: 8, description: 'astanaFin', link: 'https://www.youtube.com', name: 'AstanaFin.kz' }
    ]
  }),
  getters: {
    getLinks(state) {
      return state.links
    }
  },
  mutations: {},
  namespaced: true
}
