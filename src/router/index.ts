import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import taskList from '../views/task-list.vue';
import taskNew from '../views/task-new.vue';
import taskDetails from '../views/task-details.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Task list',
    component: taskList,
  },
  {
    path: '/new',
    name: 'Create new task',
    component: taskNew,
  },
  {
    path: '/tasks/:id',
    name: 'Task details',
    component: taskDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
