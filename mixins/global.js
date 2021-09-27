export default {
  beforeMount() {
  },
  mounted() {
  },
  methods: {
    enterMouseEvent(text, backgroundColor) {
      const mtl = this.$gsap.timeline({duration: 0.04, ease: 'power3.in'})

          mtl.to('.cursor', {
            autoAlpha: 0
          })
            .to('.text-ball', {
              autoAlpha: 1,
              innerText: text
            }, '-=0.25')
            .to(document.querySelector('.ball'), {
              width: '60px',
              height: '60px',
              backgroundColor: backgroundColor
            }, '<')
    },
    leaveMouseEvent() {
      const mtl = this.$gsap.timeline({duration: 0.06, ease: 'power3.in'})

      mtl.to(document.querySelector('.ball'), {
          width: '50px',
          height: '50px',
          backgroundColor: 'transparent'
        })
          .to('.text-ball', {
            autoAlpha: 0,
            innerText: ''
          }, '<')
          .to('.cursor', {
            autoAlpha: 1
          }, '-=0.25')
    },
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
  }
}
