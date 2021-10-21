<template>
  <div>
    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="error" class="z-10 relative w-full overflow-hidden max-w-screen h-screen flex items-center justify-between" :class="{'flex-col': this.$mq === 'sm', 'px-8.5': this.$mq !== 'sm'}">
      <img v-if="this.$mq !== 'sm'" :class="'sidebar-left-error'" class="block absolute top-0 h-full" src="/error/left.webp" alt="Left image" style="left: -100%;">
      <div v-else-if="this.$mq === 'sm'" class="y-error block w-full h-1/4 bg-cover bg-bottom bg-no-repeat" style="transform: translateY(-100%);" :style="'background-image: url(/error/top.webp)!important'"></div>

      <div class="text-center flex mx-auto flex-col justify-between items-center md:py-0 md:w-full w-2/4 px-8.5">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mb-10 md:mb-4 lg:text-32px text-3vw font-bold leading-normal text-center" v-html="$t('error.title')"/>

        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible text-1.5vw leading-normal font-regular md:text-xl">{{ $t('error.text') }}</p>
        <UiButton class="mt-10" :link="localePath('index')">{{ $t('error.backButton') }}</UiButton>
      </div>

      <img v-if="this.$mq !== 'sm'" class="block sidebar-right-error absolute top-0 h-full" src="/error/right.webp" alt="Right image" style="right: -100%; z-index: -1;">
      <div v-else-if="this.$mq === 'sm'" class="y-error block w-full h-1/4 bg-cover bg-top bg-no-repeat" style="transform: translateY(100%);" :style="'background-image: url(/error/bottom.webp)!important'"></div>
    </section>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'default',
    mounted() {
      this.$viewportObserverState.active = true
      requestAnimationFrame(this.animation)
    },
    methods: {
      animation() {
        if (this.$mq !== 'sm') {
          this.$gsap
            .timeline({ease: 'power2.inOut'})
            .to('.sidebar-left-error', {
              left: 0,
              duration: .8
            })
            .to('.sidebar-right-error', {
              right: 0,
              duration: .8
            }, '<')
        }
        else {
          const mobile = document.querySelectorAll('.y-error')
          this.$gsap
            .timeline({ease: 'power2.inOut'})
            .to(mobile, {
              y: 0,
              duration: .8
            })
        }
      }
    }
  }
</script>
