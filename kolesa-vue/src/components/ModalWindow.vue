<template>
  <div class="modal" v-if="isOpen">
    <div class="modal__overlay" @click="toggleModalWindow"></div>
    <div class="modal__window modal-window">
      <div class="modal-window__container">
        <div class="modal-window__images">
          <div class="modal-window__main-image-container">
            <img
              :src="modalData.mainImage"
              alt="Изображение футболки"
              width="330px"
              height="330px"
            />
          </div>
          <div
            class="modal-window__preview-images preview"
            v-if="modalData.images"
            v-html="getPreviewImages(modalData.images)"
          ></div>
        </div>
        <div class="modal-window__info info">
          <h3 class="info__heading">{{ modalData.title }}</h3>
          <p class="info__scores">{{ modalData.price }} баллов</p>
          <button class="info__btn" type="button" @click="removeScores">
            Заказать
          </button>
          <p class="info__warning" v-if="isWarningShown">
            Внимание! У Вас недостаточно баллов для покупки!
          </p>
          <div class="info__balance">
            <div class="info__balance-text">
              <p class="info__balance-heading">Твой баланс</p>
              <p class="info__balance-number">{{ infoUser.score }} баллов</p>
            </div>
            <div class="info__balance-icon-container">
              <picture>
                <source srcset="../assets/images/bags.webp" type="image/webp" />
                <img src="../assets/images/bags.png" alt="Картинка сумок" />
              </picture>
            </div>
          </div>

          <div class="info__colors" v-if="modalData.colors">
            <p class="info__colors-heading">Цвета:</p>
            <div
              class="info__colors-options colors"
              v-html="getFormattedColors(modalData.colors)"
            ></div>
          </div>

          <div class="info__sizes" v-if="modalData.sizes">
            <p class="info__size-heading">Размеры:</p>
            <div
              class="info__size-options sizes"
              v-html="getFormattedSizes(modalData.sizes)"
            ></div>
          </div>

          <div class="info__volumes" v-if="modalData.volumes">
            <p class="info__size-heading">Объёмы:</p>
            <div
              class="info__size-options sizes"
              v-html="getFormattedVolumes(modalData.volumes)"
            ></div>
          </div>

          <div class="info__details">
            <strong>
              <p class="info__details-heading">Детали:</p>
            </strong>
            <p class="info__details-text">{{ modalData.description }}}</p>
          </div>

          <div class="info__how-to">
            <strong>
              <p class="info__how-to-heading">Как выбрать размер?</p>
            </strong>
            <p class="info__how-to-answer">Написать дяде Рику для уточнения.</p>
          </div>
        </div>

        <button class="modal-window__close-btn" @click="toggleModalWindow">
          <picture>
            <source
              srcset="../assets/images/close-icon.svg"
              type="image/webp"
            />
            <img src="../assets/images/close-icon.svg" />
          </picture>
        </button>
      </div>
      <div class="modal-window__bottom-balance bottom-balance">
        <div class="bottom-balance__container">
          <p class="bottom-balance__caption">Твои баллы:</p>
          <strong>
            <p class="bottom-balance__number">{{ infoUser.score }}</p>
          </strong>
        </div>
        <button class="bottom-balance__btn" type="button" @click="removeScores">
          Заказать
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalWindow',
  props: {
    isOpen: Boolean,
    modalData: Object,
    infoUser: Object,
  },
  data() {
    return {
      isWarningShown: false,
    };
  },
  methods: {
    toggleModalWindow() {
      this.$emit('toggleModalWindow');
    },
    getFormattedColors(colors) {
      return colors
        .map(
          (color) => `<div class="colors__option">
                <label class="colors__radio-label">
                  <input class="colors__radio" type="radio" /><span
                    style="background-color: ${color.color}"
                    class="box"
                  ></span
                  >${color.label}</label
                >
              </div>`,
        )
        .join('');
    },
    getFormattedSizes(sizes) {
      return sizes
        .map(
          (size) => `
        <div class="sizes__option">
                <p>${size}</p>
            </div>`,
        )
        .join('');
    },
    getPreviewImages(images) {
      console.log(images);
      return images
        .map(
          (image) => `                         <div
              class="preview__image-container"><img
                  class="preview__image"
                  src=${image}
                  alt=""
                /></div>`,
        )
        .join('');
    },
    getFormattedVolumes(volumes) {
      return volumes
        .map(
          (volume) => `
        <div class="volumes__option">
                <p>${volume}</p>
            </div>`,
        )
        .join('');
    },
    removeScores() {
      if (this.infoUser.score < this.modalData.price) {
        this.isWarningShown = true;
        return;
      }
      this.$emit('removeScores', this.modalData.price);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
