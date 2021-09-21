<template>
  <header ref="header" class="transition-all z-50 duration-100 ease-in w-full fixed">
    <nav class="flex justify-between py-8 px-16 md:py-4 md:px-3.8">
      <NuxtLink v-observe="{ onEnter: visibility, once: true }" class="is-visible-top flex items-center max-w-8vw 2xl:max-w-none agent-1" :to="localePath({name: 'index'})" style="border: none!important;">
<!--        <svg width="120" height="30.44" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 1000 247" style="enable-background:new 0 0 1000 247; width: 120px; min-width: 120px;" xml:space="preserve">
          <g>
	<g>
		<g>
			<path class="st0" d="M246.4,35.7l-8.4-8.4C220.6,9.8,197.3,0.1,172.6,0.1h-38.3c-24.7,0-48,9.7-65.5,27.2
				c-33.3,33.4-35.9,86-7.9,122.5L8.4,202.5L0,210.9l8.4,8.4c17.5,17.6,40.8,27.2,65.5,27.2h38.3c24.7,0,48-9.7,65.5-27.2
				c33.3-33.4,35.9-86,7.9-122.5l52.6-52.7L246.4,35.7z M131,96.3c31.5,31.6,31.5,82.9,0,114.6c-31.5,31.6-82.7,31.6-114.2,0
				l60.4-60.6c-31.5-31.6-31.5-82.9,0-114.6c31.5-31.6,82.7-31.6,114.2,0L131,96.3z"/>
		</g>
    <g>
			<path class="st0" d="M382.9,64.6c-12.6,0-22.6,6.3-22.6,17.8c0,11.9,15,16.7,27.1,20.8c22.3,7.6,47.5,17.6,47.5,48.1
				c0,33.4-30.4,47.1-55.5,47.1c-23,0-40.3-8-56.8-24.3l18.2-17.6c13.2,12.8,23.2,18.7,38.8,18.7c13.4,0,26.9-6.5,26.9-22.3
				c0-14.5-15.4-20-31.2-25.6c-20.4-7.4-41.9-17.4-41.9-43.6c0-28.8,23-42.3,47.9-42.3c18.9,0,34.3,5.9,49,16.9l-15.8,19.3
				C406.7,70.7,394.6,64.6,382.9,64.6z"/>
      <path class="st0" d="M472.5,84.1l25.2,74h0.4l25.6-74h28.6l-62.9,162.4l-23.4-8.9l17.8-47.1L443.6,84.1H472.5z"/>
      <path class="st0" d="M595.7,195.8h-26.2V33.1h26.2V195.8z"/>
      <path class="st0" d="M652.1,84.1l1.5,14.3c7.8-11.9,22.6-16.9,34.9-16.9c30.6,0,53.6,26,53.6,58.8c0,30.6-22.1,58.1-54,58.1
				c-11.7,0-24.9-4.3-33.6-13.9v62h-26.2V84.1H652.1z M654.5,161.3c7.6,9.8,18.2,14.1,28.6,14.1c21.9,0,32.3-18.7,32.3-35.8
				c0-18.2-12.4-35.1-31.9-35.1c-10.6,0-22.8,5.2-29.1,17.4v39.4H654.5z"/>
      <path class="st0" d="M792.6,99.3c8.7-11.9,21.5-17.8,34.5-17.8c13.4,0,23.9,5.4,30.8,14.3c8.2,10.8,10,25.6,10,41.9v58.1h-26.2
				v-56.2c0-9.3-0.2-19.7-4.3-26.7c-3.3-5.6-8.9-8.5-16.9-8.5c-10.4,0-21.3,6.7-27.8,17.1v74.2h-26.2V33.1h26.2L792.6,99.3
				L792.6,99.3z"/>
      <path class="st0" d="M917.6,146.6c1.7,16.7,13,30.4,31.2,30.4c14.5,0,23.9-5.6,30.8-17.4l17.8,11.9
				c-12.4,18.2-26.9,26.9-50.1,26.9c-34.5,0-56.2-24.5-56.2-57.7c0-33.6,24.5-59.2,56.2-59.2c30.4,0,52.7,21.9,52.7,51.8
				c0,4.1-0.4,9.1-1.1,13.2h-81.3V146.6z M947.9,102.5c-16,0-25.4,10.8-28.8,25.2h54C972.5,113.2,961.8,102.5,947.9,102.5z"/>
		</g>
	</g>
