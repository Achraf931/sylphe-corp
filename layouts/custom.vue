<template>
  <div class="min-h-screen flex flex-col justify-between">
    <header class="transition-all duration-100 ease-in z-50 w-full fixed">
      <nav class="flex justify-between py-4 px-16 md:py-4 md:px-3.8">
        <NuxtLink class="flex items-center max-w-8vw 2xl:max-w-none" :to="localePath({name: 'index'})" style="border: none!important;">
          <img width="120px" height="30.44px" class="max-w-8vw w-full" style="min-width: 120px;" src="/logoB.svg" alt="Logo Sylphe">
        </NuxtLink>

        <IncludesBurger burgerColor="black"/>

        <div class="flex items-center xl:hidden">
          <NuxtLink class="border-2 border-solid border-transparent text-black ml-7.5" :to="localePath({name: 'index'})">{{ $t('nav.home') }}</NuxtLink>
          <!--        <NuxtLink class="border-2 border-solid border-transparent text-white ml-7.5" :to="localePath({name: 'services'})">{{ $t('nav.services') }}</NuxtLink>-->
          <NuxtLink class="border-2 border-solid border-transparent text-black ml-7.5" :to="localePath({name: 'culture'})">{{ $t('nav.culture') }}</NuxtLink>
          <NuxtLink class="border-2 border-solid border-transparent text-black ml-7.5" :to="localePath({name: 'works'})">{{ $t('nav.works') }}</NuxtLink>
          <NuxtLink class="border-2 border-solid border-transparent text-black ml-7.5" :to="localePath({name: 'contact'})">{{ $t('nav.contact') }}</NuxtLink>
          <a id="buttonCall" class="hoverButton transition-all duration-100 ease-in rounded-md ml-7.5 bg-transparent border text-black border-solid border-black px-5 py-3.8" href="https://calendly.com/sylphe/reunion" target="_blank" rel="noreferrer noopener">{{ $t('nav.call') }}</a>
        </div>
      </nav>
    </header>
    <Nuxt/>
  </div>
</template>

<style lang="scss" scoped>
nav > a:first-child {
  width: 100%;
}

a {
  font-size: 1.2vw;
}

a:not(.hoverButton):after {
  display: block;
  content: '';
  border-bottom: solid 2px black;
  transform: scaleX(0);
  transition: transform .2s ease-in-out;
  transform-origin: 100% 50%;
}

a:hover:after {
  transform: scaleX(1);
  transform-origin: 0 50%;
}

a.nuxt-link-exact-active:after {
  display: block;
  content: '';
  border-bottom: solid 2px black;
  transform: scaleX(1);
  transition: transform .15s ease-in-out;
  transform-origin: 0 50%;
}

.hoverButton:hover {
  transform: translate(-3px, -3px);
  box-shadow: 3px 3px 0 0 black;
}

@media all and (max-width: 1536px) {
  nav > a:first-child {
    width: auto;
  }
}
</style>
