import { defineStore } from 'pinia'
import axios from 'axios'

const { VITE_API_PATH, VITE_API_URL } = import.meta.env

export default defineStore('payStore', {
  state: () => ({
    form: {},
    order: {},
    orderId: '',
    router: {},
    payError: false
  }),
  actions: {
    sendOrder(orderInfo, router, form) {
      axios
        .post(`${VITE_API_URL}api/${VITE_API_PATH}/order`, orderInfo)
        .then((res) => {
          this.orderId = res.data.orderId
          this.getOrder(router)
          form.resetForm()
          router.push('/pay')
        })
        .catch(() => {
          alert('目前沒有預約的車款資訊，請您於"方案選擇"預約並確定資訊後再行填寫，謝謝。')
        })
    },
    getOrder(router, route) {
      if (this.orderId === '' && route?.name === 'pay') {
        alert('此為結帳頁面，請由預訂車輛步驟或查詢訂單後再進入此頁進行結帳，謝謝。')
        setTimeout(function () {
          router.push('/productList')
        }, 1000)
      } else if (this.orderId !== '') {
        axios
          .get(`${VITE_API_URL}api/${VITE_API_PATH}/order/${this.orderId}`)
          .then((res) => {
            this.order = res.data.order
            this.order.total = this.order.total.toLocaleString('en-US', {
              style: 'decimal',
              maximumFractionDigits: 2
            })
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    focusNext(index, el) {
      const input = el.querySelectorAll('input')
      if (input && input[index - 1].value.length === 4) {
        input[index].focus()
      }
    },
    cardNumberCheck(payInfo) {
      this.payError = false
      const cardNumber = payInfo.cardNumber.find((number) => number.length < 4)

      if (cardNumber?.length < 4) {
        this.payError = true
        return false
      } else if (payInfo.securityCode < 3) {
        this.payError = true
        return false
      } else {
        return true
      }
    },
    pay(payInfo, router) {
      if (this.cardNumberCheck(payInfo)) {
        axios
          .post(`${VITE_API_URL}api/${VITE_API_PATH}/pay/${this.order.id}`, this.order.id)
          .then(() => {
            router.push('/paySuccess')
          })
          .then(() => {})
      }
    }
  },
  getters: {}
})
