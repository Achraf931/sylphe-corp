<template>
  <div ref="sylphe_container" class="h-screen sylphe_container w-screen max-w-screen max-h-screen transition-all duration-700 ease-in-out fixed top-0 left-0" style="z-index: 999999999; background-color: #1E1F1D;">
    <video ref="sylphe" id="sylphe" muted playsinline preload="metadata" class="h-full w-full max-w-screen max-h-screen">
      <source :src="$md !== 'lg' ? '/sylphe_mobile_a.webm' : '/sylphe_a.webm'" type="video/webm">
    </video>
  </div>
</template>
