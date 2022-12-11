import { createApp } from "vue";
import App from "./App.vue";
import Vue3Tailwind from "vue3-tailwind";
import CodeHighlight from "./components/CodeHighlight.vue";

import "./assets/main.css";

createApp(App)
  .use(Vue3Tailwind)
  .component("CodeHighlight", CodeHighlight)
  .mount("#app");
