<script lang="ts">

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
</style>

<div id="testBlock">
    JAJA
</div>