<template>
  <div class="app">
    <Header @updateUserInfo="updateUserInfo" :infoUser="infoUser"></Header>
    <div class="app__container container">
      <Navbar
        v-model="navLinks"
        :nav-links="navLinks"
        :selected-link="selectedLink"
        @setActiveLink="changeActiveLink"
      ></Navbar>
      <router-view
        :infoUser="infoUser"
        :updateUserBalance="updateUserBalance"
      ></router-view>
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
      infoUser: {},
      navLinks: [
        {
          name: 'Оргсхема',
          slug: 'orgscheme',
        },
        {
          name: 'Kolesa Team',
          slug: 'team',
        },
        {
          name: 'Kolesa Shop',
          slug: 'shop',
        },
        {
          name: 'Картина компании',
          slug: 'overview',
        },
        {
          name: 'Новости',
          slug: 'news',
        },
        {
          name: 'Education',
          slug: 'education',
        },
        {
          name: 'Guidelines',
          slug: 'guidelines',
        },
        {
          name: 'Библиотека',
          slug: 'library',
        },
        {
          name: 'FAQ',
          slug: 'faq',
        },
      ],
      selectedLink: 'shop',
    };
  },
  methods: {
    changeActiveLink(link) {
      this.selectedLink = link.slug;
    },
    updateUserInfo(userInfo) {
      this.infoUser = userInfo;
    },
    updateUserBalance(price) {
      this.infoUser.score -= price;
    },
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
