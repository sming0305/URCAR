<template>
  <main>
    <section class="pt-30 pb-15">
      <div class="container pt-30">
        <div class="mb-15">
          <div
            class="d-flex justify-content-between align-items-center border-bottom border-2 border-dark mb-10"
          >
            <h2 class="fs-20 fw-bold">預約清單</h2>
            <button
              type="button"
              class="btn btn-danger mb-5 btn-sm"
              @click="deleteCart"
              v-if="carts?.length !== 0"
            >
              刪除全部預約
            </button>
          </div>
          <div class="card mb-3 rounded-0 border-0 mb-15 border-bottom border-2 border-dark pb-10">
            <h2 class="fs-16 fw-bold text-center mb-12" v-if="carts?.length === 0">
              目前沒有預約的訂單，快選擇心儀的車款出發吧。
            </h2>
            <div class="d-flex justify-content-center">
              <RouterLink
                to="/productList"
                class="btn btn-dark fit-content rounded-1 fs-9 px-10"
                v-if="carts?.length === 0"
                >前往車輛方案一覽</RouterLink
              >
            </div>
            <div
              class="row g-0 mb-5 border-bottom pb-5 border-dark"
              v-for="product in carts"
              :key="product.product.title"
            >
              <div class="col-xl-6 d-flex align-items-center">
                <img
                  :src="product.colorImageUrl"
                  :alt="product.product.title"
                  class="flex-shrink-1 d-block"
                  style="width: 100%; max-height: 280px"
                />
              </div>
              <div class="col-xl-6">
                <div
                  class="card-body d-flex flex-column justify-content-between h-100 mb-5 px-0 px-lg-8 pb-0"
                >
                  <ul>
                    <li>
                      <h5 class="card-title fw-bold mb-6">{{ product.product.title }}</h5>
                      <ul class="row">
                        <li class="d-flex align-items-center mb-10">
                          <span class="me-5">車色 :</span>
                          <div
                            style="width: 20px; height: 20px"
                            class="rounded-1"
                            :class="{
                              'bg-danger': product?.rentInfo?.carColor === 'red',
                              'bg-blue': product?.rentInfo?.carColor === 'blue',
                              'bg-dark': product?.rentInfo?.carColor === 'dark',
                              'bg-gray-600': product?.rentInfo?.carColor === 'gray',
                              border: product?.rentInfo?.carColor === 'white',
                              'border-gray': product?.rentInfo?.carColor === 'white',
                              'border-1': product?.rentInfo?.carColor === 'white'
                            }"
                          ></div>
                        </li>
                        <li class="col-12 col-sm-6 mb-7">
                          取車日期 : {{ product?.rentInfo?.startDate }}
                        </li>
                        <li class="col-12 col-sm-6 mb-7">
                          還車日期 : {{ product?.rentInfo?.endDate }}
                        </li>
                        <li class="col-12 col-sm-6 mb-7">
                          取車時間 : {{ product?.rentInfo?.startTime }}
                        </li>
                        <li class="col-12 col-sm-6 mb-7">
                          還車時間 : {{ product?.rentInfo?.endTime }}
                        </li>
                        <li class="col-12 mb-7">取車地點 : {{ product.rentInfo?.location }}</li>
                        <li class="col-12 col-sm-6 mb-7">
                          原價 : {{ product.product.origin_price }} / 天
                        </li>
                        <li class="col-12 col-sm-6 mb-7">
                          優惠 : {{ product.product.price }} / 天
                        </li>
                        <li class="col-12 col-sm-6 mb-7">租用計價天數 : {{ product.qty }} 天</li>
                        <li class="col-12 col-sm-6 mb-7">總計費用 : {{ product.total }} 元</li>
                      </ul>
                    </li>
                  </ul>
                  <div class="d-flex justify-content-end">
                    <button
                      type="button"
                      class="btn btn-danger rounded-1 me-10 btn-sm"
                      @click="deleteTargetProduct(product.id)"
                    >
                      取消此預約
                    </button>
                    <button
                      type="button"
                      class="btn btn-dark rounded-1 btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      @click="openTargetProduct(product)"
                    >
                      修改內容
                    </button>
                    <ModalComponent ref="modal"></ModalComponent>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 class="fs-20 fw-bold text-start">金額計算</h2>
            <table class="w-100 text-end mb-10">
              <thead>
                <tr>
                  <th width="25%"></th>
                  <th width="25%"></th>
                  <th width="25%"></th>
                  <th width="25%"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="3">
                    <label for="coupon" class="me-4 mb-8 fs-10">輸入優惠卷 :</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control py-2 rounded-0 bg-gray border-0 mb-8"
                      id="coupon"
                      @change="(e) => addCoupon(e)"
                    />
                  </td>
                </tr>
                <tr class="border-bottom border-dark border-2">
                  <td colspan="4">
                    <p class="text-danger mb-8" v-if="couponCodeError === true">
                      <small>優惠卷折扣碼不存在，請留意字母大小寫並重新輸入。</small>
                    </p>
                    <p class="mb-8" v-if="couponCodeError === false">
                      <small
                        >找不到優惠卷?，參考我們的
                        <RouterLink
                          target="_blank"
                          class="text-blue"
                          to="/article/-NQYEpGrnCt0ky7Qq_9q"
                          >優惠新訊</RouterLink
                        ></small
                      >
                    </p>
                  </td>
                </tr>
                <tr v-for="product in carts" :key="product.product.title">
                  <td colspan="2" class="text-start pt-5">{{ product.product.title }}</td>
                  <td colspan="2" class="pt-5">{{ product.total }} $</td>
                </tr>
                <tr>
                  <td colspan="2" class="text-start pt-5">{{ carts[0]?.coupon?.title }}</td>
                  <td colspan="2" class="pt-5" v-if="discountPrice !== 0 && discountPrice !== '0'">
                    - {{ discountPrice }} $
                  </td>
                </tr>
                <tr>
                  <td colspan="3" class="fs-12 pt-5">總計 :</td>
                  <td class="fs-12 pt-5">{{ final_total }} $</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-end">
              <RouterLink
                to="/productList"
                class="btn btn-dark rounded-0"
                :class="{ 'me-20': carts.length !== 0 }"
                v-if="carts?.length !== 0"
                >預約其他車款</RouterLink
              >
              <RouterLink to="/createOrder" class="btn btn-dark rounded-0" v-if="carts.length !== 0"
                >填寫預約人資料
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import cartStore from '@/stores/cartStore.js'
import ModalComponent from '@/components/ModalComponent.vue'
import { mapActions, mapState } from 'pinia'
export default {
  components: {
    ModalComponent
  },
  methods: {
    ...mapActions(cartStore, [
      'cartChcek',
      'deleteCart',
      'deleteTargetProduct',
      'addCoupon',
      'checkCoupon',
      'openTargetProduct'
    ])
  },
  computed: {
    ...mapState(cartStore, ['carts', 'final_total', 'discountPrice', 'couponCodeError'])
  },
  mounted() {
    this.cartChcek()
    this.checkCoupon()
  }
}
</script>
