<template>
  <div>
    <img v-if="$mq === 'lg'" v-for="(image, index) in project[0].head_of_page.background" :key="index" class="fixed image-bg object-cover" style="z-index: -3;" :src="image.url" alt="Background image">
    <img v-else :src="project[0].background_mobile.url" alt="Background image" class="fixed image-bg object-cover" style="z-index: -3;">

    <section v-observe="{ onEnter: headerChanged, threshold: 0.5 }" id="topPage" class="w-full max-w-screen overflow-x-hidden flex items-center flex-col text-white z-10">
      <div class="relative py-0 px-8.5 text-center w-full h-screen flex flex-col justify-center items-center">
        <h1 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible text-white lg:text-32px text-3vw leading-normal">{{ project[0].name }}</h1>
        <img v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" v-if="this.project[0].logo !== null" class="is-visible block mx-auto mb-6 mt-2.5 w-full max-w-424" :src="this.project[0].logo.url" alt="Logo">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible 2xl:text-24px text-1.5vw font-regular max-w-640 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6 mb-5">{{ project[0].head_of_page.subtitle }}</h2>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible text-center text-1vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6 text-white">Client : <span class="font-bold">{{ project[0].client.name }}</span></p>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible text-center text-1vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6 text-white">Spécialités : <span v-for="(speciality, index) in project[0].client.specialities" :key="index" class="font-bold">{{ speciality.name }}{{ index + 1 !== project[0].client.specialities.length ? ', ' : '' }}</span></p>
        <ArrowScroll/>
      </div>
    </section>

    <section v-observe="{ onEnter: headerChanged, threshold: 0.5 }" id="container-intro" class="relative py-0 px-8.5 text-center w-full max-w-screen h-screen flex flex-col justify-center items-center z-10">
      <div v-for="(intro, index) in this.project[0].intro" :key="index" :class="{'item': index > 0}" class="intro-item flex flex-col items-center md:w-full w-1/2">
        <h2 class="uppercase text-1.5vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6 text-white">{{ intro.intro }}</h2>
        <h1 class="text-white mb-10 md:mb-4 lg:text-32px text-3vw max-w-640 2xl:w-full leading-normal font-bold">{{ intro.title }}</h1>
        <client-only>
          <p class="2xl:text-24px 2xl:w-full font-regular md:leading-6 md:text-xl text-1.5vw xs:text-base default-text text-white" v-html="$md.render(intro.text)"/>
        </client-only>
      </div>
    </section>

    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="ourResponse" class="overflow-hidden relative w-full max-w-full px-8.5 min-h-screen bg-white flex items-center justify-center z-10">
      <div class="text-center flex flex-col justify-between md:py-0 md:w-full w-1/2">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mb-10 md:mb-4 text-2.5vw lg:text-32px text-3vw leading-normal font-bold">{{ this.project[0].our_response.title }}</h2>

        <client-only>
          <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible 2xl:text-24px 2xl:w-full font-regular md:leading-6 md:text-xl text-1.5vw xs:text-base default-text" v-html="$md.render(this.project[0].our_response.text)"/>
        </client-only>

        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="mt-7 mb-5 uppercase font-bold is-visible text-1.5vw leading-normal md:text-xl">Les actions</p>
        <ul v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible">
          <li class="text-1.5vw leading-normal font-regular md:text-xl" v-for="(action, index) in this.project[0].our_response.actions" :key="index">{{ action.title }}</li>
        </ul>
      </div>
    </section>

    <section v-if="this.project[0].gif.mime.includes('video')" id="gif" v-observe="{ onEnter: headerChanged, threshold: 0.9 }" class="w-full max-w-screen h-screen">
      <video muted playsinline autoplay width="100%" height="100%" loop preload="metadata" class="object-cover h-full w-full max-w-screen max-h-screen">
        <source :src="this.project[0].gif.url" :type="this.project[0].gif.mime">
      </video>
    </section>
    <img v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="gif" class="w-full max-w-screen h-screen object-cover" v-else :src="this.project[0].gif.url" alt="Image de fond">

    <!--    <section id="gif" v-observe="{ onEnter: headerChanged, threshold: 0.9 }" class="fixed top-0 left-0 w-full max-w-screen h-screen" style="z-index: -4;">
          <video muted playsinline autoplay width="100%" height="100%" loop preload="metadata" class="object-cover h-full w-full max-w-screen max-h-screen">
            <source :src="'http://localhost:1337' + this.project[0].gif.url" :type="this.project[0].gif.mime">
          </video>
        </section>-->

