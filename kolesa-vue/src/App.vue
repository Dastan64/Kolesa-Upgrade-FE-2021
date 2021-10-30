<template>
  <div class="app">
    <Header></Header>
    <div class="app__container container">
      <Navbar :nav-links="navLinks"></Navbar>
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './layouts/components/Header.vue';
import Navbar from './layouts/components/Navbar.vue';
import Footer from './layouts/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Navbar,
    Footer,
  },
  data() {
    return {
      navLinks: [
        {
          name: 'Оргсхема',
          slug: 'orgscheme',
          url: '/',
          isExact: true,
        },
        {
          name: 'Kolesa Team',
          slug: 'team',
          url: '/team',
          isExact: true,
        },
        {
          name: 'Kolesa Shop',
          slug: 'shop',
          url: '/shop',
          isExact: false,
        },
        {
          name: 'Картина компании',
          slug: 'overview',
          url: '/overview',
          isExact: true,
        },
        {
          name: 'Новости',
          slug: 'news',
          url: '/news',
          isExact: true,
        },
        {
          name: 'Education',
          slug: 'education',
          url: '/education',
          isExact: true,
        },
        {
          name: 'Guidelines',
          slug: 'guidelines',
          url: '/guidelines',
          isExact: true,
        },
        {
          name: 'Библиотека',
          slug: 'library',
          url: '/library',
          isExact: true,
        },
        {
          name: 'FAQ',
          slug: 'faq',
          url: '/faq',
          isExact: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import './styles/variables';
@import './styles/container';

* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

body {
  color: $blackPrimary;
  font-family: 'Open Sans', sans-serif;
}

a {
  text-decoration: none;
}

button {
  font-family: 'Open Sans', sans-serif;
}

li {
  list-style: none;
}

.app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;

  &__container {
    margin: 26px auto 0;
  }
}
</style>
