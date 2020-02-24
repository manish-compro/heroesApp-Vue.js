import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../components/dashboard.vue";
import HeroDetails from '../components/details.component.vue'
import Heroes from '../components/heroes.component.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    props: true
  },
  {
    path: "/heroes",
    name: "Heroes",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Heroes
     
  },
  {
    path: "/details",
    name: "Details",
    component: HeroDetails,
    props: true
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
