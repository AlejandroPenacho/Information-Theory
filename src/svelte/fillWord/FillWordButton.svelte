<script lang="ts">
    let letter = "F";

    let currentlySelected = false;
    let backColor;

    $: backColor = currentlySelected ? "#7FFF00" : "#00FFFF";


    function click_function(){
        currentlySelected = !currentlySelected;
        if (currentlySelected){
            letter="?";
        }
    }

    function processKeyDown(e){
        if (e.key != "Shift" && currentlySelected){
            letter = e.key;
            currentlySelected = !currentlySelected;
        }
        
    }

    document.onkeydown = processKeyDown;

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

<span style="background-color: {backColor}" on:click={click_function}>
    {letter}
</span>