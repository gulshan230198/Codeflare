import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/auth/HomeView.vue";
import AboutView from "../views/auth/AboutView.vue";
import ServiceView from "../views/auth/ServiceView.vue";
import PortfolioView from "../views/auth/PortfolioView.vue";
import BlogView from "../views/auth/BlogView.vue";
import ContactView from "../views/auth/ContactView.vue";
// import BlogView from '../views/BlogView.vue'
import BlogDeatilView from '@/components/BlogDeatilView.vue'

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
    meta: { authOnly: false }
  },
  {
    path: "/about",
    name: "AboutView",
    component: AboutView,
    meta: { authOnly: false }
  },
  {
    path: "/service",
    name: "ServiceView",
    component: ServiceView,
    meta: { authOnly: false }
  },
  {
    path: "/portfolio",
    name: "PortfolioView",
    component: PortfolioView,
    meta: { authOnly: false }
  },
  {
    path: "/contact",
    name: "ContactView",
    component: ContactView,
    meta: { authOnly: false }
  },
  {
    path: "/blog",
    name: "BlogView",
    component: BlogView,
    meta: { authOnly: false }
  },
  // {
  //   path: '/blog',
  //   name: 'BlogView',
  //   component: BlogView
  // },
  {
    path: '/blog/:slug',
    name: 'BlogDeatilView',
    component: BlogDeatilView
  }
 

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
});



export default router;
