<script lang="ts">
    import * as aux from "../ts/textMachine/aux";
    import * as ct from "../ts/wordGenerator/charTransfer"

   let trajectoryTime = 5000;

   let rawTrajectory = aux.computeRawTrajectory(14.23, 5.64, 20.07, 14.23, 18.735, 4);
   let temp = aux.computeCodifiedTrajectories(trajectoryTime, 14.23, 25.54, 3.02, 24.59);

   let transformTable: Array<[string,string]> = [["a","b"], ["b", "c"], ["c","d"], ["d","a"]];
   
   let encoder = new ct.TextTransformer(transformTable);
   let decoder = new ct.TextTransformer(transformTable);

   let codTimes = temp[0];
   let codTrajs = temp[1];

   let rawBuffer = new ct.TextBuffer(10);
   let codBuffer = new ct.TextBuffer(10);

   let rawTunnel = new ct.TextTunnel(rawTrajectory, trajectoryTime, (text)=>{rawBuffer.add(text)});
   let cod3Tunnel = new ct.TextTunnel(codTrajs[2], codTimes[2], (text)=>{codBuffer.add(text)});
   let cod2Tunnel = new ct.TextTunnel(codTrajs[1], codTimes[1], (text)=>{cod3Tunnel.send(decoder.transform(text))})
   let cod1Tunnel = new ct.TextTunnel(codTrajs[0], codTimes[0], (text)=>{cod2Tunnel.send(encoder.transform(text))})

   let informationMeasure = [0, 0];


   document.onkeydown = (e) => {
      let key = e.key;
      if (key !== "Shift"){
         rawTunnel.send(key);
         cod1Tunnel.send(key);
      }
   };


   let lastTime;

   requestAnimationFrame(getFrame);

    function getFrame(time){
      if (lastTime === undefined){
         lastTime = time;
      }
      let timestep = time - lastTime;
      lastTime = time;

      rawTunnel.updateFrame(timestep);
      cod1Tunnel.updateFrame(timestep);
      cod2Tunnel.updateFrame(timestep);
      cod3Tunnel.updateFrame(timestep);

      rawTunnel = rawTunnel;
      rawBuffer = rawBuffer;

      cod1Tunnel = cod1Tunnel;
      cod2Tunnel = cod2Tunnel;
      cod3Tunnel = cod3Tunnel;
      codBuffer = codBuffer;

      requestAnimationFrame(getFrame);
    }

</script>

<svg
   width="{48.979172*20}"
   height="{25.769094*20}"
   viewBox="0 0 48.979172 25.769094"
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
      <rect
         style="opacity:1;fill:#849929;fill-opacity:0.743386;stroke-width:0.54215;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke fill markers"
         id="rect861"
         width="8.0471115"
         height="6.9820695"
         x="0.037209839"
         y="0.33428472"
         ry="2.0106251" />
      <text
         xml:space="preserve"
         style="font-style:normal;font-weight:normal;font-size:10.5833px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
         x="9.842845"
         y="4.4820089"
         id="text6262-2-6"><tspan
           id="tspan6260-2-1"
           style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:1.76389px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.264583"
           x="9.842845"
           y="4.4820089">Auto</tspan></text>
      <text
         xml:space="preserve"
         style="font-style:normal;font-weight:normal;font-size:10.5833px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
         x="0.89551389"
         y="4.4568706"
         id="text6262-2"><tspan
           id="tspan6260-2"
           style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:1.76389px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.264583"
           x="0.89551389"
           y="4.4568706">Manual</tspan></text>
    </g>
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
           y="12.518725">2.32</tspan></text>
      <text
         xml:space="preserve"
         style="font-style:normal;font-weight:normal;font-size:10.5833px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
         x="19.222595"
         y="12.552866"
         id="text6262-1-1"><tspan
           id="tspan6260-7-5"
           style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:1.76389px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.264583"
           x="19.222595"
           y="12.552866">4.63</tspan></text>
    </g>
  </g>
</svg>