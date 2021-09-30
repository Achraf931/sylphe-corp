<template>
  <div>
    <section v-observe="{ onEnter: headerChanged, threshold: 0.5 }" id="topPage" class="relative w-full max-w-full flex items-center flex-col text-white" style="height: 200vh;">
      <img class="fixed left-0 top-0 w-full max-w-screen h-screen" style="z-index: -1;" src="/projects/JEUCONCOURS_MINIATURE_la_rentrée_ludique.png" alt="Background image">
      <div class="relative py-0 px-7.5 text-center w-full h-screen flex flex-col justify-center items-center">
        <h1 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible text-stroke-white text-transparent text-4vw leading-normal xs:text-base xs:leading-5 md:text-xl md:leading-6 font-bold">La rentrée ludique</h1>
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible 2xl:text-24px text-1.5vw font-regular max-w-424 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6 mb-5">Célébrons la rentrée des classes
          dans le centre commercial Passy Plaza</h2>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible text-center text-1vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6 text-white">Client : <span class="font-bold">celio x Visionnaire</span></p>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible text-center text-1vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6 text-white">Spécialités : <span class="font-bold">Direction artistique, Influence, Produit</span></p>
        <ArrowScroll/>
      </div>

      <div class="relative py-0 px-7.5 text-center w-full h-screen flex flex-col justify-center items-center">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="uppercase is-visible text-1.5vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6">INTRO</h2>
        <h1 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible text-white mb-10 md:mb-4 lg:text-32px text-3vw leading-normal font-bold">La demande</h1>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible text-1.5vw leading-normal font-regular md:text-xl max-w-640 2xl:w-full">
          Le centre commercial Passy Plaza, situé à Paris a souhaité événementialiser le mois de septembre 2020 et la fin des vacances.
        </p>
      </div>
    </section>

    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="ourResponse" class="overflow-hidden relative w-full max-w-full px-7.5 h-screen bg-white flex items-center justify-center">
      <div class="text-center flex flex-col justify-between md:py-0">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mb-10 md:mb-4 text-2.5vw lg:text-32px text-3vw leading-normal font-bold">Notre réponse</h2>

        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible max-w-640 text-1.5vw leading-normal font-regular md:text-xl">
          En septembre ? C'est le retour sur les bancs de l'école pour tout le monde ! On retrouve les copains, on apprend de nouvelles choses et on s'amuse.
        </p>
      </div>
    </section>

    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="projectImage" class="w-full max-w-screen h-screen" style="background: url('/projects/Rectangle 569.png') center center no-repeat; background-size: cover;"></section>

    <UiSectionSides v-observe="{ onEnter: headerChanged, threshold: 0.9 }" gsapTarget="activity" class="bg-lightGray">
      <div class="text-center flex flex-col justify-between md:py-0 md:w-full px-7.5 w-1/2">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="uppercase is-visible text-1.5vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6">Niveau 1</h2>
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mb-10 md:mb-4 text-2.5vw lg:text-32px text-3vw leading-normal font-bold">Des activités<br>pour petits et grands</h2>

        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible max-w-640 text-1.5vw leading-normal font-regular md:text-xl">
          Il y en a pour tous les goûts : danse, boxe, théâtre, chant, mais aussi construction de nanoblocks, tournois Beyblade, ou encore XXX. Les visiteurs ont pu se divertir tout au long du mois.
        </p>
      </div>
    </UiSectionSides>

    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="slider" class="mouse-hover slide-hover overflow-y-hidden flex overflow-x-scroll relative w-full max-w-full h-screen bg-blue">
      <img class="h-screen object-cover" style="min-width: 50vw; max-width: 50vw;" alt="Image" src="/projects/Rectangle%20569.png"/>
      <img class="h-screen object-cover" style="min-width: 50vw; max-width: 50vw;" alt="Image" src="/projects/Rectangle%20569.png"/>
      <img class="h-screen object-cover" style="min-width: 50vw; max-width: 50vw;" alt="Image" src="/projects/Rectangle%20569.png"/>
      <img class="h-screen object-cover" style="min-width: 50vw; max-width: 50vw;" alt="Image" src="/projects/Rectangle%20569.png"/>
      <img class="h-screen object-cover" style="min-width: 50vw; max-width: 50vw;" alt="Image" src="/projects/Rectangle%20569.png"/>
      <img class="h-screen object-cover" style="min-width: 50vw; max-width: 50vw;" alt="Image" src="/projects/Rectangle%20569.png"/>
      <img class="h-screen object-cover" style="min-width: 50vw; max-width: 50vw;" alt="Image" src="/projects/Rectangle%20569.png"/>
    </section>

    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="levelTwo" class="overflow-hidden relative w-full max-w-full h-screen px-7.5 bg-blue flex items-center justify-center">
      <div class="text-center flex flex-col justify-between md:py-0">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="uppercase text-white is-visible text-1.5vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6">Niveau 2</h2>
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible text-white mb-10 md:mb-4 lg:text-32px text-3vw leading-normal font-bold">Relayés sur les réseaux<br>du centre</h2>

        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible text-white max-w-640 text-1.5vw leading-normal font-regular md:text-xl">
          En lien avec la direction artistique du centre établie par notre team créa, les posts sont colorés et invite à se plonger dans l'école de ses rêves !
        </p>
      </div>
    </section>

    <UiSectionSides v-observe="{ onEnter: headerChanged, threshold: 0.9 }" gsapTarget="levelThree" class="bg-white">
      <div class="text-center flex flex-col justify-between md:py-0 md:w-full px-7.5 w-1/2">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="uppercase is-visible text-1.5vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6">Niveau 3</h2>
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mb-10 md:mb-4 lg:text-32px text-3vw leading-normal font-bold">C'est l'heure du test !</h2>

        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible max-w-640 text-1.5vw leading-normal font-regular md:text-xl">
          À plusieurs reprises, nous avons accompagné le centre dans la création d'une plateforme de jeu-concours en ligne. Cette fois-ci, la plateforme de quiz devient un jeu du petit bac pour petits et grands.
        </p>
      </div>
    </UiSectionSides>

    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="mac" class="overflow-hidden relative w-full max-w-full h-screen bg-lightGray flex items-center justify-center">
      <img v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible" src="/mac.png" alt="Mac">
    </section>

    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="results" class="overflow-hidden relative w-full max-w-full px-7.5 h-screen bg-blue flex items-center justify-center">
      <div class="text-center flex flex-col justify-between md:py-0">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="uppercase text-white is-visible text-1.5vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6">Résultats</h2>
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible text-white mb-10 md:mb-4 lg:text-32px text-3vw leading-normal font-bold">XXXX</h2>

        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible text-white max-w-640 text-1.5vw leading-normal font-regular md:text-xl">
          On peut mettre des datas ça peut être cool. Sinon je vous laisse mettre ce qui vous semble pertinent. Il y a de l'espace, allez-y.
        </p>
      </div>
    </section>

    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="carousel" class="overflow-hidden relative w-full max-w-full h-screen bg-blue flex items-left">
      <div class="h-screen flex flex-col items-center justify-center md:p-5 p-10" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/projects/Rectangle 569.png'); background-size: cover; background-repeat: no-repeat; min-width: 50vw; max-width: 50vw;">
        <h2 class="text-4vw leading-normal xs:text-base xs:leading-5 md:text-xl md:leading-6 p text-white font-bold">celio x Visionnaire</h2>
        <p class="p 2xl:text-24px text-center text-1.5vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6 text-white mb-5">Description rapide du contexte du projet.</p>
        <p class="p text-center text-1vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6 text-white">Client : <span class="font-bold">celio x Visionnaire</span></p>
        <p class="p text-center text-1vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6 text-white">Spécialités : <span class="font-bold">Direction artistique, Influence, Produit</span></p>
        <UiArrow :to="localePath({name: 'projects-slug', params: {slug: 'celio-x-visionnaire'}})"/>
      </div>
      <div class="h-screen flex flex-col items-center justify-center md:p-5 p-10" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/projects/ESIEE-JOURNÉE29-06-32.2.png'); background-size: cover; background-repeat: no-repeat; min-width: 50vw; max-width: 50vw;">
        <h2 class="text-4vw leading-normal xs:text-base xs:leading-5 md:text-xl md:leading-6 p text-white font-bold">Le guide de l’étudiant</h2>
        <p class="p 2xl:text-24px text-center text-1.5vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6 text-white mb-5">Description rapide du contexte du projet.</p>
        <p class="p text-center text-1vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6 text-white">Client : <span class="font-bold">Le guide de l’étudiant</span></p>
        <p class="p text-center text-1vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6 text-white">Spécialités : <span class="font-bold">Direction artistique, Éditorial, Édition</span></p>
        <UiArrow :to="localePath({name: 'projects-slug', params: {slug: 'guide'}})"/>
      </div>
    </section>
  </div>
</template>

<script>
import header from "~/mixins/header";

export default {
  mixins: [header]
}
</script>
