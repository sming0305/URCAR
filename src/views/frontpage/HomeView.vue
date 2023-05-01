<template>
  <main>
    <swiper-container
      class=""
      :effect="'fade'"
      :loop="true"
      :pagination="{
        clickable: true
      }"
      :navigation="false"
      :autoplay="{
        delay: 4500,
        disableOnInteraction: false
      }"
      :speed="2000"
    >
      <swiper-slide class="banner"
        ><div class="container h-100">
          <div class="d-flex align-items-center h-100">
            <p class="text-white fs-25 mb-30">
              <span class="fw-bold">URCAR</span><br /><span class="fs-20 ms-10"
                >給你更多精彩選擇</span
              >
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="fullPageLayout--1"
        ><div class="container h-100">
          <div
            class="d-flex align-items-lg-center justify-content-center justify-content-sm-start h-100 pt-30"
          >
            <div class="text-white mt-30 text-center text-sm-start">
              <div class="mb-8">
                <p class="fw-bold fs-18">"我們提供彈性且齊全的方案"</p>
                <p class="fs-12">讓您輕鬆享受駕駛特斯拉電動車，包含:</p>
                <p class="fs-12 ms-10">Modal 3 ， Modal X ， Modal Y <br />... 等車款。</p>
              </div>
              <div class="d-flex justify-content-center justify-content-sm-end">
                <RouterLink to="/productList" class="btn btn-outline-light rounded-0"
                  >查看完整方案</RouterLink
                >
              </div>
            </div>
          </div>
        </div></swiper-slide
      >
      <swiper-slide class="fullPageLayout--2"
        ><div class="container h-100">
          <div class="d-flex align-items-end justify-content-center justify-content-sm-start h-100">
            <div
              class="text-white text-center text-sm-start p-8 p-sm-25 bg-translucent-75 mb-35 rounded-5"
            >
              <div class="mb-8">
                <p class="fw-bold fs-25">"只要負責體驗"</p>
                <p class="fw-bold fs-10">
                  URCAR提供到府送車，以及服務範圍內彈性<br
                    class="d-none d-md-block"
                  />自選定點還車，讓您擁有最美好的旅程。
                </p>
              </div>
              <div class="d-flex justify-content-center justify-content-sm-end">
                <RouterLink
                  to="/article/-NTIgAlNc062Dk8g9Hlq"
                  class="btn btn-outline-light rounded-0"
                  >服務介紹</RouterLink
                >
              </div>
            </div>
          </div>
        </div></swiper-slide
      >
      <swiper-slide class="fullPageLayout--3"
        ><div class="container h-100">
          <div class="d-flex align-items-end justify-content-center justify-content-sm-end h-100">
            <div
              class="text-white text-center text-sm-start p-8 p-sm-25 bg-translucent-75 mb-35 rounded-3"
            >
              <div class="mb-8">
                <p class="fw-bold fs-25">"安心使用"</p>
                <p class="fw-bold fs-10">
                  對於車況您無需煩惱，<br
                    class="d-none d-md-block"
                  />URCAR團隊將確保交付到您手中的車輛安全無虞。
                </p>
              </div>
              <div class="d-flex justify-content-center justify-content-sm-end">
                <RouterLink
                  to="/article/-NTIflw-4rLtIY3UOZN6"
                  class="btn btn-outline-light rounded-0"
                  >服務介紹</RouterLink
                >
              </div>
            </div>
          </div>
        </div></swiper-slide
      >
      <swiper-slide class="fullPageLayout--4"
        ><div class="container h-100">
          <div class="d-flex align-items-end justify-content-center justify-content-sm-end h-100">
            <div
              class="text-white text-center text-sm-start p-6 p-sm-20 bg-translucent-75 mb-35 rounded-3"
            >
              <div class="mb-8">
                <p class="fw-bold fs-18">"不只安全，<br />更讓您有賓至如歸的感受"</p>
                <p class="fw-bold fs-10">
                  每次車輛繳回後都會由URCAR團隊進行清潔整備，<br />並隨車附贈Tesla雨傘.礦泉水
                </p>
              </div>
              <div class="d-flex justify-content-center justify-content-sm-end">
                <RouterLink
                  to="/article/-NTIfVbQuikz6hI1xqF_"
                  class="btn btn-outline-light rounded-0"
                  >服務介紹</RouterLink
                >
              </div>
            </div>
          </div>
        </div></swiper-slide
      >
      <swiper-slide class="fullPageLayout--5 pt-15 pt-sm-30"
        ><div class="container h-100">
          <div
            class="d-flex align-items-center align-items-lg-start justify-content-center justify-content-sm-end h-100"
          >
            <div
              class="text-white text-center text-sm-start p-6 p-sm-13 bg-translucent-50 mt-15 mt-sm-30 rounded-3"
            >
              <p class="fw-bold fs-18">"悠遊駕駛"</p>
              <p class="fw-bold fs-10">
                全台超過 50 座超充站、<br class="d-block d-md-none" />近 300 支的充電樁
                <br />不論在白天黑夜都無須擔心充電問題 <br />
                而且免費!
              </p>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </swiper-slide>
    </swiper-container>
    <section class="py-30" style="min-height: 100vh">
      <div class="container h-100 pt-30">
        <div class="mb-30">
          <h2 class="fs-20 fw-bold border-bottom border-2 pb-15 border-dark mb-30">熱門方案</h2>
          <ProductCardComponent />
        </div>
        <div class="d-flex justify-content-center">
          <RouterLink to="/productList" class="btn btn-dark rounded-0 px-20 mt-30"
            >查看完整方案</RouterLink
          >
        </div>
      </div>
    </section>
    <section class="bg-black pb-30">
      <div class="container">
        <div class="d-lg-flex">
          <div class="flex-shrink-1">
            <img
              src="https://tesla-cdn.thron.com/delivery/public/image/tesla/649c549e-12b4-40c6-9294-7e996b8d3ccb/bvlatuR/std/4096x3071/Model-S-Specs-Hero-Desktop-LHD"
              alt="Model S"
              style="max-height: 550px"
              data-aos="zoom-in"
              data-aos-duration="1500"
            />
          </div>
          <div class="d-flex align-items-center flex-column justify-content-center flex-shrink-0">
            <p class="fw-bold text-white fs-16 mb-12 text-md-start text-center" data-aos="flip-up">
              Model S，體驗無與倫比的駕馭樂趣
            </p>
            <RouterLink
              to="/product/-NQNaOmzZubS9jTYs7zF"
              class="btn btn-outline-light rounded-0 px-20"
              data-aos="flip-down"
              >立即預約</RouterLink
            >
          </div>
        </div>
      </div>
    </section>
    <section class="py-30" style="min-height: 100vh">
      <div class="container h-100 pt-30">
        <div class="mb-20">
          <h2 class="fs-20 fw-bold border-bottom border-2 pb-15 border-dark mb-15">消息速覽</h2>
          <ArticleCardComponent />
        </div>
        <div class="d-flex justify-content-center">
          <RouterLink to="/articleList" class="btn btn-dark rounded-0 px-20"
            >查看完整文章專欄</RouterLink
          >
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ProductCardComponent from '@/components/ProductCardComponent.vue'
import ArticleCardComponent from '@/components/ArticleCardComponent.vue'

export default {
  components: {
    ProductCardComponent,
    ArticleCardComponent
  }
}
</script>

<style>
:root {
  --swiper-pagination-color: #fff;
  --swiper-pagination-bullet-inactive-color: #000;
  --swiper-pagination-bullet-size: 16px;
  --swiper-pagination-bottom: 40px;
  --swiper-pagination-bullet-inactive-opacity: 0.4;
}

.mb-35 {
  margin-bottom: 70px;
}
</style>
