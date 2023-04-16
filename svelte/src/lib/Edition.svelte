<script lang="ts">
  import { EDITION_URLS } from '../constants/urls';
  import { addBehaviors, getTeiAsHtml5 } from '../services/tei';
  import behaviors from './behaviors';

  export let selectedEdition: 'sturm' | 'faustus' | null = null;

  let editionElement: HTMLElement;

  $: selectedEdition && getEdition();

  async function getEdition() {
    addBehaviors(behaviors[selectedEdition]);
    const data = await getTeiAsHtml5(EDITION_URLS[selectedEdition]);
    editionElement.innerHTML = '';
    editionElement.appendChild(data);
  }
</script>

<div bind:this={editionElement}></div>