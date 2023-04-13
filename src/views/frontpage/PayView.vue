<template>
  <main>
    <section class="pt-30 pb-15">
      <div class="container pt-30">
        <div class="mb-15">
          <div class="border-bottom border-2 border-dark mb-10">
            <h2 class="fs-20 fw-bold">付款</h2>
          </div>
          <div class="row">
            <div class="col-lg-6 col-12 mb-15">
              <ul class="p-6 bg-gray">
                <li class="mb-10">
                  <span class="fw-bold">訂單編號 :&ensp;{{ order?.id }}</span>
                </li>
                <li class="mb-10">
                  <span class="fw-bold">姓名 :&ensp;{{ order?.user?.name }}</span>
                </li>
                <li class="mb-10">
                  <span class="fw-bold">電話 :&ensp;{{ order?.user?.tel }}</span>
                </li>
                <li class="mb-10">
                  <span class="fw-bold">預約人地址 :&ensp;{{ order?.user?.address }}</span>
                </li>
                <li class="pb-12 border-bottom border-dark">
                  <span class="fw-bold">總計金額 :&ensp;{{ order?.total }}</span>
                </li>
              </ul>
              <ul class="p-6 bg-gray">
                <li class="fw-bold mb-15 pb-5" v-for="product in order?.products" :key="product">
                  {{ product?.product?.title }}
                  <ul class="row mt-6">
                    <li class="col-sm-6 col-12 mb-2">
                      取車日期 : &ensp;{{ product?.rentInfo?.startDate }}
                    </li>
                    <li class="col-sm-6 col-12 mb-2">
                      還車日期 : &ensp;{{ product?.rentInfo?.endDate }}
                    </li>
                    <li class="col-sm-6 col-12 mb-2">
                      取車時間 : &ensp;{{ product?.rentInfo?.startTime }}
                    </li>
                    <li class="col-sm-6 col-12 mb-2">
                      還車時間 : &ensp;{{ product?.rentInfo?.endTime }}
                    </li>
                    <li class="col-sm-6 col-12 mb-2">
                      取車地點 : &ensp;{{ product?.rentInfo?.location }}
                    </li>
                    <li class="col-sm-6 col-12 mb-2">租用天數 : &ensp;{{ product?.qty }}</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="col-lg-6 col-12">
              <div class="d-flex justify-content-center align-items-center h-100">
                <div>
                  <h3 class="fw-bold fs-20 text-center mb-20">請輸入信用卡卡號</h3>
                  <form action="">
                    <div class="row mb-15">
                      <div class="col-3 col-sm-2 offset-sm-2">
                        <input
                          type="text"
                          class="form-control rounded-0 me-2 me-sm-5 text-center p-0"
                          oninput="value=value.replace(/^(0+)|[^\d]+/g,'')"
                          @keyup="focusNext(1, this.$el)"
                          maxlength="4"
                          v-model="payInfo.cardNumber[0]"
                        />
                      </div>
                      <div class="col-3 col-sm-2">
                        <input
                          type="text"
                          class="form-control rounded-0 me-2 me-sm-5 text-center p-0"
                          oninput="value=value.replace(/[^\d]+/g,'')"
                          @keyup="focusNext(2, this.$el)"
                          maxlength="4"
                          v-model="payInfo.cardNumber[1]"
                        />
                      </div>
                      <div class="col-3 col-sm-2">
                        <input
                          type="text"
                          class="form-control rounded-0 me-2 me-sm-5 text-center p-0"
                          oninput="value=value.replace(/[^\d]+/g,'')"
                          @keyup="focusNext(3, this.$el)"
                          maxlength="4"
                          v-model="payInfo.cardNumber[2]"
                        />
                      </div>
                      <div class="col-3 col-sm-2">
                        <input
                          type="text"
                          class="form-control rounded-0 text-center p-0"
                          oninput="value=value.replace(/[^\d]+/g,'')"
                          maxlength="4"
                          v-model="payInfo.cardNumber[3]"
                        />
                      </div>
                    </div>
                    <div class="row mb-15">
                      <div class="col-4 offset-4 col-sm-2 offset-sm-5 mb-5">
                        <div>
                          <div class="d-flex justify-content-center">
                            <label for="safety" class="fw-bold fs-10 mb-4">安全碼</label>
                          </div>
                          <input
                            id="safety"
                            type="text"
                            class="form-control rounded-0 text-center p-0"
                            oninput="value=value.replace(/[^\d]+/g,'')"
                            maxlength="3"
                            v-model="payInfo.securityCode"
                          />
                        </div>
                      </div>
                    </div>
                    <p v-if="payError === true" class="text-danger text-center">
                      請輸入完整卡號後再進行付款
                    </p>
                    <div class="d-flex justify-content-center">
                      <button
                        type="button"
                        class="btn btn-dark px-20 rounded-0"
                        @click="pay(payInfo, this.$router)"
                      >
                        付款
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import payStore from '@/stores/payStore.js'
import { mapActions, mapState } from 'pinia'

export default {
  data() {
    return {
      payInfo: {
        cardNumber: ['', '', '', ''],
        securityCode: ''
      }
    }
  },
  methods: {
    ...mapActions(payStore, ['getOrder', 'focusNext', 'pay'])
  },
  computed: {
    ...mapState(payStore, ['order', 'payError'])
  },
  mounted() {
    this.getOrder(this.$router, this.$route)
  }
}
</script>
