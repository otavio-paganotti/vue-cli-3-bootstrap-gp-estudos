import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../layouts/Home.vue'),
    children: [
      {
        path: '/cadastro',
        name: 'formulario-cadastro',
        component: () => import('../components/Cadastro.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
