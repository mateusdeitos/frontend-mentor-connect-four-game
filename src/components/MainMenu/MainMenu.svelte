<script lang="ts">
  import Page from "../Page.svelte";
  import playerVsPlayerIcon from "../../assets/images/player-vs-player.svg";
  import Button from "../Button.svelte";
  import { routerStore } from "../../stores";
  import Logo from "../Logo.svelte";

  function startGame() {
    $routerStore.route = "game";
  }
</script>

<Page>
  <div class="container">
    <Logo />
    <div class="actions">
      <Button variant="primary" icon={playerVsPlayerIcon} onClick={startGame}>
        PLAYER VS PLAYER
      </Button>
      <Button>GAME RULES</Button>
    </div>
  </div>
</Page>

<style>
  div.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 70px 40px 60px 40px;
    border-radius: 40px;
    border: 3px solid var(--black);
    background: var(--purple);
    box-shadow: 0px 10px 0px 0px var(--black);
    gap: 80px;
  }

  div.actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;
  }
</style>
