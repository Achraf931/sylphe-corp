<template>
<!--  <div id="burger" :class="{ 'active' : isBurgerActive }" @click.prevent="toggle">-->
  <div ref="containerBurger" id="burger" :class="{'active': isBurgerActive}">
    <div id="menu" class="bg-white max-w-screen w-full fixed top-0 left-0 pointer-events-auto" style="z-index: -1;">
      <ul class="flex flex-col justify-center w-full h-full items-center">
        <li class="cursor-pointer item-burger mouse-hover simple-hover z-10">
          <p class="md:text-24px leading-normal text-3vw font-semibold transition-all duration-200 ease-in border-2 hover:text-blue border-solid border-transparent" @click="navigate('index')">{{ $t('nav.home') }}</p>
        </li>
        <!--          <li class="mb-6" @click="closeSidebarPanel">
                    <NuxtLink class="text-24px font-semibold text-black transition-all duration-200 ease-in border-2 border-solid border-transparent" :to="localePath({name: 'services'})">{{ $t('nav.services') }}</NuxtLink>
                  </li>-->
        <li class="cursor-pointer item-burger mouse-hover simple-hover">
          <p class="md:text-24px leading-normal text-3vw font-semibold transition-all duration-200 ease-in border-2 hover:text-pink border-solid border-transparent" @click="navigate('culture')">{{ $t('nav.culture') }}</p>
        </li>
        <li class="cursor-pointer item-burger mouse-hover simple-hover">
          <p class="md:text-24px leading-normal text-3vw font-semibold transition-all duration-200 ease-in border-2 hover:text-cyan border-solid border-transparent" @click="navigate('projects')">{{ $t('nav.works') }}</p>
        </li>
        <li class="cursor-pointer mb-6 item-burger mouse-hover simple-hover">
          <p class="md:text-24px leading-normal text-3vw font-semibold transition-all duration-200 ease-in border-2 hover:text-yellow border-solid border-transparent" @click="navigate('contact')">{{ $t('nav.contact') }}</p>
        </li>
        <a href="https://calendly.com/sylphe/reunion" target="_blank" rel="noreferrer noopener" class="item-burger defaultButton mouse-hover simple-hover hoverAnimation">{{ $t('nav.call') }}</a>
      </ul>

      <div id="footerBurger" class="absolute bottom-0 left-0 w-full p-10 flex justify-center items-center">
        <a id="sylpheFacebook" href="https://www.facebook.com/SylpheCompany/" rel="noreferrer noopener" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#1E1F1D" width="25" height="25" viewBox="0 0 25 25"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
        </a>

        <a class="mx-4" id="sylpheTwitter" href="https://twitter.com/sylphecompany" rel="noreferrer noopener" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#1E1F1D" width="25" height="25" viewBox="0 0 25 25"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/></svg>
        </a>

        <a id="sylpheLinkedin" href="https://www.linkedin.com/company/sylphe/?originalSubdomain=fr" rel="noreferrer noopener" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#1E1F1D" width="25" height="25" viewBox="0 0 25 25"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
        </a>

        <a class="ml-4" id="sylpheInstagram" href="https://www.instagram.com/sylphecompany/" rel="noreferrer noopener" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#1E1F1D" width="25" height="25" viewBox="0 0 25 25"><path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"/></svg>
        </a>
      </div>
    </div>
    <button v-observe="{ onEnter: visibility, once: true }" type="button" ref="burger" class="is-visible-top mouse-hover simple-hover burger-button pointer-events-auto">
      <span class="burger-bar burger-bar--1"></span>
      <span class="burger-bar burger-bar--2"></span>
      <span class="burger-bar burger-bar--3"></span>
    </button>
  </div>
