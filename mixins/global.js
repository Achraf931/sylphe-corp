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
          duration: 0.6,
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
          duration: 0.6,
          ease: 'power4.inOut'
        })
      }
    }
  },
  addOrRemoveClass(el, className, add) {
    const elem = el

    if (add) {
      if (!elem.classList.contains(className)) {
        elem.classList.add(className)
      }
    }
    else {
      if (elem.classList.contains(className)) {
        elem.classList.remove(className)
      }
    }
  }
}
