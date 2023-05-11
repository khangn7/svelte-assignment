<script>
    import {myfetch} from "./lib/fetching.js";
    
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    const MESSAGES = [
        "no id",
        "invalid id",
        "successful id"
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

    async function upload()
    {
        if (blobId().slice(0, 1) === "n")
        {
            message(0);
            return;
        }

        let fetchreturn = await myfetch("put", "/" + blobId(), {
            "0": document.getElementById("textarea").value // this works
        });

        if (fetchreturn["0"])
        {
            message(2);
        }
        else
        {
            message(1);
        }

    
    };

</script>

<button on:click={upload}>save</button>



