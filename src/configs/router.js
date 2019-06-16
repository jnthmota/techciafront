import Vue from 'vue'
import Router from 'vue-router'

// Home
const AppHome = () => import('@/pages/home/AppHome');
const PageInitial = () => import('@/pages/home/AppPageInitial');
const Login = () => import('@/pages/home/AppLogin');
const RegisterCandidate = () => import('@/pages/home/AppRegisterCandidate');
const registerCompany = () => import('@/pages/home/AppRegisterCompany');

Vue.use(Router)

export const router = new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: AppHome,
      children: [
        {
          path: '/',
          name: 'Pagina Inicial',
          component: PageInitial
        },
        {
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
    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/registerCandidate', '/registerCompany', '/'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/');
  }

  next();
})
