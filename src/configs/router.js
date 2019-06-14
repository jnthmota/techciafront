import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/pages/home/Home')
const Candidate = () => import('@/pages/candidate/Candidate')
const Company = () => import('@/pages/company/Company')

// CANDIDATE
const CandidateUpdate = () => import('@/pages/candidate/update/CandidateUpdate');
const CandidatePersonalData = () => import('@/pages/candidate/update/PersonalData');

const teste = () => import('@/views/company/vacancy/CandidateVacancy');


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
    {
      path: "/teste",
      name: "teste",
      component: teste
    },
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
            // {
            //   path: 'experience',
            //   name: 'Experience',
            //   component: ExperienceCandidate,
            // },
            // {
            //   path: 'schooling',
            //   name: 'Schooling',
            //   component: SchoolingCandidate,
            // },
            // {
            //   path: 'profiles',
            //   name: 'Profiles',
            //   component: ProfilesCandidate,
            // },
            // {
            //   path: 'preferences',
            //   name: 'Preferences',
            //   component: PreferencesCandidate,
            // }, {
            //   path: 'skill',
            //   name: 'Skill',
            //   component: SkillsCandidate,
            // }, {
            //   path: 'language',
            //   name: 'Language',
            //   component: LanguageCandidate,
            // }
          ]
        }
      ]
    },
    {
      path: "/company",
      name: "Company",
      component: Company
    },
  ]
})
