<script lang="ts">
  import Game from "./components/Game/Game.svelte";
  import MainMenu from "./components/MainMenu/MainMenu.svelte";
  import { routerStore } from "./stores";
</script>

{#if $routerStore.route == "menu"}
  <MainMenu />
{/if}

{#if $routerStore.route == "game"}
  <Game />
{/if}

<style>
  :global(*) {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
</style>
