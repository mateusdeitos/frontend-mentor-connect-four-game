<script lang="ts">
  import Cell from "./Cell.svelte";
  import BlackBoardLayer from "../../assets/images/board-layer-black-large.svg";
  import WhiteBoardLayer from "../../assets/images/board-layer-white-large.svg";

  export let state: BoardType;
</script>

<div class="container">
  <img class="black" src={BlackBoardLayer} alt="" />
  <img class="white" src={WhiteBoardLayer} alt="" />
  <div class="board">
    {#each state as row, i}
      {#each row as value, j}
        <Cell {value} row={i} col={j} />
      {/each}
    {/each}
  </div>
</div>

<style>
  div.container {
    display: grid;
    grid-template-columns: 1fr;
  }

  img {
    grid-row-start: 1;
    grid-column-start: 1;
  }

  img.black {
    z-index: 10;
  }

  img.white {
    z-index: 12;
  }

  div.board {
    grid-row-start: 1;
    grid-column-start: 1;
    display: grid;
    /* 6 rows and 7 columns */
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: repeat(7, 1fr);
    gap: 24px;
    row-gap: 24px;
    padding: 24px;
    width: 632px;
    height: 584px;

    border-radius: 40px;
    border: 3px solid #000;
    box-shadow: 0px 10px 0px 0px #000;

    z-index: 11;
  }
</style>
