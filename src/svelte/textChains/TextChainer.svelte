<script lang="ts">

    let setChance = new Array(5).fill(0.2);
    let resChance = new Array(5).fill(new Array(5).fill(1))
    let currentChainText = new Array(5).fill("svebe");

</script>


<style>
    .tg  {border-collapse:collapse;border-color:#9ABAD9;border-spacing:0;}
    .tg td{background-color:#EBF5FF;border-color:#9ABAD9;border-style:solid;border-width:1px;color:#444;
      font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal;}
    .tg th{background-color:#409cff;border-color:#9ABAD9;border-style:solid;border-width:1px;color:#fff;
      font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
    .tg .tg-0lax{text-align:left;vertical-align:top}
</style>



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
    <td class="tg-0lax">{setChance[0]}</td>
    <td class="tg-0lax">{setChance[1]}</td>
    <td class="tg-0lax">{setChance[2]}</td>
    <td class="tg-0lax">{setChance[3]}</td>
    <td class="tg-0lax">{setChance[4]}</td>
</tr>
<tr>
    <td class="tg-0lax">Chain 1</td>
    <td class="tg-0lax">{resChance[0][0]}</td>
    <td class="tg-0lax">{resChance[0][1]}</td>
    <td class="tg-0lax">{resChance[0][2]}</td>
    <td class="tg-0lax">{resChance[0][3]}</td>
    <td class="tg-0lax">{resChance[0][4]}</td>
    <td class="tg-0lax">{currentChainText[0]}</td>
</tr>
<tr>
    <td class="tg-0lax">Chain 2</td>
    <td class="tg-0lax">{resChance[1][0]}</td>
    <td class="tg-0lax">{resChance[1][1]}</td>
    <td class="tg-0lax">{resChance[1][2]}</td>
    <td class="tg-0lax">{resChance[1][3]}</td>
    <td class="tg-0lax">{resChance[1][4]}</td>
    <td class="tg-0lax">{currentChainText[1]}</td>
</tr>
<tr>
    <td class="tg-0lax">Chain 3</td>
    <td class="tg-0lax">{resChance[2][0]}</td>
    <td class="tg-0lax">{resChance[2][1]}</td>
    <td class="tg-0lax">{resChance[2][2]}</td>
    <td class="tg-0lax">{resChance[2][3]}</td>
    <td class="tg-0lax">{resChance[2][4]}</td>
    <td class="tg-0lax">{currentChainText[2]}</td>
</tr>
<tr>
    <td class="tg-0lax">Chain 4</td>
    <td class="tg-0lax">{resChance[3][0]}</td>
    <td class="tg-0lax">{resChance[3][1]}</td>
    <td class="tg-0lax">{resChance[3][2]}</td>
    <td class="tg-0lax">{resChance[3][3]}</td>
    <td class="tg-0lax">{resChance[3][4]}</td>
    <td class="tg-0lax">{currentChainText[3]}</td>
</tr>
<tr>
    <td class="tg-0lax">Chain 5</td>
    <td class="tg-0lax">{resChance[4][0]}</td>
    <td class="tg-0lax">{resChance[4][1]}</td>
    <td class="tg-0lax">{resChance[4][2]}</td>
    <td class="tg-0lax">{resChance[4][3]}</td>
    <td class="tg-0lax">{resChance[4][4]}</td>
    <td class="tg-0lax">{currentChainText[4]}</td>
</tr>
</tbody>
</table>