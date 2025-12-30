import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import JumpCard from "vue-plugin-jumpcard";
import "vue-plugin-jumpcard/dist/jumpcard.css";
import App from "./App.vue";
import MainPage from "./MainPage.vue";
import SlotsTest from "./SlotsTest.vue";

const routes = [
  { path: "/", component: MainPage },
  { path: "/slotstest", component: SlotsTest },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(JumpCard);
app.use(router);
app.mount("#app");
