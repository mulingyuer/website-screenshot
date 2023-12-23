import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// css
import "tdesign-vue-next/dist/reset.css";
import "@/styles/reset.scss";

// plugin
import { tdesign } from "@/plugins/tdesign";
// @ts-ignore
import drag from "v-drag";

const app = createApp(App);

app.use(createPinia());
app.use(router);

// 激活插件
app.use(tdesign);
app.use(drag);

app.mount("#app");
