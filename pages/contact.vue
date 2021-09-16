<template>
  <div>
    <section id="topPage" class="relative w-full h-screen bg-yellow flex items-center justify-center flex-col text-white">
      <div class="box-content py-0 px-7.5 text-center">
        <h1 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible leave-anim mb-13 md:mb-5 lg:text-32px text-3vw leading-normal" v-html="$t('Contact.topPage.topPageTitle')"/>
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible leave-anim 2xl:text-24px text-1.5vw font-regular m-auto xs:text-base xs:leading-5 md:text-xl md:leading-6">{{ $t('Contact.topPage.description') }}</h2>
      </div>
      <ArrowScroll/>
    </section>

    <section id="containerForm" data-aos="fade-up" class="flex relative items-center flex-col pb-15 mx-auto pt-14 mb-0 px-7.5">
      <!--      <h2 class="sm:text-24px">{{ $t('Contact.form.title') }}</h2>-->
      <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mb-10 md:mb-4 text-2.5vw font-bold leading-normal xs:text-base xs:leading-5 md:text-xl md:leading-6">
        <client-only>
          {{ $t('Contact.form.title') }}
          <vue-typer
            :text='$t("Contact.form.words")'
            :repeat='Infinity'
            :shuffle='false'
            initial-action='typing'
            :pre-type-delay='100'
            :type-delay='100'
            :pre-erase-delay='2000'
            :erase-delay='450'
            erase-style='select-all'
            :erase-on-complete='false'
            caret-animation='blink'
          />
        </client-only>
      </h2>
      <form v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible w-full max-w-640 text-base" method="post" @submit.prevent="sendForm" id="form" novalidate>
        <div class="formGroup" :class="{ formGroupError: $v.form.name.$error }">
          <label class="text-1vw md:text-xl" for="name">{{ $t('Contact.form.labelName') }} *</label>
          <input class="text-1vw md:text-xl leading-normal" id="name" type="text" inputmode="text" v-model.trim="form.name" @value="setName"/>
          <span class="error text-0.7vw md:text-sm leading-normal" v-if="$v.form.name.$error">{{ $t('Contact.form.errorName') }}</span>
        </div>
        <div class="formGroup" :class="{ formGroupError: $v.form.email.$error }">
          <label class="text-1vw md:text-xl" for="email">{{ $t('Contact.form.labelEmail') }} *</label>
          <input class="text-1vw md:text-xl leading-normal" id="email" type="email" inputmode="email" v-model.trim="form.email" @value="setEmail"/>
          <template v-if="$v.form.email.$error">
            <span class="error leading-normal text-0.7vw md:text-sm" v-if="!$v.form.email.required">{{ $t('Contact.form.errorEmail') }}</span>
            <span class="error leading-normal text-0.7vw md:text-sm" v-if="!$v.form.email.maxLength">{{ $t('Contact.form.errorEmailLength') }}</span>
            <span class="error leading-normal text-0.7vw md:text-sm" v-if="!$v.form.email.email">{{ $t('Contact.form.errorEmailValid') }}</span>
          </template>
        </div>
        <div class="formGroup" :class="{ formGroupError: $v.form.message.$error }">
          <label class="text-1vw md:text-xl" for="message">{{ $t('Contact.form.labelMessage') }} *</label>
          <textarea class="text-1vw md:text-xl leading-normal" id="message" v-model.trim="form.message" @value="setMessage"/>
          <span class="error leading-normal text-0.7vw md:text-sm" v-if="$v.form.message.$error">{{ $t('Contact.form.errorMessage') }}</span>
        </div>
        <div class="flex items-baseline mt-7">
          <div style="min-width: 10px; min-height: 10px; width: 0.7vw; height: 0.7vw;" class="cursor-pointer mr-2 rounded-full border-2 border-gray max-w-sm" @click="checkedCgu = !checkedCgu, cguError = !checkedCgu" :class="{cguCheck: checkedCgu}"></div>
          <p class="cursor-pointer ml-2.5 text-gray text-1vw xl:text-sm" @click="checkedCgu = !checkedCgu, cguError = !checkedCgu">{{ $t('Contact.form.cgu') }}</p>
        </div>
        <span class="error leading-normal text-0.7vw md:text-sm" v-if="cguError">{{ $t('Contact.form.errorCgu') }}</span>

        <UiButton link="" :target="false" class="mt-8 mb-auto max-auto">{{ $t('send') }}</UiButton>
      </form>
    </section>

    <section id="ourTeam" class="z-10 overflow-hidden relative w-full max-w-full h-screen bg-lightGray flex items-center justify-center">
      <div class="text-center flex flex-col justify-between md:py-0 md:w-full w-1/2">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mb-10 md:mb-4 text-2.5vw font-bold leading-normal xs:text-base xs:leading-5 md:text-xl md:leading-6">Passez à la maison</h2>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible text-1.5vw leading-normal font-regular md:text-xl">
          {{ $t('Contact.contact.schedulesPart1') }}<br>
          {{ $t('Contact.contact.schedulesPart2') }}
        </p>
        <a v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible text-1.5vw leading-normal my-10 md:my-5 font-regular md:text-xl font-bold" href="https://www.google.com/maps/place/85+Rue+Bobillot,+75013+Paris/data=!4m2!3m1!1s0x47e6719a62e7cdb3:0x90c20190b927753?sa=X&ved=2ahUKEwimrOKk46ruAhUnDWMBHUpYAUoQ8gEwAHoECAcQAQ" target="_blank" rel="noreferrer noopener">
          85 rue Bobillot<br>
          75013 Paris
        </a>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible text-1.5vw leading-normal font-regular md:text-xl">
          {{ $t('Contact.contact.metro') }}<br>
          Ligne 6 Corvisart - Ligne 7 Tolbiac - Ligne 5 Place d'Italie
        </p>
      </div>
    </section>


    <section id="contact" class="z-10 overflow-hidden relative w-full max-w-full h-screen bg-yellow flex items-center justify-center">
      <div class="text-center flex flex-col justify-between md:py-0 md:w-full w-1/2">
        <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible mb-10 md:mb-4 text-2.5vw font-bold leading-normal xs:text-base xs:leading-5 md:text-xl md:leading-6 text-white">Besoin de nous parler directement ?</h2>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible text-1.5vw leading-normal md:text-xl text-white">
          On est joignable au<br>
          01 00 00 00 00
        </p>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible text-1.5vw my-10 md:my-5 leading-normal font-bold md:text-xl text-white">
          Ou par mail<br>
          hello@sylphe.co
        </p>
        <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 0.5 }" class="is-visible text-1.5vw leading-normal md:text-xl text-white">N'hésitez pas, on adore les mots doux.</p>
      </div>
    </section>
