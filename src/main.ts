import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { MotionPlugin } from "@vueuse/motion";
import { useElementPlus } from "../src/plugin/element-plus/index";

import "element-plus/dist/index.css";
import "./style/index.css";
// 重置的样式
import "normalize.css";

const app = createApp(App);

app.use(createPinia()).use(router).use(useElementPlus).use(MotionPlugin);

app.mount("#app");