</g>
</svg>-->
        <svg id="logo" xmlns="http://www.w3.org/2000/svg" width="123.307" height="31.185" viewBox="0 0 123.307 31.185">
          <path id="Tracé_1" data-name="Tracé 1" d="M2456.712,298.619l-1.029-1.028a11.281,11.281,0,0,0-8.03-3.326h-4.69a11.357,11.357,0,0,0-8.994,18.292L2427.525,319l-1.028,1.028,1.028,1.028a11.283,11.283,0,0,0,8.031,3.326h4.689a11.357,11.357,0,0,0,8.994-18.292l6.443-6.444Zm-14.153,7.406a9.9,9.9,0,0,1-14.005,14l7.406-7.406a9.9,9.9,0,0,1,14.005-14Z" transform="translate(-2426.497 -294.264)" fill="#fff"/>
          <g id="Groupe_1" data-name="Groupe 1" transform="translate(40.251 4.594)">
            <path id="Tracé_2" data-name="Tracé 2" d="M2566.591,315.587c-1.542,0-2.765.771-2.765,2.181,0,1.462,1.836,2.047,3.324,2.553,2.738.931,5.823,2.154,5.823,5.9,0,4.1-3.723,5.77-6.807,5.77a9.315,9.315,0,0,1-6.967-2.978l2.234-2.154c1.623,1.569,2.846,2.287,4.76,2.287,1.649,0,3.3-.8,3.3-2.739,0-1.782-1.888-2.446-3.829-3.138-2.5-.9-5.133-2.127-5.133-5.345,0-3.537,2.818-5.185,5.877-5.185a9.586,9.586,0,0,1,6.01,2.074l-1.942,2.367A6.241,6.241,0,0,0,2566.591,315.587Z" transform="translate(-2559.199 -311.732)" fill="#fff"/>
            <path id="Tracé_3" data-name="Tracé 3" d="M2611.665,330.012l3.084,9.067h.053l3.138-9.067h3.51l-7.712,19.916-2.872-1.09,2.181-5.77-4.919-13.056Z" transform="translate(-2593.287 -323.763)" fill="#fff"/>
            <path id="Tracé_4" data-name="Tracé 4" d="M2662.2,329.354h-3.217V309.411h3.217Z" transform="translate(-2628.716 -309.411)" fill="#fff"/>
            <path id="Tracé_5" data-name="Tracé 5" d="M2685.667,329.279l.187,1.755a5.127,5.127,0,0,1,4.281-2.074c3.75,0,6.569,3.191,6.569,7.206,0,3.749-2.713,7.127-6.622,7.127a5.645,5.645,0,0,1-4.121-1.7v8.03h-3.218V329.279Zm.293,9.466a4.385,4.385,0,0,0,3.51,1.728c2.685,0,3.962-2.287,3.962-4.388a4.059,4.059,0,0,0-3.909-4.307,3.981,3.981,0,0,0-3.563,2.127Z" transform="translate(-2645.269 -323.03)" fill="#fff"/>
            <path id="Tracé_6" data-name="Tracé 6" d="M2741.813,317.521a5.171,5.171,0,0,1,4.228-2.181,4.6,4.6,0,0,1,3.776,1.755c1.01,1.329,1.223,3.138,1.223,5.132v7.127h-3.217v-6.887a6.805,6.805,0,0,0-.531-3.27,2.195,2.195,0,0,0-2.074-1.037,4.229,4.229,0,0,0-3.4,2.1v9.094h-3.218V309.411h3.218Z" transform="translate(-2684.18 -309.411)" fill="#fff"/>
            <path id="Tracé_7" data-name="Tracé 7" d="M2792.256,336.937a3.844,3.844,0,0,0,3.829,3.723,3.985,3.985,0,0,0,3.776-2.127l2.181,1.462a6.724,6.724,0,0,1-6.142,3.3c-4.228,0-6.887-3.005-6.887-7.073a6.962,6.962,0,0,1,6.887-7.259,6.218,6.218,0,0,1,6.461,6.355,11.215,11.215,0,0,1-.132,1.622Zm3.723-5.4a3.58,3.58,0,0,0-3.536,3.085h6.62A3.085,3.085,0,0,0,2795.979,331.539Z" transform="translate(-2719.304 -323.03)" fill="#fff"/>
          </g>
        </svg>

      </NuxtLink>
      <div v-observe="{ onEnter: visibility, once: true }" @mouseover="enterAnim()" @mouseleave="leaveAnim()" class="is-visible-top flex ml-auto">
        <p @click="switchLanguage(locale.code)" class="lang is-visible-lang uppercase mr-5 opacity-50 cursor-pointer hover:opacity-100 transition-all duration-150 ease-in-out" v-for="locale in $i18n.locales" :key="locale.code" v-if="locale.code !== $i18n.locale">{{ locale.code }}</p>
        <p ref="lang" id="lang" class="lang uppercase font-bold mr-5 cursor-default">{{ $i18n.locales.find(elem => elem.code === $i18n.locale).code }}</p>
      </div>
      <IncludesBurger burgerColor="black"/>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    enterAnim() {
      this.$gsap
        .timeline()
        .to(this.$gsap.utils.toArray('.is-visible-lang'), {
          autoAlpha: 1,
          duration: 0.2,
          ease: 'power2.out',
          x: 0
        })
    },
    leaveAnim() {
      this.$gsap
        .timeline()
        .to(this.$gsap.utils.toArray('.is-visible-lang'), {
          autoAlpha: 0,
          duration: 0.2,
          ease: 'power2.out',
          x: '40px'
        })
    },
    switchLanguage(lang) {
      this.$router.push(this.switchLocalePath(lang))
      this.$viewportObserverState.active = false
      setTimeout(() => {
        this.$viewportObserverState.active = true
      }, 400)
    }
  }
}
</script>

<style lang="scss" scoped>
.lang {
  color: white;
}

.is-visible-lang {
  opacity: 0;
  visibility: hidden;
  transform: translateX(40px);
}

.st0{fill:#0D0C0D;}

nav > a:first-child {
  width: 100%;
}

a {
  font-size: 1.2vw;
}

a:not(.hoverButton):after {
  display: block;
  content: '';
  border-bottom: solid 2px white;
  transform: scaleX(0);
  transition: transform .2s ease-in-out;
  transform-origin: 100% 50%;
}

a:hover:after {
  transform: scaleX(1);
  transform-origin: 0 50%;
}

a.nuxt-link-exact-active:after {
  display: block;
  content: '';
  border-bottom: solid 2px white;
  transform: scaleX(1);
  transition: transform .15s ease-in-out;
  transform-origin: 0 50%;
}

.hoverButton:hover {
  transform: translate(-3px, -3px);
  box-shadow: 3px 3px 0 0 black;
}

@media all and (max-width: 1536px) {
  nav > a:first-child {
    width: auto;
  }
}
</style>
