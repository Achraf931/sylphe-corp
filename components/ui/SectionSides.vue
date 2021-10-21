<template>
  <section :id="gsapTarget" class="z-10 relative w-full overflow-hidden max-w-screen h-screen flex items-center" :class="{'flex-col': this.$mq === 'sm', 'justify-between': this.bottomImage !== '' && this.topImage !== '', 'justify-center': this.bottomImage === '' && this.topImage === '', 'justify-end': this.topImage === '' && this.bottomImage !== '' }" >
    <img v-if="!!this.leftImage && this.$mq !== 'sm'" :class="'sidebar-left-' + gsapTarget" class="block absolute top-0 h-full" :src="leftImage" alt="Right image" style="left: -100%;">
<!--    <img v-else-if="!!this.leftImage && this.$mq === 'sm'" :class="'y-' + gsapTarget" class="block absolute left-0 top-0 w-full h-full object-cover" :src="leftImage" alt="Right image" style="transform: translateY(-100%);">-->
    <div v-else-if="!!this.topImage && this.$mq === 'sm'" :class="'y-' + gsapTarget" class="block w-full h-1/3 bg-cover bg-bottom bg-no-repeat" style="transform: translateY(-100%);" :style="'background-image: url(' + topImage + ')!important'"></div>

    <slot/>
    <img v-if="!!this.rightImage && this.$mq !== 'sm'" :class="'sidebar-right-' + gsapTarget" class="block absolute top-0 h-full" :src="rightImage" alt="Right image" style="right: -100%; z-index: -1;">
<!--    <img v-else-if="!!this.rightImage && this.$mq === 'sm'" :class="'y-' + gsapTarget" class="block absolute left-0 bottom-0 w-full h-full object-cover" :src="rightImage" alt="Right image" style="transform: translateY(100%); z-index: -1;">-->
    <div v-else-if="!!this.bottomImage && this.$mq === 'sm'" :class="'y-' + gsapTarget" class="block w-full h-1/3 bg-cover bg-top bg-no-repeat" style="transform: translateY(100%);" :style="this.topImage === '' && this.bottomImage !== '' ? 'justify-content: end; margin-top: 40px; background-image: url(' + bottomImage + ')!important' : 'background-image: url(' + bottomImage + ')!important'"></div>
  </section>
</template>

<script>
export default {
  props: {
    gsapTarget: {
      type: String,
      required: true
    },
    leftImage: {
      type: String,
      required: true
    },
    rightImage: {
      type: String,
      required: true
    },
    topImage: {
      type: String,
      required: false
    },
    bottomImage: {
      type: String,
      required: false
    }
  },
  mounted() {
    console.log(this.topImage)
    this.$nextTick(() => {
      if (!!this.rightImage) {
        requestAnimationFrame(this.animation)
      }
    })
  },
  methods: {
    animation() {
      if (this.$mq !== 'sm') {
        this.$gsap
          .timeline({
            scrollTrigger: {
              trigger: `#${this.gsapTarget}`,
              start: 'top bottom',
              end: '+=100%',
              scrub: 0.1,
              onEnter: () => {
                console.log('enter')
              }
            },
            ease: 'power2.inOut'
          })
          .to('.sidebar-left-' + this.gsapTarget, {
            left: 0,
            duration: 4
          })
          .to('.sidebar-right-' + this.gsapTarget, {
            right: 0,
            duration: 4
          }, '<')
      }
      else {
        const mobile = document.querySelectorAll('.y-' + this.gsapTarget)
        this.$gsap
          .timeline({
            scrollTrigger: {
              trigger: `#${this.gsapTarget}`,
              start: 'top bottom',
              end: '+=100%',
              scrub: 0.1
            },
            ease: 'power2.inOut'
          })
          .to(mobile, {
            y: 0,
            duration: 4
          })
      }
    }
  }
}
</script>
