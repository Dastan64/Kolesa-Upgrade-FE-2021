<template>
  <aside class="aside">
    <div class="aside__wrapper">
      <nav class="aside__nav">
        <ul class="aside__list list">
          <li class="list__item" v-for="(link, index) in navLinks" :key="index">
            <a
              class="list__link"
              :class="{ 'list__link--active': selectedLink === link.slug }"
              href="#"
              @click="setActiveLink(link)"
              >{{ link.name }}</a
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
  methods: {
    setActiveLink(link) {
      this.$emit('setActiveLink', link);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/aside';
</style>
