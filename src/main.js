//vue services
import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import directives from "./directives/index.js";

//notification library
import Notifications from "@kyvg/vue3-notification";

//ui library
import Antd from "ant-design-vue";

const app = createApp(App);

directives.forEach((directive) => app.directive(directive.name, directive));

app.use(store).use(router).use(Notifications).use(Antd).mount("#app");
