<script lang="ts">
   import * as aux from "../../ts/textMachine/aux";
   import * as ct from "../../ts/wordGenerator/charTransfer"

   export let generatorData = [
        {letter: "A", p: 0.5, cachedP: 0.5, index: 0, coded: "0"},
        {letter: "B", p: 0.5, cachedP: 0.5, index: 1, coded: "10"}
   ]

   let trajectoryTime = 5000;

   let rawTrajectory = aux.computeRawTrajectory(14.23, 5.64, 20.07, 14.23, 18.735, 4);
   let temp = aux.computeCodifiedTrajectories(trajectoryTime, 14.23, 25.54, 3.02, 24.59);

   
   let encoder;
   let decoder;

   $: {
      encoder = new ct.TextTransformer(generatorData.map((x)=> [x.letter, x.coded]));

      // For the decoder, there are letters in the pipe between encoder and decoder that 
      // must be processed according to the old rule
      setTimeout(() => {
         decoder = new ct.TextTransformer(generatorData.map((x)=> [x.coded, x.letter]));
      }, temp[0][1])
   }

   let codTimes = temp[0];
   let codTrajs = temp[1];

   let rawBuffer = new ct.TextBuffer(8);
   let codBuffer = new ct.TextBuffer(8);

   let rawTunnel = new ct.TextTunnel(rawTrajectory, trajectoryTime, (x)=>{
      setTimeout(() => {tachymeters[0].tick()}, trajectoryTime/2);
   }, (text)=>{rawBuffer.add(text)});

   let cod3Tunnel = new ct.TextTunnel(codTrajs[2], codTimes[2], ()=>{}, (text)=>{codBuffer.add(text)});

   let cod2Tunnel = new ct.TextTunnel(codTrajs[1], codTimes[1], ()=>{
      setTimeout(() => {tachymeters[1].tick()}, codTimes[1]/2);
   }, (text)=>{cod3Tunnel.send(decoder.transform(text))})

   let cod1Tunnel = new ct.TextTunnel(codTrajs[0], codTimes[0], ()=>{}, (text)=>{cod2Tunnel.send(encoder.transform(text))})

   let tachymeters = [new ct.Tachymeter(15, 300), new ct.Tachymeter(15, 300)];


//   document.onkeydown = (e) => {
//      let key = e.key;
//      if (key !== "Shift"){
//         rawTunnel.send(key);
//         cod1Tunnel.send(key);
//      }
//   };


   let lastFrameTime;
   let lastGenerationTime;
   let generationInterval = 500;

   requestAnimationFrame(getFrame);

   function generateCharacter(){
      let rand = Math.random();
      for (let i=0; i<generatorData.length; i++){
         rand -= generatorData[i].p;
         if (rand <= 0){
            rawTunnel.send(generatorData[i].letter)
            cod1Tunnel.send(generatorData[i].letter)
            return
         }
      }
   }

    function getFrame(time){
      if (lastFrameTime === undefined){
         lastFrameTime = time;
      }
      let timestep = time - lastFrameTime;
      lastFrameTime = time;

      rawTunnel.updateFrame(timestep);
      cod1Tunnel.updateFrame(timestep);
      cod2Tunnel.updateFrame(timestep);
      cod3Tunnel.updateFrame(timestep);
      tachymeters.forEach((x) => x.updateFrame(timestep))

      rawTunnel = rawTunnel;
      rawBuffer = rawBuffer;

      cod1Tunnel = cod1Tunnel;
      cod2Tunnel = cod2Tunnel;
      cod3Tunnel = cod3Tunnel;
      codBuffer = codBuffer;

      tachymeters = tachymeters;

      if (lastGenerationTime === undefined || ((time - lastGenerationTime) > generationInterval)){
         generateCharacter();
         lastGenerationTime = time;
      }

      requestAnimationFrame(getFrame);
    }

    setTimeout(()=>{console.log(tachymeters[0].measurers)}, 8000)

</script>

