import { userService } from "../services/user.sevice";

export const user = {
  namespaced: true,
  state: {
    currentUser: null,
    loading: false,
    error: null,
  },
  actions: {
    currentuser({ dispatch, commit }) {
      commit("currentUserRequest");

      userService.currentUser().then(
        (user) => {
          commit("currentUserSuccess", user);
        },
        (error) => {
          commit("currentUserFailure", error);
          dispatch("alert/error");
        }
      );
    },
  },
  mutations: {
    currentUserRequest(state) {
      state.loading = true;
    },
    currentUserSuccess(state, user) {
      state.loading = false;
      state.currentUser = user;
    },
    currentUserFailure(state, error) {
      state.loading = false;
      (state.currentUser = null), (state.error = error);
    },
    clear(state) {
      state.loading = false;
      state.currentUser = null;
    },
  },
};
