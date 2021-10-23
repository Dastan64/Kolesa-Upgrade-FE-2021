<template>
  <aside class="aside">
    <div class="aside__wrapper">
      <nav class="aside__nav">
        <ul class="aside__list list">
          <li class="list__item" v-for="(link, index) in navLinks" :key="index">
            <a
              class="list__link"
              :class="{ 'list__link--active': selectedLink === link }"
              href="#"
              @click="selectedLink = link"
              >{{ link }}</a
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
    selectedLink: String,
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/aside';
</style>
