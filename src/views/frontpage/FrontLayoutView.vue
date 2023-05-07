<template>
  <NavbarComponent />
  <ProgressTrackerComponent
    v-if="
      this.$route.name === 'singleProduct' ||
      this.$route.name === 'reserve' ||
      this.$route.name === 'createorder' ||
      this.$route.name === 'pay'
    "
  >
  </ProgressTrackerComponent>
  <RouterView></RouterView>
  <FooterComponent></FooterComponent>
  <ScrollTopComponent />
  <LoadingComponent v-if="this.$route.name === 'home'"></LoadingComponent>
</template>

<script>
import productStore from '@/stores/productStore'
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import ProgressTrackerComponent from '@/components/ProgressTrackerComponent.vue'
import ScrollTopComponent from '@/components/ScrollTopComponent.vue'
import LoadingComponent from '@/components/LoadingComponent.vue'
import { mapActions } from 'pinia'

export default {
  components: {
    NavbarComponent,
    ProgressTrackerComponent,
    FooterComponent,
    ScrollTopComponent,
    LoadingComponent
  },
  methods: {
    ...mapActions(productStore, ['handleScroll', 'goTop'])
  },
  mounted() {
    // 監聽滾動事件，在所有頁面中監控滾動距離螢幕頂部的距離(用於判斷是否顯示回到頂部按鈕)
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUmount() {
    // 離開頁面時移除監聽事件
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
