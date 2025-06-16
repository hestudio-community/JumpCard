import { createApp } from "vue";
import JumpCard from "vue-plugin-jumpcard";
import "vue-plugin-jumpcard/dist/jumpcard.css";
import App from "./App.vue";

const app = createApp(App);
app.use(JumpCard);
app.mount("#app");
