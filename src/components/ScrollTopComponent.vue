<template>
  <i
    class="fas fa-arrow-circle-up position-fixed scrollTopButton"
    style="z-index: 10001"
    v-if="showBackToTop === true"
    @click="goTop(this.$route)"
    ><span class="bg-white tag"></span
  ></i>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import productStore from '@/stores/productStore'
export default {
  methods: {
    ...mapActions(productStore, ['goTop'])
  },
  computed: {
    ...mapState(productStore, ['showBackToTop']),
    windowScrollY() {
      if (window.scrollY === 0) {
        console.log(window.scrollY === 0)
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style lang="scss">
.scrollTopButton {
  bottom: 8%;
  right: 5%;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  font-size: 30px;
  z-index: 24;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
}
.fa-arrow-circle-up:before {
  z-index: 24;
  bottom: 8%;
  right: 5%;
  position: fixed;
}
.tag {
  width: 19px;
  height: 19px;
  background: #fff;
  display: block;
  position: fixed;
  bottom: 8.5%;
  right: 6.4%;
  z-index: 12;

  @media (min-width: 576px) {
    right: 5.9%;
  }

  @media (min-width: 768px) {
    right: 5.75%;
  }

  @media (min-width: 992px) {
    right: 5.6%;
  }

  @media (min-width: 1200px) {
    right: 5.3%;
  }
}
</style>
