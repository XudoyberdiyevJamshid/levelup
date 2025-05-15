import "./assets/style/main.css";
import "vue-select/dist/vue-select.css";
import router from "./router";
import { createApp } from "vue";
import vSelect from "vue-select";
import App from "./App.vue";

import { createPinia } from "pinia";
import focus from "./dricetive/focus";
const pinia = createPinia();

const app = createApp(App);

app.component("v-select", vSelect);
app.directive("focus", focus);
app.use(router);
app.use(pinia);
app.mount("#app");