<!--    <section id="joinUs" class="flex flex-col items-center px-7.5 pt-26 pb-18.5">
          <h2 v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible mb-4 text-2.5vw leading-normal xs:text-base xs:leading-5 md:text-xl md:leading-6" v-html="$t('Contact.joinUs.title')"/>
          <p v-observe="{ onEnter: visibilityWithoutDelay, threshold: 1 }" class="is-visible text-1.5vw leading-normal font-regular md:text-xl" v-html="$t('Contact.joinUs.subtitle')"/>
          <div class="containerCards flex justify-center w-full max-w-4xl mt-10">
            <div class="w-260 h-315 relative rounded-md text-white text-center flex justify-between bg-blue flex-col pt-14 px-0 pb-6 text-black ml-4">
              <svg class="mx-auto" xmlns="http://www.w3.org/2000/svg" width="132.609" height="132.609" viewBox="0 0 132.609 132.609">
                <g id="Groupe_871" data-name="Groupe 871" transform="translate(-1411.082 -1597.801)">
                  <circle id="Ellipse_151" data-name="Ellipse 151" cx="65.805" cy="65.805" r="65.805" transform="translate(1411.582 1598.301)" fill="none" stroke="#171716" stroke-miterlimit="10" stroke-width="1"/>
                  <circle id="Ellipse_152" data-name="Ellipse 152" cx="3.384" cy="3.384" r="3.384" transform="translate(1462.308 1623.155)" fill="#171716" stroke="#171716" stroke-width="1"/>
                  <circle id="Ellipse_153" data-name="Ellipse 153" cx="3.384" cy="3.384" r="3.384" transform="translate(1485.657 1622.648)" fill="#171716" stroke="#171716" stroke-width="1"/>
                  <path id="Tracé_2409" data-name="Tracé 2409" d="M1552.2,1704.506s15.753,14.532,30.286-2.108" transform="translate(1.375 -145.666) rotate(3)" fill="none" stroke="#171716" stroke-miterlimit="10" stroke-width="1"/>
                </g>
              </svg>

              <div>
                <p class="text-white text-base font-bold leading-6 mt-2.5">Remplacer notre CEO</p>
                <p class="text-white text-base font-book leading-6 mt-2.5 mt-2.5">Stage / Alternance</p>
              </div>
            </div>

            <div class="w-260 h-315 relative rounded-md text-white text-center flex justify-between bg-yellow flex-col pt-14 px-0 pb-6 text-black ml-4">
              <svg class="mx-auto" xmlns="http://www.w3.org/2000/svg" width="132.609" height="132.609" viewBox="0 0 132.609 132.609">
                <g id="Groupe_871" data-name="Groupe 871" transform="translate(-1411.082 -1597.801)">
                  <circle id="Ellipse_151" data-name="Ellipse 151" cx="65.805" cy="65.805" r="65.805" transform="translate(1411.582 1598.301)" fill="none" stroke="#171716" stroke-miterlimit="10" stroke-width="1"/>
                  <circle id="Ellipse_152" data-name="Ellipse 152" cx="3.384" cy="3.384" r="3.384" transform="translate(1462.308 1623.155)" fill="#171716" stroke="#171716" stroke-width="1"/>
                  <circle id="Ellipse_153" data-name="Ellipse 153" cx="3.384" cy="3.384" r="3.384" transform="translate(1485.657 1622.648)" fill="#171716" stroke="#171716" stroke-width="1"/>
                  <path id="Tracé_2409" data-name="Tracé 2409" d="M1552.2,1704.506s15.753,14.532,30.286-2.108" transform="translate(1.375 -145.666) rotate(3)" fill="none" stroke="#171716" stroke-miterlimit="10" stroke-width="1"/>
                </g>
              </svg>

              <div>
                <p class="text-white text-base font-bold leading-6 mt-2.5">Devenez notre<br>happines Manager</p>
                <p class="text-white text-base font-book leading-6 mt-2.5 mt-2.5">Stage / Alternance</p>
              </div>
            </div>

            <div class="w-260 h-315 relative rounded-md text-white text-center flex justify-between flex-col border border-solid border-black pt-14 px-0 pb-6 text-black ml-4">
              <svg class="mx-auto" xmlns="http://www.w3.org/2000/svg" width="132.609" height="132.609" viewBox="0 0 132.609 132.609">
                <g id="Groupe_871" data-name="Groupe 871" transform="translate(-1411.082 -1597.801)">
                  <circle id="Ellipse_151" data-name="Ellipse 151" cx="65.805" cy="65.805" r="65.805" transform="translate(1411.582 1598.301)" fill="none" stroke="#171716" stroke-miterlimit="10" stroke-width="1"/>
                  <circle id="Ellipse_152" data-name="Ellipse 152" cx="3.384" cy="3.384" r="3.384" transform="translate(1462.308 1623.155)" fill="#171716" stroke="#171716" stroke-width="1"/>
                  <circle id="Ellipse_153" data-name="Ellipse 153" cx="3.384" cy="3.384" r="3.384" transform="translate(1485.657 1622.648)" fill="#171716" stroke="#171716" stroke-width="1"/>
                  <path id="Tracé_2409" data-name="Tracé 2409" d="M1552.2,1704.506s15.753,14.532,30.286-2.108" transform="translate(1.375 -145.666) rotate(3)" fill="none" stroke="#171716" stroke-miterlimit="10" stroke-width="1"/>
                </g>
              </svg>

              <div>
                <p class="text-black text-base font-bold leading-6 mt-2.5">{{ $t('Contact.joinUs.otherIdea') }}</p>
                <p class="text-black text-base font-book leading-6 mt-2.5 mt-2.5">{{ $t('Contact.joinUs.sendApplication') }}</p>
              </div>
            </div>
          </div>
        </section>-->
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, maxLength } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      cguError: false,
      checkedCgu: false,
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  mixins: [validationMixin],
  validations: {
    form: {
      name: {
        required
      },
      email: {
        required,
        email,
        maxLength: maxLength(320)
      },
      message: {
        required
      }
    }
  },
  methods: {
    setName(value) {
      this.form.name = value
      this.$v.form.name.$touch()
    },
    setEmail(value) {
      this.form.email = value
      this.$v.form.email.$touch()
    },
    setMessage(value) {
      this.form.message = value
      this.$v.form.message.$touch()
    },
    sendForm() {
      this.$v.form.$touch()
      if (this.$v.form.$invalid || !this.checkedCgu) {
        console.log(this.$v)
      }
      else {
        this.$store.dispatch('sendEmail', this.form)
        this.$v.$reset()
        this.form = ''
        this.cguError = !this.checkedCgu
        this.checkedCgu = false
      }
    }
  }
}
</script>

<style>
.char {
  font-family: SoleilBold, SoleilSemiBold, SoleilBook, SoleilRegular, Arial, sans-serif!important;
}
</style>

<style lang="scss" scoped>
.cguCheck {
  @apply bg-gray;
}

#containerForm {
  & > img {
    width: 110px;
    bottom: -41.655px;
    right: 15%;
  }

  #form {
    .defaultButton {
      max-width: 210px;
    }

    .formGroup {
      @apply mt-11 flex flex-col w-full;

      * {
        @apply font-bold;
      }

      textarea {
        height: 125px;
        resize: none;
      }

      input, textarea {
        @apply mt-1.5 font-regular border-b-2 border-solid border-black;
      }

      &:first-child {
        @apply mt-17;
      }

      &.formGroupError input, &.formGroupError textarea {
        @apply border-solid border-error;
      }
    }
  }
}

.error {
  @apply text-error mt-5 font-bold;
}
</style>
