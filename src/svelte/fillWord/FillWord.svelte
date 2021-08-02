<script lang="ts">
    import FillWordButton from "./FillWordButton.svelte";

    let letter = ["0", "?", "?"];
    let selectedID = 0;

    function select(newID: number){
        return ()=> {
            if (selectedID==newID){
                selectedID = 0;
            } else {
                selectedID = newID;
            }
        };

    }

    document.onkeydown = (e)=>{
        let key = e.key;
        if (key != "Shift"){
            letter[selectedID] = key;
        }
        selectedID = 0;
    }
    
</script>
 
<style>
    div.main {
        font-size: 30px;
    }
</style>

<div class="main">
    Me gusta esta cas<FillWordButton selected={selectedID==1} letter={letter[1]} on:click={select(1)} /> pero
    mas el coc<FillWordButton selected={selectedID==2} letter={letter[2]} on:click={select(2)} />e
</div>