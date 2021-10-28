<template>
  <div class="colors__option">
    <label class="colors__radio-label">
      <input class="colors__radio" type="radio" /><span
        :style="{ 'background-color': color.color }"
        class="box"
      ></span
      >{{ color.label }}</label
    >
  </div>
</template>

<script>
export default {
  name: 'Colors',
  props: {
    color: Object,
  },
};
</script>

<style lang="scss" scoped>
</style>
