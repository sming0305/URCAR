<template>
  <NavbarComponent />
  <ProgressTrackerComponent
    v-if="
      this.$route.name === 'singleProduct' ||
      this.$route.name === 'reserve' ||
      this.$route.name === 'createorder' ||
      this.$route.name === 'pay'
    "
  ></ProgressTrackerComponent>
  <section
    @scroll="(e) => handleScroll(e)"
    class="flex-grow-1"
    :class="{
      'overflow-y':
        this.$route.name !== 'home' &&
        this.$route.name !== 'paysuccess' &&
        this.$route.name !== 'error'
    }"
  >
    <RouterView @scroll="(e) => handleScroll(e)"></RouterView>
    <FooterComponent v-if="this.$route.name !== 'home'"></FooterComponent>
  </section>
  <ScrollTopComponent></ScrollTopComponent>
</template>

<script>
import productStore from '@/stores/productStore'
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import ProgressTrackerComponent from '@/components/ProgressTrackerComponent.vue'
import ScrollTopComponent from './ScrollTopComponent.vue'
import { mapActions } from 'pinia'

export default {
  components: {
    NavbarComponent,
    FooterComponent,
    ProgressTrackerComponent,
    ScrollTopComponent
  },
  methods: {
    ...mapActions(productStore, ['handleScroll', 'goTop'])
  }
}
</script>
