<script lang="ts">
    let currentParagraph = 0;

    function changeParagraph(newPar){
        return ()=>{
            currentParagraph=newPar;
        }
    }
</script>

<style>
    div.main {
        padding: 10px;
        font-size: 15pt;
    }

    div.par {
        margin: 10px 0px 0px 0px
    }

    /*
    div.multiple-election {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    div.election {
        background-color: var(--color4);
        padding: 10px;
    }
    */
</style>

<div class="main">
    <h1> What is Information Theory</h1>
    <div class="par">
        As you may have noticed, there was some pattern here. Let's recall:
        - Binary questions could be answered with one yes-no response.
        - Cuaternary questions, with two yes-no responses.
        - Cuaternary questions can also be answered with only 1 4-ways answer.
        - If there are 8 possible answers, 3 yes-no responses are required.
    </div>
    <div class="par">
        What does this mean? Well, a questions is a request for information. How much information?
        Check for yourself a cuaternary questions demands double the answers than a binary questions,
        so it ask for double the information. And an 8-way for thrice the information.
    </div>
    <div class="par">
        For responses, a 4-way answer conveys the information of two yes-no answers, that is double the
        information. And for convenience, we will measure this information (asked or asnwered) in binary
        questions/answers, which we call bits!
    </div>
</div>