<template>
  <div>
    <div ref="sylphe_container" class="sylphe_container h-screen w-screen max-w-screen max-h-screen transition-all duration-700 ease-in-out fixed top-0 left-0" style="z-index: 999999999;">
      <video ref="sylphe" muted playsinline preload="metadata" class="object-cover video-first h-full w-full max-w-screen max-h-screen">
        <source src="/sylphe.mp4" type="video/mp4">
      </video>
    </div>
<!--    <StartAnimation/>-->
<!--    <CookieControl :locale="this.$i18n.locale">
      <template v-slot:modal>
&lt;!&ndash;        <svg class="cookieControl__ModalClose" xmlns="http://www.w3.org/2000/svg" width="24.332" height="23.614" viewBox="0 0 24.332 23.614">
          <g id="Groupe_797" data-name="Groupe 797" transform="translate(-294.379 -30)">
            <line id="Ligne_252" data-name="Ligne 252" y1="0.379" transform="translate(306.59 37.121)" fill="none" stroke="#171716" stroke-linecap="round" stroke-width="3" opacity="0"/>
            <line id="Ligne_253" data-name="Ligne 253" x2="20" y2="19" transform="translate(296.59 32.121)" fill="none" stroke="#171716" stroke-linecap="round" stroke-width="3"/>
            <line id="Ligne_254" data-name="Ligne 254" y1="19.372" x2="20.09" transform="translate(296.5 32.121)" fill="none" stroke="#171716" stroke-linecap="round" stroke-width="3"/>
          </g>
        </svg>&ndash;&gt;
        <h3 class="font-bold 2xl:text-35px text-1.5vw">Paramètrage des cookies</h3>
        <p class="2xl:text-base text-1vw leading-normal">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
        </p>
      </template>
    </CookieControl>-->
    <IncludesHeader/>
    <Nuxt class="min-h-screen"/>
    <IncludesFooter/>
  </div>
</template>
<script>
  import Vue from 'vue'
  import global from "~/mixins/global";
  import transition from "~/mixins/transition";

  Vue.mixin(global)
  Vue.mixin(transition)

  export default {
  }
</script>

<style lang="scss">
.is-visible, .top-text {
  opacity: 0;
  transform: translateY(30px);
}

.is-visible-top {
  opacity: 0;
  transform: translateY(-30px);
}

.is-visible-right {
  opacity: 0;
  transform: translateX(30px);
}

.is-visible-left {
  opacity: 0;
  transform: translateX(-30px);
}

::-webkit-scrollbar {
  display: none!important;
  opacity: 0;
  visibility: hidden;
}

.homeloaderblack {
  position: fixed;
  z-index: 5002;
  display: block;
  width: 100vw;
  height: 100vh;
  background-color: #121212;
  display: flex;
}

.text {
  position: relative;
  color: white;
  margin: 0;
  user-select: none;
}

  .cookieControl__ModalClose {
    @apply text-1vw 2xl:text-base;
  }

  .cookieControl__ModalCookieName {
    @apply text-1vw 2xl:text-base;
  }

  .cookieControl__ModalContent {
    max-width: 80%;
    border-radius: 5px;

      & h3:not(:nth-child(0)) {
        @apply text-1.2vw 2xl:text-base;
      }

      & > ul:nth-child(3) {
        display: none;
      }

    .cookieControl__ModalButtons button {
      @apply text-1vw 2xl:text-base;
      font-family: SoleilBold, SoleilSemiBold, SoleilBook, SoleilRegular, Arial, sans-serif;
      background-color: white;
      border: 1px solid black;
      transition: all .1s ease;
      color: black;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 32px;

      &:nth-child(2) {
        display: none;
      }

      &:hover {
        transform: translate(-3px, -3px);
        box-shadow: 3px 3px 0 0 black;
        color: black;
      }
    }
  }

  .cookieControl__Modal {
    & > div {
      padding-top: 40px;
    }
  }

  .cookieControl__BarContainer {
    padding: 5px 20px;
    align-items: center;

    .cookieControl__BarButtons button {
      padding: 0;

      &:last-child {
        padding: 10px 20px;
      }
    }

    & > div:first-child {
      p {
        @apply text-1vw 2xl:text-base;
        font-family: SoleilBold, SoleilSemiBold, SoleilBook, SoleilRegular, Arial, sans-serif;
      }

      h3 {
        display: none;
      }
    }
  }

  .cookieControl__ModalContent .cookieControl__ModalButtons button {
    padding: 10px 20px;
    height: unset;
  }

  .cookieControl__Bar {
    button {
      font-family: SoleilBold, SoleilSemiBold, SoleilBook, SoleilRegular, Arial, sans-serif;
      @apply text-1vw 2xl:text-base;
    }

    & button:first-child:hover {
      color: black;
      background-color: transparent;
    }

    & button:last-child {
      background-color: white;
      border: 1px solid black;
      transition: all .1s ease;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        transform: translate(-3px, -3px);
        box-shadow: 3px 3px 0 0 black;
        color: black;
      }
    }

    & p {
      max-width: unset;
    }
  }

  html {
    font-size: 100%;
  }

  body {
    font-size: 0.75em;
  }

  /*   MAIN   */
  *, *::before, *::after  {
    padding: 0;
    line-height: 100%;
    line-break: normal;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    outline: none;
    scrollbar-width: none;
  }

  body {
    max-width: 100vw;
    width: 100%;
  }

  p {
    line-height: 30px;
  }


.containerH4 {
  width: 100%;
  margin: 0 auto auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  img {
    margin-left: -15px;
    margin-right: 15px;
  }
}

  h4 {
    font-size: 11px;
    position: relative;
    text-transform: uppercase;
    width: max-content;
    font-family: SoleilBold, SoleilSemiBold, SoleilBook, SoleilRegular, Arial, sans-serif;
    max-width: 100%;
    box-sizing: border-box;

    &::after {
      content: '';
      width: 100%;
      height: 1px;
      display: block;
      position: absolute;
      left: calc(100% + 20px);
      top: 50%;
      transform: translateY(-50%);
      background-color: black;
      font-family: SoleilBold, SoleilSemiBold, SoleilBook, SoleilRegular, Arial, sans-serif;
    }
  }

  .hoverAnimation {
    background-color: white;
    border: 1px solid black;
    transition: all .1s ease;
    border-radius: 5px;

    &:hover {
      transform: translate(-3px, -3px);
      box-shadow: 3px 3px 0 0 black;
    }
  }
</style>
