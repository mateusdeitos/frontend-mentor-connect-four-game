<script lang="ts">
  import type { MouseEventHandler } from "svelte/elements";
  import Heading from "./Heading.svelte";
  export let variant: "default" | "primary" | "danger" = "default";
  export let icon: string = "";
  export let onClick: MouseEventHandler<EventTarget> = () => {};
</script>

<button class={`variant-${variant}`} type="button" on:click={onClick}>
  <Heading medium><slot /></Heading>
  {#if icon}
    <img src={icon} alt="icon" />
  {/if}
</button>

<style>
  button {
    border-radius: 20px;
    border: 3px solid var(--black);
    background: var(--yellow);
    box-shadow: 0px 10px 0px 0px var(--black);
    color: var(--black);
    cursor: pointer;

    transition: all 0.2s ease-in-out;
    padding: 12px 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;

    width: 400px;
    height: 72px;
  }

  button:hover {
    border: 3px solid var(--dark-purple);
    box-shadow: 0px 10px 0px 0px var(--dark-purple);
  }

  button:active {
    transform: translateY(5px);
    box-shadow: 0px 5px 0px 0px var(--dark-purple);
  }

  button.variant-primary {
    background: var(--yellow);
  }

  button.variant-danger {
    background: var(--red);
    color: var(--white);
  }

  button.variant-default {
    background: var(--white);
  }
</style>
