<template>
<!--  <div id="burger" :class="{ 'active' : isBurgerActive }" @click.prevent="toggle">-->
  <div ref="burger" id="burger">
    <div id="menu" class="bg-white max-w-screen w-full fixed top-0 left-0" style="z-index: -1;">
      <ul class="flex flex-col justify-center w-full h-full items-center">
        <li class="mb-6 item-burger z-10">
          <NuxtLink class="md:text-24px text-3vw font-semibold text-black transition-all duration-200 ease-in border-2 border-solid border-transparent" :to="localePath({name: 'index'})">{{ $t('nav.home') }}</NuxtLink>
        </li>
        <!--          <li class="mb-6" @click="closeSidebarPanel">
                    <NuxtLink class="text-24px font-semibold text-black transition-all duration-200 ease-in border-2 border-solid border-transparent" :to="localePath({name: 'services'})">{{ $t('nav.services') }}</NuxtLink>
                  </li>-->
        <li class="mb-6 item-burger">
          <NuxtLink class="md:text-24px text-3vw font-semibold text-black transition-all duration-200 ease-in border-2 border-solid border-transparent" :to="localePath({name: 'culture'})">{{ $t('nav.culture') }}</NuxtLink>
        </li>
        <li class="mb-6 item-burger">
          <NuxtLink class="md:text-24px text-3vw font-semibold text-black transition-all duration-200 ease-in border-2 border-solid border-transparent" :to="localePath({name: 'contact'})">{{ $t('nav.contact') }}</NuxtLink>
        </li>
        <a href="https://calendly.com/sylphe/reunion" target="_blank" rel="noreferrer noopener" class="item-burger defaultButton hoverAnimation">{{ $t('nav.call') }}</a>
      </ul>
    </div>
    <slot>
      <button v-observe="{ onEnter: visibility, once: true }" type="button" class="is-visible-top burger-button" title="Menu">
        <span :class="{bgBlack: burgerColor == 'black' ? 'black!important' : ''}" class="burger-bar burger-bar--1"></span>
        <span :class="{bgBlack: burgerColor == 'black' ? 'black!important' : ''}" class="burger-bar burger-bar--2"></span>
        <span :class="{bgBlack: burgerColor == 'black' ? 'black!important' : ''}" class="burger-bar burger-bar--3"></span>
      </button>
    </slot>
  </div>
</template>
<script>
  export default {
    props: ['burgerColor'],
    data: () => ({
      isBurgerActive: false
    }),
    mounted() {
      const tl = this.$gsap.timeline()
      const tlb = this.$gsap.timeline()
      const items = this.$gsap.utils.toArray('.item-burger')

      this.$refs.burger.addEventListener('click', () => {
        if (this.isBurgerActive) {
          tlb
          .to(items, {
            y: '-40px',
            display: 'none',
            autoAlpha: 0,
            duration: 0.6,
            ease: 'power3.in'
          })
          .to('#menu', {
            height: '0',
            duration: 0.6,
            ease: 'power4.in'
          }, '-=0.25')
              .call(() => {
                this.isBurgerActive = false
                this.$refs.burger.classList.remove('active')
                document.querySelector('body').style.overflowY = 'scroll'
              }, null, '-=0.10')
        }
        else {
          tl
              .call(() => {
                this.isBurgerActive = true
                this.$refs.burger.classList.add('active')
                document.querySelector('body').style.overflowY = 'hidden'
              })
              .to('#menu', {
                height: '100vh',
                duration: 1,
                ease: 'power4.out'
              })

            tl.to(items, {
              y: 0,
              autoAlpha: 1,
              display: 'flex',
              duration: 1,
              ease: 'power3.out'
            }, '-=0.75');
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
    background-color: black;
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
      background-color: black;
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
