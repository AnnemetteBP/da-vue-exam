import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Shop from './views/Shop.vue'
import About from './views/About.vue'
import CheckoutComponent from './components/CheckoutComponent'
import AboutTheProjectComponent from "./components/AboutTheProjectComponent";
import AllActions from "./components/AllActions";
import AboutComponent from "./components/AboutComponent";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/about',
      component: About,
      children: [
        { path: '/', component: AboutComponent, name:'about' },
        { path: '/all-actions', component: AllActions, name:'actions' },
        { path: '/about-the-project', component: AboutTheProjectComponent, name:'project' }
      ]
    },
    {
      path: '/checkout',
      name: 'check-out',
      component: CheckoutComponent
    }
  ]
})
