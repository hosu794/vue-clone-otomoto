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
import { getAllUrlParams } from "../helpers/params";
import router from "../router";

export default {
  components: {
    pagination: PaginationVue,
    offers: Offers,
  },
  mounted() {
    this.fetchPaginatedOffers(
      this.currentPage,
      getAllUrlParams(window.location.search)
    );
  },
  data() {
    return {
      currentPage: 1,
      total: 0,
      totalPages: 0,
      offers: [],
    };
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        this.fetchPaginatedOffers(
          this.currentPage,
          getAllUrlParams(window.location.search)
        );
      }
    );
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
      this.currentPage = page;
      this.fetchPaginatedOffers(this.currentPage);
    },
    fetchPaginatedOffers(page, params) {
      offerService
        .getPaginatedOffersWithParamFilter(page, params)
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
