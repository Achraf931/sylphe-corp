<template>
  <canvas @mousedown="startPainting" @mouseup="finishedPainting" @mousemove="draw" class="w-full max-w-screen h-screen absolute z-50 pointer-events-auto" id="canvas"></canvas>
</template>

<script>
export default {
  data() {
    return {
      vueCanvas:null,
      painting:false,
      canvas:null,
      ctx:null
    }
  },
  mounted() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");

    // Resize canvas
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
  },
  methods: {
    startPainting(e) {
      this.painting = true;
      this.draw(e)
    },
    finishedPainting() {
      this.painting = false;
      this.ctx.beginPath()
    },
    draw(e) {
      if(!this.painting) return

      this.ctx.lineWidth = 5;
      this.ctx.lineCap = "round"

      const rect = e.target.getBoundingClientRect();

      this.ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top)
      this.ctx.stroke()

      this.ctx.beginPath()
      this.ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top)
    }
  }
}
</script>
