export default {
  beforeMount() {
  },
  mounted() {
  },
  methods: {
    visibility(entry) {
      if (entry.entry.isIntersecting) {
        this.$gsap.to(entry.entry.target, {
          y: 0,
          x: 0,
          delay: .4,
          autoAlpha: 1,
          duration: 1,
          ease: 'power4.inOut'
        })
      }
    },
    visibilityWithoutDelay(entry) {
      if (entry.entry.isIntersecting) {
        this.$gsap.to(entry.entry.target, {
          y: 0,
          x: 0,
          autoAlpha: 1,
          duration: 1,
          ease: 'power4.inOut'
        })
      }
    }
  }
}
