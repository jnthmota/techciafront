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
            //  {
            //   path: 'skill',
            //   name: 'Skill',
            //   component: SkillsCandidate,
            // }, 
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
      component: Company
    },
  ]
})
