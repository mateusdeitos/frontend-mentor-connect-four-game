<script lang="ts">
  import type { MouseEventHandler } from "svelte/elements";
  import Heading from "./Heading.svelte";

  export let onClick: MouseEventHandler<EventTarget> = () => {};
</script>

<button class="action" type="button" on:click={onClick}>
  <Heading xsmall>
    <slot />
  </Heading>
</button>

<style>
  button {
    border-radius: 20px;
    background: var(--dark-purple);
    padding: 10px 32px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    color: var(--white);
  }

  button:hover {
    background: var(--red);
  }
</style>
