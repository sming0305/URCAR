<template>
  <ul class="row row-cols-1 row-cols-lg-3 g-10">
    <li class="col" v-for="product in showProductList" :key="product.title">
      <div class="card h-100 rounded-0 border-0 justify-content-between">
        <div class="flex-grow-1 d-flex flex-column">
          <img
            :src="product.imageUrl"
            class="card-img-top rounded-0"
            :alt="product.title"
            style="height: 220px"
          />
          <div class="py-5 flex-grow-1 d-flex flex-column">
            <h5 class="card-title fw-bold">{{ product.title }}</h5>
            <p class="card-text mb-10">{{ product.description }}</p>
            <div class="d-flex justify-content-between align-items-end flex-grow-1">
              <span class="fs-7"
                >原價 : <del>{{ product.origin_price }}</del></span
              >
              <p class="m-0">{{ product.price }} / 天</p>
            </div>
          </div>
        </div>
        <div class="d-grid gap-2">
          <router-link :to="`/product/${product.id}`" class="btn btn-outline-dark rounded-0"
            >立即預約</router-link
          >
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
import productStore from '../stores/productStore'
import { mapActions, mapState } from 'pinia'

export default {
  methods: {
    ...mapActions(productStore, ['getProduct'])
  },
  computed: {
    ...mapState(productStore, ['showProductList'])
  },
  mounted() {
    this.getProduct(this.$route.name)
  }
}
</script>
