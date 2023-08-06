import { createRouter, createWebHistory } from 'vue-router';
import ResumoProfissional from '@/components/ResumoProfissional.vue';
import Certificado from '@/components/Certificados_Profissionais.vue';
import Projetos from '@/components/Projetos_Profissionais.vue'


const routes = [
  { path: '/Resumo', component: ResumoProfissional },
  {path:'/Certificado',component:Certificado},
  {path:'/Projetos',component:Projetos}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
