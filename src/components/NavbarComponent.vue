<template>
  <header>
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top bg-transparent px-md-5 py-10 bg-translucent-85"
      :class="{ 'overflow-y-lg-scroll': this.$route.name === 'home' }"
    >
      <div class="container-fluid justify-content-between">
        <h1 class="m-0"><RouterLink to="/" class="fw-bold">URCAR</RouterLink></h1>
        <button
          class="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse flex-grow-0" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link text-white fs-9 fw-bold" to="/productList"
                >方案選擇</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/reserveList" class="nav-link text-white fs-9 fw-bold"
                >查看預約</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/articleList" class="nav-link text-white fs-9 fw-bold"
                >文章專欄</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/policyRule" class="nav-link text-white fs-9 fw-bold"
                >政策保險</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link text-white fs-9 fw-bold" href="#"
                >關於URCAR</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {}
</script>
