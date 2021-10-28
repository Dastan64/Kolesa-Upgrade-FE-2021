<template>
  <div class="volumes__option">
    <p>{{ volume }}</p>
  </div>
</template>

<script>
export default {
  name: 'Volumes',
  props: {
    volume: Number,
  },
};
</script>

<style lang="scss" scoped>
</style>
