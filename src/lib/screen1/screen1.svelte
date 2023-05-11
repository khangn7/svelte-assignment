<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    import Upload from "./upload.svelte";
    import Create from "./create.svelte";
    import Textarea from "./textarea.svelte";
    import Retrieve from "./retrieve.svelte";

    let blobId = "no file selected";

    let error_message = "";

    const MESSAGE_HANDLE = {
        "no id": () => {
            error_message = "please choose an existing file with the 'choose file' button";
            setTimeout(()=>{error_message = "";}, 3000);
        },
        "file created": () => {
            error_message = "remember the number above to visit the file again with the input field next time";
        },
        "file chosen": () => {
            return;
        },
        "invalid id": () => {
            error_message = "the file id number you entered is invalid";
            setTimeout(()=>{error_message = "";}, 3000);
        },
        "successful id": () => {
            error_message = "save successful";
            setTimeout(()=>{error_message = "";}, 3000);
        }
    }

    function messageHandle(event)
    {
        console.log(event.detail.text);
        MESSAGE_HANDLE[event.detail.text]();
    }

    function startScreen()
    {
        dispatch('message', {
            text: "start"
        });
    }

</script>

<div>
    <button id="goback-button" on:click={startScreen}>go back</button>
    <Textarea/>
    <Upload on:message={messageHandle}/>
    <Retrieve on:message={messageHandle}/>
    <span>file id:</span><p id="blobId">{blobId}</p>
    <Create on:message={messageHandle}/>

    <p id="error-message">{error_message}</p>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
    }
    p {
        font-size: larger;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    span {
        margin-top: 15px;
        font-size: larger;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    #blobId {
        margin-top: 0;
    }
    #goback-button {
        margin-bottom: 15px
    }
</style>