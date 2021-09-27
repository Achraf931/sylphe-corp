<template>
  <section :id="gsapTarget" class="z-10 w-full max-w-screen h-screen flex items-center justify-between">
    <div class="relative overflow-hidden w-1/4 h-full">
      <div class="sidebar opacity-50 w-full h-full bg-white mix-diff" style="transform: translateX(-100%);"></div>
    </div>
    <slot/>
    <div class="relative overflow-hidden w-1/4 h-full">
      <div class="sidebar opacity-50 w-full h-full bg-white mix-diff" style="transform: translateX(100%);"></div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    gsapTarget: {
      type: String,
      required: true
    }
  },
  mounted() {
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
      .to('.sidebar', {
        x: 0,
        duration: 4
      })
  }
}
</script>
