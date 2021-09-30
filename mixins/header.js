export default {
  mounted() {
    const sections = this.$gsap.utils.toArray('section')
    const navDivided = document.querySelector('nav').offsetHeight / 2


    /*sections.forEach(section => {
      this.$ScrollTrigger.create({
        trigger: section,
        start: 'top top+=' + navDivided + 'px',
        end: 'bottom top+=' + navDivided + 'px',
        onUpdate: self => {
          console.log(self.trigger.id)
          this.changeHeader(self.trigger.id)
        },
        onLeave: self => this.changeHeader(self.trigger.id)
      })
    })*/
  },
  methods: {
    headerChanged(entry) {
      const navDivided = document.querySelector('nav').offsetHeight / 2

      if (entry.entry.isIntersecting) {
        this.$ScrollTrigger.create({
          trigger: entry.entry.target,
          start: 'top top+=' + navDivided + 'px',
          end: 'bottom top+=' + navDivided + 'px',
          onUpdate: () => this.changeHeader(entry.entry.target.id),
          onEnterBack: () => this.changeHeader(entry.entry.target.id)
        })
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
    },
    changeHeader(section) {
      const tl = this.$gsap.timeline({delay: 0, duration: 0.05})
      if (section === 'services' || section === 'secret' || section === 'projects' || section === 'activity' || section === 'love' || section === 'ourTeam' || section === 'ourResponse' || section === 'levelThree' || section === 'mac' || section === 'clients' || section === 'content') {
        tl
          .call(() => {
            this.addOrRemoveClass(document.querySelector('nav'), 'black-nav', true);
          })
      }
      else {
        tl
          .call(() => {
            this.addOrRemoveClass(document.querySelector('nav'), 'black-nav');
          })
      }
    }
  }
}
