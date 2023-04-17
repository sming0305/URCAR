<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content container">
        <div>
          <h2 class="fs-15 fw-bold border-bottom border-2 p-10 border-dark">調整預約內容</h2>
          <div class="card mb-3 rounded-0 border-0 mb-25 pb-5">
            <div class="row g-0">
              <div class="col-xl-6">
                <div class="d-flex align-items-center h-100">
                  <img
                    :src="productTemp.colorImageUrl"
                    :alt="productTemp.product.title"
                    class="flex-shrink-1 d-block"
                    style="width: 100%; max-height: 405px"
                  />
                </div>
              </div>
              <div class="col-xl-6">
                <div
                  class="card-body d-flex flex-column justify-content-between h-100 mb-5 px-0 px-lg-8 pb-0"
                >
                  <h5 class="card-title fw-bold mb-6"></h5>
                  <form>
                    <div class="mb-8">
                      <div
                        class="btn-group align-items-center"
                        role="group"
                        aria-label="Basic radio toggle button group"
                      >
                        <p class="m-0 me-5 fs-8">選擇車色 :</p>
                        <template
                          v-for="(info, index) in productTemp.product.carColor"
                          :key="index"
                        >
                          <input
                            type="radio"
                            class="btn-check"
                            name="btnradio"
                            :id="`btnradio${index}`"
                            :checked="info.imageUrl === productTemp.colorImageUrl"
                            :value="info.color"
                            v-model="productTemp.rentInfo.carColor"
                          />
                          <label
                            class="btn rounded-0 me-5 rounded-1 border-gray"
                            :for="`btnradio${index}`"
                            style="height: 25px"
                            :class="{
                              'btn-danger': info.color === 'red',
                              'btn-blue': info.color === 'blue',
                              'btn-dark': info.color === 'dark',
                              'btn-gray-600': info.color === 'gray'
                            }"
                            @click="switchImage(info)"
                          ></label>
                        </template>
                      </div>
                    </div>
                    <div class="mb-3">
                      <div class="d-flex justify-content-center align-items-center">
                        <label
                          for="editStartDate "
                          class="form-label col-4 col-sm-3 col-md-2 mb-0 flex-shrink-0 flex-grow-1"
                          >取車日期 :
                        </label>

                        <label
                          for="editEndDate"
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
                              :value="productTemp.rentInfo.startDate"
                              v-on="inputEvents.start"
                              id="editStartDate"
                              class="form-control me-4"
                              readonly
                            />
                            <input
                              :value="productTemp.rentInfo.endDate"
                              v-on="inputEvents.end"
                              id="editEndDate"
                              class="form-control"
                              readonly
                            />
                          </div>
                        </template>
                      </VDatePicker>
                      <span class="text-danger" v-if="isDateRepeat === true"
                        ><small
                          >旅程最短租賃期為一日(24小時)，跨日租賃不足24小時將以一日計費，請貴賓留意。</small
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
                          v-model="productTemp.rentInfo.startTime"
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
                          v-model="productTemp.rentInfo.endTime"
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
                          v-model="productTemp.rentInfo.location"
                        />
                        <span class="text-danger" v-if="locationError === true"
                          ><small>請輸入正確的台灣(中文)地址格式。</small></span
                        >
                      </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                      <p class="fs-7">原價 : {{ productTemp.product.origin_price }}<del></del></p>
                      <p class="fs-9 fw-bold">{{ productTemp.product.price }}/ 天</p>
                    </div>
                    <span class="text-danger" v-if="formError === true"
                      ><small>! 預約資訊請填妥完整才可修改 ! </small></span
                    >
                    <div class="d-flex justify-content-end">
                      <button
                        type="button"
                        class="btn btn-dark rounded-1 me-10"
                        data-bs-dismiss="modal"
                      >
                        取消修改
                      </button>
                      <input
                        type="submit"
                        class="btn btn-dark rounded-1"
                        value="確認修改"
                        data-bs-dismiss="modal"
                        @click.prevent="checkSend()"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import cartStore from '../stores/cartStore.js'

export default {
  data() {
    return {
      productTemp: {
        product: {
          origin_price: 0,
          price: 0
        },
        rentInfo: {
          carColor: '',
          endDate: 'end',
          endTime: '',
          location: '',
          startDate: 'start',
          startTime: ''
        }
      },
      range: {
        start: null,
        end: null
      },
      isDateRepeat: false,
      formError: false,
      locationError: false
    }
  },
  methods: {
    ...mapActions(cartStore, ['editProduct']),
    switchImage(info) {
      this.productTemp.colorImageUrl = info.imageUrl
      this.productTemp.rentInfo.carColor = info.color
    },
    checkSend() {
      this.formError = false
      this.locationError = false
      const formCheck = Object.values(this.productTemp.rentInfo)
      const check = formCheck.find((info) => info === '')

      const addressRegex = /^[\u4E00-\u9FA5]+(?:市|縣)[\u4E00-\u9FA5]+區/
      const locationCheck = addressRegex.test(this.productTemp.rentInfo.location)

      if (check === '') {
        this.formError = true
        return
      } else if (!locationCheck) {
        this.locationError = true
      } else {
        this.editProduct(
          this.productTemp.rentInfo,
          this.productTemp.qty,
          this.productTemp.id,
          this.productTemp.product_id
        )
      }
    }
  },
  computed: {
    ...mapState(cartStore, ['modalProduct']),
    disabledDates() {
      const now = new Date()
      const result = [{ start: null, end: now }]
      return result
    },
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
      }

      return formattedDate
    }
  },
  watch: {
    modalProduct() {
      this.productTemp = JSON.parse(JSON.stringify(this.modalProduct))
    },
    parseStartDate() {
      this.isDateRepeat = false
      this.productTemp.rentInfo.startDate = this.parseStartDate
      if (this.parseStartDate === this.parseEndDate) {
        this.isDateRepeat = true
        this.range.start = null
        this.range.end = null
        this.productTemp.rentInfo.startDate = ''
        this.productTemp = JSON.parse(JSON.stringify(this.modalProduct))
      }
    },
    parseEndDate() {
      this.isDateRepeat = false
      this.productTemp.rentInfo.endDate = this.parseEndDate
      if (this.parseStartDate === this.parseEndDate) {
        this.isDateRepeat = true
        this.range.start = null
        this.range.end = null
        this.productTemp.rentInfo.endDate = ''
        this.productTemp.rentInfo.startDate = ''
        this.productTemp = JSON.parse(JSON.stringify(this.modalProduct))
      }
    },
    range() {
      const date1 = new Date(this.range.start)
      const date2 = new Date(this.range.end)

      const diffTime = Math.abs(date2.getTime() - date1.getTime())
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

      this.productTemp.qty = diffDays
    }
  }
}
</script>
