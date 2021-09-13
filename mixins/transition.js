
export default {
    transition(to, from) {
      return {
        appear: true,
        enter(el, done) {
          if (sessionStorage.getItem('anim')) {
            this.$gsap
              .timeline()
              .call(() => {
                this.$refs.sylphe.play()
                this.$refs.sylphe.onended = () => {
                  this.$gsap.timeline()
                    .to(document.querySelector('.sylphe_container'), {
                      autoAlpha: 0
                    })
                    .call(() => {
                      sessionStorage.setItem('anim', false)
                      this.$viewportObserverState.active = true
                    }, null, 0.3)
                }
              })
          }
          else {
            if (document.querySelector('.sylphe_container'))
              document.querySelector('.sylphe_container').remove()

            this.$gsap
              .timeline({ onComplete: done })
              .call(() => {
                window.scrollTo(0, 0)
              })
            .call(() => {
              this.$viewportObserverState.active = true
            }, null, '<')
          }
        },
        leave(el, done) {
          this.$gsap
            .timeline({ onComplete: done })
            .to('.top-text', {
                y: '-40px',
                duration: 0.6,
                ease: 'power2.out'
              })
          this.$viewportObserverState.active = false
        }
      }
    }
}
