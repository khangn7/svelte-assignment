<script>
    import Start from "./start.svelte";
    import Explain from "./explain.svelte";
</script>

<div>
    <Explain/>
    <Start on:message/>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>