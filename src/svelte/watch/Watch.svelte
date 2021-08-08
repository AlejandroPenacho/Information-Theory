<script lang="ts">

   import Message from "/src/svelte/watch/Message.svelte";

   let animationProgress = 0;
   let timeLastMessage = undefined;
   let messageInterval = 500;

   let canSend: boolean = true;

   enum Author {
      self,
      other
   }
   interface MessageData {
      text: string,
      author: Author,
      offset: number,
      dimensions: [number, number]
   }

   let buttonColors = {
      yes : {
         allowed : "#00b029",
         notallowed: "#91f5a8"
      },
      no : {
         allowed : "#ff0036",
         notallowed: "#f591a6"
      }
   }


 
   let currentTime = new Date();
   let timeFormat = `${currentTime.getHours()}:${currentTime.getMinutes()}`;


   let listOfMessages: Array<MessageData> = [
     // {text: "Te vieness?",author: Author.other, offset: 2, dimensions: [7, 1]},
     // {text: "No", author: Author.self, offset: 0, dimensions: [2.4, 1]}
   ]

   export function receiveMessage(text){
      //TODO: Compute dimension of message
      let dimensions: [number, number] = [7, 2];

      addMessage({
         text: text,
         author: Author.other,
         dimensions: dimensions,
         offset: -2
      })
   }
   export function sentMessage(text){
      return text;
   }
   export function changeStatus(newCanSend: boolean){
      canSend = newCanSend;
   }

   function addMessage(newMessage: MessageData) {
      listOfMessages.push(newMessage);
      animationProgress = -(newMessage.dimensions[1]+1);
      requestAnimationFrame(getFrame);
      listOfMessages = listOfMessages;
   }

   function getFrame(){
      for (let i=0; i<(listOfMessages.length); i++){
         listOfMessages[i].offset += 0.1;
      }
      animationProgress += 0.1;
      if (animationProgress < 0) {
         requestAnimationFrame(getFrame);
      } 
      listOfMessages = listOfMessages;
   }

   function clickYesFun(){
      if ((timeLastMessage !== undefined) && ((Date.now()-timeLastMessage) < messageInterval)) {
         return
      }
      if (!canSend){
         return
      }
      timeLastMessage = Date.now();
      addMessage({
         author: Author.self,
         text: "Yes",
         offset: -2,
         dimensions: [2.4, 1]
      })
    }
   function clickNoFun(){
      if ((timeLastMessage !== undefined) && ((Date.now()-timeLastMessage) < messageInterval)) {
         return
      }
      if (!canSend){
         return
      }
      timeLastMessage = Date.now();
      addMessage({
         author: Author.self,
         text: "No",
         offset: -2,
         dimensions: [2.4, 1]
      })
    }
</script>

<style>
   svg {
      transition: transform 1s;
   }
</style>

