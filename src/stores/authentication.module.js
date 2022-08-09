import { router } from "../router/index";

import { userService } from "../services/user.sevice";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: {}, user: null };

export const authentication = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ dispatch, commit }, { email, password }) {
      commit("loginRequest", user);

      userService.login(email, password).then(
        (user) => {
          commit("loginSuccess", user);
          dispatch("user/currentuser", {}, { root: true });
          router.push("/");
        },
        (error) => {
          commit("loginFailure", error);
          dispatch("alert/error");
        }
      );
    },
    logout({ dispatch, commit }) {
      userService.logout();
      commit("logout");
      commit("user/clear", {}, { root: true });
    },
  },
  mutations: {
    loginRequest(state, user) {
      state.status = { loggingIn: true };
      state.user = user;
    },
    loginSuccess(state, user) {
      state.status = { loggedIn: true };
      state.user = user;
    },
    loginFailure(state) {
      state.status = {};
      state.user = null;
    },
    logout(state) {
      state.status = {};
      state.user = null;
    },
  },
};
