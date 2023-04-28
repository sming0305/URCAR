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
        <div class="loading-spinner p-10">
          <img class="animated-img" src="../../public/tesla_icon.png" />
          <div class="spinner-border"></div>
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
  transition: opacity 0.6s;
}
.my-fade-transition-enter,
.my-fade-transition-leave-to {
  opacity: 0;
}

.animated-img {
  width: 60px;
  height: 60px;
}

.loading-spinner {
  position: relative;
  display: inline-block;
}

.spinner-border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 4px solid black;
  border-radius: 50%;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
