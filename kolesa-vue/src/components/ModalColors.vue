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
@import '../styles/variables';

.colors {
  display: flex;
  flex-wrap: wrap;

  &__option {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 8px;
    margin-right: 8px;
    border: 1px solid rgba(28, 24, 25, 0.1);
    border-radius: 8px;
    color: $bluePrimary;
    cursor: pointer;

    &:hover {
      background-color: $activeBgColor;
    }

    &--active {
      color: $blackPrimary;
      background-color: $activeBgColor;
    }
  }

  &__radio {
    appearance: none;
    -webkit-appearance: none;
    position: absolute;
  }

  &__radio-label {
    font-size: 0.875rem;
    cursor: pointer;
    padding: 8px 12px 8px 25px;
    margin-left: 15px;
  }
}
</style>
