<script lang="ts">
  export let isGamePage = false;
</script>

<main class:game={isGamePage}>
  <slot />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: var(--dark-purple);
  }

  main.game {
    background-color: var(--purple);
  }
</style>
