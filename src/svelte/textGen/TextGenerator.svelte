<script lang="ts">
    import * as cg from "../../ts/wordGenerator/charGen";

    let generator = new cg.TextGenerator([[2, "a"],[1, "b"],[1, "c"]]);
    let coder = new cg.TextTransformer([["a","0"],["b","10"],["c","11"]]);

    let buffer1 = new cg.TextBuffer(10);
    let buffer2 = new cg.TextBuffer(10);

    function moreToTheChain(){
        buffer2.add(coder.transform(buffer1.add(generator.generate(1))));
        buffer1 = buffer1;
        buffer2 = buffer2;
    }
</script>

<style>
    div.main {
        font-size: 40px;
    }
    div.button {
        height: 30px;
        width: 30px;
        background-color: blue;
    }
    div.buffers {
        display: flex;
        text-align: right;
    }
</style>

<div class="main">
    <div class="button" on:click={moreToTheChain}></div>
    <div class="buffers">
        <div>
            {buffer2.buffer}
        </div>
        <div>
            {buffer1.buffer}
        </div>
    </div>
</div>
