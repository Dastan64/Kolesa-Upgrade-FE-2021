<template>
  <div class="sizes__option">
    <p>{{ size }}</p>
  </div>
</template>

<script>
export default {
  name: 'Sizes',
  props: {
    size: String,
  },
};
</script>

<style lang="scss" scoped>
</style>
