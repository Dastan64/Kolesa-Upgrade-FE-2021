<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__container">
        <div class="header__logo-search">
          <div class="header__logo-container">
            <a href="#">
              <picture>
                <source
                  srcset="../assets/images/kolesa-logo.svg"
                  type="image/webp"
                />
                <img
                  src="../assets/images/kolesa-logo.svg"
                  alt="Логотип Kolesa"
                />
              </picture>
            </a>
          </div>
          <HeaderSearch></HeaderSearch>
        </div>
        <HeaderProfile></HeaderProfile>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderProfile from './HeaderProfile.vue';
import HeaderSearch from './HeaderSearch.vue';

export default {
  name: 'Header',
  components: {
    HeaderSearch,
    HeaderProfile,
  },
};
</script>

<style lang="scss" scoped>
</style>
