<template>
  <RouterView />
</template>

<script>
import AOS from 'aos'
AOS.init()

AOS.init({
  // Global settings:
  offset: 300, // offset (in px) from the original trigger point
  duration: 900 // values from 0 to 3000, with step 50ms
})
</script>
