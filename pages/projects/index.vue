<template>
  <div class="overflow-x-hidden">
    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="topPage" class="z-10 relative w-full h-screen bg-cyan flex items-center justify-center flex-col text-white">
      <UiDrawSection/>
      <div class="box-content py-0 px-8.5 text-center">
        <h1 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible leave-anim mb-5 lg:text-32px text-3vw leading-normal" v-html="'Découvrez nos réalisations'"/>
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible leave-anim 2xl:text-24px text-1.5vw font-regular m-auto xs:text-base xs:leading-5 md:text-xl md:leading-6">Elles sont toutes faites avec amour</h2>
      </div>
      <ArrowScroll/>
    </section>

    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="projects_list" class="fixed z-0 top-0 h-screen grid grid-flow-col gap-1" style="grid-template-rows: auto auto;">
      <NuxtLink :to="localePath({name: 'projects-slug', params: {slug: project.slug}})" v-for="(project, index) in this.projects" :key="index" class="project filter grayscale hover:filter-none hover:grayscale-0 transition-all duration-100 ease-in-out text-white text-center relative flex flex-col items-center justify-center bg-pink p-5" style="height: 50vh; width: 50vh;" :style="'background: url(' + project.background.url + ') center center no-repeat; background-size: cover;'">
        <p class="2xl:text-24px text-1.5vw font-bold m-auto md:text-xl">{{ project.name }}</p>
        <p class="absolute bottom-5 left-1/2 w-full" style="transform: translateX(-50%)">
          Client : <span class="font-bold">{{ project.client.name }}</span>
          <br>
          Spécialités : <span v-for="(speciality, index) in project.client.specialities" :key="index" class="font-bold">{{ speciality.name }}{{ index + 1 !== project.client.specialities.length ? ', ' : '' }}</span>
        </p>
      </NuxtLink>
      <div class="project transition-all duration-100 ease-in-out text-white text-center relative flex flex-col items-center justify-center bg-cyan p-5" style="height: 50vh; width: 50vh;">
        <p class="2xl:text-24px text-1.5vw font-bold m-auto md:text-xl">On vous réserve encore<br>pleins de surprises …</p>
      </div>
    </section>

    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="empty" class="w-full relative max-w-full h-screen pointer-events-none"></section>

    <UiSectionSides v-observe="{ onEnter: headerChanged, threshold: 0.9 }" gsapTarget="activity" class="bg-lightGray" leftImage="/index/challenge/left.webp" rightImage="/index/challenge/right.webp" topImage="/index/challenge/top.webp" bottomImage="/index/challenge/bottom.webp">
      <div class="text-center flex flex-col mx-auto justify-between md:py-0 md:w-full w-1/2 px-8.5">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mb-10 md:mb-4 lg:text-32px text-3vw leading-normal font-bold">Challengez-nous</h2>

        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible max-w-640 text-1.5vw leading-normal font-regular md:text-xl">
          Petit plus de la maison : nous adorons les besoins compliqués et les réponses sur-mesure.
        </p>
        <UiButton v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mt-10 md:mt-5 mx-auto" :link="'https://calendly.com/sylphe/reunion'" :target="false">{{ $t('nav.call') }}</UiButton>
      </div>
    </UiSectionSides>
  </div>
</template>

<script>
export default {
  async asyncData ({ $strapi, i18n }) {
    return {
      projects: await $strapi.$projects.find({_locale: i18n.locale})
    }
  },
  beforeMount() {
    this.$nextTick(() => {
      requestAnimationFrame(() => {
        const projects = document.getElementById('projects_list')

        this.$gsap.timeline({
          scrollTrigger: {
            trigger: '#empty',
            pin: true,
            start: 'top center',
            end: '+=' + projects.offsetWidth,
            scrub: true
          },
          ease: 'linear.in'
        })
          .to(projects, {
            right: 0,
            left: 'unset',
            duration: 20
          })
      })
    })
  }
}
</script>

<style lang="scss" scoped>
#projects_list {
  left: 120vw;
}

.pin-spacer {
  pointer-events: none!important;
}
</style>
