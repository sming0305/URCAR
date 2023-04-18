<template>
  <header>
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top bg-transparent px-md-5 py-10 bg-translucent-85"
      :class="{ 'overflow-y-lg-scroll': this.$route.name === 'home' }"
    >
      <div class="container-fluid justify-content-between">
        <h1 class="m-0">
          <RouterLink to="/" class="fw-bold" @click="closeNavbar">URCAR</RouterLink>
        </h1>
        <button
          class="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
          ref="navbarControl"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse flex-grow-0" id="navbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink
                class="nav-link text-white fs-9 fw-bold"
                to="/productList"
                @click="closeNavbar"
                >方案選擇</RouterLink
              >
            </li>
            <li class="nav-item position-relative">
              <RouterLink
                to="/reserveList"
                class="nav-link text-white fs-9 fw-bold"
                @click="closeNavbar"
                >查看預約</RouterLink
              >
              <span
                class="text-white position-absolute cartQty__tag text-center fs-7"
                v-if="cartQty !== 0"
                >{{ cartQty }}</span
              >
            </li>
            <li class="nav-item">
              <RouterLink
                to="/articleList"
                class="nav-link text-white fs-9 fw-bold"
                @click="closeNavbar"
                >文章專欄</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink
                to="/policyRule"
                class="nav-link text-white fs-9 fw-bold"
                @click="closeNavbar"
                >政策保險</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink
                to="/about"
                class="nav-link text-white fs-9 fw-bold"
                href="#"
                @click="closeNavbar"
                >關於URCAR</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import cartStore from '@/stores/cartStore.js'
import { mapActions, mapState } from 'pinia'

export default {
  methods: {
    ...mapActions(cartStore, ['cartChcek', 'targetNavbar', 'closeNavbar'])
  },
  computed: {
    ...mapState(cartStore, ['cartQty'])
  },
  mounted() {
    this.cartChcek()
    this.targetNavbar(this.$refs.navbarControl)
  }
}
</script>

<style lang="scss">
.nav-link {
  &:hover {
    color: darken(#ffffff, 50%) !important;
  }

  &.active {
    border-bottom: 2px solid #fff;
    color: #fff !important;
  }
}

.cartQty__tag {
  width: 20px;
  height: 20px;
  top: 25%;
  right: 10px;
  background: red;
  border-radius: 50%;
  z-index: -6;

  @media (min-width: 992px) {
    & {
      top: 0;
      right: -6px;
    }
  }
}
</style>
