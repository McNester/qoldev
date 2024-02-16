import { createStore } from 'vuex'
import { langModule } from '@/store/langModule'
import { planetModule } from '@/store/planetModule'

export default createStore({
  modules: {
    lang: langModule,
    planet: planetModule
  }
})
