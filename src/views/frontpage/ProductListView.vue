<template>
  <main>
    <section class="py-30">
      <div class="container pt-30">
        <div class="mb-15">
          <h2 class="fs-20 fw-bold border-bottom border-2 pb-15 border-dark mb-10">熱門方案</h2>
          <div
            class="btn-group mb-8 mb-sm-15 btn-group-sm flex-wrap justify-content-around"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" />
            <label
              class="btn btn-outline-dark rounded-0 me-5 flex-grow-0 mb-6"
              for="btnradio1"
              @click="switchCategory('all')"
              :class="{ active: category === 'all' }"
              >所有方案</label
            >

            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" />
            <label
              class="btn btn-outline-dark me-5 flex-grow-0 mb-6"
              for="btnradio2"
              @click="switchCategory('Model3')"
              :class="{ active: category === 'Model3' }"
              >Model 3</label
            >

            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" />
            <label
              class="btn btn-outline-dark me-5 flex-grow-0 mb-6"
              for="btnradio3"
              @click="switchCategory('ModelY')"
              :class="{ active: category === 'ModelY' }"
              >Model Y</label
            >

            <input type="radio" class="btn-check" name="btnradio" id="btnradio4" />
            <label
              class="btn btn-outline-dark me-5 flex-grow-0 mb-6"
              for="btnradio4"
              @click="switchCategory('ModelX')"
              :class="{ active: category === 'ModelX' }"
              >Model X</label
            >

            <input type="radio" class="btn-check" name="btnradio" id="btnradio5" />
            <label
              class="btn btn-outline-dark rounded-0 me-5 flex-grow-0 mb-6"
              for="btnradio5"
              @click="switchCategory('ModelS')"
              :class="{ active: category === 'ModelS' }"
              >Model S</label
            >
          </div>
          <div class="vl-parent">
            <loading
              v-model:active="isLoading"
              :can-cancel="false"
              :is-full-page="fullPage"
              :background-color="backgroundColor"
              :opacity="opacity"
              transition="my-fade-transition"
              class="align-items-start pt-90"
            >
              <template #default>
                <div class="loading-circle d-flex align-items-center justify-content-center">
                  <img class="animated-img" src="../../../public/64_tesla_icon.png" />
                </div>
              </template>
            </loading>
            <ProductCardComponent class="mb-20" style="overflow-y: hidden"></ProductCardComponent>
          </div>

          <PaginationComponent v-if="category === 'all'"></PaginationComponent>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ProductCardComponent from '@/components/ProductCardComponent.vue'
import PaginationComponent from '@/components/PaginationComponent.vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import productStore from '@/stores/productStore.js'
import { mapActions, mapState } from 'pinia'

export default {
  data() {
    return {
      isLoading: true,
      fullPage: false,
      backgroundColor: '#ffffff',
      opacity: 1
    }
  },
  components: {
    ProductCardComponent,
    PaginationComponent,
    Loading
  },
  methods: {
    ...mapActions(productStore, ['getProduct', 'switchCategory', 'getAllProduct']),
    doAjax() {
      this.isLoading = true
      setTimeout(() => {
        this.getAllProduct()
        setTimeout(() => {
          this.isLoading = false
        }, 2000)
      }, 0)
    }
  },
  computed: {
    ...mapState(productStore, ['category'])
  },
  mounted() {
    this.getProduct(this.$route.name)
    this.$nextTick(() => {
      this.doAjax()
    })
  }
}
</script>

<style lang="scss">
.pt-90 {
  padding-top: 240px;
}
.my-fade-transition-enter-active,
.my-fade-transition-leave-active {
  transition: opacity 0.9s;
}
.my-fade-transition-enter,
.my-fade-transition-leave-to {
  opacity: 0;
}
.animated-img {
  width: 40px;
  height: 40px;
  @media (min-width: 576px) {
    width: 60px;
    height: 60px;
  }
}
.loading-circle {
  position: relative;
  display: inline-block;
  width: 80px;
  height: 80px;
}

.loading-circle:before {
  content: '';
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: 80px;
  border: 3px solid rgba(0, 0, 0, 0.2);
  border-top-color: #000;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
