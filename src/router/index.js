import Vue from 'vue'
import VueRouter from 'vue-router'
import AppNavbar from './../components/AppNavbar'
import Home from './../views/Home'
import AppFooter from './../components/AppFooter'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    components: {
      navbar: AppNavbar,
      home: Home,
      footer: AppFooter
    }
  }
]

const router = new VueRouter({
  linkExactActiveClass: "active",
  routes
})

export default router
