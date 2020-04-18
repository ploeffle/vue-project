import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Overview from "../views/Overview.vue";
import Menu from "../views/Menu.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/overview",
    name: "Overview",
    component: Overview,
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
