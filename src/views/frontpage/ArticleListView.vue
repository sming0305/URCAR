<template>
  <main>
    <section class="pt-30 pb-15">
      <div class="container pt-30">
        <div class="border-bottom border-2 border-dark mb-10">
          <h2 class="fs-20 fw-bold">文章專欄</h2>
        </div>
        <div class="row mb-15">
          <div class="col-12 col-xl-2">
            <div class="p-8 bg-gray mb-10 sticky-top top-80">
              <h3 class="fw-bold mb-12">文章分類</h3>
              <ul class="d-flex d-xl-block">
                <li class="mb-0 mb-sm-10 me-10">
                  <a href="#" class="link-secondary" @click.prevent="switchCategory('all')"
                    >所有文章</a
                  >
                </li>
                <li class="mb-0 mb-sm-10 me-10">
                  <a href="#" class="link-secondary" @click.prevent="switchCategory('車輛介紹')"
                    >車輛介紹</a
                  >
                </li>
                <li class="mb-0 mb-sm-10 me-10">
                  <a href="#" class="link-secondary" @click.prevent="switchCategory('優惠新訊')"
                    >優惠新訊</a
                  >
                </li>
                <li class="mb-0 mb-sm-10">
                  <a href="#" class="link-secondary" @click.prevent="switchCategory('旅程推薦')"
                    >旅程推薦</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-xl-10">
            <ArticleCardComponent></ArticleCardComponent>
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <PaginationComponent v-if="category === 'all'"></PaginationComponent>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import PaginationComponent from '@/components/PaginationComponent.vue'
import ArticleCardComponent from '@/components/ArticleCardComponent.vue'

import articleStore from '../../stores/articleStore.js'
import { mapActions, mapState } from 'pinia'

export default {
  components: {
    PaginationComponent,
    ArticleCardComponent
  },
  methods: {
    ...mapActions(articleStore, ['switchCategory'])
  },
  computed: {
    ...mapState(articleStore, ['category'])
  }
}
</script>
<style scoped>
.top-80 {
  top: 120px !important;
}
</style>
