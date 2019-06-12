import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainerCandidate = () => import('@/containers/candidates/DefaultContainerCandidate')
const DefaultContainerCompany = () => import('@/containers/company/DefaultContainerCompany')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const PageInitial = () => import('@/views/pages/PageInitial')

// Candidate
const DefaultProfile = () => import('@/views/candidates/profile/DefaultProfile')
const PersonalData = () => import('@/views/candidates/profile/PersonalData')
const ExperienceCandidate = () => import('@/views/candidates/profile/Experience')
const SchoolingCandidate = () => import('@/views/candidates/profile/Schooling')
const ProfilesCandidate = () => import('@/views/candidates/profile/Profiles')
const PreferencesCandidate = () => import('@/views/candidates/profile/Preferences')
const SkillsCandidate = () => import('@/views/candidates/profile/Skills')
const LanguageCandidate = () => import('@/views/candidates/profile/Language')


// Company
const Vacancys = () => import('@/views/company/vacancy/Vacancy')
const VacancyCreate = () => import('@/views/company/vacancy/VacancyCreate')
const VacancyCandidate = () => import('@/views/company/vacancy/CandidateVacancy')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/candidates',
      redirect: '/candidates/',
      name: 'Home',
      component: DefaultContainerCandidate,
      children: [
        {
          path: '/',
          name: 'DefaultProfile',
          redirect: '/candidates/personalData',
          component: DefaultProfile,
          children: [
            {
              path: 'personalData',
              name: 'PersonalData',
              component: PersonalData,
            },
            {
              path: 'experience',
              name: 'Experience',
              component: ExperienceCandidate,
            },
            {
              path: 'schooling',
              name: 'Schooling',
              component: SchoolingCandidate,
            },
            {
              path: 'profiles',
              name: 'Profiles',
              component: ProfilesCandidate,
            },
            {
              path: 'preferences',
              name: 'Preferences',
              component: PreferencesCandidate,
            },{
              path: 'skill',
              name: 'Skill',
              component: SkillsCandidate,
            },{
              path: 'language',
              name: 'Language',
              component: LanguageCandidate,
            }
          ]
        }
      ]
    }, {
      path: '/company',
      name: 'Home',
      redirect: '/vacancys',
      component: DefaultContainerCompany,
      children: [{
        path: "/vacancys",
        name: "Vacancy",
        component: Vacancys
      },{
        path: "/createVacancy",
        name: "Vacancy",
        component: VacancyCreate
      },
      {
        path: "/vacancyCandidate",
        name: "vacancyCandidate",
        component: VacancyCandidate
      }
    ]
    }, {
      path: '/',
      redirect: '/',
      name: 'Pages',
      component: {
        render(c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: '',
          name: 'Page Initial',
          component: PageInitial,
        }
      ]
    }
  ]
})
