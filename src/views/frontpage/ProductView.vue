<template>
  <main>
    <section class="py-30">
      <div class="container pt-30">
        <div class="mb-15">
          <h2 class="fs-20 fw-bold border-bottom border-2 pb-15 border-dark mb-10">選擇預約時間</h2>
          <div class="card mb-3 rounded-0 border-0 mb-15 border-bottom border-2 border-dark pb-10">
            <div class="row g-0">
              <div class="col-xl-6">
                <div class="d-flex align-items-center h-100">
                  <img
                    :src="carImageUrl === '' ? productTemp.imageUrl : carImageUrl"
                    :alt="productTemp.title"
                    class="flex-shrink-1 d-block"
                    style="width: 100%; max-height: 405px"
                  />
                </div>
              </div>
              <div class="col-xl-6">
                <div
                  class="card-body d-flex flex-column justify-content-between h-100 mb-5 px-0 px-lg-8 pb-0"
                >
                  <h5 class="card-title fw-bold mb-6">{{ productTemp.title }}</h5>
                  <form @submit.prevent="checkSend">
                    <div class="mb-8">
                      <div
                        class="btn-group align-items-center"
                        role="group"
                        aria-label="Basic radio toggle button group"
                      >
                        <p class="m-0 me-5 fs-8">選擇車色 :</p>
                        <template v-for="(info, index) in productTemp.carColor" :key="index">
                          <input
                            type="radio"
                            class="btn-check"
                            name="btnradio"
                            :id="`btnradio${index}`"
                            :value="info.color"
                            v-model="product.data.rentInfo.carColor"
                          />
                          <label
                            class="btn rounded-0 me-5 rounded-1 border-gray"
                            :class="{
                              'btn-danger': info.color === 'red',
                              'btn-blue': info.color === 'blue',
                              'btn-dark': info.color === 'dark',
                              'btn-gray-600': info.color === 'gray'
                            }"
                            :for="`btnradio${index}`"
                            style="height: 25px"
                            @click="switchImage(info)"
                          ></label>
                        </template>
                      </div>
                    </div>
                    <div class="mb-3">
                      <div class="d-flex justify-content-center align-items-center">
                        <label
                          for="startDate "
                          class="form-label col-4 col-sm-3 col-md-2 mb-0 flex-shrink-0 flex-grow-1"
                          >取車日期 :
                        </label>

                        <label
                          for="endDate"
                          class="form-label col-4 col-sm-3 col-md-2 mb-0 flex-grow-1"
                          >還車日期 :
                        </label>
                      </div>
                    </div>
                    <div class="mb-5">
                      <VDatePicker v-model="range" is-range :disabled-dates="disabledDates">
                        <template #default="{ inputEvents }">
                          <div class="d-flex justify-content-center align-items-center">
                            <input
                              :value="parseStartDate"
                              v-on="inputEvents.start"
                              id="startDate"
                              class="form-control me-4"
                              readonly
                            />
                            <input
                              :value="parseEndDate"
                              v-on="inputEvents.end"
                              id="endDate"
                              class="form-control"
                              readonly
                            />
                          </div>
                        </template>
                      </VDatePicker>
                      <span class="text-danger" v-if="isDateRepeat === true"
                        ><small
                          >旅程最短租賃期為一日(24小時)，跨日租賃不足24小時將以一日計費，請貴賓重新選擇日期並留意租期，謝謝您。</small
                        ></span
                      >
                    </div>
                    <div class="mb-5 row align-items-center">
                      <label for="startTime" class="form-label col-4 col-sm-3 col-md-2 mb-0"
                        >取車時間
                      </label>
                      <div class="col-8 col-sm-9 col-md-10">
                        <select
                          name=""
                          id="startTime"
                          class="form-control fs-7"
                          v-model="product.data.rentInfo.startTime"
                        >
                          <option value="" selected disabled>請選擇取車時間</option>
                          <option value="8:00">8:00</option>
                          <option value="9:00">9:00</option>
                          <option value="10:00">10:00</option>
                          <option value="11:00">11:00</option>
                          <option value="12:00">12:00</option>
                          <option value="13:00">13:00</option>
                          <option value="14:00">14:00</option>
                          <option value="15:00">15:00</option>
                          <option value="16:00">16:00</option>
                          <option value="17:00">17:00</option>
                          <option value="18:00">18:00</option>
                          <option value="19:00">19:00</option>
                          <option value="20:00">20:00</option>
                        </select>
                      </div>
                    </div>
                    <div class="mb-5 row align-items-center">
                      <label for="endTime" class="form-label col-4 col-sm-3 col-md-2 mb-0"
                        >還車時間
                      </label>
                      <div class="col-8 col-sm-9 col-md-10">
                        <select
                          name=""
                          id="endTime"
                          class="form-control fs-7"
                          v-model="product.data.rentInfo.endTime"
                        >
                          <option value="" selected disabled>請選擇還車時間</option>
                          <option value="8:00">8:00</option>
                          <option value="9:00">9:00</option>
                          <option value="10:00">10:00</option>
                          <option value="11:00">11:00</option>
                          <option value="12:00">12:00</option>
                          <option value="13:00">13:00</option>
                          <option value="14:00">14:00</option>
                          <option value="15:00">15:00</option>
                          <option value="16:00">16:00</option>
                          <option value="17:00">17:00</option>
                          <option value="18:00">18:00</option>
                          <option value="19:00">19:00</option>
                          <option value="20:00">20:00</option>
                        </select>
                      </div>
                    </div>
                    <div class="mb-5 row align-items-center">
                      <label for="location" class="form-label col-4 col-sm-3 col-md-2 mb-0"
                        >取車地址
                      </label>
                      <div class="col-8 col-sm-9 col-md-10">
                        <input
                          type="text"
                          class="form-control"
                          id="location"
                          placeholder="請輸入您的取車地點地址"
                          v-model="product.data.rentInfo.location"
                        />
                      </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                      <p class="fs-7">
                        原價 : <del>{{ productTemp.origin_price }}</del>
                      </p>
                      <p class="fs-9 fw-bold">{{ productTemp.price }} / 天</p>
                    </div>
                    <span class="text-danger" v-if="formError === true"
                      ><small>! 預約資訊請選擇完整後方可繼續預約。 !</small></span
                    >
                    <div class="d-flex justify-content-end">
                      <router-link to="/productList" class="btn btn-dark rounded-1 me-10"
                        >重新選擇車款</router-link
                      >
                      <input type="submit" class="btn btn-dark rounded-1" value="建立預約" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 class="fw-bold">車輛簡介 :</h3>
            <p class="mb-15">
              {{ productTemp.content }}
            </p>
            <h3 class="fw-bold">規格 :</h3>
            <ul>
              <li v-for="info in productTemp.Specification" :key="info">{{ info }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import productStore from '../../stores/productStore.js'
import cartStore from '../../stores/cartStore.js'
import { mapActions, mapState } from 'pinia'

export default {
  data() {
    return {
      carImageUrl: '',
      range: {
        start: null,
        end: null
      },
      isDateRepeat: false,
      formError: false,
      product: {
        data: {
          product_id: this.$route.params.id,
          qty: 1,
          rentInfo: {
            carColor: '',
            startDate: '',
            endDate: '',
            startTime: '',
            endTime: '',
            location: ''
          }
        }
      }
    }
  },
  methods: {
    ...mapActions(productStore, ['getTargetProduct']),
    ...mapActions(cartStore, ['addProduct', 'getCart', 'cartChcek']),
    switchImage(info) {
      this.carImageUrl = info.imageUrl
    },
    checkSend() {
      this.formError = false
      const formCheck = Object.values(this.product.data.rentInfo)
      const check = formCheck.find((info) => info === '')
      if (check === '') {
        this.formError = true
        return
      } else {
        this.cartChcek(this.product, this.$router, this.$route.params.id, this.$route, this.$swal)
      }
    }
  },
  computed: {
    ...mapState(productStore, ['productTemp']),
    parseStartDate() {
      let formattedDate = ''
      if (this.range.start !== null) {
        formattedDate = `${this.range.start.getFullYear()}/${
          this.range.start.getMonth() + 1
        }/${this.range.start.getDate()}`
      }
      return formattedDate
    },
    parseEndDate() {
      let formattedDate = ''
      if (this.range.end !== null) {
        formattedDate = `${this.range.end.getFullYear()}/${
          this.range.end.getMonth() + 1
        }/${this.range.end.getDate()}`

        if (this.parseStartDate === '') {
          formattedDate = ''
        }
      }
      return formattedDate
    },
    disabledDates() {
      const now = new Date()
      const result = [{ start: null, end: now }]
      return result
    },
    persetColor() {
      const defaultColor =
        this.productTemp.carColor && this.productTemp.carColor[0]
          ? this.productTemp.carColor[0].color
          : ''
      return defaultColor
    }
  },
  watch: {
    parseStartDate() {
      this.isDateRepeat = false
      this.product.data.rentInfo.startDate = this.parseStartDate
      if (this.parseStartDate === this.parseEndDate) {
        this.isDateRepeat = true
        this.range.start = null
        this.range.end = null
        this.product.data.rentInfo.startDate = ''
      }
    },
    parseEndDate() {
      this.isDateRepeat = false
      this.product.data.rentInfo.endDate = this.parseEndDate
      if (this.parseStartDate === this.parseEndDate) {
        this.isDateRepeat = true
        this.range.start = null
        this.range.end = null
        this.product.data.rentInfo.endDate = ''
      }
    },
    persetColor() {
      this.product.data.rentInfo.carColor = this.persetColor
    },
    range() {
      const date1 = new Date(this.range.start)
      const date2 = new Date(this.range.end)

      const diffTime = Math.abs(date2.getTime() - date1.getTime())
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

      this.product.data.qty = diffDays
    }
  },
  mounted() {
    this.carImageUrl = ''
    this.getTargetProduct(this.$route.params.id)
  }
}
</script>
