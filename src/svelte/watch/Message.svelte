<script lang="ts">

    enum Author {
        self,
        other
    }

    export let author: Author;
    export let text: string[];
    export let dimensions : [number, number];

    export let offset;
    
    let textSize = 0.5;//0.705556;

</script>

{#if author==Author.other}
      <g
         id="g846" 
         transform="translate (0,{2.3 - offset})">
        <path
           style="opacity:1;fill:#506a87;stroke-width:1.524;stroke-linejoin:round;paint-order:stroke fill markers"
           id="path894"
           d="m 25.106555,23.477662 1.207867,-2.092087 1.207867,-2.092087 1.207867,2.092087 1.207868,2.092087 -2.415735,0 z"
           transform="matrix(0.25556787,0.05430457,-0.05986525,0.17717403,-3.8894063,-0.68069579)" />
        <rect
           style="opacity:1;fill:#506a87;fill-opacity:1;stroke:none;stroke-width:0.403225;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
           id="rect7311"
           width={dimensions[0]}
           height={dimensions[1]}
           x="1.5584966"
           y="4.1201396"
           ry="0.54324031" />
        <text
           xml:space="preserve"
           style="font-style:normal;font-weight:normal;font-size:10.5833px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
           x="1.9764334"
           y="4.8836856"
           id="text20647"><tspan
             id="tspan20645"
             style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:{textSize}px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.264583"
             x="1.9764334"
             y="4.8836856">{text[0]}</tspan><tspan
             style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:{textSize}px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.264583"
             x="1.9764334"
             y="18.88"
             id="tspan16478" /></text>
         <text
           xml:space="preserve"
           style="font-style:normal;font-weight:normal;font-size:10.5833px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
           x="1.9764334"
           y="5.75"
           id="text20647"><tspan
             id="tspan20645"
             style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:{textSize}px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.264583"
             x="1.9764334"
             y="5.75">{text[1]}</tspan><tspan
             style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:{textSize}px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.264583"
             x="1.9764334"
             y="18.88"
             id="tspan16478" /></text>
      </g>
      `

{:else if author==Author.self}
        <g
         id="g846-9"
         transform="translate(0,{0.3 - offset}) matrix(-0.99928042,0,0,1,12.487646,2.053521)">
        <path
           style="opacity:1;fill:#91c1f5;fill-opacity:1;stroke-width:1.524;stroke-linejoin:round;paint-order:stroke fill markers"
           id="path894-5"
           transform="matrix(0.25556787,0.05430457,-0.05986525,0.17717403,-3.8894063,-0.68069579)"
           d="m 25.106555,23.477662 1.207867,-2.092087 1.207867,-2.092087 1.207867,2.092087 1.207868,2.092087 -2.415735,0 z" />
        <rect
           style="opacity:1;fill:#91c1f5;fill-opacity:1;stroke:none;stroke-width:0.237381;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"
           id="rect7311-0"
           width={dimensions[0]}
           height={dimensions[1]}
           x="1.5584966"
           y="4.1201396"
           ry="0.54324031" />
        <text
           xml:space="preserve"
           style="font-style:normal;font-weight:normal;font-size:10.1046px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.252616"
           x="-3.6999857"
           y="4.6781139"
           id="text20647-4"
           transform="scale(-0.95476861,1.0473742)"><tspan
             id="tspan20645-8"
             style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.673643px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.252616"
             x="-3.6999857"
             y="4.6781139">{text}</tspan><tspan
             style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:0.673643px;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;stroke-width:0.252616"
             x="-3.6999857"
             y="17.308865"
             id="tspan2174" /></text>
      </g>
{/if}