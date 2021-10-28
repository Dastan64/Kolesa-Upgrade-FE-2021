<template>
  <div class="preview__image-container">
    <img class="preview__image" :src="imageAddress" alt="" />
  </div>
</template>

<script>
export default {
  name: 'Images',
  props: {
    imageAddress: String,
  },
};
</script>

<style lang="scss" scoped>
</style>
