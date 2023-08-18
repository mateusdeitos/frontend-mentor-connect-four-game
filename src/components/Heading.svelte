<script lang="ts">
  export let large = false;
  export let medium = false;
  export let small = false;
  export let xsmall = false;
</script>

{#if large}
  <h1><slot /></h1>
{:else if medium}
  <h2><slot /></h2>
{:else if small}
  <h3><slot /></h3>
{:else if xsmall}
  <h4><slot /></h4>
{:else}
  <h1><slot /></h1>
{/if}

<style>
  h1,
  h2,
  h3,
  h4 {
    font-family: "Space Grotesk";
    font-weight: 700;
    letter-spacing: 0px;
  }

  h1 {
    font-size: 56px;
    line-height: 71px;
  }

  h2 {
    font-size: 24px;
    line-height: 31px;
  }

  h3 {
    font-size: 20px;
    line-height: 26px;
  }

  h4 {
    font-size: 16px;
    line-height: 20.42px;
  }
</style>
