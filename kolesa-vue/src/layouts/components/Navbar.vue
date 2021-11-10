<template>
  <aside class="aside">
    <div class="aside__wrapper">
      <nav class="aside__nav">
        <ul class="aside__list list">
          <li class="list__item" v-for="(link, index) in navLinks" :key="index">
            <router-link
              class="list__link"
              active-class="list__link--active"
              :to="link.url"
              :exact="link.isExact"
              >{{ link.name }}</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    navLinks: Array,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables';
@import '@/styles/aside';
</style>
