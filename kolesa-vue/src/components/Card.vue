<template>
  <div class="grid__item card">
    <div class="card__wrapper">
      <div class="card__image-container">
        <img :src="item.mainImage" alt="" :id="item.id" />
        <div class="card__thumb" v-if="item.isNew">
          <p>New</p>
        </div>
      </div>
      <div class="card__info">
        <h3 class="card__scores" v-if="item.price">{{ item.price }} баллов</h3>
        <h3 class="card__scores" v-else>Цена неизвестна</h3>
        <p class="card__name">{{ item.title }}</p>
        <p class="card__sizes" v-if="item.sizes">
          Размеры: {{ item.sizes.join(', ') }}
        </p>
        <button
          class="card__btn"
          type="button"
          title="Заказать"
          :data-id="item.id"
          @click="toggleModalWindow"
        >
          Заказать
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    item: Object,
  },
  methods: {
    toggleModalWindow() {
      this.$emit('toggleModalWindow');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
