
export default {
    transition(to, from) {
      return {
        appear: true,
        enter(el, done) {
          if (sessionStorage.getItem('anim') === null) {
            const sylpheVideo = document.getElementById('sylphe')
            this.$gsap
              .timeline()
              .call(() => {
                sylpheVideo.play()
                sylpheVideo.onended = () => {
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

            const tl = this.$gsap
              .timeline({ onComplete: done })
              .call(() => {
                window.scrollTo(0, 0)
              })
            if (from) {
              tl.fromTo('.containerLoader', {
                y: '100%'
              },
              {
                y: 0,
                duration: 0.6,
                ease: 'power3.inOut'
              })
              for (let i = 0; i < this.$gsap.utils.toArray('.loader').length; i++) {
                tl
                  .fromTo(this.$gsap.utils.toArray('.loader')[i], {
                    height: 0
                  },
                  {
                    height: '100%',
                    delay: 0.1,
                    duration: 0.6,
                    ease: 'power3.inOut'
                  }, '-=0.6')
              }
              tl
                .fromTo('.containerLoader', {
                    y: 0
                  },
                  {
                    y: '-100%',
                    duration: 0.6,
                    ease: 'power3.inOut'
                  })
                .to(document.getElementById('nuxtMain'), {
                  y: 0,
                  duration: 0.6,
                  ease: 'power3.inOut'
                })
            }
              tl.call(() => {
                this.$viewportObserverState.active = true
              }, null, '<')
          }
        },
        leave(el, done) {
          this.$gsap
            .timeline({ onComplete: done })
            .call(() => {
              this.$viewportObserverState.active = false
            })
        }
      }
    }
}
