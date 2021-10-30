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
@import '@/styles/variables';
.volumes {
  &__option {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 40px;
    min-height: 40px;
    margin-top: 8px;
    margin-right: 8px;
    padding: 8px 16px;
    border: 1px solid rgba(28, 24, 25, 0.1);
    border-radius: 8px;
    color: $bluePrimary;
    cursor: pointer;
    &:hover {
      background-color: $activeBgColor;
      color: $blackPrimary;
    }
    &--active {
      background-color: $activeBgColor;
      color: $blackPrimary;
    }
  }
}
</style>
