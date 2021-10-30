<template>
  <div class="header__search search">
    <form class="search__form">
      <input
        type="text"
        class="search__input"
        placeholder="Поиск"
        v-model.trim="query"
        required
      />
      <button type="submit" class="search__btn">
        <img src="@/assets/images/search-icon.svg" alt="Иконка поиска" />
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HeaderSearch',
  data() {
    return {
      query: '',
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables';
@import '@/styles/search';
.header {
  &__search {
    position: relative;
  }
}
</style>
