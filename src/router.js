import { createRouter, createWebHistory } from 'vue-router';
import ResumoProfissional from '@/components/ResumoProfissional.vue';

const routes = [
  { path: '/Resumo', component: ResumoProfissional }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
