import { createRouter, createWebHistory } from "vue-router";
import AnimeDetails from "./pages/anime/[id].vue";
import Home from "./pages/index.vue";
import About from "./pages/about.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/anime/:id", component: AnimeDetails },
];
const router = createRouter({ history: createWebHistory(), routes });

export { router };
