<script>
    // 1101540808192180224

    import {myfetch} from "./lib/fetching.js";

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    const MESSAGES = [
        "file chosen",
        "file created"
    ];

    function message(m) 
    {
        dispatch('message', {
            text: MESSAGES[m]
        });
    }

    
    let choosing_create_method = false;
    let blobId = "";

    function clickHandle()
    {
        choosing_create_method = !choosing_create_method;
    }

    async function fetchNew()
    {
        let response = await myfetch("post", "", {});

        response = response.slice(response.lastIndexOf("/") + 1);

        document.getElementById("blobId").innerHTML = response;

        message(1);

        choosing_create_method = !choosing_create_method;
    }

    function getInput()
    {
        document.getElementById("blobId").innerHTML = blobId;

        message(0);

        choosing_create_method = !choosing_create_method;
    }

</script>

<button on:click={clickHandle}>choose file</button>


{#if choosing_create_method}
    

    <div id="user-input-id">
        <p>create a new file or enter an existing file id</p>
        <button id="new-file-button" on:click={fetchNew}>new file</button><span>&nbsp;creates a new file</span><br>

        <button id="enter-button" on:click={getInput}>enter</button>
        <input type="text" bind:value={blobId} placeholder="id...">
        
    </div>
    
{/if}

<style>
    input {
        width: 200px;
        margin: 10px;
        margin-left: 0;
        padding: 5px;
    }
</style>