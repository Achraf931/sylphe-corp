<template>
  <div>
    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="topPage" class="z-10 relative w-full max-w-full h-screen bg-blue flex items-center justify-center flex-col text-white">
      <UiDrawSection/>
      <div class="box-content py-0 px-8.5 text-center">
        <h1 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible lg:text-32px text-3vw leading-normal">{{ $t('Home.topPageTitlePart1') }}</h1>
        <h1 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible lg:text-32px text-3vw leading-normal font-bold mb-5">{{ $t('Home.topPageTitlePart2') }}</h1>
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" v-html="$t('Home.description')"
            class="is-visible 2xl:text-24px text-1.5vw font-regular m-auto 2xl:w-full w-1/2 2xl:max-w-640 xs:text-base xs:leading-5 md:text-xl md:leading-6"/>
      </div>
      <ArrowScroll/>
    </section>

    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="showreel" class="fixed top-0 left-0 w-full max-w-full h-screen flex items-center justify-center z-0">
      <video width="100%" height="100%" class="w-full h-full absolute left-0 top-0 object-cover" style="filter: brightness(60%);" loop autoplay="autoplay" muted>
        <source src="/showreel/showreel.webm" type="video/webm">
        <source src="/showreel/showreel.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div :class="{'text-shadow': this.$mq === 'sm'}" class="py-2.5 hoverShowreel flex items-center justify-between z-0">
        <h2 class="transition-all duration-100 ease-in-out lg:text-32px text-3vw leading-normal text-white">Showreel</h2>
        <p class="transition-all duration-100 ease-in-out ml-2 text-white text-4xl font-bold">→</p>
      </div>
    </section>

    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="empty" class="w-full max-w-full h-screen mouse-hover show-hover"></section>

    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="services" :class="{'flex-col': this.$mq === 'sm'}" class="relative z-10 bg-white w-full max-w-full h-screen px-8.5 md:text-24px md:mx-auto md:mt-auto flex justify-between items-center overflow-hidden">
      <div v-if="this.$mq !== 'sm'" class="relative overflow-hidden w-1/4 h-full">
        <div class="sidebar-service w-full h-full bg-white" style="transform: translateX(-100%)"></div>
      </div>

      <div v-else class="bg-black y-service w-full" style="transform: translateY(-100%); height: 50px;">
        <div class="w-full"></div>
      </div>

      <div :class="{'w-full': this.$mq === 'sm', }" class="w-2/4 flex items-center flex-col">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mb-10 md:mb-4 lg:text-32px text-3vw font-bold leading-normal text-center">On vous aide avec</h2>

        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" :class="{'service-selected': currentService === 'events', 'mb-5': this.$mq === 'sm'}" @click="changeIllustration('events');"
           @mouseover="currentService = 'events'"
           @mouseenter="enterService('events')"
           @mouseleave="leaveService('events')"
           class="is-visible text-stroke font-bold lg:text-24px text-3vw text-transparent leading-normal text-center">
          {{ $t('tmp.home.events') }}</p>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" :class="{'service-selected': currentService === 'digital', 'mb-5': this.$mq === 'sm'}" @click="changeIllustration('digital');"
           @mouseover="currentService = 'digital'"
           @mouseenter="enterService('digital')"
           @mouseleave="leaveService('digital')"
           class="is-visible text-stroke font-bold lg:text-24px text-3vw text-transparent leading-normal text-center">
          {{ $t('tmp.home.digital') }}</p>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" :class="{'service-selected': currentService === 'influence', 'mb-5': this.$mq === 'sm'}" @click="changeIllustration('influence');"
           @mouseover="currentService = 'influence'"
           @mouseenter="enterService('influence')"
           @mouseleave="leaveService('influence')"
           class="is-visible text-stroke font-bold lg:text-24px text-3vw text-transparent leading-normal text-center">
          {{ $t('tmp.home.influence') }}</p>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" :class="{'service-selected': currentService === 'products', 'mb-5': this.$mq === 'sm'}" @click="changeIllustration('products');"
           @mouseover="currentService = 'products'"
           @mouseenter="enterService('products')"
           @mouseleave="leaveService('products')"
           class="is-visible text-stroke font-bold lg:text-24px text-3vw text-transparent leading-normal text-center">
          {{ $t('tmp.home.production') }}</p>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" :class="{'service-selected': currentService === 'design', 'mb-5': this.$mq === 'sm'}" @click="changeIllustration('design');"
           @mouseover="currentService = 'design'"
           @mouseenter="enterService('design')"
           @mouseleave="leaveService('design')"
           class="is-visible text-stroke font-bold lg:text-24px text-3vw text-transparent leading-normal text-center">
          {{ $t('tmp.home.design') }}</p>
      </div>

      <div v-if="this.$mq !== 'sm'" class="relative overflow-hidden w-1/4 h-full">
        <div class="sidebar-service w-full h-full bg-white" style="transform: translateX(100%)"></div>
      </div>

      <div v-else class="bg-black y-service w-full" style="transform: translateY(100%); height: 50px;">
        <div class="w-full"></div>
      </div>
    </section>

    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="secret" class="z-10 overflow-hidden relative w-full max-w-full px-8.5 h-screen bg-lightGray flex items-center justify-center">
      <img class="baloon baloon-1 absolute" style="left: 70%; transform: translate(0, 400%);" width="281" height="567" src="/index/baloon1.webp" alt="Baloon 1">
      <img class="baloon baloon-2 absolute" style="left: 10%; transform: translate(0, 180%);" width="182" height="404" src="/index/baloon2.webp" alt="Baloon 2">
      <img class="baloon baloon-3 absolute" style="left: 46%; transform: translate(0, 0);" width="146" height="326" src="/index/baloon3.webp" alt="Baloon 3">

      <div class="text-center flex flex-col justify-between md:py-0 md:w-full w-1/2">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mb-10 md:mb-4 lg:text-32px text-3vw font-bold leading-normal">{{ $t('Home.body.title') }}</h2>

        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="2xl:text-24px 2xl:w-full font-regular is-visible md:leading-6 md:text-xl text-1.5vw xs:text-base" v-html="$t('Home.body.text')"/>
      </div>
    </section>

    <section v-observe="{ onEnter: headerChanged, threshold: 0.1 }" id="teams" :class="{'flex-col py-8.5': this.$mq === 'sm'}" class="z-10 relative w-full max-w-full h-screen overflow-hidden flex items-center justify-between bg-blue">
      <div v-if="this.$mq !== 'sm'" id="containerToBottom" class="pl-10 w-1/4 overflow-hidden flex flex-col-reverse">
        <img src="/team/samy.webp" alt="Samy" class="w-full to-bottom mb-10 bg-white flex items-center justify-center"/>
        <img src="/team/pierre.webp" alt="Pierre" class="w-full to-bottom mb-10 bg-white flex items-center justify-center"/>
        <img src="/team/allison.webp" alt="Allison" class="w-full to-bottom mb-10 bg-white flex items-center justify-center"/>
        <img src="/team/ben.webp" alt="Ben" class="w-full to-bottom mb-10 bg-white flex items-center justify-center"/>
        <img src="/team/btissam.webp" alt="Btissam" class="w-full to-bottom mb-10 bg-white flex items-center justify-center"/>
        <img src="/team/guy.webp" alt="Guy" class="w-full to-bottom mb-10 bg-white flex items-center justify-center"/>
      </div>

      <div class="text-center flex flex-col justify-between md:py-0 md:w-full w-1/2 mx-10" :class="{'px-8.5': this.$mq === 'sm'}">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mb-10 md:mb-4 lg:text-32px text-3vw leading-normal font-bold text-white" v-html="$t('Home.teams.title')"/>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="2xl:text-24px 2xl:w-full font-regular is-visible md:leading-6 md:text-xl text-1.5vw xs:text-base text-white" v-html="$t('Home.teams.text')"/>
        <UiButton v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mt-10 md:mt-5 mx-auto" :class="{'mb-10': this.$mq === 'sm'}" :link="localePath({name: 'index'})">{{ $t('Home.teams.button') }}</UiButton>
      </div>

      <div v-if="this.$mq !== 'sm'" id="containerToTop" class="pr-10 w-1/4 overflow-hidden">
        <img src="/team/charfeddine.webp" alt="Charfeddine" class="to-top bg-white flex items-center justify-center"/>
        <img src="/team/kaia.webp" alt="Kaia" class="to-top mt-10 bg-white flex items-center justify-center"/>
        <img src="/team/kim.webp" alt="Kim" class="to-top mt-10 bg-white flex items-center justify-center"/>
        <img src="/team/mari.webp" alt="Mari" class="to-top mt-10 bg-white flex items-center justify-center"/>
        <img src="/team/marie.webp" alt="Marie" class="to-top mt-10 bg-white flex items-center justify-center"/>
        <img src="/team/mehdi.webp" alt="Mehdi" class="to-top mt-10 bg-white flex items-center justify-center"/>
      </div>

      <div v-else class="flex items-center overflow-y-hidden overflow-x-scroll" style="overscroll-behavior-x: contain; scroll-snap-type: x mandatory;">
        <img src="/team/samy.webp" alt="Samy" class="w-full bg-white flex items-center justify-center mr-5" style="scroll-snap-align: center; width: 80vw;"/>
        <img src="/team/pierre.webp" alt="Pierre" class="w-full bg-white flex items-center justify-center mr-5" style="scroll-snap-align: center; width: 80vw;"/>
        <img src="/team/allison.webp" alt="Allison" class="w-full bg-white flex items-center justify-center mr-5" style="scroll-snap-align: center; width: 80vw;"/>
        <img src="/team/ben.webp" alt="Ben" class="w-full bg-white flex items-center justify-center mr-5" style="scroll-snap-align: center; width: 80vw;"/>
        <img src="/team/btissam.webp" alt="Btissam" class="w-full bg-white flex items-center justify-center mr-5" style="scroll-snap-align: center; width: 80vw;"/>
        <img src="/team/guy.webp" alt="Guy" class="w-full bg-white flex items-center justify-center mr-5" style="scroll-snap-align: center; width: 80vw;"/>
        <img src="/team/charfeddine.webp" alt="Charfeddine" class="bg-white flex items-center justify-center mr-5" style="scroll-snap-align: center; width: 80vw;"/>
        <img src="/team/kaia.webp" alt="Kaia" class="bg-white flex items-center justify-center mr-5" style="scroll-snap-align: center; width: 80vw;"/>
        <img src="/team/kim.webp" alt="Kim" class="bg-white flex items-center justify-center mr-5" style="scroll-snap-align: center; width: 80vw;"/>
        <img src="/team/mari.webp" alt="Mari" class="bg-white flex items-center justify-center mr-5" style="scroll-snap-align: center; width: 80vw;"/>
        <img src="/team/marie.webp" alt="Marie" class="bg-white flex items-center justify-center mr-5" style="scroll-snap-align: center; width: 80vw;"/>
        <img src="/team/mehdi.webp" alt="Mehdi" class="bg-white flex items-center justify-center" style="scroll-snap-align: center; width: 80vw;"/>
      </div>
    </section>

