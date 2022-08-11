<template lang="">
  <div>
    <offers :offers="offers"></offers>
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
import Offers from "../components/Offers.vue";
import { offerService } from "../services/offer.service";

export default {
  components: {
    pagination: PaginationVue,
    offers: Offers,
  },
  mounted() {
    this.fetchPaginatedOffers(this.currentPage);
  },
  data() {
    return {
      currentPage: 1,
      total: 0,
      totalPages: 0,
      offers: [],
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
          this.offers = data.data;
        });
    },
  },
};
</script>
<style lang=""></style>
