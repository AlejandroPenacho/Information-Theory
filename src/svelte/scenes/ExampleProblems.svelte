<script lang="ts">
    export let nextChapter;
    let currentSlide = 1;
    let totalSlides = 4;

    let opacityArray = [1, 0, 0, 0];

    $: {
        opacityArray.fill(0);
        opacityArray[currentSlide-1] = 1;
    }

    function changeSlide(change){
        return ()=>{
            currentSlide += change;
        }
    }

</script>

<style>
    div.main {
        padding: 20px;
        min-height: 100vh;
    }
    div.problem-block {
        display: grid;
        grid-template-columns: 20% auto 20%;
        height: max-content;
    }
    div.arrowBlock {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    div.arrow {
        background-color: var(--color4);
        width: 40%;
        height: 30mm;
        border-style: solid;
        border-radius: 5mm;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    div.arrow:hover {
        background-color: var(--color2);
    }
    div.arrow:active {
        background-color: var(--color1);
    }
    div.problem-container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    div.problem {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        top: 0px;
        transition: opacity 1s;
    }
    img {
        width: 70%;
        margin-bottom: 15px;
    }
    div.explanation {
        width: 70%;
    }

</style>

<div class="main">
    <h1>
        Some real life problems
    </h1>
    <p> Below, you can see three problems of real life, and how they were solved</p>

    <div class="problem-block">
        <div class="arrowBlock">
            <div class="arrow"
                 on:click={changeSlide(-1)}
                 style="display: {(currentSlide==1)? 'none':'flex'}">
                &lt
            </div>
        </div>
        <div class="problem-container">
            <div class="problem" style="position: relative; opacity: {opacityArray[0]}">
                <img src="/assets/img/problems/telegraph.jpg" alt="A woman with a telegraph"/>
                <div class="explanation">
                    Back when telegraphs were used for communications, the cost of a message was 
                    proportional to the number of characters it contained. In order to cheapen costs,
                    an useful strategy was to substitute common words (like "Hello") with a short
                    combination of letters that would not be used otherwise (like "hl").
                </div>
            </div>

            <div class="problem" style="opacity: {opacityArray[1]}">
                <img src="/assets/img/problems/aircrash.png" alt="Something"/>
                <div class="explanation">
                    Something terrible happened here
                </div>
            </div>

            <div class="problem" style="opacity: {opacityArray[2]}">
                <img src="/assets/img/problems/unnamed.jpg" alt="Something"/>
                <div class="explanation">
                    This is clearly a placeholder
                </div>
            </div>

            <div class="problem" style="opacity: {opacityArray[3]}">
                <div class="explanation">
                    What is the relation between the three previous problems? Well, all of them are,
                    as you may have assumed, related to communication. And all of them show how a
                    clear solution can be found, so some mathematical theory can be developed.
                </div>
                <div class="nextButton" on:click={nextChapter}>
                    Next page
                </div>
            </div>
        </div>
        <div class="arrowBlock">
            <div class="arrow"
                 style="display: {(currentSlide==totalSlides)? 'none':'flex'}"
                    on:click={changeSlide(1)}>
                &gt
            </div>
        </div>
    </div>
</div>