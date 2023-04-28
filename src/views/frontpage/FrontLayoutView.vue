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
</template>

<script>
import productStore from '@/stores/productStore'
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import ProgressTrackerComponent from '@/components/ProgressTrackerComponent.vue'
import ScrollTopComponent from '@/components/ScrollTopComponent.vue'
import { mapActions } from 'pinia'

export default {
  components: {
    NavbarComponent,
    ProgressTrackerComponent,
    FooterComponent,
    ScrollTopComponent
  },
  methods: {
    ...mapActions(productStore, ['handleScroll', 'goTop'])
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
