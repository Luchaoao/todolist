import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import todolist2 from '@/views/todolist-Method-2st.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/todolist-2',
      name: 'todolist-2',
      component: todolist2
    },
  ],
});

export default router;
