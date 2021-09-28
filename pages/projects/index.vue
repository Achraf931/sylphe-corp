<template>
  <div class="overflow-x-hidden bg-black" style="mix-blend-mode: color;">
    <section id="topPage" class="relative w-full h-screen bg-cyan flex items-center justify-center flex-col text-white">
      <div class="box-content py-0 px-7.5 text-center">
        <h1 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible leave-anim mb-5 lg:text-32px text-3vw leading-normal" v-html="'Découvrez nos réalisations'"/>
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible leave-anim 2xl:text-24px text-1.5vw font-regular m-auto xs:text-base xs:leading-5 md:text-xl md:leading-6">Elles sont toutes faites avec amour</h2>
      </div>
      <ArrowScroll/>
    </section>

    <section id="projects" class="fixed top-0 left-0 h-screen w-full grid grid-rows-2 grid-flow-col" style="z-index: -1;">
      <div v-for="index in 20" :key="index" class="text-white text-center relative flex items-center justify-center bg-pink w-full h-full p-5" style="background-color: #171716;">
        <p class="w-full lg:text-32px text-3vw leading-normal font-bold">Projet</p>
        <p class="absolute bottom-10 w-full inset-x-1/2" style="transform: translateX(-50%);">
          Client : <span class="font-bold">Tokyo Verdy</span>
          <br>
          Spécialités : <span class="font-bold">brand identity, typography, and creative direction</span>
        </p>
      </div>
    </section>

    <section id="empty" class="w-full max-w-full h-screen pointer-events-none"></section>

    <UiSectionSides gsapTarget="activity" class="bg-lightGray">
      <div class="text-center flex flex-col justify-between md:py-0 md:w-full w-1/2">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mb-10 md:mb-4 text-2.5vw font-bold leading-normal xs:text-base xs:leading-5 md:text-xl md:leading-6">Challengez-nous</h2>

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
  mounted() {
    const projects = document.getElementById('projects')

    this.$gsap.timeline({
      scrollTrigger: {
        trigger: '#empty',
        pin: true,
        start: 'top bottom',
        end: `${projects.offsetWidth}`,
        scrub: true,
        markers: true
      }
    })
    .to(projects, {
      x: -projects.offsetWidth,
      duration: 1,
      ease: 'power2.inOut'
    })
  }
}
</script>

<style lang="scss" scoped>
#projects {
  grid-auto-columns: 33.333%;
  transform: translateX(80vw);
}
</style>
