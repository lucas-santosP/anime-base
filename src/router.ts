import { createRouter, createWebHistory } from "vue-router";
import AnimeDetails from "./pages/AnimeDetails.vue";
import Home from "./pages/Home.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/anime/:id", component: AnimeDetails },
];
const router = createRouter({ history: createWebHistory(), routes });

export { router };
