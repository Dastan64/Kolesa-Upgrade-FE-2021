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
@import '../styles/variables';
.preview__image {
  cursor: pointer;
  width: 50px;
  height: 50px;
  &-container:not(:first-of-type) {
    margin-left: 8px;
  }
  &--active {
    border: 1px solid $bluePrimary;
    border-radius: 8px;
  }
}
</style>
