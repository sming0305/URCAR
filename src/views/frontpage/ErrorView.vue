<template>
  <main>
    <section class="pt-30 pb-15 fullPageLayout--9 h-100">
      <div class="container pt-30 h-100">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-center p-20 bg-translucent-75 text-white rounded-2">
            <h2 class="mb-10 fw-bold fs-30">404錯誤</h2>
            <p class="lh-lg fs-10">
              網頁路徑錯誤 ， 此頁面並不存在<br />請點擊下方按鈕返回首頁，謝謝您!
            </p>
            <a href="#" class="btn btn-outline-light" @click.prevent="this.$router.push('/')"
              >返回首頁</a
            >
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
