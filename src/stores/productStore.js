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
    showBackToTop: 0
  }),
  actions: {
    getProduct(router, id) {
      axios
        .get(`${VITE_API_URL}api/${VITE_API_PATH}/products?page=${id}`)
        .then((res) => {
          // 儲存所有商品資料並將金額加上千分位
          this.productList = this.formattedPrice(res.data.products)
          // 儲存分頁資訊
          this.productPagination = res.data.pagination
          // 儲存取得商品資料時路由
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
          // 取得不帶分頁器的所有商品資料，並將金額加上千分位
          this.allProductList = this.formattedPrice(res.data.products)
        })
        .catch((err) => {
          alert(`${err}，頁面載入錯誤，請連繫客服人員，謝謝。`)
        })
    },
    switchCategory(category) {
      // 使用者切換商品類別時，將商品類別儲存至 state
      this.category = category
    },
    getTargetProduct(id) {
      this.productTemp = {}
      axios
        .get(`${VITE_API_URL}api/${VITE_API_PATH}/product/${id}`)
        .then((res) => {
          // 取得單一商品資料
          this.productTemp = res.data.product

          // 將商品的原始售價及打折金額加上千分位，並回傳此結果
          this.productTemp.price = this.productTemp.price.toLocaleString('en-US')
          this.productTemp.origin_price = this.productTemp.origin_price.toLocaleString('en-US')
        })
        .catch((err) => {
          alert(`${err.message}，頁面載入錯誤，請連繫客服人員，謝謝。`)
        })
    },
    formattedPrice(products) {
      let result = products

      // 使用 toLocaleString() 時，設定 style: 'decimal'，方法將按照本地語言和區域的慣例將數字轉換為本地化的十進制表示法。
      // 如果不指定 style 選項，則使用預設的十進制表示法，在美國英語中，這個表示法會在數字的整數部分添加千分位分隔符。
      // const formattedNumberOrigin_price = product.origin_price.toLocaleString('en-US', {
      //   style: 'decimal',
      //   maximumFractionDigits: 2
      // })

      // 將每一筆商品的原始售價及打折金額加上千分位，並回傳此結果
      products.forEach((product, index) => {
        const formattedNumber_price = product.price.toLocaleString('en-US')
        const formattedNumberOrigin_price = product.origin_price.toLocaleString('en-US')
        result[index].price = formattedNumber_price
        result[index].origin_price = formattedNumberOrigin_price
      })
      return result
    },
    handleScroll() {
      // 判斷距離頂部的距離是否大於畫面高度
      // window.pageYOffset 獲取當前頁面垂直滾動距離的屬性，一些瀏覽器不支持這個屬性，因此使用 document.documentElement.scrollTop 作為保險替代。
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      // 畫面高度
      const windowHeight = window.innerHeight
      // 當畫面滾動時，判斷距離頂部的距離是否大於畫面高度的*0.5，若是則顯示回到頂部按鈕，反之則隱藏
      if (scrollTop > windowHeight * 0.5) {
        this.showBackToTop = true
      } else {
        this.showBackToTop = false
      }
    },
    goTop() {
      // 畫面滾動至頂部
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
  getters: {
    // 使用一個函式來判斷當前路由，並回傳不同的商品資料
    showProductList: ({ productList, currentRoute, category, allProductList }) => {
      // 判斷當前路由，如果是首頁
      if (currentRoute === 'home') {
        // 過濾出 Model3、ModelY、ModelX 三種車款
        const filteredCars = productList.filter(
          (car) =>
            car.category === 'Model3' || car.category === 'ModelY' || car.category === 'ModelX'
        )
        // 透過 reduce() 方法，將過濾出來的車款資料，依照車款類別分類，並取得各類別中最低價的車款
        const cheapestCars = filteredCars.reduce((result, car) => {
          if (!result[car.category] || car.price < result[car.category].price) {
            result[car.category] = car
          }
          return result
        }, {})
        // 將物件轉為陣列，並依照價格排序，並回傳此結果
        const arr = Object.values(cheapestCars)
        const result = arr.sort(function (a, b) {
          if (a.price > b.price) {
            return 1
          } else {
            return -1
          }
        })

        return result

        // 判斷當前路由，如果是商品列表頁
      } else if (currentRoute === 'productlist') {
        // 判斷商品類別，如果是全部商品，則回傳所有商品資料，反之則回傳該類別的商品資料
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
