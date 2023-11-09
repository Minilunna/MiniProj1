import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../components/MainPage.vue';
import QuemSou from '../components/QuemSou.vue';
import QueFaco from '../components/QueFaco.vue';
import QueHobbies from '../components/QueHobbies.vue';

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/quem-sou',
    name: 'QuemSou',
    component: QuemSou,
  },
  {
    path: '/que-faco',
    name: 'QueFaco',
    component: QueFaco,
  },
  {
    path: '/hobbies',
    name: 'QueHobbies',
    component: QueHobbies,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
