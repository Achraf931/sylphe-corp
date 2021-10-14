<template>
  <div>
    <CustomMouse v-if="this.$mq !== 'sm'"/>

    <Loader/>
<!--    <div ref="sylphe_container" class="sylphe_container h-screen w-screen max-w-screen max-h-screen transition-all duration-700 ease-in-out fixed top-0 left-0" style="z-index: 999999999;">
      <video id="sylphe" ref="sylphe" muted playsinline preload="metadata" class="object-cover video-first h-full w-full max-w-screen max-h-screen">
        <source src="/sylphe.mp4" type="video/mp4">
      </video>
    </div>-->
<!--    <StartAnimation/>-->
<!--    <CookieControl :locale="this.$i18n.locale">
      <template v-slot:bar>
        <p>En poursuivant votre navigation</p>
      </template>
      <template v-slot:cookie="{config}">
        <span v-for="c in config" :key="c.id" v-text="c.cookies"/>
      </template>
      <template v-slot:modal>
        <h3 class="font-bold lg:text-32px text-3vw leading-normal">{{ $cookies.text.barTitle }}</h3>
        <p class="2xl:text-base text-1vw leading-normal">{{ $cookies.text.barDescription }}</p>
      </template>
    </CookieControl>-->
    <IncludesHeader/>
    <Nuxt id="nuxtMain" class="min-h-screen"/>
    <IncludesFooter/>
  </div>
</template>
<script>
  import Vue from 'vue'
  import global from "~/mixins/global";
  import transition from "~/mixins/transition";
  import header from "~/mixins/header";

  Vue.mixin(global)
  Vue.mixin(transition)
  Vue.mixin(header)

  export default {
    mounted() {
      window.onscroll = () => this.$ScrollTrigger.update();
    }
  }
</script>

<style lang="scss">
#topPage {
  pointer-events: none;
  user-select: none;

  .box-content {
    z-index: 100;
  }
}

.black-nav {
  color: black!important;

  #logo {
    filter: invert(100%) sepia(100%) saturate(100%) hue-rotate(87deg) brightness(100%) contrast(100%)!important;
  }

  .burger-bar {
    background-color: black!important;
  }

  .lang {
    color: black!important;
  }
}

.mix-diff {
  mix-blend-mode: difference;
}

.text-stroke {
  transition: all .1s ease;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #171716;
}

.text-stroke-white {
  transition: all .1s ease;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
}

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

      &:nth-child(1) {
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
      line-height: normal;

      &:last-child {
        padding: 10px 20px;
      }
    }

    & > div:first-child {
      p {
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
    cursor: none;
  }

  body {
    font-size: 0.75em;
  }

  /*   MAIN   */
  *, *::before, *::after, *:focus  {
    padding: 0;
    line-height: 100%;
    line-break: normal;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    outline: none;
    scrollbar-width: none;
    cursor: none!important;
    -ms-overflow-style: none;
    -webkit-overflow-scrolling: touch; /* Touch scroll by default */
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
    transition: all .1s ease;

    &:hover {
      transform: translate(-3px, -3px)!important;
      box-shadow: 3px 3px 0 0 black;
    }
  }
</style>
