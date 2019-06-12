import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/pages/home/Home')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    }
  ]
})
