<template>
  <div class="modal" v-if="isOpen">
    <div class="modal__overlay" @click="$emit('toggleModalWindow')"></div>
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
            v-if="modalData.images && modalData.images.length"
          >
            <ModalImages
              v-for="(imageAddress, index) in modalData.images"
              :key="index"
              :imageAddress="imageAddress"
            ></ModalImages>
          </div>
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
              <p class="info__balance-number">{{ score }} баллов</p>
            </div>
            <div class="info__balance-icon-container">
              <picture>
                <source srcset="@/assets/images/bags.webp" type="image/webp" />
                <img src="@/assets/images/bags.png" alt="Картинка сумок" />
              </picture>
            </div>
          </div>

          <div
            class="info__colors"
            v-if="modalData.colors && modalData.colors.length"
          >
            <p class="info__colors-heading">Цвета:</p>
            <div class="info__colors-options colors">
              <ModalColors
                v-for="(color, index) in modalData.colors"
                :key="index"
                :color="color"
              ></ModalColors>
            </div>
          </div>

          <div
            class="info__sizes"
            v-if="modalData.sizes && modalData.sizes.length"
          >
            <p class="info__size-heading">Размеры:</p>
            <div class="info__size-options sizes">
              <ModalSizes
                v-for="(size, index) in modalData.sizes"
                :key="index"
                :size="size"
              ></ModalSizes>
            </div>
          </div>

          <div
            class="info__volumes"
            v-if="modalData.volumes && modalData.volumes.length"
          >
            <p class="info__volume-heading">Объёмы:</p>
            <div class="info__volume-options volumes">
              <ModalVolumes
                v-for="(volume, index) in modalData.volumes"
                :key="index"
                :volume="volume"
              ></ModalVolumes>
            </div>
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

        <button
          class="modal-window__close-btn"
          @click="$emit('toggleModalWindow')"
        >
          <picture>
            <source srcset="@/assets/images/close-icon.svg" type="image/webp" />
            <img src="@/assets/images/close-icon.svg" />
          </picture>
        </button>
      </div>
      <div class="modal-window__bottom-balance bottom-balance">
        <div class="bottom-balance__container">
          <p class="bottom-balance__caption">Твои баллы:</p>
          <strong>
            <p class="bottom-balance__number">
              {{ score }}
            </p>
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
import { mapState } from 'vuex';
import ModalImages from './ModalImages.vue';
import ModalColors from './ModalColors.vue';
import ModalSizes from './ModalSizes.vue';
import ModalVolumes from './ModalVolumes.vue';

export default {
  name: 'ModalWindow',
  props: {
    isOpen: Boolean,
    modalData: Object,
  },
  data() {
    return {
      isWarningShown: false,
    };
  },
  computed: mapState({
    score: (state) => state.userInfo.score,
  }),
  components: {
    ModalImages,
    ModalColors,
    ModalSizes,
    ModalVolumes,
  },
  methods: {
    removeScores() {
      if (this.score < this.modalData.price) {
        this.isWarningShown = true;
        return;
      }
      this.$store.commit('removeUserScore', this.modalData.price);
      this.$emit('toggleModalWindow');
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/variables';
@import '@/styles/modal-window';
</style>
