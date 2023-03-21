import { defineStore } from 'pinia'
import axios from 'axios'

const { VITE_API_PATH, VITE_API_URL } = import.meta.env

export default defineStore('homePageStore', {
  state: () => ({
    productList: [],
    allProductList: [],
    productTemp: {},
    productPagination: {},
    currentRoute: '',
    category: 'all',
    test: 0
  }),
  actions: {
    getProduct(router, id) {
      axios
        .get(`${VITE_API_URL}api/${VITE_API_PATH}/products?page=${id}`)
        .then((res) => {
          this.productList = this.formattedPrice(res.data.products)

          this.productPagination = res.data.pagination
          this.currentRoute = router
        })
        .catch((err) => {
          alert(`${err}，頁面載入錯誤，請連繫客服人員，謝謝。`)
        })
    },
    getAllProduct() {
      axios
        .get(`${VITE_API_URL}api/${VITE_API_PATH}/products/all`)
        .then((res) => {
          this.allProductList = this.formattedPrice(res.data.products)
        })
        .catch((err) => {
          alert(`${err}，頁面載入錯誤，請連繫客服人員，謝謝。`)
        })
    },
    switchCategory(category) {
      this.category = category
    },
    getTargetProduct(id) {
      this.productTemp = {}
      axios
        .get(`${VITE_API_URL}api/${VITE_API_PATH}/product/${id}`)
        .then((res) => {
          this.productTemp = res.data.product
          this.productTemp.price = this.productTemp.price.toLocaleString('en-US', {
            style: 'decimal',
            maximumFractionDigits: 2
          })
          this.productTemp.origin_price = this.productTemp.origin_price.toLocaleString('en-US', {
            style: 'decimal',
            maximumFractionDigits: 2
          })
        })
        .catch((err) => {
          alert(`${err.message}，頁面載入錯誤，請連繫客服人員，謝謝。`)
        })
    },
    formattedPrice(products) {
      let result = products
      products.forEach((product, index) => {
        const formattedNumber_price = product.price.toLocaleString('en-US', {
          style: 'decimal',
          maximumFractionDigits: 2
        })
        const formattedNumberOrigin_price = product.origin_price.toLocaleString('en-US', {
          style: 'decimal',
          maximumFractionDigits: 2
        })
        result[index].price = formattedNumber_price
        result[index].origin_price = formattedNumberOrigin_price
      })
      return result
    }
  },
  getters: {
    showProductList: ({ productList, currentRoute, category, allProductList }) => {
      if (currentRoute === 'home') {
        const filteredCars = productList.filter(
          (car) =>
            car.category === 'Model3' || car.category === 'ModelY' || car.category === 'ModelX'
        )
        const cheapestCars = filteredCars.reduce((result, car) => {
          if (!result[car.category] || car.price < result[car.category].price) {
            result[car.category] = car
          }
          return result
        }, {})
        const arr = Object.values(cheapestCars)
        const result = arr.sort(function (a, b) {
          if (a.price > b.price) {
            return 1
          } else {
            return -1
          }
        })

        return result
      } else if (currentRoute === 'productlist') {
        if (category === 'all') {
          return productList
        } else {
          const result = allProductList.filter((product) => product.category === category)
          return result
        }
      }
    }
  }
})
