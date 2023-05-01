<template>
  <ul class="row row-cols-1 row-cols-lg-3 g-10">
    <li
      class="col"
      v-for="(product, index) in showProductList"
      :key="product.title"
      :data-aos="aos"
      :data-aos-delay="300 * index"
    >
      <RouterLink
        :to="`/product/${product.id}`"
        class="card h-100 rounded-0 border-0 justify-content-between text-dark"
      >
        <div class="flex-grow-1 d-flex flex-column">
          <div class="overflow-hidden">
            <img
              :src="product.imageUrl"
              class="card-img-top rounded-0 card__image"
              :alt="product.title"
              style="height: 220px"
            />
          </div>
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
          <button type="button" class="btn btn-outline-dark rounded-0">立即預約</button>
        </div>
      </RouterLink>
    </li>
  </ul>
</template>

<script>
import productStore from '../stores/productStore'
import { mapActions, mapState } from 'pinia'

export default {
  data() {
    return {
      routeName: ''
    }
  },
  methods: {
    ...mapActions(productStore, ['getProduct'])
  },
  computed: {
    ...mapState(productStore, ['showProductList']),
    aos() {
      return this.routeName === 'home' ? 'fade-up' : ''
    }
  },
  mounted() {
    this.getProduct(this.$route.name)
    this.routeName = this.$route.name
  }
}
</script>

<style lang="scss" scoped>
.card {
  .card__image {
    transition: all 0.7s ease;
  }

  &:hover {
    .card__image {
      transform: scale(1.2);
    }

    .btn {
      color: var(--bs-btn-hover-color);
      background-color: var(--bs-btn-hover-bg);
      border-color: var(--bs-btn-hover-border-color);
    }
  }
}
</style>