</template>
<script>
import header from "@/mixins/header";

  export default {
    mixins: [header],
    props: ['burgerColor'],
    data: () => ({
      isBurgerActive: false,
      fullyOpen: false
    }),
    methods: {
      openBurger() {
        const tl = this.$gsap.timeline()
        const items = this.$gsap.utils.toArray('.item-burger')

        tl
          .call(() => {
            this.isBurgerActive = true
            this.addOrRemoveClass(document.querySelector('nav'), 'black-nav', true);
            /*this.$refs.containerBurger.classList.add('active')
            document.getElementById('logo').style.filter = 'invert(100%) sepia(100%) saturate(100%) hue-rotate(87deg) brightness(100%) contrast(100%)'
            this.$gsap.utils.toArray('.lang').forEach(item => {
              item.style.color = 'black'
            })*/
            document.querySelector('body').style.overflowY = 'hidden'
          })
          .to('#menu', {
            height: '100vh',
            duration: 1,
            ease: 'power4.out'
          })
          .to(items, {
          y: 0,
          autoAlpha: 1,
          display: 'flex',
          duration: 1,
          ease: 'power3.out'
        }, '-=0.5')
          .to(document.getElementById('footerBurger'), {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: 'power3.out'
          }, '-=0.5')
          .call(() => {
            this.fullyOpen = true
          });
      },
      closeBurger() {
        const tlb = this.$gsap.timeline()
        const items = this.$gsap.utils.toArray('.item-burger')

        tlb
          .to(document.getElementById('footerBurger'), {
            y: '-40px',
            autoAlpha: 0,
            duration: 0.6,
            ease: 'power3.in'
          })
          .to(items, {
            y: '-40px',
            display: 'none',
            autoAlpha: 0,
            duration: 0.6,
            ease: 'power3.in'
          }, '-=0.5')
          .to('#menu', {
            height: '0',
            duration: 0.6,
            ease: 'power4.in'
          }, '-=0.25')
          .call(() => {
            this.isBurgerActive = false
            this.addOrRemoveClass(document.querySelector('nav'), 'black-nav');
            /*this.$refs.containerBurger.classList.remove('active')
            document.getElementById('logo').removeAttribute('style')
            this.$gsap.utils.toArray('.lang').forEach(item => {
              item.removeAttribute('style')
            })*/
            document.querySelector('body').style.overflowY = 'scroll'

            this.fullyOpen = false
          }, null, '-=0.10')
      },
      navigate(to) {
        this.closeBurger()
        this.$router.push({ path: this.localePath({name: to}) })
      }
    },
    mounted() {
      const items = this.$gsap.utils.toArray('.item-burger')

      items.forEach(item => {
        item.addEventListener('click', () => {
          this.isBurgerActive = false
        })
      })

      this.$refs.burger.addEventListener('click', () => {
        if (this.isBurgerActive && this.fullyOpen) {
          this.closeBurger()
        }
        else {
          this.openBurger()
        }
      })
    }
  }
</script>
<style lang="scss" scoped>
.defaultButton {
  background-color: white;
  border: 1px solid black;
  color: black;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  align-items: center;
  min-height: 45px;
  justify-content: center;
  font-family: SoleilBold, SoleilSemiBold, SoleilBook, SoleilRegular, Arial, sans-serif;
  @apply md:text-13px text-1.2vw leading-normal;
}

#footerBurger {
  opacity: 0;
  visibility: hidden;
  transform: translateX(0, -40px);
}
.item-burger {
  opacity: 0;
  display: none;
  visibility: hidden;
  transform: translate(0, -40px);
}
  .bgBlack {
    background-color: black!important;
  }

  button {
    cursor: pointer;
  }

  /* remove blue outline */
  button:focus {
    outline: 0;
  }

  .burger-button {
    position: relative;
    height: 30px;
    width: 32px;
    display: block;
    z-index: 9999999999;
    border: 0;
    border-radius: 0;
    background-color: transparent;
    pointer-events: all;
    transition: transform .6s cubic-bezier(.165,.84,.44,1);
  }

  .burger-bar {
    background-color: white;
    position: absolute;
    top: 50%;
    right: 6px;
    left: 6px;
    height: 2px;
    width: auto;
    margin-top: -1px;
    transition: transform .6s cubic-bezier(.165,.84,.44,1),opacity .3s cubic-bezier(.165,.84,.44,1),background-color .6s cubic-bezier(.165,.84,.44,1);
  }

  .burger-bar--1 {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }

  .burger-bar--2 {
    transform-origin: 100% 50%;
    transform: scaleX(.8);
  }

  .burger-button:hover .burger-bar--2 {
    transform: scaleX(1);
  }

  .no-touchevents .burger-bar--2:hover {
    transform: scaleX(1);
  }

  .burger-bar--3 {
    transform: translateY(6px);
  }

  #burger.active {
    .burger-bar {
      background-color: black!important;
    }

    .burger-bar--1 {
      transform: rotate(45deg)
    }

    .burger-bar--2 {
      opacity: 0;
    }

    .burger-bar--3 {
      transform: rotate(-45deg)
    }

    .burger-button {
      transform: rotate(-180deg);
    }
  }
</style>