<!--
    <section id="multicards" class="text-center flex flex-col items-center justify-center relative w-full max-w-full h-screen">


      <div class="absolute bg-yellow card" style="width: 280px; height: 412px; top: 20px; left: 20px; transform: rotate(190deg)"></div>
      <div class="absolute bg-purple card" style="width: 280px; height: 412px; top: 200px; left: 20px; transform: rotate(100deg)"></div>
      <div class="absolute bg-red-900 card" style="width: 280px; height: 412px; bottom: 20px; left: 20px; transform: rotate(42deg)"></div>
      <div class="absolute bg-blue card" style="width: 280px; height: 412px; bottom: 200px; left: 20px; transform: rotate(200deg)"></div>

      <div class="absolute bg-pink card" style="width: 280px; height: 412px; top: 20px; right: 20px; transform: rotate(87deg)"></div>
      <div class="absolute bg-green card" style="width: 280px; height: 412px; top: 200px; right: 20px; transform: rotate(110deg)"></div>
      <div class="absolute bg-umbrella card" style="width: 280px; height: 412px; bottom: 20px; right: 20px; transform: rotate(201deg)"></div>
      <div class="absolute bg-red-600 card" style="width: 280px; height: 412px; bottom: 200px; right: 20px; transform: rotate(28deg)"></div>



      <div class="md:w-full w-1/2">
        <h2 class="mb-4 text-2.5vw leading-normal xs:text-base xs:leading-5 md:text-xl md:leading-6"
            v-html="'Vous voulez connaître notre niveau de jeu ?'"/>
        <p class="text-1.5vw leading-normal font-regular md:text-xl" v-html="`On n’a pas le droit de montrer tous nos projets, mais
