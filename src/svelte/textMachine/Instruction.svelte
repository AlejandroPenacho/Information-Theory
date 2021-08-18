<script lang="ts">

    let stage = 0;
    let maxStage = 4;
</script>

<div class="main">
    {#if stage===0}

    {:else if stage===1}

    {:else if stage===2}

    {:else if stage===3}

    {:else if stage===4}

    {/if}
    <div class="changeStageButtons">
        <div class="prev">
            Previous
        </div>
        <div class="next">
            Next
        </div>
    </div>
</div>