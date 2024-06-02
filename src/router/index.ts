import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/FormView.vue'),
      children: [
        {
          path: 'adress',
          name: 'adress',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../components/pages/adress/AdressForm.vue')
        },
        {
          path: 'patient-info',
          name: 'patientInfo',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../components/pages/patient-info/PatientInfoForm.vue')
        },
        {
          path: 'issuer',
          name: 'issuer',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../components/pages/issuer/IssuerForm.vue')
        }
      ]
    }
  ]
})

export default router
