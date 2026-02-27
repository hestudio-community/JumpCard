import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import JumpCard from "vue-plugin-jumpcard";
import "vue-plugin-jumpcard/dist/jumpcard.css";
import App from "./App.vue";
import MainPage from "./MainPage.vue";
import SlotsTest from "./SubTest/SlotsTest.vue";
import AvatarsTest from "./SubTest/AvatarsTest.vue";
import AutoGenerateTest from "./SubTest/AutoGenerateTest.vue";
import MinimizeTest from "./SubTest/MinimizeTest.vue";

const routes = [
  { path: "/", component: MainPage },
  { path: "/slotstest", component: SlotsTest },
  { path: "/avatarstest", component: AvatarsTest },
  { path: "/autogeneratetest", component: AutoGenerateTest },
  { path: "/minimizetest", component: MinimizeTest },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(JumpCard, {
  externalButtonText: ({ link }) => {
    const url = new URL(link);
    return `Open ${url.host}`;
  },
  internalButtonText: ({ header }) => {
    return `Jump to ${header}`;
  },
  onClickExternalLinkButton: (link) => {
    if (confirm(`Do you want to open ${link}?`)) window.open(link, "_blank");
  },
});
app.use(router);
app.mount("#app");
