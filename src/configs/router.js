import Vue from 'vue'
import Router from 'vue-router'

// Home
const AppHome = () => import('@/pages/home/AppHome');
const PageInitial = () => import('@/pages/home/AppPageInitial');
const Login = () => import('@/pages/home/AppLogin');
const RegisterCandidate = () => import('@/pages/home/AppRegisterCandidate');
const registerCompany = () => import('@/pages/home/AppRegisterCompany');

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  routes: [
    {
      path: '/',
      redirect: '/home/',
    },
    {
      path: '/home',
      name: 'Home',
      component: AppHome,
      children: [
        {
          path: '/',
          name: 'Pagina Inicial',
          component: PageInitial
        },{
          path: 'login',
          name: 'Login',
          component: Login
        },{
          path: 'registerCandidate',
          name: 'Registrar Candidato',
          component: RegisterCandidate
        },{
          path: 'registerCompany',
          name: 'Registrar Empresa',
          component: registerCompany
        }
      ]
    },
  ]
})
