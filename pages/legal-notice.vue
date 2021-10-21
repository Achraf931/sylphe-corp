<template>
  <div>
    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="topPage" class="z-10 relative w-full max-w-full h-screen bg-purple flex items-center justify-center flex-col text-white">
      <UiDrawSection/>
      <div class="box-content py-0 px-8.5 text-center">
        <h1 v-observe="{ onEnter: visibility, threshold: 0.5 }" class="is-visible lg:text-32px text-3vw leading-normal font-bold mb-5" v-html="$t('Legal.topPage.topPageTitle')"/>
        <h2 v-observe="{ onEnter: visibility, threshold: 0.5 }" class="is-visible leave-anim 2xl:text-24px text-1.5vw font-regular m-auto 2xl:max-w-600 xs:text-base xs:leading-5 md:text-xl md:leading-6">{{ $t('Legal.topPage.description') }}</h2>
      </div>
      <ArrowScroll/>
    </section>

    <section v-observe="{ onEnter: headerChanged, threshold: 0.1 }" id="content" class="bg-white z-10 px-8.5 relative overflow-hidden w-full max-w-screen h-screen flex flex-col items-center justify-center">
      <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="2xl:text-24px text-center 2xl:w-full font-regular is-visible md:leading-6 md:text-xl text-1.5vw w-1/2 xs:text-base leading-normal">
        Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l’économie numérique, il est précisé aux utilisateurs du site sylphe.co l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
      </p>
      <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mb-8.5 md:mb-4 mt-10 md:mt-4 text-center lg:text-32px text-3vw leading-normal font-bold">Édition du site</p>
      <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="2xl:text-24px 2xl:w-full text-center font-regular is-visible md:leading-6 md:text-xl text-1.5vw w-1/2 xs:text-base leading-normal">
        Le site sylphe.co est édité par la société Sylphe, société par actions simplifiée au capital de 700,00 euros, dont le siège social est situé 47 ONZIEME AVENUE 93290 TREMBLAY-EN-FRANCE, immatriculée au registre du commerce et des sociétés sous le numéro d’identification unique 829 549 039 RCS Bobigny.
      </p>
    </section>

    <section v-observe="{ onEnter: headerChanged, threshold: 0.1 }" id="contact-us" class="bg-lightGray z-10 px-8.5 relative overflow-hidden w-full max-w-screen h-screen flex flex-col items-center justify-center">
      <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mb-8.5 md:mb-4 mt-10 md:mt-4 text-center lg:text-32px text-3vw leading-normal font-bold">Responsable de publication</h2>
      <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="2xl:text-24px 2xl:w-full text-center font-regular is-visible md:leading-6 md:text-xl text-1.5vw w-1/2 xs:text-base leading-normal">
        M. Samy Senhadji
      </p>
      <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mb-8.5 md:mb-4 mt-10 md:mt-4 text-center lg:text-32px text-3vw leading-normal font-bold">Hébergeur</h2>
      <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="2xl:text-24px 2xl:w-full text-center font-regular is-visible md:leading-6 md:text-xl text-1.5vw w-1/2 xs:text-base leading-normal">
        Le site sylphe.co est hébergé par la société Amazon Web Services LLC
        <br><br>
        Adresse: P.O. Box 81226, Seattle, WA 98108-1226
        <br><br>
        Le stockage des données personnelles des Utilisateurs est exclusivement réalisé sur les centre de données (“clusters”) localisés dans des Etats membres de l’Union Européenne de la société Amazon Web Services LLC
      </p>
    </section>

    <UiSectionSides v-observe="{ onEnter: headerChanged, threshold: 0.9 }" gsapTarget="contact" class="bg-purple" leftImage="/legal-notice/left.webp" rightImage="/legal-notice/right.webp" topImage="/legal-notice/top.webp" bottomImage="/legal-notice/bottom.webp">
      <div class="text-center flex mx-auto flex-col justify-between md:py-0 md:w-full w-1/2 px-8.5">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mb-10 md:mb-4 text-2.5vw font-bold leading-normal xs:text-base xs:leading-5 md:text-xl md:leading-6 text-white">Nous contacter</h2>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible text-1.5vw my-10 md:my-5 leading-normal font-regular md:text-xl text-white">
          Par email : <a href="mailto:hello@sylphe.co" target="_blank" rel="noreferrer noopener">hello@sylphe.co</a>
        </p>
      </div>
    </UiSectionSides>
  </div>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0)
  }
}
</script>
