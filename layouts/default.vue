<template>
  <div>
    <div v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="ball is-visible" style="z-index: 9999999999999;">
      <p class="text-ball text-center text-base font-black text-white" style="white-space: nowrap;"></p>
      <div class="cursor"></div>
    </div>

    <Loader/>
<!--    <div ref="sylphe_container" class="sylphe_container h-screen w-screen max-w-screen max-h-screen transition-all duration-700 ease-in-out fixed top-0 left-0" style="z-index: 999999999;">
      <video id="sylphe" ref="sylphe" muted playsinline preload="metadata" class="object-cover video-first h-full w-full max-w-screen max-h-screen">
        <source src="/sylphe.mp4" type="video/mp4">
      </video>
    </div>-->
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
    <Nuxt id="nuxtMain" class="js-scroll min-h-screen"/>
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
    mounted() {
      const elemClickEvents = this.$gsap.utils.toArray('.elem-click-event')
      const elemDragEvents = this.$gsap.utils.toArray('.elem-drag-event')
      const elemClickAndDragEvents = this.$gsap.utils.toArray('.elem-click-drag-event')
      this.$gsap.set(".ball", {xPercent: -50, yPercent: -50});

      const ball = document.querySelector(".ball");
      const pointer = document.querySelector(".cursor");
      const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      const mouse = { x: pos.x, y: pos.y };
      const speed = 0.35;

      const xSet = this.$gsap.quickSetter(ball, "x", "px");
      const ySet = this.$gsap.quickSetter(ball, "y", "px");
      const xSetP = this.$gsap.quickSetter(pointer, "x", "px");
      const ySetP = this.$gsap.quickSetter(pointer, "y", "px");

      window.addEventListener("mousemove", e => {
        mouse.x = e.x;
        mouse.y = e.y;
      });

      this.$gsap.ticker.add(() => {
        // adjust speed for higher refresh monitors
        const dt = 1.0 - Math.pow(1.0 - speed, this.$gsap.ticker.deltaRatio());

        xSetP((mouse.x - pos.x) + 20);
        ySetP((mouse.y - pos.y) + 20);
        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);


      });

      /*this.lmS = new this.locomotiveScroll({
        el: document.querySelector(".js-scroll"),
        lerp: 0.0001,
        repeat: true
      });
      console.log("lmS", this.lmS);*/

      const sections = this.$gsap.utils.toArray('section')
      const navDivided = document.querySelector('nav').offsetHeight / 2

      sections.forEach((section, index) => {
        this.$ScrollTrigger.create({
          trigger: section,
          start: 'top top+=' + navDivided + 'px',
          onUpdate: () => {
            this.changeHeader(section)
          }
        })
      })
    },
    methods: {
      changeHeader(section) {
      /*  if (section.id === 'empty') {
          document.getElementById("showreel").style.zIndex = '0'
        }
        else {
          document.getElementById("showreel").style.zIndex = '-1'
        }*/

        const tl = this.$gsap.timeline({delay: 0, duration: 0.05})
        if (section.id === 'topPage' || section.id === 'empty' || section.id === 'showreel' || section.id === 'teams' || section.id === 'challenge' || section.id === 'projectImage' || section.id === 'slider' || section.id === 'levelTwo' || section.id === 'projectImageTwo' || section.id === 'cards' || section.id === 'contact') {
          tl.to(this.$gsap.utils.toArray('.lang'), {
            color: 'white'
          })
          .to(this.$gsap.utils.toArray('.burger-bar'), {
            background: 'white'
          }, 0)
          .call(() => {
            document.getElementById('logo').removeAttribute('style')
          }, null, 0)
        }
        else {
          tl.to(this.$gsap.utils.toArray('.lang'), {
            color: 'black'
          })
          .to(this.$gsap.utils.toArray('.burger-bar'), {
            background: 'black'
          }, 0)
            .call(() => {
              document.getElementById('logo').style.filter = 'invert(100%) sepia(100%) saturate(100%) hue-rotate(87deg) brightness(100%) contrast(100%)'
            }, null, 0)
        }
      }
    }
  }
</script>

<style lang="scss">
.ball {
  pointer-events: none;
  width: 50px;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  border: 1px solid #171716;
  border-radius: 50%;
}

.text-ball {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  visibility: hidden;
  line-height: 15px;
}

.cursor {
  border-radius: 100%;
  background: #171716;
  width: 10px;
  height: 10px;
}

#js-scroll {
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
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
    cursor: none;
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
    cursor: none!important;
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
      transform: translate(-3px, -3px)!important;
      box-shadow: 3px 3px 0 0 black;
    }
  }
</style>
