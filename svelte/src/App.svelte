

<script lang="ts">
  import CETEI from 'CETEIcean';

  const tei = new CETEI();
  const urls = {
    sturm:
      'https://raw.githubusercontent.com/digicademy/sturm-exist-app/master/xml/quellen/01.briefe/1914-00-00/JVH/Q.01.19140322.JVH.01.xml',
    faustus:
      'https://raw.githubusercontent.com/evt-project/evt-sample-documents/master/EVT2js/data/text/marlowe.xml',
  }
 
  let editionElement;

  function onClick(mode: 'sturm' | 'faustus') {
    tei.getHTML5(urls[mode], (data) => {
      editionElement.innerHTML = '';
      editionElement.appendChild(data);
    });
  }
</script>

<main>
  <button on:click={() => onClick('sturm')}>Der Sturm</button>
  <button on:click={() => onClick('faustus')}>Faustus</button>

  <div bind:this={editionElement}></div>
</main>

