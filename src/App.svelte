<script>
  // welcome screen
  import Screen0 from "./lib/screen0/screen0.svelte";

  // use screen
  import Screen1 from "./lib/screen1/screen1.svelte";

  const HANDLE_MESSAGES = {
    "start": () => {
      sessionStart = !sessionStart;
    }
  };

  function handleMessage(event)
  {
    HANDLE_MESSAGES[event.detail.text]();
  }

  let sessionStart = false;

</script>

{#if sessionStart}

  <Screen1 on:message={handleMessage}/>

{:else}

  <Screen0 on:message={handleMessage}/>

{/if}


