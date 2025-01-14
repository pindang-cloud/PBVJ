import { createRouter, createWebHistory } from "vue-router";

// Import komponen halaman
import Home from "../views/home.vue";
import About from "../views/about.vue";
import Club from "../views/club.vue";
import Database from "../views/database.vue";
import Contact from "../views/contact.vue";
import Events from "../views/events.vue";
import Blog from "../views/blog.vue";
import "leaflet/dist/leaflet.css";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/club", name: "Club", component: Club },
  { path: "/database", name: "Database", component: Database },
  { path: "/contact", name: "Contac", component: Contact },
  { path: "/events", name: "Events", component: Events },
  { path: "/blog", name: "Blog", component: Blog },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
