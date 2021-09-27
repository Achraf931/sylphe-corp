<template>
  <div class="min-h-screen flex flex-col justify-between">
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
