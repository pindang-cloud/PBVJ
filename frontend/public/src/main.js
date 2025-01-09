import { createApp } from "vue";
import "./style.css";
import "./assets/main.css";
import App from "./App.vue";
import routes from "./routes";
import stores from "./stores";

const app = createApp(App);

app.use(routes);
app.use(stores);
app.mount("#app");
