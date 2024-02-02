// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/HomeView.vue';
import Collection from './views/CardCollectionView.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/collection', component: Collection },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
