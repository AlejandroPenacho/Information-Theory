<script lang="ts">

    import { onMount } from "svelte";
    import Watch from "/src/svelte/watch/Watch.svelte"
    import Instructions from "/src/svelte/watch/Instructions.svelte"

    export let nextChapter;

    interface MessageStage {
        change: ChangeCause,
        allowAnswer: boolean,
        time: number,
        nMessages: number,
        newInstruction: boolean,
        message: () => string[]
    }

    enum ChangeCause {
        Message,
        Timeout,
        Any
    }

    let nMessageStages = 12;

    let responses: string[][] = new Array(nMessageStages);
    for (let i=0; i<nMessageStages; i++){
        responses[i] = [];
    }

    let sendWatchMessage: (string)=>void;
    let changeStatus: (boolean)=>void;

    let instructionStage = 0;
    let messageStage = 0;
    let messageStages: MessageStage[] = [
        {change: ChangeCause.Message, allowAnswer: true, nMessages: 1, time: 0, newInstruction: false, message: ()=>
        [`Heyy! Are you finally`, `coming to dinner tonigh?`]},
        {change: ChangeCause.Timeout, allowAnswer: false, nMessages: 1, time: 2000, newInstruction: false, message: ()=>
        getInitialResponse(responses[0])},
        {change: ChangeCause.Any, allowAnswer: true, nMessages: 1, time: 5000, newInstruction: true, message: ()=>
        [`Ok, I'll buy pizzas! Do`, `you prefer ham or pineapple?`]},
        {change: ChangeCause.Message, allowAnswer: true, nMessages: 1, time: 0, newInstruction: false, message: ()=>
        [`Oh, right. Say yes for`, `ham, no for pineapple`]},
        {change: ChangeCause.Timeout, allowAnswer: false, nMessages: 0, time: 6000, newInstruction: false, message: ()=>
        getPizzaResponse(responses[3])},
        {change: ChangeCause.Any, allowAnswer: true, nMessages: 1, time: 5000, newInstruction: true, message: ()=>
        [`At which hour should we`, ` meet?`]},
        {change: ChangeCause.Any, allowAnswer: true, nMessages: 1, time: 4000, newInstruction: false, message: ()=>
        [`Mmmmh. 20.00, 20.30, 21.00`, `or 21.30?`]},
        {change: ChangeCause.Message, allowAnswer: true, nMessages: 1, time: 0, newInstruction: false, message: ()=>
        [`Okay, yes for 20 and no`, `for 21`]},
        {change: ChangeCause.Message, allowAnswer: true, nMessages: 1, time: 0, newInstruction: false, message: ()=>
        [`And yes for .00 and no`, `for .30`]},
        {change: ChangeCause.Message, allowAnswer: true, nMessages: 1, time: 0, newInstruction: true, message: ()=>
        getTimeResponse([responses[7][0], responses[8][0]])},
        {change: ChangeCause.Message, allowAnswer: true, nMessages: 2, time: 0, newInstruction: true, message: ()=>
        [`And for the drinks: water,`, `coke, nestea or orange juice`]},
        {change: ChangeCause.Message, allowAnswer: false, nMessages: 1, time: 0, newInstruction: true, message: ()=>
        getDrinkResponse(responses[10])},
    ]

    let currentChangeCause: ChangeCause;
    let nMessagesLeft: number;
    let currentTimeout = undefined;

    function sentMessage(text: string): void {
        responses[messageStage].push(text);
        checkMessageStageChange();
    }

    function checkMessageStageChange(){
        if (currentChangeCause === ChangeCause.Timeout){
            return
        }
        nMessagesLeft --;
        if (nMessagesLeft <= 0){
            changeStatus(false);
            if (currentTimeout !== undefined){
                clearTimeout(currentTimeout);
            }
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
        sendWatchMessage(stage.message());
    }

    function getInitialResponse(messages: string[]) : string[] {
        if (messages[0] === "Yes"){
            return ["Great, I know you would", "like to come!"]
        } else {
            return [`"No way I'm missing this",`,`you mean? Great!`]
        }
    }

    function getPizzaResponse(messages: string[]) : string[]{
        if (messages[0] ==="Yes"){
            return ["Yeah, ham is the good", `one`]
        } else if (messages[0] === "No"){
            return ["Pineapple, really?", "Okay"]
        } else {
            return ["Something is wrong", ""]
        }
    }

    function getTimeResponse(messages: string[]){
        if ((messages[0] === "No") && (messages[1] === "No")){
            return ["Ok, at 21.30 then!", ""]
        } else if ((messages[0] === "No") && (messages[1] === "Yes")){
            return ["Fine, at 21.00", ""]
        } else if ((messages[0] === "Yes") && (messages[1] === "No")){
            return ["Great, at 20.30", ""]
        } else if ((messages[0] === "Yes") && (messages[1] === "Yes")){
            return ["So, at 20.00 we meet", ""]
        } else {
            return ["Something wrong :(", ""]
        }
    }

    function getDrinkResponse(messages: string[]){
        if ((messages[0] === "No") && (messages[1] === "No")){
            return ["Water!",""]
        } else if ((messages[0] === "Yes") && (messages[1] === "No")){
            return ["Coke",""]
        } else if ((messages[0] === "No") && (messages[1] === "Yes")){
            return ["Nestea",""]
        } else if ((messages[0] === "Yes") && (messages[1] === "Yes")){
            return ["Orange juice!",""]
        } else {
            return ["Something wrong :(",""]
        }
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
</style>

<div class="main">
    <h1> The Problem With The New Smartwatch</h1>
    <div class="par">
        After being the 10,000 visitor to a suspicious website, you have been gifted with a brand new smartwatch, 
        and it takes you just a couple of hours to start using it for everything. This is in general much 
        more convenient than using your phone, except for answering messages. Since the screen is so small,
        you can only answer with "yes" or "no". 
    </div>

    <div class="main-scene">
        <Instructions stage={instructionStage} nextChapter={nextChapter} />
        <Watch bind:receiveMessage={sendWatchMessage}
               sentMessage={sentMessage}
               bind:changeStatus={changeStatus} />
    </div>
</div>