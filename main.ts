import { createApp } from "vue";
import { router } from "./router";
import App from "./App.vue";
import "./styles/global.scss";

import { VueQueryPlugin } from "@tanstack/vue-query";
import { createHead } from "@vueuse/head";

const head = createHead();

const app = createApp(App);
app.use(head);
app.use(VueQueryPlugin);
app.use(router);
app.mount("#app");
