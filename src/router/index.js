import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../components/TheLogin.vue";
import Register from "../components/TheRegister.vue";
import Offer from "../components/Offer.vue";
import CreateOffer from "../components/CreateOffer.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/offer/:id",
      name: "offer",
      component: Offer,
    },
    {
      path: "/create/offer",
      name: "create-offer",
      component: CreateOffer,
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   const publicPages = ["/login"];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem("user");

//   if (authRequired && !loggedIn) {
//     return next("/login");
//   }

//   next();
// });

export default router;
