<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function messageStart()
    {
        dispatch("message", {
            text: "start"
        })
    }

</script>

<button on:click={messageStart}>start</button>

<style>
    button {
        width: 100px;
        background-color: rgb(173, 173, 173); /* Green */
        border: none;
        color: white;
        padding: 15px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;

        border-radius: 5px;
    }

    button:hover {
        background-color: rgb(30, 165, 64);
    }
</style>