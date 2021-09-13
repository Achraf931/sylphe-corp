<template>
  <a v-if="link !== '' && target" :href="link" target="_blank" rel="noreferrer noopener" class="defaultButton hoverAnimation">
    <slot></slot>
  </a>
  <NuxtLink v-else-if="link !== '' && !target" :to="link" class="defaultButton hoverAnimation">
    <slot></slot>
  </NuxtLink>
  <button v-else-if="link === '' && target === ''" type="submit" class="defaultButton hoverAnimation">
    <slot/>
  </button>
</template>

<script>
  export default {
    props: {
      link: {
        type: String,
        required: false
      },
      target: {
        type: String,
        required: false
      }
    }
  }
</script>

<style lang="scss" scoped>
.defaultButton {
  background-color: white;
  border: 1px solid black;
  color: black;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  min-height: 45px;
  justify-content: center;
  font-family: SoleilBold, SoleilSemiBold, SoleilBook, SoleilRegular, Arial, sans-serif;
  @apply md:text-13px text-1.2vw leading-normal;
}
</style>