<svg
   width="300"
   height="300"
   viewBox="0 0 12.7 12.7"
   version="1.1"
   id="svg5"
   xmlns="http://www.w3.org/2000/svg">
  <defs
     id="defs2">
    <filter
       id="mask-powermask-path-effect5686_inverse"
       style="color-interpolation-filters:sRGB"
       height="100"
       width="100"
       x="-50"
       y="-50">
      <feColorMatrix
         id="mask-powermask-path-effect5686_primitive1"
         values="1"
         type="saturate"
         result="fbSourceGraphic" />
      <feColorMatrix
         id="mask-powermask-path-effect5686_primitive2"
         values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0 "
         in="fbSourceGraphic" />
    </filter>
    <filter
       id="mask-powermask-path-effect5747_inverse"
       style="color-interpolation-filters:sRGB"
       height="100"
       width="100"
       x="-50"
       y="-50">
      <feColorMatrix
         id="mask-powermask-path-effect5747_primitive1"
         values="1"
         type="saturate"
         result="fbSourceGraphic" />
      <feColorMatrix
         id="mask-powermask-path-effect5747_primitive2"
         values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0 "
         in="fbSourceGraphic" />
    </filter>
    <filter
       id="mask-powermask-path-effect5765_inverse"
       style="color-interpolation-filters:sRGB"
       height="100"
       width="100"
       x="-50"
       y="-50">
      <feColorMatrix
         id="mask-powermask-path-effect5765_primitive1"
         values="1"
         type="saturate"
         result="fbSourceGraphic" />
      <feColorMatrix
         id="mask-powermask-path-effect5765_primitive2"
         values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0 "
         in="fbSourceGraphic" />
    </filter>
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath5855">
      <path
         style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.33885;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
         id="path5857"
         width="10.676529"
         height="10.659967"
         x="1.0322065"
         y="1.0264893"
         ry="1.553412"
         d="m 2.5856185,1.0264893 h 7.5697055 c 0.86059,0 1.553411,0.6928217 1.553411,1.5534119 v 7.5531438 c 0,0.86059 -0.692821,1.553412 -1.553411,1.553412 H 2.5856185 c -0.8605902,0 -1.553412,-0.692822 -1.553412,-1.553412 V 2.5799012 c 0,-0.8605902 0.6928218,-1.5534119 1.553412,-1.5534119 z" />
    </clipPath>
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath6237">
      <path
         style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.33885;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
         id="path6239"
         width="10.676529"
         height="10.659967"
         x="1.0322061"
         y="1.0264893"
         ry="1.553412"
         d="m 2.585618,1.0264893 h 7.569705 c 0.86059,0 1.553412,0.6928217 1.553412,1.5534119 v 7.5531438 c 0,0.86059 -0.692822,1.553412 -1.553412,1.553412 H 2.585618 c -0.8605902,0 -1.5534119,-0.692822 -1.5534119,-1.553412 V 2.5799012 c 0,-0.8605902 0.6928217,-1.5534119 1.5534119,-1.5534119 z" />
    </clipPath>
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath6367">
      <path
         style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.33885;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
         id="path6369"
         width="10.676529"
         height="10.659967"
         x="1.0322068"
         y="1.0264896"
         ry="1.553412"
         d="m 2.5856187,1.0264896 h 7.5697053 c 0.86059,0 1.553412,0.6928217 1.553412,1.553412 v 7.5531434 c 0,0.86059 -0.692822,1.553412 -1.553412,1.553412 H 2.5856187 c -0.8605902,0 -1.5534119,-0.692822 -1.5534119,-1.553412 V 2.5799016 c 0,-0.8605903 0.6928217,-1.553412 1.5534119,-1.553412 z" />
    </clipPath>
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath1083">
      <rect
         style="fill:#ffffff;fill-opacity:1;stroke-width:0.403225;stroke-linejoin:round;paint-order:stroke fill markers"
         id="rect1085"
         width="10.676528"
         height="4.3356605"
         x="1.0322067"
         y="3.7412636"
         ry="0" />
    </clipPath>
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath12744">
      <circle
         style="opacity:1;fill:#09e007;fill-opacity:1;stroke:none;stroke-width:0.142357;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
         id="circle12746"
         cx="8.5934219"
         cy="4.4327836"
         r="0.93405247" />
    </clipPath>
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath8941">
      <circle
         style="opacity:1;fill:#00ffcf;fill-opacity:1;stroke:none;stroke-width:0.105833;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
         id="circle8943"
         cx="10.158504"
         cy="4.6038094"
         r="0.74215823" />
    </clipPath>
  </defs>
  <g
     id="layer1">
    <g
       id="g28854">
      <rect
         style="opacity:1;fill:#000000;fill-opacity:1;stroke:#afafaf;stroke-width:0.389889;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
         id="rect846"
         width="12.284662"
         height="12.265607"
         x="0.22813947"
         y="0.22366972"
         ry="1.787392" />
      <path
         style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.33885;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
         id="rect846-3"
         width="10.676529"
         height="10.659967"
         x="1.0322063"
         y="1.0264893"
         ry="1.553412"
         d="m 2.5856183,1.0264893 h 7.5697047 c 0.86059,0 1.553412,0.6928217 1.553412,1.5534119 v 7.5531438 c 0,0.86059 -0.692822,1.553412 -1.553412,1.553412 H 2.5856183 c -0.8605903,0 -1.553412,-0.692822 -1.553412,-1.553412 V 2.5799012 c 0,-0.8605902 0.6928217,-1.5534119 1.553412,-1.5534119 z" />
    </g>
    <g
       id="g9342">
      <rect
         style="opacity:1;fill:#a2ceff;fill-opacity:1;stroke:none;stroke-width:0.222458;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
         id="rect3394"
         width="10.676529"
         height="0.79926342"
         x="1.0322067"
         y="1.0264893"
         ry="0"
         clip-path="url(#clipPath5855)" />
      <rect
         style="opacity:1;fill:#ffffff;stroke:#000000;stroke-width:0.136462;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
         id="rect1318"
         width="1.0035812"
         height="0.37844351"
         x="9.704505"
         y="1.2790596"
         ry="0" />
      <rect
         style="fill:#09e007;fill-opacity:1;stroke:none;stroke-width:0.120526;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
         id="rect1318-2"
         width="0.78286755"
         height="0.37844351"
         x="9.9252186"
         y="1.2790596"
         ry="2.220446e-16" />
      <rect
         style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:3.75697;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
         id="rect1828"
         width="0.11001247"
         height="0.16843374"
         x="9.5562572"
         y="1.3747456" />
      <text
         xml:space="preserve"
         style="font-style:normal;font-weight:normal;font-size:0.613513px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0153378"
         x="5.498044"
         y="1.6884314"
         id="text4069"><tspan
           id="tspan4067"
           style="stroke-width:0.0153378"
           x="5.498044"
           y="1.6884314">{timeFormat}</tspan></text>
      <text
         xml:space="preserve"
         style="font-style:normal;font-weight:normal;font-size:0.485869px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0121467"
         x="1.7813463"
         y="1.6352013"
         id="text4069-0"><tspan
           id="tspan4067-4"
           style="stroke-width:0.0121467"
           x="1.7813463"
           y="1.6352013">Mobilephone</tspan></text>
    </g>
    <rect
       style="opacity:1;fill:#97aac0;fill-opacity:1;stroke:none;stroke-width:0.346489;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
       id="rect5881"
       width="10.978485"
       height="1.9155109"
       x="1.0322067"
       y="1.8257527"
       clip-path="url(#clipPath6237)" />
    <g
       id="g861">
      <rect
         style="opacity:1;fill:#506a87;fill-opacity:1;stroke:none;stroke-width:0.503033;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
         id="rect6263"
         width="10.967626"
         height="3.6095324"
         x="0.74110979"
         y="8.0769243"
         clip-path="url(#clipPath6367)" />
      <g
         id="g894"
         on:click={clickNoFun}>
        <rect
           style="fill:{canSend? buttonColors.no.allowed : buttonColors.no.notallowed};fill-opacity:1;stroke-width:0.403225;stroke-linejoin:round;paint-order:stroke fill markers;
                  cursor: {canSend? "pointer" : "default"}"
           id="rect2048-7"
           width="4.0086598"
           height="2.6394653"
           x="6.823009"
           y="8.4941368"
           ry="0.54323983" />
        <text
           xml:space="preserve"
           style="font-style:normal;font-weight:normal;font-size:2.02954px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0507385;
                  cursor: {canSend? "pointer" : "default"}"
           x="7.3739715"
           y="10.502932"
           id="text4644-2"><tspan
             id="tspan4642-7"
             style="stroke-width:0.0507385"
             x="7.3739715"
             y="10.502932">No</tspan></text>
      </g>
      <g
         id="g899"
         on:click={clickYesFun}>
        <rect
           style="opacity:1;fill:{canSend? buttonColors.yes.allowed : buttonColors.yes.notallowed};fill-opacity:1;stroke-width:0.403225;stroke-linejoin:round;paint-order:stroke fill markers;
                  cursor: {canSend? "pointer" : "default"}"
           id="rect2048"
           width="4.0086598"
           height="2.6394653"
           x="1.8160167"
           y="8.4941368"
           ry="0.54323983" />
        <text
           xml:space="preserve"
           style="font-style:normal;font-weight:normal;font-size:2.02954px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0507385;
                   cursor: {canSend? "pointer" : "default"}"
           x="2.1651542"
           y="10.468869"
           id="text4644"><tspan
             id="tspan4642"
             style="stroke-width:0.0507385"
             x="2.1651542"
             y="10.468869">Yes</tspan></text>
      </g>
    </g>
    <g
       id="g1024"
       clip-path="url(#clipPath1083)">
      <rect
         style="opacity:1;fill:#ffffff;fill-opacity:1;stroke-width:0.403225;stroke-linejoin:round;paint-order:stroke fill markers"
         id="rect8273"
         width="10.676528"
         height="4.3356605"
         x="1.0322067"
         y="3.7412636"
         ry="0" />
         {#each listOfMessages as message}
            <Message {...message} />
         {/each}
   </g>
    <path
       style="fill:none;stroke:#000000;stroke-width:0.105833;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="M 2.3529556,3.2445258 1.7328398,2.8865019 2.3614473,2.5235751"
       id="path12840" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-weight:normal;font-size:1.08979px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0272449"
       x="5.2110343"
       y="3.2331946"
       id="text15826"><tspan
         id="tspan15824"
         style="stroke-width:0.0272449"
         x="5.2110343"
         y="3.2331946">Rick</tspan></text>
    <g
       id="g8827"
       clip-path="url(#clipPath8941)"
       transform="translate(-0.23213413,-1.7455436)">
      <rect
         style="opacity:1;fill:#21ea0e;fill-opacity:1;stroke:none;stroke-width:0.156384;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
         id="rect7836"
         width="2.2971284"
         height="1.0096098"
         x="9.0279188"
         y="4.6178861"
         ry="3.8239887e-16" />
      <rect
         style="fill:#00ffcf;fill-opacity:1;stroke:none;stroke-width:0.156384;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
         id="rect7836-3"
         width="2.2971284"
         height="1.0096098"
         x="9.0297871"
         y="3.6214721"
         ry="3.8239887e-16" />
      <g
         id="g8819">
        <ellipse
           style="opacity:1;fill:#ffb44d;fill-opacity:1;stroke-width:0.107409;stroke-linecap:round;paint-order:stroke fill markers"
           id="path982"
           cx="10.834798"
           cy="2.7307987"
           rx="0.30283451"
           ry="0.43099737"
           transform="matrix(0.98686679,0.16153621,-0.17108037,0.98525708,0,0)" />
        <path
           style="fill:none;stroke:#ffb44d;stroke-width:0.105833;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 10.129113,4.8384902 -0.07562,0.238533"
           id="path5866" />
        <ellipse
           style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0264583;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
           id="path5751"
           cx="10.345512"
           cy="4.467308"
           rx="0.036638357"
           ry="0.034212254" />
        <ellipse
           style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.0264583;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
           id="path5551"
           cx="10.137094"
           cy="4.4359393"
           rx="0.042018045"
           ry="0.035549771" />
        <path
           style="fill:none;stroke:#000000;stroke-width:0.0264583;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="m 10.049136,4.6570077 0.14703,0.1193104 0.10559,-0.056297"
           id="path5447" />
        <path
           style="fill:none;stroke:#fb5d00;stroke-width:0.185208;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           d="M 9.9342521,4.3421035 C 10.067235,4.1047103 10.326485,4.0130981 10.326485,4.0130981 l 0.215797,0.2205061 -0.0257,0.1805091"
           id="path4309" />
      </g>
    </g>
  </g>
</svg>