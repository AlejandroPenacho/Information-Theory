<script lang="ts">

    export let letter;

    export let selected;
    let backColor;

    $: backColor = selected ? "#7FFF00" : "#00FFFF";

</script>

<style>
    span {
        padding: 0px 3px;
        background-color: #00FFFF;
        text-align: center;
        border-radius: 5px;
        border: 2px solid black;
        cursor: pointer;
    }
</style>

<span style="background-color: {backColor}" on:click>
    {letter}
</span>