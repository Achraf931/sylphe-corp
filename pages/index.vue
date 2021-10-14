<template>
  <div>
    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="topPage" class="z-10 relative w-full max-w-full h-screen bg-blue flex items-center justify-center flex-col text-white">
      <UiDrawSection/>
      <div class="box-content py-0 px-8.5 text-center">
        <h1 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible lg:text-32px text-3vw leading-normal">{{ $t('Home.topPageTitlePart1') }}</h1>
        <h1 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible lg:text-32px text-3vw leading-normal font-bold mb-5">{{ $t('Home.topPageTitlePart2') }}</h1>
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" v-html="$t('Home.description')"
            class="is-visible 2xl:text-24px text-1.5vw font-regular m-auto 2xl:w-full w-1/2 2xl:max-w-640 xs:text-base xs:leading-5 md:text-xl md:leading-6 leading-normal"/>
      </div>
      <ArrowScroll/>
    </section>

    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="showreel" class="fixed top-0 left-0 w-full max-w-full h-screen flex items-center justify-center z-0">
      <video width="100%" height="100%" class="w-full h-full absolute left-0 top-0 object-cover" style="filter: brightness(60%);" loop autoplay="autoplay" muted>
        <source src="/showreel/showreel.webm" type="video/webm">
        <source src="/showreel/showreel.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div :class="{'text-shadow': this.$mq === 'sm'}" class="py-2.5 hoverShowreel flex items-center justify-between z-0">
        <h2 class="transition-all duration-100 ease-in-out lg:text-32px text-3vw leading-normal text-white">Showreel</h2>
        <p class="transition-all duration-100 ease-in-out ml-2 text-white text-4xl font-bold">→</p>
      </div>
    </section>

    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="empty" class="w-full max-w-full h-screen mouse-hover show-hover"></section>

    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="services" :class="{'flex-col': this.$mq === 'sm'}" class="relative z-10 bg-white w-full max-w-full h-screen px-8.5 md:text-24px md:mx-auto md:mt-auto flex justify-between items-center overflow-hidden">
      <div v-if="this.$mq !== 'sm'" class="relative overflow-hidden w-1/4 h-full">
        <div class="sidebar-service w-full h-full bg-white" style="transform: translateX(-100%)"></div>
      </div>

      <div v-else class="bg-black y-service w-full" style="transform: translateY(-100%); height: 50px;">
        <div class="w-full"></div>
      </div>

      <div :class="{'w-full': this.$mq === 'sm', }" class="w-2/4 flex items-center flex-col">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mb-10 md:mb-4 lg:text-32px text-3vw font-bold leading-normal text-center">On vous aide avec</h2>

        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" :class="{'service-selected': currentService === 'events', 'mb-5': this.$mq === 'sm'}" @click="changeIllustration('events');"
           @mouseover="currentService = 'events'"
           @mouseenter="enterService('events')"
           @mouseleave="leaveService('events')"
           class="is-visible text-stroke font-bold lg:text-24px text-3vw text-transparent leading-normal text-center">
          {{ $t('tmp.home.events') }}</p>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" :class="{'service-selected': currentService === 'digital', 'mb-5': this.$mq === 'sm'}" @click="changeIllustration('digital');"
           @mouseover="currentService = 'digital'"
           @mouseenter="enterService('digital')"
           @mouseleave="leaveService('digital')"
           class="is-visible text-stroke font-bold lg:text-24px text-3vw text-transparent leading-normal text-center">
          {{ $t('tmp.home.digital') }}</p>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" :class="{'service-selected': currentService === 'influence', 'mb-5': this.$mq === 'sm'}" @click="changeIllustration('influence');"
           @mouseover="currentService = 'influence'"
           @mouseenter="enterService('influence')"
           @mouseleave="leaveService('influence')"
           class="is-visible text-stroke font-bold lg:text-24px text-3vw text-transparent leading-normal text-center">
          {{ $t('tmp.home.influence') }}</p>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" :class="{'service-selected': currentService === 'products', 'mb-5': this.$mq === 'sm'}" @click="changeIllustration('products');"
           @mouseover="currentService = 'products'"
           @mouseenter="enterService('products')"
           @mouseleave="leaveService('products')"
           class="is-visible text-stroke font-bold lg:text-24px text-3vw text-transparent leading-normal text-center">
          {{ $t('tmp.home.production') }}</p>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" :class="{'service-selected': currentService === 'design', 'mb-5': this.$mq === 'sm'}" @click="changeIllustration('design');"
           @mouseover="currentService = 'design'"
           @mouseenter="enterService('design')"
           @mouseleave="leaveService('design')"
           class="is-visible text-stroke font-bold lg:text-24px text-3vw text-transparent leading-normal text-center">
          {{ $t('tmp.home.design') }}</p>
      </div>

      <div v-if="this.$mq !== 'sm'" class="relative overflow-hidden w-1/4 h-full">
        <div class="sidebar-service w-full h-full bg-white" style="transform: translateX(100%)"></div>
      </div>

      <div v-else class="bg-black y-service w-full" style="transform: translateY(100%); height: 50px;">
        <div class="w-full"></div>
      </div>
    </section>

    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="secret" class="z-10 overflow-hidden relative w-full max-w-full px-8.5 h-screen bg-lightGray flex items-center justify-center">
      <img class="baloon baloon-1 absolute" style="left: 70%; transform: translate(0, 400%);" width="281" height="567" src="/index/baloon1.webp" alt="Baloon 1">
      <img class="baloon baloon-2 absolute" style="left: 10%; transform: translate(0, 180%);" width="182" height="404" src="/index/baloon2.webp" alt="Baloon 2">
      <img class="baloon baloon-3 absolute" style="left: 46%; transform: translate(0, 0);" width="146" height="326" src="/index/baloon3.webp" alt="Baloon 3">

      <div class="text-center flex flex-col justify-between md:py-0 md:w-full w-1/2">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mb-10 md:mb-4 lg:text-32px text-3vw font-bold leading-normal">{{ $t('Home.body.title') }}</h2>

        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="2xl:text-24px 2xl:w-full font-regular is-visible md:leading-6 md:text-xl text-1.5vw xs:text-base leading-normal" v-html="$t('Home.body.text')"/>
      </div>
    </section>

    <section v-observe="{ onEnter: headerChanged, threshold: 0.1 }" id="teams" :class="{'flex-col py-8.5': this.$mq !== 'lg'}" class="z-10 relative w-full max-w-full h-screen overflow-hidden flex items-center justify-between bg-blue">
      <div v-if="this.$mq === 'lg'" id="containerToBottom" class="pl-10 w-1/4 overflow-hidden flex flex-col-reverse">
        <img src="/team/samy.webp" alt="Samy" class="w-full to-bottom mb-10 bg-white flex items-center justify-center"/>
        <img src="/team/pierre.webp" alt="Pierre" class="w-full to-bottom mb-10 bg-white flex items-center justify-center"/>
        <img src="/team/allison.webp" alt="Allison" class="w-full to-bottom mb-10 bg-white flex items-center justify-center"/>
        <img src="/team/ben.webp" alt="Ben" class="w-full to-bottom mb-10 bg-white flex items-center justify-center"/>
        <img src="/team/btissam.webp" alt="Btissam" class="w-full to-bottom mb-10 bg-white flex items-center justify-center"/>
        <img src="/team/guy.webp" alt="Guy" class="w-full to-bottom mb-10 bg-white flex items-center justify-center"/>
      </div>

      <div class="text-center flex flex-col justify-between md:py-0 md:w-full w-1/2 mx-10" :class="{'px-8.5': this.$mq !== 'lg'}">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mb-10 md:mb-4 lg:text-32px text-3vw leading-normal font-bold text-white" v-html="$t('Home.teams.title')"/>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="2xl:text-24px 2xl:w-full font-regular is-visible md:leading-6 md:text-xl text-1.5vw xs:text-base leading-normal text-white" v-html="$t('Home.teams.text')"/>
        <UiButton v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mt-10 md:mt-5 mx-auto" :class="{'mb-10': this.$mq !== 'lg'}" :link="localePath({name: 'index'})">{{ $t('Home.teams.button') }}</UiButton>
      </div>

      <div v-if="this.$mq === 'lg'" id="containerToTop" class="pr-10 w-1/4 overflow-hidden">
        <img src="/team/charfeddine.webp" alt="Charfeddine" class="to-top bg-white flex items-center justify-center"/>
        <img src="/team/kaia.webp" alt="Kaia" class="to-top mt-10 bg-white flex items-center justify-center"/>
        <img src="/team/kim.webp" alt="Kim" class="to-top mt-10 bg-white flex items-center justify-center"/>
        <img src="/team/mari.webp" alt="Mari" class="to-top mt-10 bg-white flex items-center justify-center"/>
        <img src="/team/marie.webp" alt="Marie" class="to-top mt-10 bg-white flex items-center justify-center"/>
        <img src="/team/mehdi.webp" alt="Mehdi" class="to-top mt-10 bg-white flex items-center justify-center"/>
      </div>

      <div v-else class="flex items-center overflow-y-hidden overflow-x-scroll" style="overscroll-behavior-x: contain; scroll-snap-type: x mandatory;">
        <img src="/team/samy.webp" alt="Samy" class="w-full bg-white flex items-center justify-center mr-5 xs:w-80vw md:w-50vw w-20vw" style="scroll-snap-align: center;"/>
        <img src="/team/pierre.webp" alt="Pierre" class="w-full bg-white flex items-center justify-center mr-5 xs:w-80vw md:w-50vw w-20vw" style="scroll-snap-align: center;"/>
        <img src="/team/allison.webp" alt="Allison" class="w-full bg-white flex items-center justify-center mr-5 xs:w-80vw md:w-50vw w-20vw" style="scroll-snap-align: center;"/>
        <img src="/team/ben.webp" alt="Ben" class="w-full bg-white flex items-center justify-center mr-5 xs:w-80vw md:w-50vw w-20vw" style="scroll-snap-align: center;"/>
        <img src="/team/btissam.webp" alt="Btissam" class="w-full bg-white flex items-center justify-center mr-5 xs:w-80vw md:w-50vw w-20vw" style="scroll-snap-align: center;"/>
        <img src="/team/guy.webp" alt="Guy" class="w-full bg-white flex items-center justify-center mr-5 xs:w-80vw md:w-50vw w-20vw" style="scroll-snap-align: center;"/>
        <img src="/team/charfeddine.webp" alt="Charfeddine" class="bg-white flex items-center justify-center mr-5 xs:w-80vw md:w-50vw w-20vw" style="scroll-snap-align: center;"/>
        <img src="/team/kaia.webp" alt="Kaia" class="bg-white flex items-center justify-center mr-5 xs:w-80vw md:w-50vw w-20vw" style="scroll-snap-align: center;"/>
        <img src="/team/kim.webp" alt="Kim" class="bg-white flex items-center justify-center mr-5 xs:w-80vw md:w-50vw w-20vw" style="scroll-snap-align: center;"/>
        <img src="/team/mari.webp" alt="Mari" class="bg-white flex items-center justify-center mr-5 xs:w-80vw md:w-50vw w-20vw" style="scroll-snap-align: center;"/>
        <img src="/team/marie.webp" alt="Marie" class="bg-white flex items-center justify-center mr-5 xs:w-80vw md:w-50vw w-20vw" style="scroll-snap-align: center;"/>
        <img src="/team/mehdi.webp" alt="Mehdi" class="bg-white flex items-center justify-center xs:w-80vw md:w-50vw w-20vw" style="scroll-snap-align: center;"/>
      </div>
    </section>

    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="projects" class="z-10 relative overflow-hidden w-full max-w-screen h-screen">
      <div class="flex flex-col bg-white items-center justify-center px-8.5 w-full h-full text-center">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mb-10 md:mb-4 p-8.5 lg:text-32px text-3vw leading-normal font-bold">
          Vous voulez connaître notre niveau de jeu ?
        </h2>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="2xl:text-24px 2xl:w-full font-regular is-visible md:leading-6 md:text-xl text-1.5vw w-1/2 xs:text-base leading-normal">
          On n’a pas le droit de montrer tous nos projets, mais on a quand même fait une belle petite sélection pour que vous puissiez avoir une idée de ce qu’on sait faire.
        </p>
      </div>

      <div v-for="project in this.projects" :key="project.id" class="project absolute flex flex-col text-center items-center justify-center p-8.5" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/projects/JEUCONCOURS_MINIATURE_la_rentrée_ludique.png'); background-size: cover; background-repeat: no-repeat;">
        <h2 class="lg:text-32px text-4vw leading-normal p text-white font-bold">{{ project.name }}</h2>
        <p class="p 2xl:text-24px text-center text-1.5vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6 text-white mb-5">{{ project.description }}</p>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="text-center text-1vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6 text-white text-white leading-normal">Client : <span class="font-bold">{{ project.client.name }}</span></p>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="text-center text-1vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6 text-white leading-normal">Spécialités : <span v-for="(speciality, index) in project.client.specialities" :key="index" class="font-bold">{{ speciality.name }}{{ index + 1 !== project.client.specialities.length ? ', ' : '' }}</span>
        </p>
        <UiArrow :to="localePath({name: 'projects-slug', params: {slug: project.slug}})"/>
      </div>

      <div class="project absolute flex flex-col text-center items-center justify-center p-8.5" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/projects/JEUCONCOURS_MINIATURE_la_rentrée_ludique.png'); background-size: cover; background-repeat: no-repeat;">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mb-10 md:mb-4 lg:text-32px text-3vw leading-normal font-bold text-white">Pour plus<br>de choix</h2>

        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="2xl:text-24px 2xl:w-full font-regular is-visible mb-10 md:mb-5 md:leading-6 md:text-xl text-1.5vw w-1/2 xs:text-base leading-normal text-white">
          Blablabla
        </p>
        <UiButton v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mx-auto" :link="localePath({name: 'projects'})" :target="false">J'en veux plus !</UiButton>
      </div>

      <div class="absolute left-0 bottom-0 w-full h-4 z-10" style="background: rgba(255, 255, 255, 0.3);"><div id="projects-line" class="h-full bg-white w-0"></div></div>
    </section>

    <UiSectionSides v-observe="{ onEnter: headerChanged, threshold: 0.9 }" gsapTarget="challenge" class="bg-blue" leftImage="/projects/left.webp" rightImage="/projects/right.webp">
      <div class="w-2/4 md:w-full mx-auto flex flex-col items-center px-8.5 text-center">
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mb-10 md:mb-4 text-white lg:text-32px text-3vw leading-normal font-bold">Challengez-nous !</p>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="2xl:text-24px 2xl:w-full font-regular is-visible md:leading-6 md:text-xl text-1.5vw w-1/2 xs:text-base text-white leading-normal">Petit plus de la maison : nous adorons les besoins compliqués et les réponses sur-mesure.</p>
        <UiButton v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mt-10 md:mt-5 mx-auto" :link="'https://calendly.com/sylphe/reunion'" :target="false">{{ $t('nav.call') }}</UiButton>
      </div>
    </UiSectionSides>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentService: 'events'
    }
  },
  async asyncData ({ $strapi, i18n }) {
    return {
      projects: await $strapi.$projects.find({_locale: i18n.locale})
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.scrollTo(0, 0)

      requestAnimationFrame(() => {
        this.baloonsAnimation()
        if (this.$mq === 'lg') {
          this.cardsAnimation()
        }
        this.projectsAnimation()
      })
    })
  },
  methods: {
    changeIllustration(service) {
      this.currentService = service

      this.$gsap
        .timeline({ ease: 'power2.inOut' })
        .to(this.$gsap.utils.toArray('.y-service'), {
          y: 0,
          duration: 0.2
        })
    },
    baloonsAnimation() {
      const baloons = this.$gsap.utils.toArray('.baloon')

      const btl = this.$gsap.timeline({
        scrollTrigger: {
          trigger: '#secret',
          start: 'top center',
          end: 'bottom top',
          scrub: true
        }
      })
      for (let i = 0; i < baloons.length; i++) {
        btl.to(baloons[i], {
          y: '-50%',
          yPercent: -baloons[i].height / 3,
          duration: 10
        }, 0)
      }
    },
    cardsAnimation() {
      let toTop = document.getElementById('containerToTop');
      let toBottom = document.getElementById('containerToBottom');
      let cards = this.$gsap.utils.toArray(".card");

      this.$gsap.timeline({
        scrollTrigger: {
          trigger: '#teams',
          pin: true,
          start: 'top top',
          end: `+=${toTop.offsetHeight + document.getElementById('teams').offsetHeight - 50}px`,
          scrub: true
        },
        ease: 'power0.none'
      })
        .to('#showreel', {
          top: '-100vh'
        })
        .fromTo(toTop,
          {
            y: '75%'
          },
          {
            y: '-75%'
          }, 0)
        .fromTo(toBottom,
          {
            y: '-75%'
          },
          {
            y: '75%'
          }, '<')

      const tl = this.$gsap.timeline({
        scrollTrigger: {
          trigger: '#multicards',
          pin: true,
          start: 'top top',
          end: '+=1500',
          scrub: 0.1
        }
      })

      for (let i = 0; i < cards.length; i++) {
        tl.to(cards[i], {
          top: '50%',
          left: '50%',
          y: '-50%',
          x: '-50%',
          rotate: Math.floor(Math.random() * 10) - 10,
          duration: 4,
          ease: 'power2.in'
        }, null, '<')
      }

      tl.to({}, { duration: 2 })
    },
    projectsAnimation() {
      let projects = this.$gsap.utils.toArray(".project");

      const ptl = this.$gsap
        .timeline({
          scrollTrigger: {
            trigger: '#projects',
            pin: true,
            start: 'top top',
            end: '+=3000',
            scrub: true,
            toggleActions: "play complete reset",
            onUpdate: self => {
              if (self.progress.toFixed(2) >= 0.20 || self.progress === 1) {
                this.addOrRemoveClass(document.querySelector('nav'), 'black-nav', false);
              }

              this.$gsap
                .to('#projects-line', {
                  width: `${self.progress.toFixed(2) * 100}%`
                })
            },
            onEnterBack: self => {
              if (self.progress.toFixed(2) >= 0.20 || self.progress === 1) {
                this.addOrRemoveClass(document.querySelector('nav'), 'black-nav', false);
              }
            }
          },
          ease: 'power2.inOut'
        })

      for (let i = 0; i < projects.length; i++) {
        const h2 = projects[i].children[0];
        const text = projects[i].children[1];
        const p = projects[i].children[2];
        const sub_p = projects[i].children[3];
        const svg = projects[i].children[4];

        ptl.to({}, {duration: 10})
          .to(projects[i], {
            x: '-50%',
            left: '50%',
            duration: 15
          })
          .to(projects[i], {
            maxWidth: '100vw',
            height: '100vh',
            duration: 15,
          })
          .to([h2, text, p, sub_p, svg], {
            autoAlpha: 1,
            duration: 15
          }, '<')
          .to({}, { duration: 4} )
      }
      ptl.to({}, { duration: 4 })
    },
    enterService(service) {
      if (this.$mq !== 'sm') {
        this.$gsap
          .timeline({ ease: 'power2.inOut' })
          .to('.sidebar-service', {
            x: 0,
            duration: 0.2
          })
      }
    },
    leaveService(service) {
      if (this.$mq !== 'sm') {
        this.$gsap
          .timeline({ ease: 'power2.inOut' })
          .to(this.$gsap.utils.toArray('.sidebar-service')[0], {
            x: '-100%',
            duration: 0.2
          })
          .to(this.$gsap.utils.toArray('.sidebar-service')[1], {
            x: '100%',
            duration: 0.2
          }, 0)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.text-shadow {
  text-shadow: 1px 1px 0 black;
}

#containerToTop {
  transform: translate(0, 75%);
}

#containerToBottom {
  transform: translate(0, -75%);
}

.hoverShowreel:hover p, .hoverShowreel:hover h2 {
  transform: translate(-3px, -3px) !important;
  text-shadow: 3px 3px black;
}

.project {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100%;
  max-width: 80vw;
  height: 80vh;
  top: 50%;
  left: 100%;
  transform: translate(0, -50%);

  & > h2, & > p, & > a, & > div, & > svg {
    opacity: 0;
    visibility: hidden;
  }
}
.service-selected {
  color: white;
  transform: translate(-3px, -3px);
  text-shadow: 3px 3px 0 #171716;
}
</style>
