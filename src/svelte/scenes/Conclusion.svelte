<script lang="ts">

</script>

<style>

</style>

<h1>Conclusions</h1>
<div class="par">
    So far, this has only been a small introduction to information theory, as explained in the first pages 
    of the original paper by Claude Shannon. As a quick summary of the main ideas shown here:
    <ol class="summary">
        <li>Information is transmitted with symbols out of a set of possible symbols.</li>
        <li>The amount of information sent in a message is called entropy, measured in bits.</li>
        <li>
            The entropy of a symbol is affected by the probability of that symbol. The more uniform are the 
            probabilities, the greater the entropy.
        </li>
        <li>
            If the output of one message affects the probability of the other, its entropy is reduced, since 
            we have gained some information about it.
        </li>
        <li>
            A communication channel is defined by the entropy it can send per unit of time. This implies that 
            compression can be performed. The lower the entropy of the message, the greater the maximum compression.
        </li>
    </ol>
</div>
<div class="par">
    There are, however, some important ideas that could not make it into this brief exaplanation. The most interesting 
    one is related to how a lower entropy can decrease the effect noise in the communication channel. Other key 
    point in the original paper was the analysis of continuous messages, rather than a discrete number of 
    symbols.
</div>
<div class="par">
    Covering all this would have been too much for an introduction, but I hope this small project has made you 
    curious enough to start investigating on your own. If that is the case, my first recommendation would be the 
    <a href="https://web.archive.org/web/19980715013250/http://cm.bell-labs.com/cm/ms/what/shannonday/shannon1948.pdf">original paper by Claude Shannon</a>, which is relatively easy to understand.
</div>