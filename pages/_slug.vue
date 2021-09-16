<template>
  <div>
    <section id="topPage" class="relative w-full max-w-full flex items-center flex-col text-white" style="height: 200vh;">
      <img class="fixed left-0 top-0 w-full max-w-screen h-screen" style="z-index: -1;" src="/projects/JEUCONCOURS_MINIATURE_la_rentrée_ludique.png" alt="Background image">
      <div class="relative py-0 px-7.5 text-center w-full h-screen flex flex-col justify-center items-center">
        <h1 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible text-stroke-white text-transparent text-4vw leading-normal xs:text-base xs:leading-5 md:text-xl md:leading-6 font-bold">La rentrée ludique</h1>
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible 2xl:text-24px text-1.5vw font-regular max-w-424 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6">Célébrons la rentrée des classes
          dans le centre commercial Passy Plaza</h2>

        <div v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible absolute left-1/2 bottom-20" style="transform: translateX(-50%)">
          <div class="flex">
            <div class="rounded-md border font-medium border-solid border-white p-5 text-white">Éditorial</div>
            <div class="rounded-md ml-10 border font-medium border-solid border-white p-5 text-white">Design</div>
          </div>
        </div>
      </div>

      <div class="relative py-0 px-7.5 text-center w-full h-screen flex flex-col justify-center items-center">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="uppercase is-visible 2xl:text-24px text-1.5vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6">INTRO</h2>
        <h1 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible text-white mb-10 md:mb-4 text-2.5vw font-bold leading-normal xs:text-base xs:leading-5 md:text-xl md:leading-6">La demande</h1>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible text-1.5vw leading-normal font-regular md:text-xl max-w-640 2xl:w-full">
          Le centre commercial Passy Plaza, situé à Paris a souhaité événementialiser le mois de septembre 2020 et la fin des vacances.
        </p>
      </div>
    </section>

    <section id="ourResponse" class="overflow-hidden relative w-full max-w-full h-screen bg-white flex items-center justify-center">
      <div class="text-center flex flex-col justify-between md:py-0">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mb-10 md:mb-4 text-2.5vw font-bold leading-normal xs:text-base xs:leading-5 md:text-xl md:leading-6">Notre réponse</h2>

        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible max-w-640 text-1.5vw leading-normal font-regular md:text-xl">
          En septembre ? C'est le retour sur les bancs de l'école pour tout le monde ! On retrouve les copains, on apprend de nouvelles choses et on s'amuse.
        </p>
      </div>
    </section>

    <section id="projectImage" class="w-full max-w-screen h-screen" style="background: url('/projects/Rectangle 569.png') center center no-repeat; background-size: cover;"></section>

    <section id="activity" class="overflow-hidden relative w-full max-w-full h-screen bg-lightGray flex items-center justify-center">
      <div class="text-center flex flex-col justify-between md:py-0">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="uppercase is-visible 2xl:text-24px text-1.5vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6">Niveau 1</h2>
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mb-10 md:mb-4 text-2.5vw font-bold leading-normal xs:text-base xs:leading-5 md:text-xl md:leading-6">Des activités<br>pour petits et grands</h2>

        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible max-w-640 text-1.5vw leading-normal font-regular md:text-xl">
          Il y en a pour tous les goûts : danse, boxe, théâtre, chant, mais aussi construction de nanoblocks, tournois Beyblade, ou encore XXX. Les visiteurs ont pu se divertir tout au long du mois.
        </p>
      </div>
    </section>

    <section id="slider" class="overflow-y-hidden flex overflow-x-scroll relative w-full max-w-full h-screen bg-blue">
      <img class="w-full h-screen object-cover" style="max-width: 100vh;" alt="Image" src="/projects/Rectangle 569.png"/>
      <img class="w-full h-screen object-cover" style="max-width: 100vh;" alt="Image" src="/projects/Rectangle 569.png"/>
      <img class="w-full h-screen object-cover" style="max-width: 100vh;" alt="Image" src="/projects/Rectangle 569.png"/>
      <img class="w-full h-screen object-cover" style="max-width: 100vh;" alt="Image" src="/projects/Rectangle 569.png"/>
      <img class="w-full h-screen object-cover" style="max-width: 100vh;" alt="Image" src="/projects/Rectangle 569.png"/>
      <img class="w-full h-screen object-cover" style="max-width: 100vh;" alt="Image" src="/projects/Rectangle 569.png"/>
      <img class="w-full h-screen object-cover" style="max-width: 100vh;" alt="Image" src="/projects/Rectangle 569.png"/>
      <img class="w-full h-screen object-cover" style="max-width: 100vh;" alt="Image" src="/projects/Rectangle 569.png"/>
    </section>

    <section id="levelTwo" class="overflow-hidden relative w-full max-w-full h-screen bg-blue flex items-center justify-center">
      <div class="text-center flex flex-col justify-between md:py-0">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="uppercase text-white is-visible 2xl:text-24px text-1.5vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6">Niveau 2</h2>
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible text-white mb-10 md:mb-4 text-2.5vw font-bold leading-normal xs:text-base xs:leading-5 md:text-xl md:leading-6">Relayés sur les réseaux<br>du centre</h2>

        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible text-white max-w-640 text-1.5vw leading-normal font-regular md:text-xl">
          En lien avec la direction artistique du centre établie par notre team créa, les posts sont colorés et invite à se plonger dans l'école de ses rêves !
        </p>
      </div>
    </section>

    <section id="test" class="overflow-hidden relative w-full max-w-full h-screen bg-lightGray flex items-center justify-center">
      <div class="text-center flex flex-col justify-between md:py-0">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mb-10 md:mb-4 text-2.5vw font-bold leading-normal xs:text-base xs:leading-5 md:text-xl md:leading-6">C'est l'heure du test !</h2>

        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible max-w-640 text-1.5vw leading-normal font-regular md:text-xl">
          À plusieurs reprises, nous avons accompagné le centre dans la création d'une plateforme de jeu-concours en ligne. Cette fois-ci, la plateforme de quiz devient un jeu du petit bac pour petits et grands.
        </p>
      </div>
    </section>

    <section id="projectImageTwo" class="w-full max-w-screen h-screen" style="background: url('/projects/Rectangle 569.png') center center no-repeat; background-size: cover;"></section>
  </div>
</template>
