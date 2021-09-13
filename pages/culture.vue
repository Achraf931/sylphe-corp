<template>
  <div>
    <section id="topPage" class="z-10 relative w-full max-w-full h-screen  bg-pink flex items-center justify-center flex-col text-white">
      <div class="box-content py-0 px-7.5 text-center">
        <h1 v-observe="{ onEnter: visibility, threshold: 1 }" class="is-visible leave-anim mb-13 md:mb-5 lg:text-32px text-3vw leading-normal" v-html="$t('Culture.topPageTitle')"/>
        <h2 v-observe="{ onEnter: visibility, threshold: 1 }" class="is-visible leave-anim 2xl:text-24px text-1.5vw font-regular m-auto 2xl:max-w-600 2xl:w-full w-1/2 xs:text-base xs:leading-5 md:text-xl md:leading-6">{{ $t('Culture.description') }}</h2>
      </div>
    </section>

    <section id="love" class="z-10 overflow-hidden relative w-full max-w-full h-screen bg-white flex items-center justify-center">
      <div class="text-center flex flex-col justify-between md:py-0 md:w-full w-1/2">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible mb-4 text-2.5vw leading-normal xs:text-base xs:leading-5 md:text-xl md:leading-6">{{ $t('Culture.goodVibes.title') }}</h2>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible text-1.5vw leading-normal font-regular md:text-xl" v-html="$t('Culture.goodVibes.text')"/>
      </div>
    </section>

    <section id="ourTeam" class="z-10 overflow-hidden relative w-full max-w-full h-screen bg-lightGray flex items-center justify-center">
      <div class="text-center flex flex-col justify-between md:py-0 md:w-full w-1/2">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible mb-4 text-2.5vw leading-normal xs:text-base xs:leading-5 md:text-xl md:leading-6">{{ $t('Culture.ourTeam.title') }}</h2>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible text-1.5vw leading-normal font-regular md:text-xl" v-html="$t('Culture.ourTeam.text')"/>
      </div>
    </section>

    <section id="cards" class="bg-pink relative flex px-34 lg:px-8.5 pt-0 pb-20">
      <div ref="containerCard" class="z-10 max-w-80% containerCards overflow-y-hidden overflow-x-scroll overscroll-x-contain justify-center mx-auto mb-auto -mt-44 md:max-w-screen w-full grid gap-4 grid-cols-3 justify-center">
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
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
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
