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
          <ProductCardComponent class="mb-20"></ProductCardComponent>
          <PaginationComponent v-if="category === 'all'"></PaginationComponent>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ProductCardComponent from '@/components/ProductCardComponent.vue'
import PaginationComponent from '@/components/PaginationComponent.vue'
import productStore from '@/stores/productStore.js'
import { mapActions, mapState } from 'pinia'

export default {
  components: {
    ProductCardComponent,
    PaginationComponent
  },
  methods: {
    ...mapActions(productStore, ['getProduct', 'switchCategory', 'getAllProduct'])
  },
  computed: {
    ...mapState(productStore, ['category'])
  },
  mounted() {
    this.getProduct(this.$route.name)
    this.getAllProduct()
  }
}
</script>
