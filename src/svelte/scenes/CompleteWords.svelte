<script lang="ts">
    import FillWord from "/src/svelte/fillWord/FillWord.svelte";
    import FillWordButton from "/src/svelte/fillWord/FillWordButton.svelte"
</script>

<style>
    div.main {
        padding: 10px;
        font-size: 15pt;
    }

    div.par {
        margin: 10px 0px 0px 0px
    }
    div.sentence {
        text-align: center;
        font-size: xx-large;
        padding-top: 0.4cm;
        padding-bottom: 0.4cm;
    }
    span.q{
        color: chartreuse;
    }
</style>

<div class="main">
    <div class="par">
        Check now the following sentences. All of them are missing one character (?), can you guess which one?
    </div>
    <div class="sentence">
        I have found a c<span class="q">?</span>in under the desk
    </div>
    <div class="sentence">
        This sh<span class="q">?</span>p is wonderful
    </div>
    <div class="sentence">
        I call at my number: 923 273 4<span class="q">?</span>8
    </div>
    <div class="par">
        Probably you have guessed the first one. The second one, however, is not clear: could be either 'o' or 'i'.
        And for the third one, any number would be right.
    </div>
    <div class="par">
        So far, we have talked about information without considering the probability of each response. But now,
        we can agree that recieving the missing letter of the first sentence would be pointless: we can guess it.
        For the third sentence, however, we only now it is a number.
    </div>
</div>