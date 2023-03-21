<template>
  <main>
    <section class="pt-30 pb-15">
      <div class="container pt-30">
        <div class="border-bottom border-2 border-dark mb-15">
          <h2 class="fs-20 fw-bold">文章專欄</h2>
        </div>
        <div class="row">
          <div class="col-12 col-lg-8">
            <div class="mb-15">
              <h3 class="mb-5">{{ articleTemp.title }}</h3>
              <div class="d-flex">
                <p class="mb-10 ms-5 me-5 text-gray-600" v-for="tag in articleTemp.tag" :key="tag">
                  <small>#{{ tag }}</small>
                </p>
              </div>
              <img
                :src="articleTemp.image"
                :alt="articleTemp.title"
                class="mb-10"
                style="width: 100%; height: 350px"
                v-if="articleTemp.image !== undefined"
              />
              <div v-html="articleConvert" v-if="articleTemp.content !== undefined"></div>
            </div>
            <div class="d-flex justify-content-center">
              <router-link to="/articleList" class="btn btn-dark rounded-0 px-20"
                >返回列表</router-link
              >
            </div>
          </div>
          <div class="col-4 d-none d-lg-block border-start">
            <div class="sticky-top top-80">
              <h3 class="mb-10">相關文章</h3>
              <ul>
                <li v-for="article in showArticleList" :key="article.title">
                  <router-link
                    :to="`/article/${article.id}`"
                    class="d-flex mb-10 border-bottom pb-10 justify-content-between link-dark"
                    @click="getTargetArticle(article.id)"
                  >
                    <div class="me-10 d-flex flex-column justify-content-between py-2">
                      <h4 class="mb-10 fs-9">{{ article.title }}</h4>
                    </div>
                    <img
                      :src="article.image"
                      :alt="article.title"
                      style="height: 100px; width: 100px"
                    />
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import articleStore from '../../stores/articleStore.js'
import { mapActions, mapState } from 'pinia'

export default {
  methods: {
    ...mapActions(articleStore, ['getTargetArticle', 'getArticles'])
  },
  computed: {
    ...mapState(articleStore, ['articleTemp', 'articleConvert', 'showArticleList'])
  },
  mounted() {
    this.getTargetArticle(this.$route.params.id)
    this.getArticles(this.$route.name)
  }
}
</script>
<style scoped>
.top-80 {
  top: 120px !important;
}
</style>
