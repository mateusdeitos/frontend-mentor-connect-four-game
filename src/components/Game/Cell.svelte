<script lang="ts">
  export let value: PossibleSlotValue;
  export let row: number;
  export let col: number;
  export let offset = false;
</script>

<div class:one={value === 1} class:two={value === 2} class:offset />

<style>
  div {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: transparent;
    z-index: 13;
  }

  div.one {
    background-color: var(--red);
  }

  div.two {
    background-color: var(--yellow);
  }
</style>