on a quand même fait une belle petite sélection pour que vous puissiez avoir une idée de ce qu’on sait faire. Petit plus de la maison : nous adorons les besoins compliqués
et les réponses sur-mesure : <span class='font-bold'>challengez-nous !</span>`"/>
        <NuxtLink class="defaultButton mt-5 mx-auto hoverAnimation md:text-13px text-1.2vw leading-normal"
                  :to="localePath({name: 'works'})">Découvrir tous nos projets
        </NuxtLink>
      </div>
    </section>
-->

    <!--    <section id="clients" class="bg-lightGray relative overflow-hidden mt-21 px-8.5 pt-20 pb-40 md:pt-10 md:pb-16">
          <div>
            <svg class="mx-auto mt-auto mb-4 block" xmlns="http://www.w3.org/2000/svg" width="33.692" height="30.117"
                 viewBox="0 0 33.692 30.117">
              <g id="Groupe_842" data-name="Groupe 842" transform="translate(3111.773 -817)">
                <g id="Groupe_842-2" data-name="Groupe 842" transform="translate(-3111.773 817)">
                  <path id="Tracé_2854" data-name="Tracé 2854"
                        d="M-3082.065,843.133h-7.151l-4.022,5.363-3.965-5.363h-7.208a5.379,5.379,0,0,1-5.363-5.363V824.363A5.378,5.378,0,0,1-3104.41,819h22.345a5.378,5.378,0,0,1,5.363,5.363V837.77A5.379,5.379,0,0,1-3082.065,843.133Z"
                        transform="translate(3110.083 -818.69)" fill="#da002e"/>
                  <path id="Tracé_2855" data-name="Tracé 2855"
                        d="M-3094.927,847.117h0a.311.311,0,0,1-.249-.126l-3.872-5.237h-7.051a5.68,5.68,0,0,1-5.673-5.673V822.673A5.68,5.68,0,0,1-3106.1,817h22.345a5.68,5.68,0,0,1,5.673,5.673v13.407a5.68,5.68,0,0,1-5.673,5.673h-7l-3.929,5.239A.31.31,0,0,1-3094.927,847.117Zm-11.173-29.5a5.058,5.058,0,0,0-5.052,5.052v13.407a5.058,5.058,0,0,0,5.052,5.052h7.208a.311.311,0,0,1,.25.126l3.717,5.028,3.772-5.029a.311.311,0,0,1,.249-.124h7.15a5.058,5.058,0,0,0,5.053-5.052V822.673a5.058,5.058,0,0,0-5.053-5.052Z"
                        transform="translate(3111.773 -817)" fill="#171716"/>
                </g>
                <g id="Groupe_844" data-name="Groupe 844" transform="translate(-3102.741 823.489)">
                  <g id="Groupe_843" data-name="Groupe 843">
                    <path id="Tracé_2856" data-name="Tracé 2856"
                          d="M-3043.963,862.576a3.894,3.894,0,0,1,3.519-1.762,4.234,4.234,0,0,1,3.835,3.833,6.765,6.765,0,0,1-.383,2.761c-.015.046-.031.091-.046.137-.1.311-1.122,3.076-7.052,7.158h0c-5.93-4.083-6.953-6.847-7.052-7.158-.015-.046-.031-.092-.046-.137a6.768,6.768,0,0,1-.383-2.761,4.234,4.234,0,0,1,3.835-3.833,3.9,3.9,0,0,1,3.519,1.762l.119.188Z"
                          transform="translate(3051.905 -860.489)" fill="#f9f8f7"/>
                    <path id="Tracé_2857" data-name="Tracé 2857"
                          d="M-3045.789,873.385l-.167-.114c-6.02-4.145-7.074-7.008-7.174-7.321l-.045-.134a7.127,7.127,0,0,1-.4-2.886,4.524,4.524,0,0,1,4.118-4.115,4.131,4.131,0,0,1,3.674,1.709,4.133,4.133,0,0,1,3.674-1.709,4.524,4.524,0,0,1,4.118,4.115,7.134,7.134,0,0,1-.4,2.887l-.045.134c-.1.313-1.153,3.176-7.172,7.319l-.014.009Zm-3.3-13.965c-.1,0-.2,0-.31.013a3.9,3.9,0,0,0-3.553,3.552,6.519,6.519,0,0,0,.368,2.634l.047.141c.093.29,1.064,2.918,6.759,6.877,5.693-3.956,6.665-6.588,6.758-6.877l.047-.141a6.513,6.513,0,0,0,.369-2.635,3.9,3.9,0,0,0-3.553-3.552,3.6,3.6,0,0,0-3.227,1.613l-.016.024-.407.555-.362-.573A3.58,3.58,0,0,0-3049.091,859.419Z"
                          transform="translate(3053.594 -858.798)" fill="#171716"/>
                  </g>
                </g>
              </g>
            </svg>

            <h3 class="uppercase text-center font-bold text-1vw md:text-xs">{{ $t('Home.clients.ourClients') }}</h3>
            <h2 class="text-center mx-0 mt-13 mb-11 md:text-24px text-2.5vw md:mb-8.5">{{ $t('Home.clients.bigUp') }}</h2>
          </div>

          <div class="md:w-full w-10/12 flex justify-between mb-auto mx-auto mt-14 md:mt-auto md:flex-col">
            <p class="md:text-xl text-1.5vw leading-normal w-1/2 md:w-full md:mb-8.5">{{ $t('Home.clients.trustUs') }}</p>
            <p class="ml-10 text-1.5vw md:text-xl 2xl:leading-10 leading-relaxed w-1/2 md:w-full md:mr-0 md:mb-0 md:ml-0">
              LVMH - KENZO - GRAND REX - UNIBAIL-ROAM - 4 TEMPS - CULTURA - NIANTIC - VIZ MEDIA - PEUGEOT - EDITIONS JC
              LATTES - FFSA - ICADE - PASSYPLAZA PARIS 16 - THIAIS VILLAGE - BPI FRANCE - ARIANE LAB - MSN - PROVA -
              COMMUNICART AGENCY - VILLE DE CHATILLON
            </p>
          </div>
          <img class="absolute top-0 -left-17.5 w-52 md:hidden" src="/items/Tracé2228@2x.png.webp" alt="Déco">
          <img class="absolute bottom-2.5 w-24 -right-12 md:hidden" src="/items/deco-2@2x.png.webp" alt="Wave">
        </section>-->

    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="projects" class="z-10 relative overflow-hidden w-full max-w-screen h-screen">
      <div class="flex flex-col bg-white items-center justify-center px-8.5 w-full h-full text-center">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mb-10 md:mb-4 p-8.5 lg:text-32px text-3vw leading-normal font-bold">
          Vous voulez connaître notre niveau de jeu ?
        </h2>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="2xl:text-24px 2xl:w-full font-regular is-visible md:leading-6 md:text-xl text-1.5vw w-1/2 xs:text-base">
          On n’a pas le droit de montrer tous nos projets, mais on a quand même fait une belle petite sélection pour que vous puissiez avoir une idée de ce qu’on sait faire.
        </p>
      </div>

      <div v-for="project in this.projects" :key="project.id" class="project absolute flex flex-col text-center items-center justify-center p-8.5" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/projects/JEUCONCOURS_MINIATURE_la_rentrée_ludique.png'); background-size: cover; background-repeat: no-repeat;">
        <h2 class="lg:text-32px text-4vw leading-normal p text-white font-bold">{{ project.name }}</h2>
        <p class="p 2xl:text-24px text-center text-1.5vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6 text-white mb-5">{{ project.description }}</p>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="text-center text-1vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6 text-white text-white">Client : <span class="font-bold">{{ project.client.name }}</span></p>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="text-center text-1vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6 text-white">Spécialités : <span v-for="(speciality, index) in project.client.specialities" :key="index" class="font-bold">{{ speciality.name }}{{ index + 1 !== project.client.specialities.length ? ', ' : '' }}</span>
        </p>
        <UiArrow :to="localePath({name: 'projects-slug', params: {slug: project.slug}})"/>
      </div>

<!--      <div class="project absolute flex flex-col items-center justify-center" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/projects/JEUCONCOURS_MINIATURE_la_rentrée_ludique.png'); background-size: cover; background-repeat: no-repeat;">
        <h2 class="text-4vw leading-normal xs:text-base xs:leading-5 md:text-xl md:leading-6 p text-white font-bold">La rentrée ludique</h2>
        <p class="p 2xl:text-24px text-center text-1.5vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6 text-white mb-5">Description rapide du contexte du projet.</p>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="2xl:text-24px 2xl:w-full font-regular is-visible md:leading-6 md:text-xl text-1.5vw w-1/2 xs:text-base text-white">Client : <span class="font-bold">Passy Plaza</span></p>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="2xl:text-24px 2xl:w-full font-regular is-visible md:leading-6 md:text-xl text-1.5vw w-1/2 xs:text-base text-white">Spécialités : <span class="font-bold">Direction artistique, Événementiel, Communication, Web</span>
        </p>
        <UiArrow :to="localePath({name: 'projects-slug', params: {slug: 'test'}})"/>
      </div>

      <div class="project absolute flex flex-col items-center justify-center" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/projects/Rectangle 569.png'); background-size: cover; background-repeat: no-repeat;">
        <h2 class="text-4vw leading-normal xs:text-base xs:leading-5 md:text-xl md:leading-6 p text-white font-bold">celio x Visionnaire</h2>
        <p class="p 2xl:text-24px text-center text-1.5vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6 text-white mb-5">Description rapide du contexte du projet.</p>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="2xl:text-24px 2xl:w-full font-regular is-visible md:leading-6 md:text-xl text-1.5vw w-1/2 xs:text-base text-white">Client : <span class="font-bold">celio</span></p>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="2xl:text-24px 2xl:w-full font-regular is-visible md:leading-6 md:text-xl text-1.5vw w-1/2 xs:text-base text-white">Spécialités : <span class="font-bold">Direction artistique, Influence, Produit</span>
        </p>
        <UiArrow :to="localePath({name: 'projects-slug', params: {slug: 'test'}})"/>
      </div>

      <div class="project absolute flex flex-col items-center justify-center" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/projects/ESIEE-JOURNÉE29-06-32.2.png'); background-size: cover; background-repeat: no-repeat;">
        <h2 class="text-4vw leading-normal xs:text-base xs:leading-5 md:text-xl md:leading-6 p text-white font-bold">Le guide de l'étudiant</h2>
        <p class="p 2xl:text-24px text-center text-1.5vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6 text-white mb-5">Description rapide du contexte du projet.</p>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="2xl:text-24px 2xl:w-full font-regular is-visible md:leading-6 md:text-xl text-1.5vw w-1/2 xs:text-base text-white">Client : <span class="font-bold">ESIEE</span></p>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="2xl:text-24px 2xl:w-full font-regular is-visible md:leading-6 md:text-xl text-1.5vw w-1/2 xs:text-base text-white">Spécialités : <span class="font-bold">Direction artistique, Éditorial, Édition</span>
        </p>
        <UiArrow :to="localePath({name: 'projects-slug', params: {slug: 'test'}})"/>
      </div>-->

      <div class="absolute left-0 bottom-0 w-full h-4 z-10" style="background: rgba(255, 255, 255, 0.3);"><div id="projects-line" class="h-full bg-white w-0"></div></div>
    </section>

    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="activity" class="overflow-hidden relative w-full max-w-full h-screen bg-lightGray flex items-center justify-center">
      <div class="text-center flex flex-col justify-between md:py-0">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mb-10 md:mb-4 lg:text-32px text-3vw leading-normal font-bold">Pour plus<br>de choix</h2>

        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="2xl:text-24px 2xl:w-full font-regular is-visible md:leading-6 md:text-xl text-1.5vw w-1/2 xs:text-base">
          Blablabla
        </p>
        <UiButton v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mt-10 md:mt-5 mx-auto" link="" :target="false">J'en veux plus !</UiButton>
      </div>
    </section>

    <UiSectionSides v-observe="{ onEnter: headerChanged, threshold: 0.9 }" gsapTarget="challenge" class="bg-blue" leftImage="/projects/left.webp" rightImage="/projects/right.webp">
      <div class="w-2/4 md:w-full mx-auto flex flex-col items-center px-8.5 text-center">
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mb-10 md:mb-4 text-white lg:text-32px text-3vw leading-normal font-bold">Challengez-nous !</p>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="2xl:text-24px 2xl:w-full font-regular is-visible md:leading-6 md:text-xl text-1.5vw w-1/2 xs:text-base text-white">Petit plus de la maison : nous adorons les besoins compliqués et les réponses sur-mesure.</p>
        <UiButton v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mt-10 md:mt-5 mx-auto" :link="'https://calendly.com/sylphe/reunion'" :target="false">{{ $t('nav.call') }}</UiButton>
      </div>
    </UiSectionSides>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentService: 'events'
    }
  },
  async asyncData ({ $strapi, i18n }) {
    return {
      projects: await $strapi.$projects.find({_locale: i18n.locale})
    }
  },
  mounted() {
    this.$nextTick(() => {
      requestAnimationFrame(() => {
        this.baloonsAnimation()
        if (this.$mq !== 'sm') {
          this.cardsAnimation()
        }
        this.projectsAnimation()
      })
    })

    /*const showreel = document.getElementById('showreel')

    this.$gsap.timeline({
      scrollTrigger: {
        trigger: showreel,
        start: 'top top',
        end: `+=${showreel.offsetHeight}`,
        scrub: 0.01,
        markers: true
      },
    })
      .to(showreel, {
      y: '200vh',
      yPercent: `${showreel.offsetHeight / 2}vh`,
      duration: 10
    })*/
  },
  methods: {
    changeIllustration(service) {
      this.currentService = service

      console.log(this.$gsap.utils.toArray('.y-service'))
      this.$gsap
        .timeline({ ease: 'power2.inOut' })
        .to(this.$gsap.utils.toArray('.y-service'), {
          y: 0,
          duration: 0.2
        })
    },
    baloonsAnimation() {
      const baloons = this.$gsap.utils.toArray('.baloon')

      const btl = this.$gsap.timeline({
        scrollTrigger: {
          trigger: '#secret',
          start: 'top center',
          end: 'bottom top',
          scrub: true
        }
      })
      for (let i = 0; i < baloons.length; i++) {
        btl.to(baloons[i], {
          y: '-50%',
          yPercent: -baloons[i].height / 3,
          duration: 10
        }, 0)
      }
    },
    cardsAnimation() {
      let toTop = document.getElementById('containerToTop');
      let toBottom = document.getElementById('containerToBottom');
      let cards = this.$gsap.utils.toArray(".card");

      this.$gsap.timeline({
        scrollTrigger: {
          trigger: '#teams',
          pin: true,
          start: 'top top',
          end: `+=${toTop.offsetHeight + document.getElementById('teams').offsetHeight - 50}px`,
          scrub: true
        },
        ease: 'power0.none'
      })
        .to('#showreel', {
          top: '-100vh'
        })
        .fromTo(toTop,
          {
            y: '75%'
          },
          {
            y: '-75%'
          }, 0)
        .fromTo(toBottom,
          {
            y: '-75%'
          },
          {
            y: '75%'
          }, '<')

      const tl = this.$gsap.timeline({
        scrollTrigger: {
          trigger: '#multicards',
          pin: true,
          start: 'top top',
          end: '+=1500',
          scrub: 0.1
        }
      })

      for (let i = 0; i < cards.length; i++) {
        tl.to(cards[i], {
          top: '50%',
          left: '50%',
          y: '-50%',
          x: '-50%',
          rotate: Math.floor(Math.random() * 10) - 10,
          duration: 4,
          ease: 'power2.in'
        }, null, '<')
      }

      tl.to({}, { duration: 2 })
    },
    projectsAnimation() {
      let projects = this.$gsap.utils.toArray(".project");

      const ptl = this.$gsap
        .timeline({
          scrollTrigger: {
            trigger: '#projects',
            pin: true,
            start: 'top top',
            end: '+=3000',
            scrub: true,
            toggleActions: "play complete reset",
            onUpdate: self => {
              if (self.progress.toFixed(2) >= 0.20 || self.progress === 1) {
                this.addOrRemoveClass(document.querySelector('nav'), 'black-nav', false);
              }

              this.$gsap
                .to('#projects-line', {
                  width: `${self.progress.toFixed(2) * 100}%`
                })
            },
            onEnterBack: self => {
              if (self.progress.toFixed(2) >= 0.20 || self.progress === 1) {
                this.addOrRemoveClass(document.querySelector('nav'), 'black-nav', false);
              }
            }
          },
          ease: 'power2.inOut'
        })

      for (let i = 0; i < projects.length; i++) {
        const h2 = projects[i].children[0];
        const text = projects[i].children[1];
        const p = projects[i].children[2];
        const sub_p = projects[i].children[3];
        const svg = projects[i].children[4];

        ptl.to({}, {duration: 10})
          .to(projects[i], {
            x: '-50%',
            left: '50%',
            duration: 15
          })
          .to(projects[i], {
            maxWidth: '100vw',
            height: '100vh',
            duration: 15,
          })
          .to([h2, text, p, sub_p, svg], {
            autoAlpha: 1,
            duration: 15
          }, '<')
          .to({}, { duration: 4} )
      }
      ptl.to({}, { duration: 4 })
    },
    enterService(service) {
      if (this.$mq !== 'sm') {
        this.$gsap
          .timeline({ ease: 'power2.inOut' })
          .to('.sidebar-service', {
            x: 0,
            duration: 0.2
          })
      }
    },
    leaveService(service) {
      if (this.$mq !== 'sm') {
        this.$gsap
          .timeline({ ease: 'power2.inOut' })
          .to(this.$gsap.utils.toArray('.sidebar-service')[0], {
            x: '-100%',
            duration: 0.2
          })
          .to(this.$gsap.utils.toArray('.sidebar-service')[1], {
            x: '100%',
            duration: 0.2
          }, 0)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.text-shadow {
  text-shadow: 1px 1px 0 black;
}

#containerToTop {
  transform: translate(0, 75%);
}

#containerToBottom {
  transform: translate(0, -75%);
}

.hoverShowreel:hover p, .hoverShowreel:hover h2 {
  transform: translate(-3px, -3px) !important;
  text-shadow: 3px 3px black;
}

.project {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100%;
  max-width: 80vw;
  height: 80vh;
  top: 50%;
  left: 100%;
  transform: translate(0, -50%);

  & > h2, & > p, & > a, & > div, & > svg {
    opacity: 0;
    visibility: hidden;
  }
}
.service-selected {
  color: white;
  transform: translate(-3px, -3px);
  text-shadow: 3px 3px 0 #171716;
}
</style>
