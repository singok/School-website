import { createWebHistory, createRouter } from "vue-router";

import Dashboard from './components/dashboard/Dashboard.vue';
import DashboardNews from './components/dashboard/DashboardNews.vue';
import DashboardMain from './components/dashboard/DashboardMain';

const routes = [
    {
      name: 'Dashboard',
      path: '/',
      component: Dashboard,
      children: [
        {
          name: 'DashboardMain',
          path: '/dashboard',
          component: DashboardMain
        },
        {
          name: 'News',
          path: '/news',
          component: DashboardNews
        }
      ]
	  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

