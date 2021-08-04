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

    div.multiple-election {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    div.election {
        background-color: var(--color4);
        padding: 10px;
    }

</style>

<div class="main">
    <h3>
        Information theory
    </h3>
    <div class="par">
        Information, or communication, are abstract and expansive topics. They are present everywhere, and
        used daily. If we look to the kind of topics that simple math usually deals with, like triangles, it
        may seem like finding a way to a analyze communications using math will lead to extremely complex 
        formulas and twisted methods, but that is not the case.
    </div>
    <div class="par">
        Before coming up with a theory to analyze information, we should first answer two questions:
        what do we want to find, and what do we actually have.
    </div>
    <div class="multiple-election">
        <div class="election"
             on:click={changeParagraph(1)}>
             What We Want
        </div>
        <div class="election"
             on:click={changeParagraph(2)}>
             What We Have
        </div>
    </div>
    <div class="par" id="WWW" style="display: {currentParagraph==1 ? 'block':'none'}">
        <emph> What do we want to get with this theory?</emph> In geometry, we sometimes want to get the area 
        of a geometrical shape. In economy, we want to get the expected benefits from selling a product. Here,
        we will try to find some kind of measure of information. The more this measure, the more information in
        a message. But the value of information is usually very subjective: what may be important for a person,
        may not be useful at all for another. So we need an objective measure. For example, saying "Today is raining"
        conveys less information than "Today is raining, unlike yesterday". How much less? That is the question.
    </div>
    <div class="par" id="WWH" style="display: {currentParagraph==2 ? 'block':'none'}">
        <emph> What is exactly information, to begin with?</emph> 
    </div>
    <!--
    <div class="par" > The first lesson of information theory deals with the value of information. But how can
        information be valorated? The winning lottery number of the next week is a more valuable information
        than the previous one, that's for sure. But this kind of value is very subjective: for some people:
        winning the lottery is more important than for other. Subjectiveness can not be analyzed with math.
        Instead, we first have to define clearly what we are talking about when we say
        information.
    </div>
    -->
</div>