<template>
  <div class="overflow-x-hidden bg-black">
    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="topPage" class="z-10 relative w-full h-screen bg-cyan flex items-center justify-center flex-col text-white">
      <UiDrawSection/>
      <div class="box-content py-0 px-8.5 text-center">
        <h1 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible leave-anim mb-5 lg:text-32px text-3vw leading-normal" v-html="'Découvrez nos réalisations'"/>
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible leave-anim 2xl:text-24px text-1.5vw font-regular m-auto xs:text-base xs:leading-5 md:text-xl md:leading-6">Elles sont toutes faites avec amour</h2>
      </div>
      <ArrowScroll/>
    </section>

    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="projects_list" class="fixed z-0 top-0 left-0 h-screen w-full flex flex-col flex-wrap">
      <NuxtLink :to="localePath({name: 'projects-slug', params: {slug: 'test'}})" v-for="(project, index) in this.projects" :key="index" class="project filter grayscale hover:grayscale-0 transition-all duration-100 ease-in-out text-white text-center relative flex flex-col items-center justify-center bg-pink p-5" style="height: 50vh; width: 50vh;">
        <p class="w-full lg:text-32px text-3vw leading-normal my-auto font-bold">{{ project.name }}</p>
        <p>
          Client : <span class="font-bold">{{ project.client.name }}</span>
          <br>
          Spécialités : <span v-for="(speciality, index) in project.client.specialities" :key="index" class="font-bold">{{ speciality.name }}{{ index + 1 !== project.client.specialities.length ? ', ' : '' }}</span>
        </p>
      </NuxtLink>
    </section>

    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="empty" class="w-full relative z-10 max-w-full h-screen pointer-events-none"></section>

    <UiGlobalSectionSides v-observe="{ onEnter: headerChanged, threshold: 0.9 }" gsapTarget="activity" class="bg-lightGray">
      <div class="text-center flex flex-col justify-between md:py-0 md:w-full w-1/2 px-8.5">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mb-10 md:mb-4 lg:text-32px text-3vw leading-normal font-bold">Challengez-nous</h2>

        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible max-w-640 text-1.5vw leading-normal font-regular md:text-xl">
          Petit plus de la maison : nous adorons les besoins compliqués et les réponses sur-mesure.
        </p>
        <UiButton v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mt-10 md:mt-5 mx-auto" :link="'https://calendly.com/sylphe/reunion'" :target="false">{{ $t('nav.call') }}</UiButton>
      </div>
    </UiGlobalSectionSides>
  </div>
</template>

<script>
export default {
  async asyncData ({ $strapi, i18n }) {
    return {
      projects: await $strapi.$projects.find({_locale: i18n.locale})
    }
  },
  mounted() {
    window.scrollTo(0, 0)
    const projects = document.getElementById('projects_list')
    const project = this.$gsap.utils.toArray('.project')

    this.$gsap.timeline({
      scrollTrigger: {
        trigger: '#empty',
        pin: true,
        start: 'top center',
        end: '+=' + (project[0].offsetWidth * (project.length / 2)),
        scrub: 0
      },
      ease: 'linear.in'
    })
      .to(projects, {
        x: -((project[0].offsetWidth * (project.length / 2)) - projects.offsetWidth),
        duration: 20
      })
    .to({}, {duration: 1})
  }
}
</script>

<style lang="scss" scoped>
#projects_list {
  transform: translateX(120vw);
}

.pin-spacer {
  pointer-events: none;
}
</style>
