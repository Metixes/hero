import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import directives from "./diractives/index.js";
import Notifications from "@kyvg/vue3-notification";

const app = createApp(App);
directives.forEach((directive) => app.directive(directive.name, directive));
app.use(store).use(router).use(Notifications).mount("#app");
