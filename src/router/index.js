
import { createRouter, createWebHashHistory } from 'vue-router';
import LayoutDefault from '@/layouts/default/Default.vue';
import Empresas from '@/views/EmpresasView.vue';

const routes = [
  {
    path: '/',
    component: LayoutDefault,
    children: [
      {
        path: '/',
        name: 'Empresas',
        component:  Empresas,

      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
