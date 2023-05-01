<template>
  <div class="vl-parent">
    <loading
      v-model:active="isLoading"
      :can-cancel="false"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
      :background-color="backgroundColor"
      :opacity="opacity"
      transition="my-fade-transition"
    >
      <template #default>
        <div class="loading-circle d-flex align-items-center justify-content-center">
          <img class="animated-img" src="../../public/64_tesla_icon.png" />
        </div>
      </template>
    </loading>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

export default {
  data() {
    return {
      isLoading: true,
      fullPage: true,
      backgroundColor: '#ffffff',
      opacity: 1
    }
  },
  props: {
    loadingProcess1: {
      type: Function,
      default: null
    }
  },
  components: {
    Loading
  },
  methods: {
    doAjax() {
      // simulate AJAX
      if (this.loadingProcess1 !== null) {
        this.isLoading = true
        setTimeout(() => {
          this.loadingProcess1()
          setTimeout(() => {
            this.isLoading = false
          }, 2000)
        }, 0)
      } else {
        setTimeout(() => {
          this.isLoading = false
        }, 2000)
      }
    },
    onCancel() {
      console.log('User cancelled the loader.')
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.doAjax()
    })
  }
}
</script>

<style lang="scss">
.my-fade-transition-enter-active,
.my-fade-transition-leave-active {
  transition: opacity 0.9s;
}
.my-fade-transition-enter,
.my-fade-transition-leave-to {
  opacity: 0;
}

.animated-img {
  width: 40px;
  height: 40px;
  @media (min-width: 576px) {
    width: 60px;
    height: 60px;
  }
}

.loading-circle {
  position: relative;
  display: inline-block;
  width: 80px;
  height: 80px;
}

.loading-circle:before {
  content: '';
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: 80px;
  border: 3px solid rgba(0, 0, 0, 0.2);
  border-top-color: #000;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
