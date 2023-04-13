<template>
  <NavbarComponent />
  <RouterView />
  <FooterComponent v-if="this.$route.name !== 'home'"></FooterComponent>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  components: {
    NavbarComponent,
    FooterComponent
  }
}
</script>
