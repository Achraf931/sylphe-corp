<template>
  <div>
    <section id="topPage" style="margin-bottom: 100vh;" class="z-10 relative w-full max-w-full h-screen bg-blue flex items-center justify-center flex-col text-white">
      <div class="box-content py-0 px-7.5 text-center">
        <h1 v-observe="{ onEnter: visibility, threshold: 1 }" class="is-visible lg:text-32px text-3vw leading-normal">{{ $t('Home.topPageTitlePart1') }}</h1>
        <h1 v-observe="{ onEnter: visibility, threshold: 1 }" class="is-visible lg:text-32px text-3vw leading-normal font-bold mb-13 md:mb-5">{{ $t('Home.topPageTitlePart2') }}</h1>
        <h2 v-observe="{ onEnter: visibility, threshold: 1 }" v-html="$t('Home.description')"
            class="is-visible 2xl:text-24px text-1.5vw font-regular m-auto 2xl:w-full w-1/2 2xl:max-w-640 xs:text-base xs:leading-5 md:text-xl md:leading-6"/>
      </div>
    </section>

    <section class="fixed left-0 top-0 w-full max-w-full h-screen flex items-center justify-center" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/showreel/SHOWREEL.png');  background-repeat: no-repeat; background-position: center center; background-size: cover; z-index: -1">
      <div class="py-2.5 border-b-2 border-white border-solid flex items-center justify-between">
        <h2 class="font-bold text-white">Showreel</h2>
        <p class="ml-2 text-white text-4xl font-bold">→</p>
      </div>
    </section>

    <section id="secret" class="z-10 overflow-hidden relative w-full max-w-full h-screen bg-white flex items-center justify-center">
      <div class="text-center flex flex-col justify-between md:py-0 md:w-full w-1/2">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible mb-4 text-2.5vw leading-normal xs:text-base xs:leading-5 md:text-xl md:leading-6">{{ $t('Home.body.title') }}</h2>

        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible text-1.5vw leading-normal font-regular md:text-xl" v-html="$t('Home.body.text')"/>
      </div>
    </section>

    <section class="z-10 bg-lightGray w-full max-w-full h-screen px-0 md:text-24px md:mx-auto md:mt-auto flex justify-between items-center">
      <div class="relative overflow-hidden w-1/4 h-full">
        <div class="sidebar-service w-full h-full bg-white" style="transform: translateX(-100%)"></div>
      </div>

      <div class="w-2/4 flex items-center flex-col">
        <p :class="{'service-selected': currentService === 'events'}" @click="currentService = 'events'"
           @mouseover="currentService = 'events'"
           @mouseenter="enterService('events')"
           @mouseleave="leaveService('events')"
           class="capitalize cursor-pointer text-stroke font-bold lg:text-24px text-4vw text-transparent leading-normal">
          {{ $t('tmp.home.events') }}</p>
        <p :class="{'service-selected': currentService === 'digital'}" @click="currentService = 'digital'"
           @mouseover="currentService = 'digital'"
           @mouseenter="enterService('digital')"
           @mouseleave="leaveService('digital')"
           class="cursor-pointer text-stroke font-bold lg:text-24px text-4vw text-transparent leading-normal">
          {{ $t('tmp.home.digital') }}</p>
        <p :class="{'service-selected': currentService === 'influence'}" @click="currentService = 'influence'"
           @mouseover="currentService = 'influence'"
           @mouseenter="enterService('influence')"
           @mouseleave="leaveService('influence')"
           class="cursor-pointer text-stroke font-bold lg:text-24px text-4vw text-transparent leading-normal">
          {{ $t('tmp.home.influence') }}</p>
        <p :class="{'service-selected': currentService === 'products'}" @click="currentService = 'products'"
           @mouseover="currentService = 'products'"
           @mouseenter="enterService('products')"
           @mouseleave="leaveService('products')"
           class="cursor-pointer text-stroke font-bold lg:text-24px text-4vw text-transparent leading-normal">
          {{ $t('tmp.home.production') }}</p>
        <p :class="{'service-selected': currentService === 'design'}" @click="currentService = 'design'"
           @mouseover="currentService = 'design'"
           @mouseenter="enterService('design')"
           @mouseleave="leaveService('design')"
           class="cursor-pointer text-stroke font-bold lg:text-24px text-4vw text-transparent leading-normal">
          {{ $t('tmp.home.design') }}</p>
      </div>

      <div class="relative overflow-hidden w-1/4 h-full">
        <div class="sidebar-service w-full h-full bg-white" style="transform: translateX(100%)"></div>
      </div>
    </section>




    <section id="teams" class="z-10 relative w-full max-w-full h-screen flex items-center justify-between bg-blue">
      <div class="pl-10 w-1/4 h-full overflow-hidden flex flex-col-reverse">
        <img src="/team/samy.webp" alt="Samy" class="w-full to-bottom mb-10 bg-white flex items-center justify-center" style="transform: translateY(-100%)"/>
        <img src="/team/pierre.webp" alt="Pierre" class="w-full to-bottom mb-10 bg-white flex items-center justify-center" style="transform: translateY(-100%)"/>
        <img src="/team/allison.webp" alt="Allison" class="w-full to-bottom mb-10 bg-white flex items-center justify-center" style="transform: translateY(-100%)"/>
        <img src="/team/ben.webp" alt="Ben" class="w-full to-bottom mb-10 bg-white flex items-center justify-center" style="transform: translateY(-100%)"/>
        <img src="/team/btissam.webp" alt="Btissam" class="w-full to-bottom mb-10 bg-white flex items-center justify-center" style="transform: translateY(-100%)"/>
        <img src="/team/guy.webp" alt="Guy" class="w-full to-bottom mb-10 bg-white flex items-center justify-center" style="transform: translateY(-100%)"/>
      </div>

      <div class="text-center flex flex-col justify-between md:py-0 md:w-full w-1/2 mx-10">
        <h2 class="mb-4 text-2.5vw leading-normal xs:text-base xs:leading-5 md:text-xl md:leading-6 text-white"
            v-html="$t('Home.teams.title')"/>
        <p class="text-1.5vw leading-normal font-regular md:text-xl text-white" v-html="$t('Home.teams.text')"/>
        <UiButton class="mt-5 mx-auto" :link="localePath({name: 'services'})">{{ $t('Home.teams.button') }}</UiButton>
      </div>

      <div class="pr-10 w-1/4 h-full overflow-hidden">
        <img src="/team/charfeddine.webp" alt="Charfeddine" class="to-top bg-white flex items-center justify-center" style="transform: translateY(100%)"/>
        <img src="/team/kaia.webp" alt="Kaia" class="to-top mt-10 bg-white flex items-center justify-center" style="transform: translateY(100%)"/>
        <img src="/team/kim.webp" alt="Kim" class="to-top mt-10 bg-white flex items-center justify-center" style="transform: translateY(100%)"/>
        <img src="/team/mari.webp" alt="Mari" class="to-top mt-10 bg-white flex items-center justify-center" style="transform: translateY(100%)"/>
        <img src="/team/marie.webp" alt="Marie" class="to-top mt-10 bg-white flex items-center justify-center" style="transform: translateY(100%)"/>
        <img src="/team/mehdi.webp" alt="Mehdi" class="to-top mt-10 bg-white flex items-center justify-center" style="transform: translateY(100%)"/>
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

    <!--    <section id="clients" class="bg-lightGray relative overflow-hidden mt-21 px-7.5 pt-20 pb-40 md:pt-10 md:pb-16">
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

    <section id="projects" class="z-10 relative overflow-hidden w-full max-w-screen h-screen">
      <div class="flex flex-col bg-white items-center justify-center w-full h-full">
        <h2 class="mb-4 mt-auto text-2.5vw leading-normal xs:text-base xs:leading-5 md:text-xl md:leading-6">Vous voulez connaître<br>notre niveau de jeu ?</h2>
        <p class="text-1.5vw leading-normal font-regular text-center md:text-xl max-w-640">On n’a pas le droit de montrer tous nos projets, mais<br>
          on a quand même fait une belle petite sélection pour que vous puissiez avoir une idée de ce qu’on sait faire. </p>
        <p class="font-bold text-center mb-20 mt-auto">SCROLLEZ →</p>
      </div>

      <div class="project absolute flex flex-col items-center justify-center" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/projects/JEUCONCOURS_MINIATURE_la_rentrée_ludique.png')">
        <h2 class="text-4vw leading-normal xs:text-base xs:leading-5 md:text-xl md:leading-6 p text-white font-bold">Passy Plaza</h2>
        <p class="p text-1.5vw leading-normal font-regular text-white text-center md:text-xl">Description rapide du contexte du projet.</p>

        <div class="absolute left-1/2 bottom-10" style="transform: translateX(-50%)">
          <div class="flex">
            <div class="rounded-md border font-medium border-solid border-white p-5 text-white">Influence</div>
            <div class="rounded-md ml-10 border font-medium border-solid border-white p-5 text-white">Digital</div>
            <div class="rounded-md ml-10 border font-medium border-solid border-white p-5 text-white">Design</div>
          </div>

          <p class="text-white text-center font-medium mt-5">1/3</p>
        </div>
      </div>

      <div class="project absolute flex flex-col items-center justify-center" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/projects/Rectangle 569.png')">
        <h2 class="text-4vw leading-normal xs:text-base xs:leading-5 md:text-xl md:leading-6 p text-white font-bold">celio x Visionnaire</h2>
        <p class="p text-1.5vw leading-normal font-regular text-white text-center md:text-xl">Description rapide du contexte du projet.</p>

        <div class="absolute left-1/2 bottom-10" style="transform: translateX(-50%)">
          <div class="flex">
            <div class="rounded-md border font-medium border-solid border-white p-5 text-white">Influence</div>
            <div class="rounded-md ml-10 border font-medium border-solid border-white p-5 text-white">Design</div>
          </div>

          <p class="text-white text-center font-medium mt-5">2/3</p>
        </div>
      </div>

      <div class="project absolute flex flex-col items-center justify-center" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/projects/ESIEE-JOURNÉE29-06-32.2.png')">
        <h2 class="text-4vw leading-normal xs:text-base xs:leading-5 md:text-xl md:leading-6 p text-white font-bold">ESIEE</h2>
        <p class="p text-1.5vw leading-normal font-regular text-white text-center md:text-xl">Description rapide du contexte du projet.</p>

        <div class="absolute left-1/2 bottom-10" style="transform: translateX(-50%)">
          <div class="flex">
            <div class="rounded-md border font-medium border-solid border-white p-5 text-white">Éditorial</div>
            <div class="rounded-md ml-10 border font-medium border-solid border-white p-5 text-white">Design</div>
          </div>

          <p class="text-white text-center font-medium mt-5">3/3</p>
        </div>
      </div>
    </section>

    <section class="z-10 w-full max-w-screen h-screen bg-lightGray flex flex-col items-center justify-center p-10">
      <p class="p font-bold text-black mb-10" style="font-size: 4vw;">Ils nous ont fait confiance</p>

      <div class="grid grid-cols-5 gap-10 items-center">
        <img class="img w-2/5 mx-auto" src="/clients/LVMH_logo_logotype_Moët_Hennessy_Louis_Vuitton.png" alt="LVMH">
        <img class="img w-2/5 mx-auto" src="/clients/kenzo-logo-def.png" alt="KENZO">
        <img class="img w-2/5 mx-auto" src="/clients/logo-grandrex.png" alt="Le Grand Rex">
        <img class="img w-2/5 mx-auto" src="/clients/Westfield-Les-4-Temps-Logo.ashx.png" alt="Westfield Les 4 Temps">
        <img class="img w-2/5 mx-auto" src="/clients/cultura.png" alt="Cultura">
        <img class="img w-2/5 mx-auto" src="/clients/Niantic_Logo.png" alt="Niantic">
        <img class="img w-2/5 mx-auto" src="/clients/1280px-Viz_Media_2017_logo.svg.png" alt="Viz Media">
        <img class="img w-2/5 mx-auto" src="/clients/Peugeot_2021_Logo.svg.png" alt="Peugeot">
        <img class="img w-2/5 mx-auto" src="/clients/ffsa.png" alt="FFSA">
        <img class="img w-2/5 mx-auto" src="/clients/Icade_logo_2017.png" alt="Icade">
        <img class="img w-2/5 mx-auto" src="/clients/logo-passy-plaza-fd-transparent.png" alt="Passy Plaza">
        <img class="img w-2/5 mx-auto" src="/clients/Logo_ESIEE_Paris.svg.png" alt="ESIEE">
        <img class="img w-2/5 mx-auto" src="/clients/arianelab-97202.png" alt="ArianeLab">
        <img class="img w-2/5 mx-auto" src="/clients/logo.png" alt="Ville de Chatillon">
        <img class="img w-2/5 mx-auto" src="/clients/1200px-Logo_celio_2016.svg.png" alt="Celio">
      </div>
    </section>

    <section id="challenge" class="z-10 w-full max-w-screen h-screen bg-blue flex items-center justify-between">
      <div class="relative overflow-hidden w-1/4 h-full">
        <div class="sidebar-challenge opacity-50 w-full h-full bg-white" style="transform: translateX(-100%)"></div>
      </div>
      <div class="w-2/4 flex flex-col items-center px-10 text-center">
        <p style="font-size: 4vw;" class="p leading-normal text-white font-bold mb-10">Challengez-nous !</p>
        <p style="font-size: 2vw;" class="p leading-normal text-white mb-10">Petit plus de la maison : nous adorons les besoins compliqués et les réponses sur-mesure.</p>
        <UiButton class="mt-5 mx-auto" :link="'https://calendly.com/sylphe/reunion'" :target="true">{{ $t('nav.call') }}</UiButton>
      </div>
      <div class="relative overflow-hidden w-1/4 h-full">
        <div class="sidebar-challenge opacity-50 w-full h-full bg-white" style="transform: translateX(100%)"></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentService: 'events'
    }
  },
  mounted() {
    let toTop = this.$gsap.utils.toArray(".to-top");
    let toBottom = this.$gsap.utils.toArray(".to-bottom");
    let cards = this.$gsap.utils.toArray(".card");
    let projects = this.$gsap.utils.toArray(".project");

    this.$gsap.timeline({
      scrollTrigger: {
        trigger: '#teams',
        pin: true,
        start: 'top top',
        end: '+=3000',
        scrub: true
      }
    })
      .to(toTop, {
        y: '-100%',
        yPercent: -toBottom[0].height,
        duration: 2
      })
      .to(toBottom, {
        y: '100%',
        yPercent: toBottom[0].height,
        duration: 2
      }, 0)

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

    //  Anim projects section
    const ptl = this.$gsap
      .timeline({
        scrollTrigger: {
          trigger: '#projects',
          pin: true,
          start: 'top top',
          end: '+=3000',
          scrub: true
        },
        ease: 'power2.inOut'
      })

    for (let i = 0; i < projects.length; i++) {
      const h2 = projects[i].childNodes[0];
      const p = projects[i].childNodes[2];
      const div = projects[i].childNodes[4];
      const img = projects[i].childNodes[6];
      const a = projects[i].childNodes[8];

      ptl.to({}, {scrub: 2, duration: 10})
        .to(projects[i], {
          x: '-50%',
          left: '50%',
          duration: 15
        })
        .to(projects[i], {
          maxWidth: '100vw',
          height: '100vh',
          duration: 15
        })
        .to([h2, p, div, img, a], {
          autoAlpha: 1,
          duration: 15
        }, '<')
        .to({}, { duration: 4} )
    }

    ptl.to({}, { duration: 4 })


    //  Anim challenge section
    const chtl = this.$gsap
      .timeline({
        scrollTrigger: {
          trigger: '#challenge',
          start: 'top bottom',
          end: '+=100%',
          scrub: 0.1
        },
        ease: 'power2.inOut'
      })
      .to('.sidebar-challenge', {
        x: 0,
        duration: 4
      })
  },
  methods: {
    enterService(service) {
      this.$gsap
        .timeline({ ease: 'power2.inOut' })
        .to('.sidebar-service', {
          x: 0,
          duration: 0.2
        })
    },
    leaveService(service) {
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
</script>

<style scoped lang="scss">
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

  & > h2, & > p, & > a, & > div {
    opacity: 0;
    visibility: hidden;
  }
}
.service-selected {
  color: white;
  transform: translate(-3px, -3px);
  text-shadow: 3px 3px 0 #171716;
}

.text-stroke {
  transition: all .1s ease;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #171716;
}
</style>
