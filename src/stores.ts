import { writable } from "svelte/store";
import { createNewBoard } from "./helpers/game";

export const routerStore = writable<RouteStore>({ route: "menu" });

export const gameStore = writable<GameStore>({
  board: createNewBoard(),
});
