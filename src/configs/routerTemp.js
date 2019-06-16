import Vue from 'vue'
import Router from 'vue-router'


// Candidate
const Candidate = () => import('@/pages/candidate/AppCandidate');
const VacancysCandidate = () => import('@/pages/candidate/vacancy/AppVacancys');
const ViewProfile = () => import('@/pages/candidate/profile/AppViewProfile');
const EditProfile = () => import('@/pages/candidate/profile/AppEditProfile');

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
                    name: 'Vagas',
                    component: VacancysCandidate
                },
                {
                    path: 'view-profile',
                    name: 'Visualizar Perfil',
                    component: ViewProfile
                },
                {
                    path: 'edit-profile',
                    name: 'Editar Perfil',
                    component: EditProfile
                }
            ]
        }


    ]
})
