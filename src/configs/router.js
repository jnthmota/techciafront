import Vue from 'vue'
import Router from 'vue-router'

// Home
const Home = () => import('@/pages/home/AppHome');
const PageInitial = () => import('@/pages/home/AppPageInitial');
const Login = () => import('@/pages/home/AppLogin');
const RegisterCandidate = () => import('@/pages/home/AppRegisterCandidate');
const registerCompany = () => import('@/pages/home/AppRegisterCompany');


// Candidate
const Candidate = () => import('@/pages/candidate/AppCandidate');
const VacancysCandidate = () => import('@/pages/candidate/vacancy/AppVacancys');
const ViewProfile = () => import('@/pages/candidate/profile/AppViewProfile');


Vue.use(Router)

export const router = new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'initial',
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
