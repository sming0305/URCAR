<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: paginationInfo?.has_pre === false }">
        <a
          class="page-link text-black rounded-0 border border-dark"
          href="#"
          aria-label="Previous"
          @click.prevent="getTargetData(this.$route.name, paginationInfo?.current_page - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        v-for="page in paginationInfo?.total_pages"
        :key="page"
        :class="{ disabled: page === paginationInfo?.current_page }"
      >
        <a
          class="page-link text-black border-dark"
          href="#"
          @click.prevent="getTargetData(this.$route.name, page)"
          >{{ page }}</a
        >
      </li>
      <li class="page-item text-black" :class="{ disabled: paginationInfo?.has_next === false }">
        <a
          class="page-link text-black rounded-0 border-dark"
          href="#"
          aria-label="Next"
          @click.prevent="getTargetData(this.$route.name, paginationInfo?.current_page + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import paginationStore from '../stores/paginationStore.js'
import { mapActions, mapState } from 'pinia'

export default {
  methods: {
    ...mapActions(paginationStore, ['getRoute', 'getTargetData'])
  },
  computed: {
    ...mapState(paginationStore, ['paginationInfo'])
  },
  mounted() {
    this.getRoute(this.$route.name)
  }
}
</script>
