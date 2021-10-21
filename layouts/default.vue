<template>
  <div>
    <CustomMouse v-if="this.$mq !== 'sm'"/>

    <Loader/>
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
