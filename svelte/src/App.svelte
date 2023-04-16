<script lang="ts">
  import Header from './lib/Header.svelte';
  import Edition from './lib/Edition.svelte';

  let selectedEdition: 'sturm' | 'faustus';
</script>

<main>
  <Header on:editionSelected={(event) => (selectedEdition = event.detail)} />

  <div class="app-content">
    <Edition {selectedEdition} />
  </div>
</main>

<style>
  .app-content {
    padding: 2rem;
  }
</style>
