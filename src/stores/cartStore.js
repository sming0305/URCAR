import { defineStore } from 'pinia'
import axios from 'axios'
import { Modal } from 'bootstrap'

const { VITE_API_PATH, VITE_API_URL } = import.meta.env

export default defineStore('cartStore', {
  state: () => ({
    modalProduct: {},
    carts: [],
    discountPrice: 0,
    final_total: 0,
    couponCodeError: false,
    modal: {},
    navBar: {},
    routeName: ''
  }),
  actions: {
    addProduct(rentInfo, router) {
      axios
        .post(`${VITE_API_URL}api/${VITE_API_PATH}/cart`, rentInfo)
        .then(() => {
          router.push('/reserveList')
        })
        .catch((err) => {
          alert(`${err.message}，出現意外錯誤，請連繫客服人員，謝謝。`)
        })
    },
    cartChcek(rentInfo, router, id, route, swal) {
      axios
        .get(`${VITE_API_URL}api/${VITE_API_PATH}/cart`)
        .then((res) => {
          // 檢查該車款是否已再預約清單中被預約了
          const check = res.data.data.carts.find((item) => item.product_id === id)

          // 在預約車款頁面時，若同預約清單中出現重複預定同款車款將擋下
          if (route?.name === 'singleProduct') {
            if (check) {
              swal({
                title: 'URCAR',
                text: `目前同車款(不分車色)，同訂單限同時租賃一輛，請查看注意事項，謝謝您。`,
                showClass: {
                  popup: 'animate__animated animate__fadeIn'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOut'
                }
              })
              return
            } else {
              this.addProduct(rentInfo, router)
            }
          }

          // 將金額加上千分位
          this.carts = this.formattedPrice(res.data.data.carts)
          this.discountPrice = res.data.data.total - res.data.data.final_total
          this.discountPrice = this.discountPrice.toLocaleString('en-US', {
            style: 'decimal',
            maximumFractionDigits: 2
          })
          this.final_total = res.data.data.final_total.toLocaleString('en-US', {
            style: 'decimal',
            maximumFractionDigits: 2
          })

          this.carts.forEach((product, index) => {
            // 抓出該車選擇的車色圖片
            const imageUrl = product.product.carColor.filter(
              (colorInfo) => colorInfo?.color === product?.rentInfo?.carColor
            )

            this.carts[index].colorImageUrl = imageUrl[0].imageUrl

            // 若訂單取車日期小於等於今日，自動將該預約刪除
            const currentDate = new Date()
            const startDate = new Date(product.rentInfo.startDate)
            if (startDate <= currentDate) {
              this.deleteTargetProduct(product.id)
            }
          })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    openTargetProduct(product) {
      this.modalProduct = product
      this.modal.show()
    },
    editProduct(rentInfo, qty, cartId, product_id) {
      const payload = {
        data: {
          product_id,
          qty,
          rentInfo
        }
      }
      axios
        .put(`${VITE_API_URL}api/${VITE_API_PATH}/cart/${cartId}`, payload)
        .then(() => {
          this.cartChcek()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteCart() {
      axios
        .delete(`${VITE_API_URL}api/${VITE_API_PATH}/carts`)
        .then((res) => {
          console.log(res)
          this.cartChcek()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteTargetProduct(id) {
      axios
        .delete(`${VITE_API_URL}api/${VITE_API_PATH}/cart/${id}`)
        .then(() => {
          this.cartChcek()
        })
        .catch(() => {
          this.couponCodeError = true
        })
    },
    addCoupon(e) {
      let code = e.target.value

      this.couponCodeError = false

      if (code === '') {
        return
      } else {
        axios
          .post(`${VITE_API_URL}api/${VITE_API_PATH}/coupon`, {
            data: {
              code
            }
          })
          .then(() => {
            this.cartChcek()
            e.target.value = ''
          })
          .catch(() => {
            this.couponCodeError = true
            e.target.value = ''
          })
      }
    },
    checkCoupon() {
      // 確保優惠卷有整筆訂單打折
      axios
        .get(`${VITE_API_URL}api/${VITE_API_PATH}/cart`)
        .then((res) => {
          const check = res.data.data.carts.find((item) => item?.coupon?.code)
          if (check) {
            axios
              .post(`${VITE_API_URL}api/${VITE_API_PATH}/coupon`, {
                data: {
                  code: check.coupon.code
                }
              })
              .then(() => {
                this.cartChcek()
              })
              .catch(() => {})
          }
        })
        .catch(() => {})
    },
    formattedPrice(products) {
      let result = products
      products.forEach((product, index) => {
        const formattedNumber_price = product.product.price.toLocaleString('en-US', {
          style: 'decimal',
          maximumFractionDigits: 2
        })
        const formattedNumberOrigin_price = product.product.origin_price.toLocaleString('en-US', {
          style: 'decimal',
          maximumFractionDigits: 2
        })
        const formattedNumberTotal = product.total.toLocaleString('en-US', {
          style: 'decimal',
          maximumFractionDigits: 2
        })
        const formattedNumberFinal_total = product.final_total.toLocaleString('en-US', {
          style: 'decimal',
          maximumFractionDigits: 2
        })

        result[index].product.price = formattedNumber_price
        result[index].product.origin_price = formattedNumberOrigin_price
        result[index].total = formattedNumberTotal
        result[index].final_total = formattedNumberFinal_total
      })

      return result
    },
    targetModal(target) {
      const modal = new Modal(target)
      this.modal = modal
    },
    targetNavbar(target) {
      this.navBar = target
    },
    closeNavbar(e) {
      const target = e.target.textContent

      if (target === 'URCAR') {
        const childElement = e.target.parentElement.parentElement.querySelector('.navbar-toggler ')
        const detectionIsOn = childElement.getAttribute('aria-expanded')

        if (window.innerWidth < 992 && detectionIsOn === 'true') {
          this.navBar.click()
        }
      } else {
        if (window.innerWidth < 992) {
          this.navBar.click()
        }
      }
    },
    currentRoute(route) {
      this.routeName = route
    }
  },
  getters: {
    cartQty() {
      if (this.carts.length === 0) {
        return 0
      } else {
        return this.carts.length
      }
    },
    step() {
      if (this.routeName === 'singleProduct') {
        return 0
      } else if (this.routeName === 'reserve') {
        return 1
      } else if (this.routeName === 'createorder') {
        return 2
      } else if (this.routeName === 'pay') {
        return 3
      }
    }
  }
})
