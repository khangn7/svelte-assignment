<script>
    import {myfetch} from "./lib/fetching.js";

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    const MESSAGES = [
        "no id",
        "invalid id"
    ];

    function message(m) 
    {
        dispatch('message', {
            text: MESSAGES[m]
        });
    }

    function blobId()
    {
        return document.getElementById("blobId").innerHTML;
    }

    async function retrieve()
    {
        if (blobId().slice(0, 1) === "n")
        {
            message(0);
            return;
        }

        let fetchreturn = await myfetch("get", "/" + blobId(), 0);

        if (!fetchreturn["0"])
        {
            message(1);
            return;
        }

        document.getElementById("textarea").value = fetchreturn["0"];
    };

</script>

<button id="retrieve-button" on:click={retrieve}>retrieve file</button>