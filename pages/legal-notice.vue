<template>
  <div>
    <section id="topPage" class="w-full max-w-full h-screen bg-purple flex relative items-center justify-center flex-col text-white">
      <div class="box-content py-0 px-7.5 text-center">
        <h1 v-observe="{ onEnter: visibility, threshold: 1 }" class="is-visible lg:text-32px text-3vw leading-normal font-bold mb-13 md:mb-5" v-html="$t('Legal.topPage.topPageTitle')"/>
        <h2 v-observe="{ onEnter: visibility, threshold: 1 }" class="is-visible leave-anim 2xl:text-24px text-1.5vw font-regular m-auto 2xl:max-w-600 2xl:w-full w-1/2 xs:text-base xs:leading-5 md:text-xl md:leading-6">{{ $t('Legal.topPage.description') }}</h2>
      </div>
      <ArrowScroll/>
    </section>

    <section id="content" class="mt-23 pb-36 px-34 lg:px-8.5">
      <div class="w-full mx-auto mb-auto mt-17">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible text-center mb-9 text-2.5vw lg:text-24px lg:leading-none leading-normal">Éditeur</h2>
        <div v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible flex justify-between gap-12 md:gap-10 sm:gap-8 xs:gap-6 xs:flex-col w-full">
          <p class="w-1/2 xs:w-full text-1.5vw leading-normal md:text-xl">Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se consument dans l"âtre, ce qui lui permet de penser à la.</p>
          <p class="w-1/2 xs:w-full text-1.5vw leading-normal md:text-xl">Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se.</p>
        </div>
      </div>

      <div class="w-full mx-auto mb-auto mt-17">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible text-center mb-9 text-2.5vw lg:text-24px lg:leading-none leading-normal">Hébergement</h2>
        <div v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible flex justify-between gap-12 md:gap-10 sm:gap-8 xs:gap-6 xs:flex-col w-full">
          <p class="w-1/2 xs:w-full text-1.5vw leading-normal md:text-xl">
            Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se consument dans l"âtre, ce qui lui permet de penser à la.
          </p>
          <p class="w-1/2 xs:w-full text-1.5vw leading-normal md:text-xl">
            Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se.
          </p>
        </div>
      </div>

      <div class="w-full mx-auto mb-auto mt-17">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible text-center mb-9 text-2.5vw lg:text-24px lg:leading-none leading-normal">Protection des données à caractères personnel</h2>
        <div v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible flex justify-between gap-12 md:gap-10 sm:gap-8 xs:gap-6 xs:flex-col w-full">
          <p class="w-1/2 xs:w-full text-1.5vw leading-normal md:text-xl">
            Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se consument dans l"âtre, ce qui lui permet de penser à la.          </p>
          <p class="w-1/2 xs:w-full text-1.5vw leading-normal md:text-xl">
            Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se.
          </p>
        </div>
      </div>

      <div v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible w-full mx-auto mb-auto mt-17">
        <h2 class="text-center mb-9 text-2.5vw lg:text-24px lg:leading-none leading-normal">Cookies</h2>
          <p class="text-1.5vw leading-normal md:text-xl">
            Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se consument dans l"âtre, ce qui lui permet de penser à la cænogenèse de l"être dont il est question dans la cause ambiguë entendue à Moÿ, dans un capharnaüm qui, pense-t-il, diminue çà et là la qualité de son œuvre. Prouvez, beau juge, que le fameux sandwich au yak tue. L"île exiguë, Où l"obèse jury mûr Fête l"haï volapük, Âne ex æquo au whist, Ôtez ce vœu déçu. Vieux pelage que je modifie : breitschwanz ou yak ? Dès Noël où un zéphyr haï me vêt de glaçons würmiens, je dîne d’exquis rôtis de bœuf au kir à l’aÿ d’âge mûr & cætera ! Fougueux, j"enivre la squaw au pack de beau zythum. Ketch, yawl, jonque flambant neuve… jugez des prix ! Voyez le brick géant que j"examine près du wharf. Portez ce vieux whisky au juge blond qui fume. Bâchez la queue du wagon-taxi avec les pyjamas du fakir. Voix ambiguë d"un cœur qui, au zéphyr, préfère les jattes de kiwis. Mon pauvre zébu ankylosé choque.
            <br><br>
            Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se consument dans l"âtre, ce qui lui permet de penser à la cænogenèse de l"être dont il est question dans la cause ambiguë entendue à Moÿ, dans un capharnaüm qui, pense-t-il, diminue çà et là la qualité de son œuvre. Prouvez, beau juge, que le fameux sandwich au yak tue. L"île exiguë, Où l"obèse jury mûr Fête l"haï volapük, Âne ex æquo au whist, Ôtez ce vœu déçu. Vieux pelage que je modifie : breitschwanz ou yak ? Dès Noël où un zéphyr haï me vêt de glaçons würmiens, je dîne d’exquis rôtis de bœuf au kir à l’aÿ d’âge mûr & cætera ! Fougueux, j"enivre la squaw au pack de beau zythum. Ketch, yawl, jonque flambant neuve… jugez des prix ! Voyez le brick géant que j"examine près du wharf. Portez ce vieux whisky au juge blond qui fume. Bâchez la queue du wagon-taxi avec les pyjamas du fakir. Voix ambiguë d"un cœur qui, au zéphyr, préfère les jattes de kiwis. Mon pauvre zébu ankylosé choque.
            <br><br>
            Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se consument dans l"âtre, ce qui lui permet de penser à la cænogenèse de l"être dont il est question dans la cause ambiguë entendue à Moÿ, dans un capharnaüm qui, pense-t-il, diminue çà et là la qualité de son œuvre. Prouvez, beau juge, que le fameux sandwich au yak tue. L"île exiguë, Où l"obèse jury mûr Fête l"haï volapük, Âne ex æquo au whist, Ôtez ce vœu déçu. Vieux pelage que je modifie : breitschwanz ou yak ? Dès Noël où un zéphyr haï me vêt de glaçons würmiens, je dîne d’exquis rôtis de bœuf au kir à l’aÿ d’âge mûr & cætera ! Fougueux, j"enivre la squaw au pack de beau zythum. Ketch, yawl, jonque flambant neuve… jugez des prix ! Voyez le brick géant que j"examine près du wharf. Portez ce vieux whisky au juge blond qui fume. Bâchez la queue du wagon-taxi avec les pyjamas du fakir. Voix ambiguë d"un cœur qui, au zéphyr, préfère les jattes de kiwis. Mon pauvre zébu ankylosé choque.
          </p>
      </div>

      <div class="w-full mx-auto mb-auto mt-17">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible text-center mb-9 text-2.5vw lg:text-24px lg:leading-none leading-normal">Droits d'auteur - copyrights</h2>
        <div v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible flex justify-between gap-12 md:gap-10 sm:gap-8 xs:gap-6 xs:flex-col w-full">
          <p class="w-1/2 xs:w-full text-1.5vw leading-normal md:text-xl">
            Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se consument dans l"âtre, ce qui lui permet de penser à la.
          </p>
          <p class="w-1/2 xs:w-full text-1.5vw leading-normal md:text-xl">
            Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se.
          </p>
        </div>
      </div>

      <div class="w-full mx-auto mb-auto mt-17">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible text-center mb-9 text-2.5vw lg:text-24px lg:leading-none leading-normal">Limitation de responsabilités</h2>
        <div v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible flex justify-between gap-12 md:gap-10 sm:gap-8 xs:gap-6 xs:flex-col w-full">
          <p class="w-1/2 xs:w-full text-1.5vw leading-normal md:text-xl">
            Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se consument dans l"âtre, ce qui lui permet de penser à la.
          </p>
          <p class="w-1/2 xs:w-full text-1.5vw leading-normal md:text-xl">
            Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se.
          </p>
        </div>
      </div>

      <div class="w-full mx-auto mb-auto mt-17">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible text-center mb-9 text-2.5vw lg:text-24px lg:leading-none leading-normal">Crédits</h2>
        <div v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible flex justify-between gap-12 md:gap-10 sm:gap-8 xs:gap-6 xs:flex-col w-full">
          <p class="w-1/2 xs:w-full text-1.5vw leading-normal md:text-xl">
            Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se consument dans l"âtre, ce qui lui permet de penser à la.
          </p>
          <p class="w-1/2 xs:w-full text-1.5vw leading-normal md:text-xl">
            Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
