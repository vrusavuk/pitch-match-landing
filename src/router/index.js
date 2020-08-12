import Vue from 'vue'
import VueRouter from 'vue-router'
import AppNavbar from './../components/AppNavbar'
import Home from './../views/Home'
import HomeRu from './../views/HomeRu'
import AppFooter from './../components/AppFooter'
import Features from './../views/Features'
import FeaturesRu from './../views/FeaturesRu'


Vue.use(VueRouter)


  const routes = [
  {
   path: '/', redirect: '/ru',
        components: {
          navbar: AppNavbar,
          homeru: HomeRu,
          featuresru: FeaturesRu,
          footer: AppFooter,
      }
    },
    {
      path: '/en',
           components: {
             navbar: AppNavbar,
             home: Home,
             features: Features,
             footer: AppFooter,
             
         }
       },
    {
      path: '/ru',
           components: {
             navbar: AppNavbar,
             homeru: HomeRu,
             featuresru: FeaturesRu,
             footer: AppFooter,
             
         }
       },
]

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: "active",
  routes
})

export default router
