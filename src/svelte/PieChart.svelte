<script lang="ts">
    export let percentageList;

    let angleList = new Array(7);
    angleList[0] = 0;
    angleList[6] = 0;

    let colorList = [
        "#96BBBB",
        "#618985",
        "#414535",
        "#F2E3BC",
        "#C19875",
        "#FDE74C"
    ]

    $: {
        for (let i=0; i<5; i++){
            angleList[i+1] = angleList[i] + percentageList[i]*2*Math.PI;
        }
    }

    function generatePath(squareSize, initialAngle, finalAngle){
        let radius = squareSize/2;
        let largeArc = ((finalAngle-initialAngle) > Math.PI) ? 1 : 0;
        let path = `M ${squareSize/2} ${squareSize/2} `
        path += `L ${radius*(1+Math.cos(initialAngle))} ${radius*(1+Math.sin(initialAngle))} `
        path += `A ${radius} ${radius} 0 ${largeArc} 1 ${radius*(1+Math.cos(finalAngle))} ${radius*(1+Math.sin(finalAngle))} Z`

        return path
    }

</script>

<style>
    div {
        height: 80mm;
    }
    svg {
        position: absolute
    }
</style>

<div>
    {#each [...Array(colorList.length).keys()] as index}
        <svg width="50mm" height="50mm" viewBox="-1 -1 202 202" id="main">
            <path 
            style="fill:{colorList[index]};fill-opacity:1;stroke:#000000;stroke-width:1.500;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none"
            d={generatePath(200, angleList[index], angleList[index+1])} />
        </svg>
    {/each}
</div>