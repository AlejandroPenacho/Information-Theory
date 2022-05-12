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
    div.par {
        margin: 4mm;
    }
    div.problem-block {
        padding: 3em;
        margin-top: 12mm;
        display: grid;
        grid-template-columns: 20% auto 20%;
        height: max-content;
        border-radius: 4mm;
        border-style: solid;
        border-width: 1mm;
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
        Everyday Communications
    </h1>
    <div class="par">
        Hello! Thank you for passing by! In this small project I want to show you what is information theory, an 
        interesting branch of mathematics that deals with information (the name kind of hints at it). But before, 
        find below 3 real life cases related to the topic. Move through the cases with the arrows at the sides. 
    </div>
    <div class="par">
        One last thing, this page was made for computer, rather than smartphone or tablet. Sorry! You can still 
        see the most part of it without a mouse, but some parts require hovering, and you will have to skip them.
        This can be done by clicking on the chapters at the left.
    </div>
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
                <img src="./assets/img/problems/telegraph.jpg" alt="A woman with a telegraph"/>
                <div class="explanation">
                    Back when telegraphs were used for communications, it was usually a priority to
                    reduce as much as possible the number of characters in a telegram, in order to decrease 
                    costs. Telegraph operators would shorten commonly used words: for example, "ty" would be 
                    used instead of "they", or "hw" instead of "how". Since neither "ty" or "hw" are words with 
                    meaning, the person who would receive the problem would have no problem recovering the 
                    original words.
                </div>
            </div>

            <div class="problem" style="opacity: {opacityArray[1]}">
                <img src="https://www.maxpixel.net/static/photo/1x/Hello-Bonjour-Ciao-Hi-Hola-Languages-Words-1907233.png" alt="Something"/>
                <div class="explanation">
                    As there are many different languages in the world, each one has its own particularity. For 
                    example, the mean word length changes a lot from language to language. While words in mongolian 
                    have a mean length of almost 12 characters, the mean length in croatian is close to only 7!
                </div>
            </div>

            <div class="problem" style="opacity: {opacityArray[2]}">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tenerife747s.png/800px-Tenerife747s.png" alt="Something"/>
                <div class="explanation">
                    On March 27, 1977, took place the deadliest accident in the history of aviation, when two 
                    747s collided in the Los Rodeos airport, Spain. Among the causes, some phrases spoken by the 
                    control tower were found to be ambigous when there was some kind of disturbance in the communication. 
                    That is, a phrase like "Don't take off", if the first word was not correctly heard, could be completely 
                    misunderstood. By repeating messages (that is, addind redundancy to the communication) such kind of erros 
                    could be mitigated.
                </div>
            </div>

            <div class="problem" style="opacity: {opacityArray[3]}">
                <div class="explanation">
                    What is the relation between the three previous problems? Well, all of them are,
                    as you may have assumed, related to communication. What might be unexpected is how, in 
                    the 1940s, a mathematical theory to shine some light on this topic was developed by 
                    electrical engineer Claude Shannon. In this little project, I will provide a little 
                    introduction to this fascinating topic.
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