import { writable } from "svelte/store";

export const routerStore = writable<RouteStore>({ route: "menu" });
