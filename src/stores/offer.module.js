export const offer = {
  namespaced: true,
  state: {
    offers: [],
    currentPage: 0,
    prev: 0,
    next: 0,
    total: 0,
  },
  actions: {
    getPaginatedOffers({ dispatch, commit }, page) {},
  },
  mutations: {},
};