<!--    <section v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="empty-gif" class="w-full max-w-full h-screen z-10"></section>-->

    <UiSectionSides v-observe="{ onEnter: headerChanged, threshold: 0.9 }"
                    gsapTarget="activity"
                    :leftImage="this.project[0].aside_images_section[0].left_image ? this.project[0].aside_images_section[0].left_image.url : ''"
                    :rightImage="this.project[0].aside_images_section[0].right_image ? this.project[0].aside_images_section[0].right_image.url : ''"
                    :topImage="this.project[0].aside_images_section[0].top_image ? this.project[0].aside_images_section[0].top_image.url : ''"
                    :bottomImage="this.project[0].aside_images_section[0].bottom_image ? this.project[0].aside_images_section[0].bottom_image.url : ''"
                    :style="this.project[0].aside_images_section[0].background_image ? 'background: url(' + this.project[0].aside_images_section[0].background_image.url + ') center center no-repeat; background-size: cover;' : 'background:' + this.project[0].aside_images_section[0].background_color"
                    class="z-10">
      <div v-for="(activity, index) in this.project[0].aside_images_section[0].part_level" :key="index" :class="{'item': index > 0}" class="intro-activity mx-auto text-center flex flex-col items-center justify-between md:py-0 md:w-full px-8.5 w-1/2">
        <h2 class="uppercase text-1.5vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6">{{ activity.intro }}</h2>
        <h2 class="mb-10 md:mb-4 text-2.5vw lg:text-32px text-3vw leading-normal font-bold">{{ activity.title }}</h2>

        <client-only>
          <p class="2xl:text-24px 2xl:w-full font-regular md:leading-6 md:text-xl text-1.5vw xs:text-base default-text" v-html="$md.render(activity.text)"/>
        </client-only>
      </div>

      <div v-if="$mq !== 'lg' && this.project[0].slider.length" v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="slider" class="max-w-screen w-full mt-10 overflow-y-hidden flex items-center overflow-x-scroll relative bg-blue z-10" style="overscroll-behavior-x: contain; scroll-snap-type: x mandatory;">
        <img v-for="(image, index) in this.project[0].slider" :key="index" class="object-cover" style="min-width: 80vw; max-width: 80vw; height: 80vw; scroll-snap-align: start;" :alt="image.name" :src="image.url"/>
      </div>
    </UiSectionSides>

    <section v-if="$mq === 'lg'" v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="slider" @mousedown="mouseDown" @mouseleave="isDown = false" @mouseup="isDown = false" @mousemove="mouseMove" class="mouse-hover simple-hover overflow-y-hidden flex overflow-x-scroll relative w-full max-w-full h-screen bg-blue z-10">
      <img v-for="(image, index) in this.project[0].slider" :key="index" class="h-screen pointer-events-none object-cover select-none" style="min-width: 50vw; max-width: 50vw;" :alt="image.name" :src="image.url"/>
    </section>

    <UiSectionSides v-observe="{ onEnter: headerChanged, threshold: 0.9 }"
                    gsapTarget="levelTwo"
                    :leftImage="this.project[0].aside_images_section[1].left_image ? this.project[0].aside_images_section[1].left_image.url : ''"
                    :rightImage="this.project[0].aside_images_section[1].right_image ? this.project[0].aside_images_section[1].right_image.url : ''"
                    :topImage="this.project[0].aside_images_section[1].top_image ? this.project[0].aside_images_section[1].top_image.url : ''"
                    :bottomImage="this.project[0].aside_images_section[1].bottom_image ? this.project[0].aside_images_section[1].bottom_image.url : ''"
                    :style="this.project[0].aside_images_section[1].background_image ? 'background: url(' + this.project[0].aside_images_section[1].background_image.url + ') center center no-repeat; background-size: cover;' : 'background:' + this.project[0].aside_images_section[1].background_color"
                    class="z-10">
      <div v-for="(levelTwo, index) in this.project[0].aside_images_section[1].part_level" :key="index" :class="{'item': index > 0}" class="intro-levelTwo mx-auto text-center flex flex-col items-center justify-between md:py-0 md:w-full px-8.5 w-1/2">
        <h2 class="uppercase text-white text-1.5vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6">{{ levelTwo.intro }}</h2>
        <h2 class="text-white mb-10 md:mb-4 lg:text-32px text-3vw leading-normal font-bold">{{ levelTwo.title }}</h2>

        <client-only>
          <p class="text-white 2xl:text-24px 2xl:w-full font-regular md:leading-6 md:text-xl text-1.5vw xs:text-base default-text" v-html="$md.render(levelTwo.text)"/>
        </client-only>
      </div>
    </UiSectionSides>

    <UiSectionSides v-observe="{ onEnter: headerChanged, threshold: 0.9 }"
                    gsapTarget="levelThree"
                    class="z-10"
                    :leftImage="this.project[0].aside_images_section[2].left_image ? this.project[0].aside_images_section[2].left_image.url : ''"
                    :rightImage="this.project[0].aside_images_section[2].right_image ? this.project[0].aside_images_section[2].right_image.url : ''"
                    :topImage="this.project[0].aside_images_section[2].top_image ? this.project[0].aside_images_section[2].top_image.url : ''"
                    :bottomImage="this.project[0].aside_images_section[2].bottom_image ? this.project[0].aside_images_section[2].bottom_image.url : ''"
                    :style="this.project[0].aside_images_section[2].background_image ? 'background: url(' + this.project[0].aside_images_section[2].background_image.url + ') center center no-repeat; background-size: cover;' : 'background:' + this.project[0].aside_images_section[2].background_color">
      <div v-for="(levelThree, index) in this.project[0].aside_images_section[2].part_level" :key="index" :class="{'item': index > 0}" class="intro-levelThre mx-auto text-center flex flex-col items-center justify-between md:py-0 md:w-full px-8.5 w-1/2">
        <h2 class="uppercase text-1.5vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6">{{ levelThree.intro }}</h2>
        <h2 class="mb-10 md:mb-4 lg:text-32px text-3vw leading-normal font-bold">{{ levelThree.title }}</h2>

        <client-only>
          <p class="2xl:text-24px 2xl:w-full font-regular md:leading-6 md:text-xl text-1.5vw xs:text-base default-text" v-html="$md.render(levelThree.text)"/>
        </client-only>
      </div>
    </UiSectionSides>

    <section v-if="this.project[0].video.mime.includes('video')" v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="mac" class="overflow-hidden relative w-full max-w-full h-screen bg-lightGray flex items-center justify-center z-10">
      <video muted playsinline autoplay width="100%" height="100%" loop preload="metadata" v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible object-cover h-full w-full max-w-screen max-h-screen">
        <source :src="this.project[0].video.url" :type="this.project[0].video.mime">
      </video>
    </section>
    <img v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="mac" class="w-full max-w-screen h-screen object-cover" v-else :src="this.project[0].video.url" alt="Image de fond">

    <UiSectionSides v-observe="{ onEnter: headerChanged, threshold: 0.9 }"
                    gsapTarget="results"
                    :leftImage="this.project[0].aside_images_section[3].left_image ? this.project[0].aside_images_section[3].left_image.url : ''"
                    :rightImage="this.project[0].aside_images_section[3].right_image ? this.project[0].aside_images_section[3].right_image.url : ''"
                    :topImage="this.project[0].aside_images_section[3].top_image ? this.project[0].aside_images_section[3].top_image.url : ''"
                    :bottomImage="this.project[0].aside_images_section[3].bottom_image ? this.project[0].aside_images_section[3].bottom_image.url : ''"
                    :style="this.project[0].aside_images_section[3].background_image ? 'background: url(' + this.project[0].aside_images_section[3].background_image.url + ') center center no-repeat; background-size: cover;' : 'background:' + this.project[0].aside_images_section[3].background_color"
                    class="z-10">
      <div v-for="(result, index) in this.project[0].aside_images_section[3].part_level" :key="index" :class="{'item': index > 0}" class="intro-result mx-auto text-center flex flex-col items-center justify-between md:py-0 md:w-full px-8.5 w-1/2">
        <h2 class="uppercase text-white text-1.5vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6">{{ result.intro }}</h2>
        <h2 class="text-white mb-10 md:mb-4 lg:text-32px text-3vw leading-normal font-bold">{{ result.title }}</h2>

        <client-only>
          <p class="text-white 2xl:text-24px 2xl:w-full font-regular md:leading-6 md:text-xl text-1.5vw xs:text-base default-text" v-html="$md.render(result.text)"/>
        </client-only>
      </div>
    </UiSectionSides>

    <section v-if="$mq === 'lg'" v-observe="{ onEnter: headerChanged, threshold: 0.9 }" id="carousel" class="overflow-hidden relative w-full text-center max-w-full h-screen bg-blue flex items-left z-10">
      <div v-if="this.prevProject !== undefined" class="h-screen next-prev-project flex flex-col items-center justify-center md:p-5 p-10" :style="'background-image: url(' + this.prevProject.background.url + '); background-size: cover; background-repeat: no-repeat; min-width: 50vw; max-width: 50vw;'">
        <h2 class="text-4vw leading-normal xs:text-base xs:leading-5 md:text-xl md:leading-6 p text-white font-bold">{{ this.prevProject.name }}</h2>
        <client-only>
          <p class="p 2xl:text-24px text-center text-1.5vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6 text-white mb-5" v-html="$md.render(this.prevProject.description)"/>
        </client-only>
        <p class="p text-center text-1vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6 text-white">Client : <span class="font-bold">{{ this.prevProject.client.name }}</span></p>
        <p class="p text-center text-1vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6 text-white">Spécialités : <span v-for="(speciality, index) in this.prevProject.client.specialities" :key="index" class="font-bold">{{ speciality.name }}{{ index + 1 !== project[0].client.specialities.length ? ', ' : '' }}</span></p>
        <UiArrow :to="localePath({name: 'projects-slug', params: {slug: this.prevProject.slug}})"/>
      </div>
      <div v-if="this.nextProject !== undefined" class="h-screen next-prev-project flex flex-col items-center justify-center md:p-5 p-10" :style="'background-image: url(' + this.nextProject.background.url + '); background-size: cover; background-repeat: no-repeat; min-width: 50vw; max-width: 50vw;'">
        <h2 class="text-4vw leading-normal xs:text-base xs:leading-5 md:text-xl md:leading-6 p text-white font-bold">{{ this.nextProject.name }}</h2>
        <client-only>
          <p class="p 2xl:text-24px text-center text-1.5vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6 text-white mb-5" v-html="$md.render(this.nextProject.description)"/>
        </client-only>
        <p class="p text-center text-1vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6 text-white">Client : <span class="font-bold">{{ this.nextProject.client.name }}</span></p>
        <p class="p text-center text-1vw font-regular 2xl:w-full xs:text-base xs:leading-5 md:text-xl md:leading-6 text-white">Spécialités : <span v-for="(speciality, index) in this.nextProject.client.specialities" :key="index" class="font-bold">{{ speciality.name }}{{ index + 1 !== project[0].client.specialities.length ? ', ' : '' }}</span></p>
        <UiArrow :to="localePath({name: 'projects-slug', params: {slug: this.nextProject.slug}})"/>
      </div>
    </section>

    <section v-else class="flex justify-between items-center">
      <NuxtLink :to="localePath({name: 'projects-slug', params: {slug: this.prevProject.slug}})" v-if="this.prevProject !== undefined" v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible flex items-center justify-center text-center w-1/2" :style="'background-color: ' + this.prevProject.background_project">
        <p class="text-1.5vw my-10 md:my-5 leading-normal font-bold md:text-base text-white">{{ this.prevProject.name }}</p>
      </NuxtLink>
      <NuxtLink :to="localePath({name: 'projects-slug', params: {slug: this.nextProject.slug}})" v-if="this.nextProject !== undefined" v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible flex items-center justify-center text-center w-1/2" :style="'background-color: ' + this.nextProject.background_project">
        <p class="text-1.5vw my-10 md:my-5 leading-normal font-bold md:text-base text-white">{{ this.nextProject.name }}</p>
      </NuxtLink>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData ({ params, $strapi, i18n }) {
    const project = await $strapi.$projects.find({slug: params.slug, _locale: i18n.locale})
    /*await app.$axios.get('/projects')
      .then(item => {
        if (item.data.length === 0) throw({ statusCode: 404, message: 'Projets introuvable !' })
        return projects = item.data
      })*/

    const projects = await $strapi.$projects.find({_locale: i18n.locale})
    let prevProject, nextProject;

    for (let i = 0; i < projects.length; i++) {
      if (projects[i].id === project[0].id) {
        prevProject = projects[i - 1] === undefined ? projects[projects.length - 1] : projects[i - 1]
        nextProject = projects[i + 1] === undefined ? projects[0] : projects[i + 1]
      }
    }

    return {
      project,
      prevProject,
      nextProject,
    }
  },
  data() {
    return {
      isDown: false,
      start: null,
      scrollLeft: null
    }
  },
  mounted() {
    window.scrollTo(0, 0)
    if (this.$mq === 'lg') {
      const images = this.$gsap.utils.toArray('.image-bg')

      window.onmousemove = e => {
        this.$gsap.set(images[1], {
          x: -e.clientX / 80,
          y: -e.clientY / 80
        })
        this.$gsap.set(images[2], {
          x: e.clientX / 80,
          y: e.clientY / 80
        })
        this.$gsap.set(images[3], {
          x: -e.clientX / 80,
          y: -e.clientY / 80
        })
      }
    }

    /*this.$gsap.timeline({
      scrollTrigger: {
        trigger: '#empty-gif',
        start: 'top bottom',
        end: 'bottom top',
        onEnter: () => {
          console.log('enter')
        }
      }
    })
    .to(this.$gsap.utils.toArray('.image-bg'), {
      zIndex: -10
    })*/

    this.enterSection('.intro-item', '#container-intro', this.project[0].intro.length)
    this.enterSection('.intro-activity', '#activity', this.project[0].aside_images_section[0].part_level.length)
    this.enterSection('.intro-levelTwo', '#levelTwo', this.project[0].aside_images_section[1].part_level.length)
    this.enterSection('.intro-levelThree', '#levelThree', this.project[0].aside_images_section[2].part_level.length)
    this.enterSection('.intro-result', '#results', this.project[0].aside_images_section[3].part_level.length)
  },
  methods: {
    enterSection(intro_items, trigger, length) {
      const intro = this.$gsap.utils.toArray(intro_items)
        if (length > 1) {
          const tl = this.$gsap.timeline({
            scrollTrigger: {
              trigger: trigger,
              pin: true,
              start: 'top top',
              end: `+=${intro.length - 1}000`,
              scrub: true
            },
            ease: 'power3.inOut',
            duration: 0.2,
            x: 0,
            y: 0
          })
          for (let i = 1; i < intro.length; i++) {
            tl.to(intro[i - 1], {
              autoAlpha: 0,
              display: 'none'
            }, '<')
              .to(intro[i], {
              autoAlpha: 1,
              display: 'flex'
            })
          }
          tl.to({}, {duration: 0.3})
      }
    },
    mouseDown(e) {
      const slider = document.getElementById('slider')
      this.isDown = true;
      this.startX = e.pageX - slider.offsetLeft;
      this.scrollLeft = slider.scrollLeft;
    },
    mouseMove(e) {
      if(!this.isDown) return;
      e.preventDefault();
      const slider = document.getElementById('slider')
      const x = e.pageX - slider.offsetLeft;
      const walk = x - this.startX; //scroll-fast
      slider.scrollLeft = this.scrollLeft - walk;
    }
  }
}
</script>

<style lang="scss" scoped>
.next-prev-project {
  filter: grayscale(1);

  &:hover {
    filter: grayscale(0);
  }
}
.default-text::v-deep p {
  line-height: normal;
}

.image-bg {
  width: 110%;
  max-width: 110%;
  height: 110%;
  left: -5%;
  top: -5%;
}

.item {
  opacity: 0;
  visibility: hidden;
  display: none;
}

@media all and (max-width: 450px) {
  #activity {
    justify-content: end!important;
  }
}
</style>
