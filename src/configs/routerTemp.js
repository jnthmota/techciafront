import Vue from 'vue'
import Router from 'vue-router'


// Candidate
const Candidate = () => import('@/pages/candidate/AppCandidate');
const VacancysCandidate = () => import('@/pages/candidate/vacancy/AppVacancys');
const ViewProfile = () => import('@/pages/candidate/profile/AppViewProfile');
const EditProfile = () => import('@/pages/candidate/profile/AppEditProfile');

// Company
const Company = () => import('@/pages/company/AppCompany');
const VacancysCompany = () => import('@/pages/company/vacancy/AppVacancys');
const FormVacancy = () => import('@/pages/company/vacancy/AppFormVacancy');

Vue.use(Router)
export default new Router({
    mode: 'hash', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'open active',
    routes: [
        {
            path: '/',
            redirect: '/candidate',
        },
        {
            path: '/candidate',
            name: 'Candidate',
            redirect: '/candidate/vacancys',
            component: Candidate,
            children: [
                {
                    path: 'vacancys',
                    name: 'Vacancys',
                    component: VacancysCandidate
                },
                {
                    path: 'view-profile',
                    name: 'ViewProfile',
                    component: ViewProfile
                },
                {
                    path: 'edit-profile',
                    name: 'EditProfile',
                    component: EditProfile
                }
            ]
        },
        {
            path: '/company',
            name: 'Company',
            component: Company,
            redirect: '/company/vacancys',
            children: [
                {
                    path: 'vacancys',
                    name: 'Vacancys',
                    component: VacancysCompany
                },
                {
                    path: 'create-vacancy',
                    name: 'CreateVacancy',
                    component: FormVacancy
                },
                {
                    path: 'edit-vacancy/:id',
                    name: 'EditVacancy',
                    component: FormVacancy
                },
            ]
        }
    ]
})
