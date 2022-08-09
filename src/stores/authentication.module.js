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
    register({ dispatch, commit }, { firstName, lastName, email, password }) {
      commit("registerRequest");

      userService
        .register({ firstname: firstName, lastname: lastName, email, password })
        .then(
          (response) => {
            commit("registerSuccess");
            dispatch("login", { email, password });
          },
          (error) => {
            commit("registerFailure", error);
            dispatch("alert/error");
          }
        );
    },
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
    registerRequest(state) {
      state.status = { ...state.status, registeringIn: true };
    },
    registerSuccess(state) {
      state.status = { ...state.status, registeredIn: true };
    },
    registerFailure(state) {
      state.status = {};
    },
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
