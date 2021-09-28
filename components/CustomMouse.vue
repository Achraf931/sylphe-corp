<template>
  <div id="cursor"></div>
</template>

<script>
import Cursor from "@/utils/cursor";

export default {
  mounted() {
    new Cursor(document.getElementById('cursor'))
  }
}
</script>

<style lang="scss" scoped>
#cursor {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99999999999;
  contain: layout style size;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 12px;
  min-height: 12px;
  background: black;
  border-radius: 50%;

  p {
    display: none;
  }
}
</style>
