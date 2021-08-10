<script lang="ts">
    import Multiplier from "/src/svelte/symbols/Multiplier.svelte"
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
        From our experience with the smartwatch, it seems a question with 2 possible answers (let's call it 
        a 2-question) can be answered with a response with 2 possibilities (like "yes"-"no", let's call it
        a 2-response). Moreover, a 4-question, like the hour or the drink, can be answered with a pair of 
        2-responses. And, obviously, a 4-question can also be asnwered with a 4-response.
    </div>
    <Multiplier />
    <div class="par">
        So, two responses of a certain number can be used to answer a question of a higher number.
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