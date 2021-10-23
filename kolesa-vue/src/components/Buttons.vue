<template>
  <div class="main__buttons buttons">
    <button class="buttons__get-scores" type="button">
      <picture>
        <source srcset="../assets/images/plus-icon.webp" type="image/webp" />
        <img src="../assets/images/plus-icon.png" alt="" />
      </picture>
      Получить баллы
    </button>
    <button class="buttons__how-to" type="button">
      <picture>
        <source
          srcset="../assets/images/question-icon.webp"
          type="image/webp"
        />
        <img src="../assets/images/question-icon.png" alt="" />
      </picture>
      Как получить баллы
    </button>
    <button class="buttons__gift" type="button">
      <picture>
        <source srcset="../assets/images/gift-icon.webp" type="image/webp" />
        <img src="../assets/images/gift-icon.png" alt="" />
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
@import '../styles/variables';
@import '../styles/buttons';
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
