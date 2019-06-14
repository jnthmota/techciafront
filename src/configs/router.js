import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/pages/home/Home')
const Candidate = () => import('@/pages/candidate/Candidate')
const Company = () => import('@/pages/company/Company')

// CANDIDATE
const CandidateUpdate = () => import('@/pages/candidate/update/CandidateUpdate');
const CandidatePersonalData = () => import('@/pages/candidate/update/PersonalData');
const CandidateAddress = () => import('@/pages/candidate/update/Address');
const CandidateExperience = () => import('@/pages/candidate/update/Experience');
const CandidateSchooling = () => import('@/pages/candidate/update/Schooling');
const CandidateLanguage = () => import('@/pages/candidate/update/Language');
const CandidateProfiles = () => import('@/pages/candidate/update/Profiles');
const CandidatePreferences = () => import('@/pages/candidate/update/Preferences');
const CandidateSkills = () => import('@/pages/candidate/update/Skills');

const ListVacancy = () => import('@/pages/company/vacancy/list/ListVacancy');
const VacancyCandidate = () => import('@/pages/company/vacancy/candidate/VacancyCandidate');
const VacancyCreate = () => import('@/pages/company/vacancy/create/VacancyCreate');

const VacancySchooling = () => import('@/pages/company/vacancy/create/Schooling');
const VacancyLanguage = () => import('@/pages/company/vacancy/create/Language');
const VacancyPreferences = () => import('@/pages/company/vacancy/create/Preferences');
const VacancySkills = () => import('@/pages/company/vacancy/create/Skills');

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
    },
    // {
    //   path: "/teste",
    //   name: "teste",
    //   component: teste
    // },
    {
      path: "/candidate",
      name: "Candidate",
      component: Candidate,
      redirect: '/candidate/candidate-update/personalData',
      children: [
        {
          path: "candidate-update",
          name: "Candidate Update",
          component: CandidateUpdate,
          children: [
            {
              path: 'personalData',
              name: 'CandidatePersonalData',
              component: CandidatePersonalData,
            },
            {
              path: 'address',
              name: 'CandidateAddress',
              component: CandidateAddress,
            },
            {
              path: 'experience',
              name: 'CandidateExperience',
              component: CandidateExperience,
            },
            {
              path: 'schooling',
              name: 'CandidateSchooling',
              component: CandidateSchooling,
            },
            {
              path: 'profiles',
              name: 'CandidateProfiles',
              component: CandidateProfiles,
            },
            {
              path: 'preferences',
              name: 'CandidatePreferences',
              component: CandidatePreferences,
            },
             {
              path: 'skills',
              name: 'CandidateSkills',
              component: CandidateSkills,
            }, 
            {
              path: 'language',
              name: 'CandidateLanguage',
              component: CandidateLanguage,
            }
          ]
        }
      ]
    },
    {
      path: "/company",
      name: "Company",
      component: Company,
      redirect: '/company/listVacancy',
      children: [
        {
        path: 'listVacancy',
        name: 'ListVacancy',
        component: ListVacancy
      },
        {
        path: '/vacancyCandidate/:id',
        name: 'VacancyCandidate',
        component: VacancyCandidate
      },
      {
        path: '/vacancyCreate',
        name: 'VacancyCreate',
        component: VacancyCreate,
        redirect: '/vacancyCreate/schooling',
        children: [
        {
          path: 'schooling',
          name: 'VacancySchooling',
          component: VacancySchooling,
        },
  
         {
          path: 'skills',
          name: 'CandidateSkills',
          component: VacancySkills,
        }, 
         {
          path: 'preferences',
          name: 'VacancyPreferences',
          component: VacancyPreferences,
        }, 
        {
          path: 'language',
          name: 'VacancyLanguage',
          component: VacancyLanguage,
        }]
      },
    ]
    },
  ]
})
