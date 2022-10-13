import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { useElementPlus } from "../src/plugin/element-plus/index";

import "element-plus/dist/index.css";
import "./style/index.css";

const app = createApp(App);

app.use(createPinia()).use(router).use(useElementPlus);

app.mount("#app");
