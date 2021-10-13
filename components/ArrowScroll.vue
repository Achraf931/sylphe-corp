<template>
    <div v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" @click="moveTo" class="is-visible absolute bottom-20 cursor-pointer pointer-events-auto z-50">
      <div class="relative w-full h-full">
      <svg class="hoverAnimation rounded-full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="35.168" height="35.098"
           viewBox="0 0 25.168 25.098">
        <g id="Groupe_374" data-name="Groupe 374" transform="translate(0.5 0.5)">
          <image id="Fichier_4" data-name="Fichier 4" width="16.991" height="17.09"
                 transform="translate(12.049 24.098) rotate(-135)"
                 xlink:href="data:image/png;base64,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"/>
          <path id="Tracé_2364" data-name="Tracé 2364"
                d="M1150.725,949.273a12.036,12.036,0,1,1,12.084-12.049A12.064,12.064,0,0,1,1150.725,949.273Z"
                transform="translate(-1138.641 -925.175)" fill="#fff" stroke="#171716" stroke-miterlimit="10"
                stroke-width="1"/>
        </g>
        <g id="fleche" transform="translate(7.424 7.112)">
          <line id="Ligne_162" data-name="Ligne 162" y2="11.612" transform="translate(5.418)" fill="none"
                stroke="#171716" stroke-width="1"/>
          <path id="Tracé_2415" data-name="Tracé 2415" d="M44.5,55.191s.206-5.555,5.286-5.555"
                transform="translate(-39.117 -43.095)" fill="none" stroke="#171716" stroke-width="1"/>
          <path id="Tracé_2416" data-name="Tracé 2416" d="M49.786,55.191s-.206-5.555-5.286-5.555"
                transform="translate(-44.5 -43.095)" fill="none" stroke="#171716" stroke-width="1"/>
        </g>
      </svg>

        <svg v-if="this.$mq === 'sm'" class="absolute top-1/2 left-1/2 pointer-events-none text-rounded" xmlns="http://www.w3.org/2000/svg" width="62.04" height="60.244" viewBox="0 0 62.04 60.244">
          <g id="Calque_2" data-name="Calque 2" transform="translate(-0.65 -0.732)">
            <g id="Calque_1" data-name="Calque 1">
              <text id="F" transform="translate(35.19 7.11) rotate(15.23)" fill="#1d1d1b" font-size="8" font-family="Soleil"><tspan x="0" y="0">F</tspan></text>
              <text id="A" transform="matrix(0.902, 0.431, -0.431, 0.902, 38.71, 7.97)" fill="#1d1d1b" font-size="8" font-family="Soleil"><tspan x="0" y="0">A</tspan></text>
              <text id="I" transform="translate(43.43 10.35) rotate(34.56)" fill="#1d1d1b" font-size="8" font-family="Soleil"><tspan x="0" y="0">I</tspan></text>
              <text id="S" transform="matrix(0.733, 0.68, -0.68, 0.733, 45.34, 11.55)" fill="#1d1d1b" font-size="8" font-family="Soleil"><tspan x="0" y="0">S</tspan></text>
              <text id="D" transform="matrix(0.399, 0.917, -0.917, 0.399, 51.67, 18.59)" fill="#1d1d1b" font-size="8" font-family="Soleil"><tspan x="0" y="0">D</tspan></text>
              <text id="É" transform="translate(53.85 23.69) rotate(78.44)" fill="#1d1d1b" font-size="8" font-family="Soleil"><tspan x="0" y="0">É</tspan></text>
              <text id="F-2" data-name="F" transform="translate(54.73 28.08) rotate(88.282)" fill="#1d1d1b" font-size="8" font-family="Soleil"><tspan x="0" y="0">F</tspan></text>
              <text id="I-2" data-name="I" transform="translate(54.8 31.99) rotate(95.711)" fill="#1d1d1b" font-size="8" font-family="Soleil"><tspan x="0" y="0">I</tspan></text>
              <text id="L" transform="translate(54.64 34.24) rotate(103)" fill="#1d1d1b" font-size="8" font-family="Soleil"><tspan x="0" y="0">L</tspan></text>
              <text id="E" transform="translate(53.81 38.04) rotate(113.02)" fill="#1d1d1b" font-size="8" font-family="Soleil"><tspan x="0" y="0">E</tspan></text>
              <text id="R" transform="translate(52.08 42.18) rotate(124.007)" fill="#1d1d1b" font-size="8" font-family="Soleil"><tspan x="0" y="0">R</tspan></text>
              <text id="P" transform="matrix(-0.835, 0.55, -0.55, -0.835, 45.93, 49.57)" fill="#1d1d1b" font-size="8" font-family="Soleil"><tspan x="0" y="0">P</tspan></text>
              <text id="O" transform="translate(42.3 52.13) rotate(159.58)" fill="#1d1d1b" font-size="8" font-family="Soleil"><tspan x="0" y="0">O</tspan></text>
              <text id="U" transform="translate(36.26 54.35) rotate(173.66)" fill="#1d1d1b" font-size="8" font-family="Soleil"><tspan x="0" y="0">U</tspan></text>
              <text id="R-2" data-name="R" transform="matrix(-0.994, -0.105, 0.105, -0.994, 30.74, 54.93)" fill="#1d1d1b" font-size="8" font-family="Soleil"><tspan x="0" y="0">R</tspan></text>
              <text id="E-2" data-name="E" transform="translate(21.33 52.98) rotate(-151.31)" fill="#1d1d1b" font-size="8" font-family="Soleil"><tspan x="0" y="0">E</tspan></text>
              <text id="N" transform="matrix(-0.756, -0.655, 0.655, -0.756, 17.36, 50.91)" fill="#1d1d1b" font-size="8" font-family="Soleil"><tspan x="0" y="0">N</tspan></text>
              <text id="V" transform="translate(10.1 43.23) rotate(-114.775)" fill="#1d1d1b" font-size="8" font-family="Soleil"><tspan x="0" y="0">V</tspan></text>
              <text id="O-2" data-name="O" transform="translate(7.93 38.84) rotate(-101.535)" fill="#1d1d1b" font-size="8" font-family="Soleil"><tspan x="0" y="0">O</tspan></text>
              <text id="I-3" data-name="I" transform="translate(6.83 32.44) rotate(-91.09)" fill="#1d1d1b" font-size="8" font-family="Soleil"><tspan x="0" y="0">I</tspan></text>
              <text id="R-3" data-name="R" transform="matrix(0.128, -0.992, 0.992, 0.128, 6.68, 30.18)" fill="#1d1d1b" font-size="8" font-family="Soleil"><tspan x="0" y="0">R</tspan></text>
              <text id="P-2" data-name="P" transform="matrix(0.5, -0.866, 0.866, 0.5, 8.83, 20.83)" fill="#1d1d1b" font-size="8" font-family="Soleil"><tspan x="0" y="0">P</tspan></text>
              <text id="L-2" data-name="L" transform="matrix(0.642, -0.766, 0.766, 0.642, 11.09, 16.95)" fill="#1d1d1b" font-size="8" font-family="Soleil"><tspan x="0" y="0">L</tspan></text>
              <text id="U-2" data-name="U" transform="matrix(0.774, -0.633, 0.633, 0.774, 13.4, 14.02)" fill="#1d1d1b" font-size="8" font-family="Soleil"><tspan x="0" y="0">U</tspan></text>
              <text id="S-2" data-name="S" transform="translate(17.72 10.52) rotate(-27.332)" fill="#1d1d1b" font-size="8" font-family="Soleil"><tspan x="0" y="0">S</tspan></text>
              <text id="_-" data-name="-" transform="translate(26.58 7.1) rotate(-5.71)" fill="#1d1d1b" font-size="8" font-family="Soleil"><tspan x="0" y="0">-</tspan></text>
            </g>
          </g>
        </svg>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    moveTo() {
      window.scroll({top: document.getElementById('topPage').offsetHeight, behavior: 'smooth'})
    }
  }
}
</script>

<style lang="scss" scoped>
.text-rounded {
  transform: translate(-50%, -50%) rotate(0deg);
  animation: round 4s linear infinite;
}

@keyframes round {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.hoverAnimation {
  transition: all .1s ease;

  &:hover {
    transform: translate(-3px, -3px)!important;
    box-shadow: 3px 3px 0 0 black;
  }
}
</style>
