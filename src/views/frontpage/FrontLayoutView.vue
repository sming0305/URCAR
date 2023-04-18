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
  <RouterView />
  <FooterComponent v-if="this.$route.name !== 'home'"></FooterComponent>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import ProgressTrackerComponent from '@/components/ProgressTrackerComponent.vue'

export default {
  components: {
    NavbarComponent,
    FooterComponent,
    ProgressTrackerComponent
  }
}
</script>
