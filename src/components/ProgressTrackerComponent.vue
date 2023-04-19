<template>
  <div class="container mt-45">
    <StepProgress
      active-color="black"
      :steps="mySteps"
      :current-step="step"
      :line-thickness="4"
      :passive-thickness="2"
      icon-class="fas fa-check"
    ></StepProgress>
  </div>
</template>

<script>
import StepProgress from 'vue-step-progress'
import cartStore from '@/stores/cartStore'
import { mapState } from 'pinia'

export default {
  data() {
    return {
      mySteps: ['預約車款', '確認預約', '填寫資料', '付款結帳']
    }
  },
  components: {
    StepProgress
  },
  computed: {
    ...mapState(cartStore, ['step'])
  }
}
</script>

<style lang="scss">
.mt-45 {
  margin-top: 90px;
}

.step-progress__bar {
  margin-bottom: 30px;
}

.step-progress__step {
  & span {
    font-size: 20px;
  }
  &-label {
    font-size: 16px;
    font-weight: 500;
    @media (min-width: 576px) {
      font-size: 18px;
    }
  }
  &::after {
    height: 50px;
    width: 50px;
  }
}
</style>
