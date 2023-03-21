import { defineStore } from 'pinia'
import articleStore from './articleStore.js'
import productStore from './productStore.js'

export default defineStore('paginationStore', {
  state: () => ({
    currentRoute: ''
  }),
  actions: {
    getRoute(route) {
      this.currentRoute = route
    },
    getTargetData(route, id) {
      const { getArticles } = articleStore()
      const { getProduct } = productStore()

      route === 'articlelist' ? getArticles(route, id) : getProduct(route, id)
    }
  },
  getters: {
    paginationInfo: ({ currentRoute }) => {
      const { articlePagination } = articleStore()
      const { productPagination } = productStore()

      if (currentRoute === 'articlelist') {
        return articlePagination
      } else if (currentRoute === 'productlist') {
        return productPagination
      }
    }
  }
})
