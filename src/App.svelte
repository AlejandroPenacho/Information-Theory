<script lang="ts">
    import Dice from "./svelte/Dice.svelte";
</script>

<style>
div#testBlock {
    height: 80px;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: aqua;
    user-select: none;
    cursor: pointer;
    transition: background-color 0.3s;
}

div#testBlock:hover {
    background-color: cadetblue;
}

div#testBlock:active {
    background-color: chartreuse;
    transition: background-color 0.1s;
}

div.diceBox {
    padding: 20px;
    background-color: green;
    display: flex;

}


</style>

<div class="diceBox">
    <Dice/>
    <Dice/>
    <Dice/>
</div>
