<template>
  <main class="h-screen bg-lightGray flex flex-col items-center justify-between">
    <IncludesHeader class="relative"/>
    <div v-observe="{ onEnter: visibility, once: true }" class="is-visible-top flex flex-col items-center">
      <h1 class="md:text-24px text-3vw font-bold text-center mb-3.5 relative" v-html="$t('error.title')"/>
      <p class="text-1.5vw leading-normal font-regular md:text-xl max-w-640 text-center">{{ $t('error.text') }}</p>
      <UiButton class="mt-10" :link="localePath('index')">{{ $t('error.backButton') }}</UiButton>
    </div>
    <IncludesFooter v-observe="{ onEnter: visibility, once: true }" class="is-visible"/>
  </main>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'custom',
    mounted() {
      this.$viewportObserverState.active = true
    }
  }
</script>
