import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";

const router = createRouter({
	history: createWebHistory(import.meta.env.DEV ? "/" : "/website-screenshot"),
	routes
});

export default router;
