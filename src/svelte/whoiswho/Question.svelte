<script lang="ts">

    import * as ww from "../../ts/whoiswho/whoiswho";


    export let question: ww.Question;

</script>

<style>
    div.main {
        height: 40px;
        width: 200px;
        display: flex;
        flex-direction: column;
        align-content: center;
        margin: 10px;
        cursor: pointer;
    }
    div.name {
        background-color: yellowgreen;
        border-radius: 10px 10px 0px 0px;
    }
    div.entropy-data {
        background-color: chartreuse;
        border-radius: 0px 0px 10px 10px;
    }
</style>

<div class="main" on:mouseenter on:mouseleave on:click >
    <div class="name">
        {question.text}
    </div>
    <div class="entropy-data">
        {question.entropy.qEntropy}
    </div>
</div>