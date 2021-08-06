<script lang="ts">
    import TextGenerator from "/src/svelte/textGen/TextGenerator.svelte";
    import TextChainer from "/src/svelte/textChains/TextChainer.svelte";
</script>

<style>
    div.main {
        padding: 10px;
        font-size: 15pt;
    }

    div.par {
        margin: 10px 0px 0px 0px
    }
</style>

<div class="main">
    <h1>Too Much Text</h1>
    <div class="par">
        Now, instead of dice, we have a generator of random characters, whose probabilities you can change.
        This generator creates "messages", although none of use understand them. But they are not that different
        from any other method of communication. As with dice, if we generate a very long message, the percentage
        of each character wil tend to a fix number. That means that some messages will become impossible, due to
        their extreme improbability. And we can take advantage of this to compress messages.
    </div>
</div>
<TextChainer />

