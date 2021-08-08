<script lang="ts">

    import { onMount } from "svelte";
import Message from "../watch/Message.svelte";
    import Watch from "/src/svelte/watch/Watch.svelte"

    interface MessageStage {
        change: ChangeCause,
        allowAnswer: boolean,
        time: number,
        nMessages: number,
        newInstruction: boolean,
        message: string
    }

    enum ChangeCause {
        Message,
        Timeout,
        Any
    }

    let sendWatchMessage: (string)=>void;
    let changeStatus: (boolean)=>void;

    let instructionStage = 0;
    let messageStage = 0;
    let messageStages: MessageStage[] = [
        {change: ChangeCause.Message, allowAnswer: true, nMessages: 1, time: 0, newInstruction: false, message: 
        `Heyy! Are you finally coming to dinner tonigh?`},
        {change: ChangeCause.Any, allowAnswer: true, nMessages: 1, time: 5000, newInstruction: true, message:
        `Ok, I'll buy pizzas? Do you prefer ham or pineapple?`},
        {change: ChangeCause.Message, allowAnswer: true, nMessages: 1, time: 0, newInstruction: false, message:
        `Oh, right. Say yes for ham, no for pineapple`},
        {change: ChangeCause.Timeout, allowAnswer: false, nMessages: 0, time: 6000, newInstruction: false, message: 
        `Perfect!`},
        {change: ChangeCause.Any, allowAnswer: true, nMessages: 1, time: 5000, newInstruction: true, message:
        `At which hour should we meet?`},
        {change: ChangeCause.Any, allowAnswer: true, nMessages: 1, time: 4000, newInstruction: false, message:
        `Mmmmh. 20.00, 20.30, 21.00 or 21.30?`},
        {change: ChangeCause.Message, allowAnswer: true, nMessages: 1, time: 0, newInstruction: false, message:
        `Okay, yes for 20 and no for 21`},
        {change: ChangeCause.Message, allowAnswer: true, nMessages: 1, time: 0, newInstruction: false, message:
        `And yes for .00 and no for .30`},
        {change: ChangeCause.Message, allowAnswer: true, nMessages: 1, time: 0, newInstruction: true, message:
        `Ok, fine, are you ok with something?`},
        {change: ChangeCause.Message, allowAnswer: true, nMessages: 2, time: 0, newInstruction: true, message:
        `And for the drinks: water, coke, nestea or orange juice`},
        {change: ChangeCause.Message, allowAnswer: false, nMessages: 1, time: 0, newInstruction: true, message:
        `Great, see you then!`},

    ]

    let currentChangeCause: ChangeCause;
    let nMessagesLeft: number;
    let currentTimeout = undefined;

    let instructionText: Array<string> = [
        `First of all, answering yes or no questions in this device is no problem, as you can see. 
        You can respond just by pressing the two buttons at the bottom.`,
        `There are, however, simple questions that at first can not be answered. However, if your 
        friend and you agree in a simple format, as here, everything works fine.`,
        `So, binary questions can be easily answered here. But what about harder questions?`,
        `Ah! When there are four possibilities, two binary answers seem to be enough. Great!`,
        `Your friend and you can agree in an uniform method for 4-questions, like: 1st no-no, 
        2nd yes-no, 3rd no-yes and 4th yes-yes.`,
        `DONE`
    ]

    function sentMessage(text: number): void {
        checkMessageStageChange();
    }

    function checkMessageStageChange(){
        if (currentChangeCause === ChangeCause.Timeout){
            return
        }
        nMessagesLeft --;
        if (nMessagesLeft <= 0){
            changeStatus(false);
            setTimeout(()=> changeMessageStage(messageStage + 1), 2000);
        }
    }

    function changeMessageStage(stageNumber){

        messageStage = stageNumber;

        if (currentTimeout !== undefined){
            clearTimeout(currentTimeout);
        }

        let stage = messageStages[stageNumber];
        currentChangeCause = stage.change;
        if (stage.newInstruction){
            instructionStage ++;
        }
        changeStatus(stage.allowAnswer);

        if ((stage.change===ChangeCause.Timeout) || (stage.change===ChangeCause.Any)){
            currentTimeout = setTimeout(() => changeMessageStage(messageStage+1), stage.time);
        }
        if ((stage.change===ChangeCause.Message) || (stage.change===ChangeCause.Any)){
            nMessagesLeft = stage.nMessages;
        }
        sendWatchMessage(stage.message);

    }

    onMount(() => {changeMessageStage(0)});

</script>

<style>
    div.main {
        padding: 10px;
        font-size: 15pt;
    }

    div.par {
        margin: 10px 0px 0px 0px
    }
    div.main-scene {
        margin-top: 30px;
        padding: 10px;
        display: grid;
        grid-template-columns: 60% 40%;
    }
   div.button {
      width: 20px;
      height: 20px;
      background-color: brown;
      margin: 10px;
   }
</style>

<div class="main">
    <h1> The Problem With The New Smartwatch</h1>
    <div class="par">
        By pure luck, you have been rewarded with the newest smartwatch on the market, and it takes you
        just a couple of hours to start using it for everything. This is in general much more convenient
        that using your phone, except for answering messages. Since the screen is so small, you can only
        answer with "yes" and "no". 
    </div>

    <div class="button" on:click={() => changeStatus(true)}></div>
    <div class="button" on:click={() => changeStatus(false)}></div>

    <div class="main-scene">
        <div class="text">
            {instructionText[instructionStage]}
        </div>
        <Watch bind:receiveMessage={sendWatchMessage}
               sentMessage={sentMessage}
               bind:changeStatus={changeStatus} />
    </div>
</div>