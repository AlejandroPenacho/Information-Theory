<script lang="ts">

    import {TextBuffer, TextGenerator} from "../../ts/wordGenerator/charTransfer"

    let currentlyRunning = false;

    let setChance : number[] = new Array(5).fill(0.2);
    let resChance : number[][] = new Array(5);

    let nSymbolsAtChain : number[][] = new Array(5);

    for (let i=0; i<5; i++){
        nSymbolsAtChain[i] = new Array(5).fill(0);
        resChance[i] = new Array(5).fill(0);
    }

    let nTotalSymbols : number[] = new Array(5).fill(0);

    let rawTable : Array<[number,string]> = [[2, "a"],[1,"b"],[1,"c"],[1,"d"],[1,"e"]];
    setChance = [2/6, 1/6, 1/6, 1/6, 1/6];

    let generator = new TextGenerator(rawTable);
    let buffers = new Array(5);

    for (let i=0; i<buffers.length; i++){
        buffers[i] = new TextBuffer(8);
    }


    function addToAllChain(n: number){
        for (let i=0; i<5; i++){
            for (let j=0; j<n; j++){
                let newTuple = generator.generateRandomSymbolWithIndex();
                nSymbolsAtChain[i][newTuple[1]] += 1;
                nTotalSymbols[i] += 1;
                buffers[i].add(newTuple[0]);
            }
            for (let j=0; j<5; j++){
                resChance[i][j] = nSymbolsAtChain[i][j]/nTotalSymbols[i];
            }
        }
        buffers = buffers;
        nSymbolsAtChain = nSymbolsAtChain;
        nTotalSymbols = nTotalSymbols;
    }

    function clickFun(){
        if (!currentlyRunning){
            currentlyRunning = true;
            requestAnimationFrame(getFrame);
        } else {
            currentlyRunning = false;
        }
    }

    function getFrame(){
        addToAllChain(5);
        if (currentlyRunning){
            requestAnimationFrame(getFrame);
        }
    }

</script>


<style>
    .tg  {border-collapse:collapse;border-color:#9ABAD9;border-spacing:0;}
    .tg td{background-color:#EBF5FF;border-color:#9ABAD9;border-style:solid;border-width:1px;color:#444;
      font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal;}
    .tg th{background-color:#409cff;border-color:#9ABAD9;border-style:solid;border-width:1px;color:#fff;
      font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
    .tg .tg-0lax{text-align:left;vertical-align:top}
</style>


<div style="width: 20px; height: 20px; background-color: red"
     on:click={clickFun}>
</div>

<table class="tg">
<thead>
<tr>
    <th class="tg-0lax"></th>
    <th class="tg-0lax">a</th>
    <th class="tg-0lax">b</th>
    <th class="tg-0lax">c</th>
    <th class="tg-0lax">d</th>
    <th class="tg-0lax">e</th>
</tr>
</thead>
<tbody>
<tr>
    <td class="tg-0lax">Set<br></td>
    <td class="tg-0lax">{setChance[0].toFixed(3)}</td>
    <td class="tg-0lax">{setChance[1].toFixed(3)}</td>
    <td class="tg-0lax">{setChance[2].toFixed(3)}</td>
    <td class="tg-0lax">{setChance[3].toFixed(3)}</td>
    <td class="tg-0lax">{setChance[4].toFixed(3)}</td>
</tr>
<tr>
    <td class="tg-0lax">Chain 1</td>
    <td class="tg-0lax">{resChance[0][0].toFixed(3)}</td>
    <td class="tg-0lax">{resChance[0][1].toFixed(3)}</td>
    <td class="tg-0lax">{resChance[0][2].toFixed(3)}</td>
    <td class="tg-0lax">{resChance[0][3].toFixed(3)}</td>
    <td class="tg-0lax">{resChance[0][4].toFixed(3)}</td>
    <td class="tg-0lax">{buffers[0].buffer}</td>
</tr>
<tr>
    <td class="tg-0lax">Chain 2</td>
    <td class="tg-0lax">{resChance[1][0].toFixed(3)}</td>
    <td class="tg-0lax">{resChance[1][1].toFixed(3)}</td>
    <td class="tg-0lax">{resChance[1][2].toFixed(3)}</td>
    <td class="tg-0lax">{resChance[1][3].toFixed(3)}</td>
    <td class="tg-0lax">{resChance[1][4].toFixed(3)}</td>
    <td class="tg-0lax">{buffers[1].buffer}</td>
</tr>
<tr>
    <td class="tg-0lax">Chain 3</td>
    <td class="tg-0lax">{resChance[2][0].toFixed(3)}</td>
    <td class="tg-0lax">{resChance[2][1].toFixed(3)}</td>
    <td class="tg-0lax">{resChance[2][2].toFixed(3)}</td>
    <td class="tg-0lax">{resChance[2][3].toFixed(3)}</td>
    <td class="tg-0lax">{resChance[2][4].toFixed(3)}</td>
    <td class="tg-0lax">{buffers[2].buffer}</td>
</tr>
<tr>
    <td class="tg-0lax">Chain 4</td>
    <td class="tg-0lax">{resChance[3][0].toFixed(3)}</td>
    <td class="tg-0lax">{resChance[3][1].toFixed(3)}</td>
    <td class="tg-0lax">{resChance[3][2].toFixed(3)}</td>
    <td class="tg-0lax">{resChance[3][3].toFixed(3)}</td>
    <td class="tg-0lax">{resChance[3][4].toFixed(3)}</td>
    <td class="tg-0lax">{buffers[3].buffer}</td>
</tr>
<tr>
    <td class="tg-0lax">Chain 5</td>
    <td class="tg-0lax">{resChance[4][0].toFixed(3)}</td>
    <td class="tg-0lax">{resChance[4][1].toFixed(3)}</td>
    <td class="tg-0lax">{resChance[4][2].toFixed(3)}</td>
    <td class="tg-0lax">{resChance[4][3].toFixed(3)}</td>
    <td class="tg-0lax">{resChance[4][4].toFixed(3)}</td>
    <td class="tg-0lax">{buffers[4].buffer}</td>
</tr>
</tbody>
</table>