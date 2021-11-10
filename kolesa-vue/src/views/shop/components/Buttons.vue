<template>
  <div class="main__buttons buttons">
    <button class="buttons__get-scores link" type="button">
      <picture>
        <source srcset="@/assets/images/get-scores.webp" type="image/webp" />
        <img src="@/assets/images/get-scores.png" alt="" />
      </picture>
      Получить баллы
    </button>
    <router-link
      to="/shop/how-to-get-scores"
      class="buttons__how-to link"
      type="button"
    >
      <picture>
        <source srcset="@/assets/images/how-to.webp" type="image/webp" />
        <img src="@/assets/images/how-to.png" alt="" />
      </picture>
      Как получить баллы
    </router-link>
    <button class="buttons__gift link" type="button">
      <picture>
        <source srcset="@/assets/images/gift.webp" type="image/webp" />
        <img src="@/assets/images/gift.png" alt="" />
      </picture>
      Подарить баллы
    </button>
  </div>
</template>

<script>
export default {
  name: 'Buttons',
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables';
@import '@/styles/buttons';
.main {
  &__buttons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    gap: 24px;
    color: #1c1819;
  }
}
</style>
