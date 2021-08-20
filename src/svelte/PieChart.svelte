<script lang="ts">
    export let percentageList;

    let angleList = new Array(7);
    let onlyOneValue;
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
        if (percentageList[0] === 1){
            onlyOneValue = true;
        } else {
            onlyOneValue = false;
            for (let i=0; i<5; i++){
                angleList[i+1] = angleList[i] + percentageList[i]*2*Math.PI;
            }
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
</style>

<div>
        <svg width="50mm" height="50mm" viewBox="-1 -1 202 202" id="main">
            {#if onlyOneValue}
                <circle
                    style="fill:{colorList[0]};fill-opacity:1;stroke:#000000;stroke-width:1.500;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none"
                    cx="100" cy="100" r="100" />
            {:else}
                {#each [...Array(colorList.length).keys()] as index}
                    <path 
                    style="fill:{colorList[index]};fill-opacity:1;stroke:#000000;stroke-width:1.500;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none"
                    d={generatePath(200, angleList[index], angleList[index+1])} />
                {/each}
            {/if}
        </svg>
</div>