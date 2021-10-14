<template>
  <div>
    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="topPage" class="z-10 relative w-full max-w-full h-screen bg-purple flex items-center justify-center flex-col text-white">
      <UiDrawSection/>
      <div class="box-content py-0 px-8.5 text-center">
        <h1 v-observe="{ onEnter: visibility, threshold: 0.5 }" class="is-visible lg:text-32px text-3vw leading-normal font-bold mb-5" v-html="$t('Legal.topPage.topPageTitle')"/>
        <h2 v-observe="{ onEnter: visibility, threshold: 0.5 }" class="is-visible leave-anim 2xl:text-24px text-1.5vw font-regular m-auto 2xl:max-w-600 2xl:w-full w-1/2 xs:text-base xs:leading-5 md:text-xl md:leading-6">{{ $t('Legal.topPage.description') }}</h2>
      </div>
      <ArrowScroll/>
    </section>

    <section v-observe="{ onEnter: headerChanged, threshold: 0.1 }" id="content" class="pt-23 pb-36 px-34 lg:px-8.5">
      <div class="w-full mx-auto mb-auto">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible text-center mb-9 text-2.5vw lg:text-24px lg:leading-none leading-normal">Éditeur</h2>
        <div v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible flex justify-between gap-12 md:gap-10 sm:gap-8 xs:gap-6 xs:flex-col w-full">
          <p class="w-1/2 xs:w-full xs:text-center text-1.5vw leading-normal md:text-xl">Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se consument dans l"âtre, ce qui lui permet de penser à la.</p>
          <p class="w-1/2 xs:w-full xs:text-center text-1.5vw leading-normal md:text-xl">Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se.</p>
        </div>
      </div>

      <div class="w-full mx-auto mb-auto mt-17">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible text-center mb-9 text-2.5vw lg:text-24px lg:leading-none leading-normal">Hébergement</h2>
        <div v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible flex justify-between gap-12 md:gap-10 sm:gap-8 xs:gap-6 xs:flex-col w-full">
          <p class="w-1/2 xs:w-full xs:text-center text-1.5vw leading-normal md:text-xl">
            Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se consument dans l"âtre, ce qui lui permet de penser à la.
          </p>
          <p class="w-1/2 xs:w-full xs:text-center text-1.5vw leading-normal md:text-xl">
            Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se.
          </p>
        </div>
      </div>

      <div class="w-full mx-auto mb-auto mt-17">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible text-center mb-9 text-2.5vw lg:text-24px lg:leading-none leading-normal">Protection des données à caractères personnel</h2>
        <div v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible flex justify-between gap-12 md:gap-10 sm:gap-8 xs:gap-6 xs:flex-col w-full">
          <p class="w-1/2 xs:w-full xs:text-center text-1.5vw leading-normal md:text-xl">
            Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se consument dans l"âtre, ce qui lui permet de penser à la.          </p>
          <p class="w-1/2 xs:w-full xs:text-center text-1.5vw leading-normal md:text-xl">
            Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se.
          </p>
        </div>
      </div>

      <div class="w-full mx-auto mb-auto mt-17">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible text-center mb-9 text-2.5vw lg:text-24px lg:leading-none leading-normal">Cookies</h2>
        <div v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible flex-col w-full">
          <p class="w-full xs:text-center text-1.5vw leading-normal md:text-xl">
            Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se consument dans l"âtre, ce qui lui permet de penser à la.
          </p>
          <p class="w-full xs:text-center text-1.5vw leading-normal md:text-xl mt-10">
            Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se.
          </p>
          <p class="w-full xs:text-center text-1.5vw leading-normal md:text-xl mt-10">
            Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se.
          </p>
        </div>
      </div>

      <div class="w-full mx-auto mb-auto mt-17">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible text-center mb-9 text-2.5vw lg:text-24px lg:leading-none leading-normal">Droits d'auteur - copyrights</h2>
        <div v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible flex justify-between gap-12 md:gap-10 sm:gap-8 xs:gap-6 xs:flex-col w-full">
          <p class="w-1/2 xs:w-full xs:text-center text-1.5vw leading-normal md:text-xl">
            Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se consument dans l"âtre, ce qui lui permet de penser à la.
          </p>
          <p class="w-1/2 xs:w-full xs:text-center text-1.5vw leading-normal md:text-xl">
            Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se.
          </p>
        </div>
      </div>

      <div class="w-full mx-auto mb-auto mt-17">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible text-center mb-9 text-2.5vw lg:text-24px lg:leading-none leading-normal">Limitation de responsabilités</h2>
        <div v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible flex justify-between gap-12 md:gap-10 sm:gap-8 xs:gap-6 xs:flex-col w-full">
          <p class="w-1/2 xs:w-full xs:text-center text-1.5vw leading-normal md:text-xl">
            Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se consument dans l"âtre, ce qui lui permet de penser à la.
          </p>
          <p class="w-1/2 xs:w-full xs:text-center text-1.5vw leading-normal md:text-xl">
            Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se.
          </p>
        </div>
      </div>

      <div class="w-full mx-auto mb-auto mt-17">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible text-center mb-9 text-2.5vw lg:text-24px lg:leading-none leading-normal">Crédits</h2>
        <div v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible flex justify-between gap-12 md:gap-10 sm:gap-8 xs:gap-6 xs:flex-col w-full">
          <p class="w-1/2 xs:w-full xs:text-center text-1.5vw leading-normal md:text-xl">
            Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se consument dans l"âtre, ce qui lui permet de penser à la.
          </p>
          <p class="w-1/2 xs:w-full xs:text-center text-1.5vw leading-normal md:text-xl">
            Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0)
  }
}
</script>
