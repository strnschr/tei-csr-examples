<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function onClick(mode: 'sturm' | 'faustus') {
    dispatch('editionSelected', mode);
  }
</script>

<header>
  <h1>TEI CSR</h1>

  <div class="actions">
    <button on:click={() => onClick('sturm')}>Der Sturm</button>
    <button on:click={() => onClick('faustus')}>Faustus</button>
  </div>
</header>

<style>
  header {
    display: flex;
    padding: 0 16px;
    gap: 20px;
    background-color: rgb(93, 189, 221);
    justify-content: space-between;
  }

  .actions {
    align-self: center;
  }
</style>