<template>
  <div class="header__search search">
    <form class="search__form">
      <input type="text" class="search__input" placeholder="Поиск" required />
      <button type="submit" class="search__btn">
        <img src="../assets/images/search-icon.svg" alt="Иконка поиска" />
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HeaderSearch',
};
</script>
