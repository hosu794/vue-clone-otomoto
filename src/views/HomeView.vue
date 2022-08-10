<template lang="">
  <div>
    <h1>Offers!</h1>
    <pagination
      :total-pages="computedTotalPages"
      :total="computedTotal"
      :per-page="10"
      :current-page="currentPage"
      @pagechanged="onPageChange"
    />
  </div>
</template>
<script>
import PaginationVue from "../components/Pagination.vue";
import { offerService } from "../services/offer.service";

export default {
  components: {
    pagination: PaginationVue,
  },
  mounted() {
    this.fetchPaginatedOffers(this.currentPage);
  },
  data() {
    return {
      currentPage: 1,
      total: 0,
      totalPages: 0,
    };
  },
  computed: {
    computedTotal() {
      return this.total;
    },
    computedTotalPages() {
      return this.totalPages;
    },
  },
  methods: {
    onPageChange(page) {
      console.log(page);
      this.currentPage = page;
      this.fetchPaginatedOffers(this.currentPage);
    },
    fetchPaginatedOffers(page) {
      offerService
        .getPaginatedOffers(page)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.total = data.total;
          this.totalPages = data.total_pages;
        });
    },
  },
};
</script>
<style lang=""></style>
