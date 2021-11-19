<template>
  <div ref="sylphe_container" class="h-screen sylphe_container w-screen max-w-screen max-h-screen transition-all duration-700 ease-in-out fixed top-0 left-0" style="z-index: 999999999; background-color: #1E1F1D;">
    <video ref="sylphe" id="sylphe" muted playsinline preload="metadata" class="h-full w-full max-w-screen max-h-screen">
      <source :src="video" type="video/webm">
    </video>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        video: '/sylphe_a.webm'
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.video = parseInt(document.documentElement.clientWidth) >= 480 ? '/sylphe_a.webm' : '/sylphe_mobile_a.webm'
      })
    }
  }
</script>
