<template>
  <div class="card mb-3 rounded-0 border-0" v-for="article in showArticleList" :key="article.title">
    <div class="row g-0">
      <div class="col-md-5">
        <img :src="article.image" :alt="article.title" style="width: 100%; height: 260px" />
      </div>
      <div class="col-md-7">
        <div class="card-body d-flex flex-column justify-content-between h-100 mb-5">
          <div>
            <h5 class="card-title fw-bold">{{ article.title }}</h5>
            <p class="card-text textLineOverflow--4">
              {{ article.description }}
            </p>
          </div>
          <div>
            <p class="card-text d-flex justify-content-between align-items-center">
              <small class="text-muted">撰文日期 : {{ toDate(article.create_at) }}</small>
              <router-link :to="`/article/${article.id}`" class="btn btn-outline-dark rounded-0"
                >閱讀全文</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import articleStore from '../stores/articleStore.js'
import { mapActions, mapState } from 'pinia'

export default {
  methods: {
    ...mapActions(articleStore, ['getArticles', 'toDate'])
  },
  computed: {
    ...mapState(articleStore, ['showArticleList'])
  },
  mounted() {
    this.getArticles(this.$route.name)
  }
}
</script>
