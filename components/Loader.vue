<template>
  <div class="fixed containerLoader" style="z-index: 999999999;">
    <div class="relative w-full h-full">
      <div class="fixed loader bg-black"></div>
      <div class="fixed loader bg-pink"></div>
      <div class="fixed loader bg-yellow"></div>
      <div class="fixed loader bg-purple"></div>
      <div class="fixed loader bg-blue"></div>
    </div>
  </div>
</template>

<style>
  .containerLoader {
    width: 100%;
    max-width: 100vw;
    height: 100vh;
    transform: translate(0, 100%);
  }

  .loader {
    bottom: 0;
    left: 0;
    width: 100%;
    max-width: 100vw;
    height: 0;
  }
</style>