<svg
   width="{30.97917*15}"
   height="{25.769094*15}"
   viewBox="0 0 30.97917 25.769094"
   version="1.1"
   id="svg5"
   xmlns="http://www.w3.org/2000/svg">
  <defs
     id="defs2">
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3274">
      <rect
         style="fill:#00a112;fill-opacity:0.488113;stroke:none;stroke-width:0.735706;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
         id="rect3276"
         width="12.628043"
         height="25.239927"
         x="15.949816"
         y="1.2435455"
         ry="0" />
    </clipPath>
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath3278">
      <rect
         style="opacity:1;fill:#00a112;fill-opacity:0.488113;stroke:none;stroke-width:0.735706;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
         id="rect3280"
         width="12.628043"
         height="25.239927"
         x="15.949814"
         y="1.2435451"
         ry="0" />
    </clipPath>
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath29413">
      <rect
         style="opacity:1;fill:#849929;fill-opacity:1;stroke-width:0.526889;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke fill markers"
         id="rect29415"
         width="12.613066"
         height="27.666307"
         x="1.9382718"
         y="-4.779047"
         ry="2.7921639e-16" />
    </clipPath>
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath31473">
      <g
         id="g31479"
         transform="translate(-0.5087204,2.393388)">
        <rect
           style="fill:#ffc3bb;fill-opacity:1;stroke-width:0.837378;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke fill markers"
           id="rect31475"
           width="8.1442804"
           height="15.855684"
           x="23.628645"
           y="5.6635909"
           ry="3.6808198e-15" />
        <rect
           style="opacity:1;fill:#ffc3bb;fill-opacity:1;stroke-width:1.08332;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke fill markers"
           id="rect31477"
           width="7.6638546"
           height="28.200533"
           x="15.964792"
           y="-1.7170628"
           ry="6.5466164e-15" />
      </g>
    </clipPath>
  </defs>
  <g
     id="layer1">
    <rect
       style="opacity:1;fill:none;fill-opacity:1;stroke:#ff0000;stroke-width:0.543106;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
       id="rect2494"
       width="14.931245"
       height="21.582649"
       x="11.563418"
       y="2.9909909"
       ry="1.9198769"
       clip-path="url(#clipPath3274)"
       transform="translate(-0.02700973,-0.70916707)" />
    <rect
       style="opacity:1;fill:none;fill-opacity:1;stroke:#ff0000;stroke-width:0.505;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
       id="rect1568"
       width="10.235255"
       height="13.182878"
       x="10.779563"
       y="5.560987"
       ry="4"
       clip-path="url(#clipPath3278)"
       transform="translate(-0.02700973,-0.70916707)" />
    <g
       id="textzone">
         {#each rawTunnel.passengers as letter}
            <text
               xml:space="preserve"
               style="font-style:normal;font-weight:normal;font-size:40px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
               x="{letter.position[0]}"
               y="{letter.position[1]}"
               id="text3760-7"><tspan
               id="tspan3758-2"
               x="{letter.position[0]}"
               y="{letter.position[1]}"
               style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.66667px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal">{letter.letter}</tspan></text>
         {/each}
         {#each cod1Tunnel.passengers as letter}
            <text
               xml:space="preserve"
               style="font-style:normal;font-weight:normal;font-size:40px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
               x="{letter.position[0]}"
               y="{letter.position[1]}"
               id="text3760-7"><tspan
               id="tspan3758-2"
               x="{letter.position[0]}"
               y="{letter.position[1]}"
               style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.66667px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal">{letter.letter}</tspan></text>
         {/each}
         {#each cod2Tunnel.passengers as letter}
            <text
               xml:space="preserve"
               style="font-style:normal;font-weight:normal;font-size:40px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
               x="{letter.position[0]}"
               y="{letter.position[1]}"
               id="text3760-7"><tspan
               id="tspan3758-2"
               x="{letter.position[0]}"
               y="{letter.position[1]}"
               style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.66667px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal">{letter.letter}</tspan></text>
         {/each}
         {#each cod3Tunnel.passengers as letter}
            <text
               xml:space="preserve"
               style="font-style:normal;font-weight:normal;font-size:40px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
               x="{letter.position[0]}"
               y="{letter.position[1]}"
               id="text3760-7"><tspan
               id="tspan3758-2"
               x="{letter.position[0]}"
               y="{letter.position[1]}"
               style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.66667px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal">{letter.letter}</tspan></text>
         {/each}
    </g>
    <g
       id="rawoutput">
      <rect
         style="fill:#00ffcf;stroke-width:0.132152;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke fill markers"
         id="rect870-3"
         width="15.91974"
         height="3.5528457"
         x="0.0034731962"
         y="16.130802"
         ry="1.3098249e-16" />
      <text
         xml:space="preserve"
         style="font-style:normal;font-weight:normal;font-size:40px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
         x="0.19819421"
         y="18.872644"
         id="text3760-7-3"><tspan
           id="tspan3758-2-6"
           x="0.19819421"
           y="18.872644"
           style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.66667px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal">{rawBuffer.buffer}</tspan></text>
    </g>
    <g
       id="g48">
      <rect
         style="fill:#00ffcf;stroke-width:0.132152;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke fill markers"
         id="rect870-3-6"
         width="15.91974"
         height="3.5528457"
         x="0.0030642003"
         y="22.22146"
         ry="1.3098249e-16" />
      <text
         xml:space="preserve"
         style="font-style:normal;font-weight:normal;font-size:40px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
         x="0.20645028"
         y="24.929426"
         id="text3760-7-3-3"><tspan
           id="tspan3758-2-6-6"
           x="0.20645028"
           y="24.929426"
           style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.66667px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal">{codBuffer.buffer}</tspan></text>
    </g>
    <g
       id="g8452"
       transform="translate(0,-0.52916667)">
      <rect
         style="opacity:1;fill:#00a112;fill-opacity:1;stroke:none;stroke-width:0.505;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
         id="rect3304"
         width="4.9492121"
         height="4.9492121"
         x="23.601635"
         y="0.53437847"
         ry="2.564995e-16" />
      <text
         xml:space="preserve"
         style="font-style:normal;font-weight:normal;font-size:40px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
         x="18.028847"
         y="-15.539329"
         id="encoText"
         transform="rotate(44.085592)"><tspan
           id="tspan15052"
           x="18.028847"
           y="-15.539329"
           style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:1.33333px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal">Encoder</tspan></text>
    </g>
    <g
       id="g8455">
      <rect
         style="fill:#00a112;fill-opacity:1;stroke:none;stroke-width:0.505;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
         id="rect3304-5"
         width="4.9492121"
         height="4.9492121"
         x="23.601637"
         y="20.825092"
         ry="2.564995e-16" />
      <text
         xml:space="preserve"
         style="font-style:normal;font-weight:normal;font-size:40px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
         x="-1.4043329"
         y="35.387123"
         id="decoText"
         transform="rotate(-45.914408)"><tspan
           id="tspan15052-7"
           x="-1.4043329"
           y="35.387123"
           style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:1.33333px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal">Decoder</tspan></text>
    </g>
    <g
       id="g8435">
      <rect
         style="opacity:1;fill:#00ffcf;stroke-width:0.184819;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke fill markers"
         id="rect870"
         width="15.900573"
         height="6.9574442"
         x="0.037209839"
         y="0.3589099"
         ry="2.5649955e-16" />
      <text
         xml:space="preserve"
         style="font-style:normal;font-weight:normal;font-size:40px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
         x="0.94352752"
         y="5.1445618"
         id="change1"><tspan
           id="tspan5319"
           x="0.94352752"
           y="5.1445618"
           style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:4px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal">Sender</tspan></text>
    <g
       id="g8444">
      <rect
         style="opacity:1;fill:#849929;fill-opacity:0.865959;stroke:none;stroke-width:0.654288;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
         id="rect3574"
         width="29.965721"
         height="3.7057121"
         x="0.016512251"
         y="9.9974918"
         ry="2.564995e-16" />
      <text
         xml:space="preserve"
         style="font-style:normal;font-weight:normal;font-size:10.5833px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
         x="24.657928"
         y="12.518725"
         id="text6262-1"><tspan
           id="tspan6260-7"
           style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:1.76389px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.264583"
           x="24.657928"
           y="12.518725">{tachymeters[1].currentShow.toPrecision(3)}</tspan></text>
      <text
         xml:space="preserve"
         style="font-style:normal;font-weight:normal;font-size:10.5833px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
         x="19.222595"
         y="12.552866"
         id="text6262-1-1"><tspan
           id="tspan6260-7-5"
           style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:1.76389px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.264583"
           x="19.222595"
           y="12.552866">{tachymeters[0].currentShow.toPrecision(3)}</tspan></text>
      <text
         xml:space="preserve"
         style="font-style:normal;font-weight:normal;font-size:40px;line-height:0;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
         x="1.3196709"
         y="11.617413"
         id="text8190"><tspan
           x="1.3196709"
           y="11.617413"
           style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:1.33333px;line-height:0%;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal"
           id="tspan15276">Transmission rate</tspan><tspan
           x="1.3196709"
           y="21.661684"
           style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.66667px;line-height:0em;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal"
           id="tspan19064" /></text>
      <text
         xml:space="preserve"
         style="font-style:normal;font-weight:normal;font-size:40px;line-height:0;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
         x="1.3531682"
         y="13.005634"
         id="text8190-6"><tspan
           x="1.3531682"
           y="13.005634"
           style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:1.33333px;line-height:0%;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal"
           id="tspan15276-1">(symbols per second)</tspan><tspan
           x="1.3531682"
           y="23.049906"
           style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.66667px;line-height:0em;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal"
           id="tspan19064-0" /></text>
    </g>
  </g>
</svg>