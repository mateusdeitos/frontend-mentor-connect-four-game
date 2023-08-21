<script lang="ts">
  import Action from "../Action.svelte";
  import Logo from "../Logo.svelte";
  import Page from "../Page.svelte";
  import Board from "./Board.svelte";
  import { gameStore } from "../../stores";
</script>

<Page isGamePage>
  <div class="container">
    <div class="actions">
      <Action>MENU</Action>
      <Logo />
      <Action>RESTART</Action>
    </div>
    <Board state={$gameStore.board} />
  </div>
</Page>

<style>
  div.container {
    display: flex;
    flex-direction: column;
  }

  div.actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
</style>
