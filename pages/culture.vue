<template>
  <div>
    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="topPage" class="z-10 relative w-full max-w-full h-screen  bg-pink flex items-center justify-center flex-col text-white">
      <UiDrawSection/>
      <div class="box-content py-0 px-8.5 text-center">
        <h1 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible leave-anim mb-5 lg:text-32px text-3vw leading-normal" v-html="$t('Culture.topPageTitle')"/>
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible leave-anim 2xl:text-24px text-1.5vw font-regular m-auto 2xl:max-w-600 2xl:w-full w-1/2 xs:text-base xs:leading-5 md:text-xl md:leading-6">{{ $t('Culture.description') }}</h2>
      </div>
      <ArrowScroll/>
    </section>

    <UiSectionSides v-observe="{ onEnter: headerChanged, threshold: 0.9 }" gsapTarget="love" leftImage="/projects/left.webp" rightImage="/projects/right.webp">
      <div class="text-center mx-auto flex flex-col justify-between md:py-0 md:w-full w-1/2 px-8.5">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mb-4 lg:text-32px text-3vw leading-normal font-bold">{{ $t('Culture.goodVibes.title') }}</h2>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible text-1.5vw leading-normal font-regular md:text-xl" v-html="$t('Culture.goodVibes.text')"/>
      </div>
    </UiSectionSides>

    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="ourTeam" class="z-10 px-8.5 overflow-hidden relative w-full max-w-full h-screen bg-lightGray flex items-center justify-center">
      <div class="text-center flex flex-col justify-between md:py-0 md:w-full w-1/2">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mb-4 lg:text-32px text-3vw leading-normal font-bold">{{ $t('Culture.ourTeam.title') }}</h2>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible text-1.5vw leading-normal font-regular md:text-xl" v-html="$t('Culture.ourTeam.text')"/>
      </div>
    </section>

    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="cards" :class="{'px-34 lg:px-8.5': this.$mq !== 'sm'}" class="bg-pink relative flex pt-0 pb-20">
      <div v-if="this.$mq !== 'sm'" ref="containerCard" class="z-10 max-w-80% containerCards justify-center mx-auto mb-auto -mt-44 md:max-w-screen w-full grid gap-4 grid-cols-3 justify-center">
        <div v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="card is-visible">
          <div>
            <img src="/team/samy.webp" alt="Samy">
            <img src="/team/samy-2.webp" alt="Samy">
          </div>
          <div>
            <p class="md:text-xl text-1.2vw leading-normal">Samy Senhadji</p>
            <p class="md:text-base text-1vw leading-normal">CEO</p>
          </div>
        </div>

        <div v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="card is-visible">
          <div>
            <img src="/team/pierre.webp" alt="Pïerre">
            <img src="/team/pierre-2.webp" alt="Pïerre">
          </div>
          <div>
            <p class="md:text-xl text-1.2vw leading-normal">Pierre Le Breton</p>
            <p class="md:text-base text-1vw leading-normal">Directeur des opérations</p>
          </div>
        </div>

        <div v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="card is-visible">
          <div>
            <img src="/team/mehdi.webp" alt="Mehdi">
            <img src="/team/mehdi-2.webp" alt="Mehdi">
          </div>
          <div>
            <p class="md:text-xl text-1.2vw leading-normal">Mehdi Mohamed</p>
            <p class="md:text-base text-1vw leading-normal">Chef de projet</p>
          </div>
        </div>

        <div v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="card is-visible">
          <div>
            <img src="/team/guy.webp" alt="Guy">
            <img src="/team/guy-2.webp" alt="Guy">
          </div>
          <div>
            <p class="md:text-xl text-1.2vw leading-normal">Guy Moeglin</p>
            <p class="md:text-base text-1vw leading-normal">Chef de Projet</p>
          </div>
        </div>

        <div v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="card is-visible">
          <div>
            <img src="/team/ben.webp" alt="Ben">
            <img src="/team/ben-2.webp" alt="Ben">
          </div>
          <div>
            <p class="md:text-xl text-1.2vw leading-normal">Ben Rosenmann</p>
            <p class="md:text-base text-1vw leading-normal">Chef de Projet</p>
          </div>
        </div>

        <div v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="card is-visible">
          <div>
            <img src="/team/kaia.webp" alt="Kaïa">
            <img src="/team/kaia-2.webp" alt="Kaïa">
          </div>
          <div>
            <p class="md:text-xl text-1.2vw leading-normal">Kaïa Campanella</p>
            <p class="md:text-base text-1vw leading-normal">Assistante Chef de Projet</p>
          </div>
        </div>

        <div v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="card is-visible">
          <div>
            <img src="/team/kim.webp" alt="Kim">
            <img src="/team/kim-2.webp" alt="Kim">
          </div>
          <div>
            <p class="md:text-xl text-1.2vw leading-normal">Kimberley Jeanroy</p>
            <p class="md:text-base text-1vw leading-normal">Directrice Artistique</p>
          </div>
        </div>

        <div v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="card is-visible">
          <div>
            <img src="/team/marie.webp" alt="Marie">
            <img src="/team/marie-2.webp" alt="Marie">
          </div>
          <div>
            <p class="md:text-xl text-1.2vw leading-normal">Marie Danty</p>
            <p class="md:text-base text-1vw leading-normal">Graphiste</p>
          </div>
        </div>

        <div v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="card is-visible">
          <div>
            <img src="/team/mari.webp" alt="Marie">
            <img src="/team/mari-2.webp" alt="Marie">
          </div>
          <div>
            <p class="md:text-xl text-1.2vw leading-normal">Mari Amigorena</p>
            <p class="md:text-base text-1vw leading-normal">Motion Designer</p>
          </div>
        </div>

        <div v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="card is-visible">
          <div>
            <img src="/team/btissam.webp" alt="Btissam">
            <img src="/team/btissam-2.webp" alt="Btissam">
          </div>
          <div>
            <p class="md:text-xl text-1.2vw leading-normal">Btissam Belhadi</p>
            <p class="md:text-base text-1vw leading-normal">Chargée de communication</p>
          </div>
        </div>

        <div v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="card is-visible">
          <div>
            <img src="/team/charfeddine.webp" alt="Charfeddine">
            <img src="/team/charfeddine-2.webp" alt="Charfeddine">
          </div>
          <div>
            <p class="md:text-xl text-1.2vw leading-normal">Charfeddine Hamrouni</p>
            <p class="md:text-base text-1vw leading-normal">Développeur web</p>
          </div>
        </div>

        <div v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="card is-visible">
          <div>
            <img src="/team/allison.webp" alt="Allison">
            <img src="/team/allison-2.webp" alt="Allison">
          </div>
          <div>
            <p class="md:text-xl text-1.2vw leading-normal">Allison Crespo</p>
            <p class="md:text-base text-1vw leading-normal">Assistante commerciale</p>
          </div>
        </div>
      </div>

      <div v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" v-else class="z-10 flex items-center -mt-44 overflow-x-scroll overscroll-x-contain overflow-x-scroll" style="scroll-snap-type: x mandatory;">
        <div class="mx-5 text-white text-center relative" style="scroll-snap-align: center; min-width: 80vw;">
            <img src="/team/samy.webp" alt="Samy" style="border-radius: 5px;">
          <div class="mt-5">
            <p class="md:text-xl text-1.2vw leading-normal">Samy Senhadji</p>
            <p class="md:text-base text-1vw leading-normal">CEO</p>
          </div>
        </div>

        <div class="mr-5 text-white text-center relative" style="scroll-snap-align: center; min-width: 80vw;">
            <img src="/team/pierre.webp" alt="Pïerre" style="border-radius: 5px;">
          <div class="mt-5">
            <p class="md:text-xl text-1.2vw leading-normal">Pierre Le Breton</p>
            <p class="md:text-base text-1vw leading-normal">Directeur des opérations</p>
          </div>
        </div>

        <div class="mr-5 text-white text-center relative" style="scroll-snap-align: center; min-width: 80vw;">
            <img src="/team/mehdi.webp" alt="Mehdi" style="border-radius: 5px;">
          <div class="mt-5">
            <p class="md:text-xl text-1.2vw leading-normal">Mehdi Mohamed</p>
            <p class="md:text-base text-1vw leading-normal">Chef de projet</p>
          </div>
        </div>

        <div class="mr-5 text-white text-center relative" style="scroll-snap-align: center; min-width: 80vw;">
            <img src="/team/guy.webp" alt="Guy" style="border-radius: 5px;">
          <div class="mt-5">
            <p class="md:text-xl text-1.2vw leading-normal">Guy Moeglin</p>
            <p class="md:text-base text-1vw leading-normal">Chef de Projet</p>
          </div>
        </div>

        <div class="mr-5 text-white text-center relative" style="scroll-snap-align: center; min-width: 80vw;">
            <img src="/team/ben.webp" alt="Ben" style="border-radius: 5px;">
          <div class="mt-5">
            <p class="md:text-xl text-1.2vw leading-normal">Ben Rosenmann</p>
            <p class="md:text-base text-1vw leading-normal">Chef de Projet</p>
          </div>
        </div>

        <div class="mr-5 text-white text-center relative" style="scroll-snap-align: center; min-width: 80vw;">
            <img src="/team/kaia.webp" alt="Kaïa" style="border-radius: 5px;">
          <div class="mt-5">
            <p class="md:text-xl text-1.2vw leading-normal">Kaïa Campanella</p>
            <p class="md:text-base text-1vw leading-normal">Assistante Chef de Projet</p>
          </div>
        </div>

        <div class="mr-5 text-white text-center relative" style="scroll-snap-align: center; min-width: 80vw;">
            <img src="/team/kim.webp" alt="Kim" style="border-radius: 5px;">
          <div class="mt-5">
            <p class="md:text-xl text-1.2vw leading-normal">Kimberley Jeanroy</p>
            <p class="md:text-base text-1vw leading-normal">Directrice Artistique</p>
          </div>
        </div>

        <div class="mr-5 text-white text-center relative" style="scroll-snap-align: center; min-width: 80vw;">
            <img src="/team/marie.webp" alt="Marie" style="border-radius: 5px;">
          <div class="mt-5">
            <p class="md:text-xl text-1.2vw leading-normal">Marie Danty</p>
            <p class="md:text-base text-1vw leading-normal">Graphiste</p>
          </div>
        </div>

        <div class="mr-5 text-white text-center relative" style="scroll-snap-align: center; min-width: 80vw;">
            <img src="/team/mari.webp" alt="Marie" style="border-radius: 5px;">
          <div class="mt-5">
            <p class="md:text-xl text-1.2vw leading-normal">Mari Amigorena</p>
            <p class="md:text-base text-1vw leading-normal">Motion Designer</p>
          </div>
        </div>

        <div class="mr-5 text-white text-center relative" style="scroll-snap-align: center; min-width: 80vw;">
          <img src="/team/btissam.webp" alt="Btissam" style="border-radius: 5px;">
          <div class="mt-5">
            <p class="md:text-xl text-1.2vw leading-normal">Btissam Belhadi</p>
            <p class="md:text-base text-1vw leading-normal">Chargée de communication</p>
          </div>
        </div>

        <div class="mr-5 text-white text-center relative" style="scroll-snap-align: center; min-width: 80vw;">
            <img src="/team/charfeddine.webp" alt="Charfeddine" style="border-radius: 5px;">
          <div class="mt-5">
            <p class="md:text-xl text-1.2vw leading-normal">Charfeddine Hamrouni</p>
            <p class="md:text-base text-1vw leading-normal">Développeur web</p>
          </div>
        </div>

        <div class="mr-5 text-white text-center relative" style="scroll-snap-align: center; min-width: 80vw;">
            <img src="/team/allison.webp" alt="Allison" style="border-radius: 5px;">
          <div class="mt-5">
            <p class="md:text-xl text-1.2vw leading-normal">Allison Crespo</p>
            <p class="md:text-base text-1vw leading-normal">Assistante commerciale</p>
          </div>
        </div>
      </div>
    </section>

    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="clients" class="z-10 w-full max-w-screen min-h-screen bg-lightGray flex flex-col items-center justify-center p-10 md:p-8.5">
      <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="p is-visible text-center mb-10 md:mb-4 lg:text-32px text-3vw leading-normal font-bold">Ils nous ont fait confiance</p>

      <div class="grid gap-10 items-center" :class="{'grid-cols-4': this.$mq === 'lg', 'grid-cols-3': this.$mq === 'md', 'grid-cols-2': this.$mq === 'sm'}">
        <img v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible img w-2/5 md:w-4/5 mx-auto" src="/clients/LVMH_logo_logotype_Moët_Hennessy_Louis_Vuitton.png" alt="LVMH">
        <img v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible img w-2/5 md:w-4/5 mx-auto" src="/clients/kenzo-logo-def.png" alt="KENZO">
        <img v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible img w-2/5 md:w-4/5 mx-auto" src="/clients/logo-grandrex.png" alt="Le Grand Rex">
        <img v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible img w-2/5 md:w-4/5 mx-auto" src="/clients/Westfield-Les-4-Temps-Logo.ashx.png" alt="Westfield Les 4 Temps">
        <img v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible img w-2/5 md:w-4/5 mx-auto" src="/clients/Niantic_Logo.png" alt="Niantic">
        <img v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible img w-2/5 md:w-4/5 mx-auto" src="/clients/1280px-Viz_Media_2017_logo.svg.png" alt="Viz Media">
        <img v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible img w-2/5 md:w-4/5 mx-auto" src="/clients/Peugeot_2021_Logo.svg.png" alt="Peugeot">
        <img v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible img w-2/5 md:w-4/5 mx-auto" src="/clients/1200px-Logo_celio_2016.svg.png" alt="Celio">
        <img v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible img w-2/5 md:w-4/5 mx-auto" src="/clients/logo-passy-plaza-fd-transparent.png" alt="Passy Plaza">
        <img v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible img w-2/5 md:w-4/5 mx-auto" src="/clients/Logo_ESIEE_Paris.svg.png" alt="ESIEE">
        <img v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible img w-2/5 md:w-4/5 mx-auto" src="/clients/cultura.png" alt="Cultura">
        <img v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible img w-2/5 md:w-4/5 mx-auto" src="/clients/logo.png" alt="Ville de Chatillon">
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.img {
  transition: filter .2s ease-in-out;
  filter: grayscale(1);

  &:hover {
    filter: none;
  }
}
#cards .containerCards {
  .card {
    scroll-snap-align: center;
    @apply text-white text-center relative mt-10 md:w-260 w-full;

    & > div:first-child {
      border-radius: 5px;
    }

    & > div:not(:first-child) {
      @apply w-full font-book mt-5;
    }

    & div {
      position: relative;

      img {
        border-radius: 5px;

        &:last-child {
          transition: all .1s ease-in-out;
          opacity: 0;
          position: absolute;
          left: 0;
          top: 0;
        }
      }

      &:hover img {
        opacity: 1;
      }
    }
  }
}
</style>
