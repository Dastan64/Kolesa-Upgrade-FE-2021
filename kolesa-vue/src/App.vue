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
      <main class="main">
        <div class="main__banner-container">
          <picture>
            <source srcset="./assets/images/banner.webp" type="image/webp" />
            <img src="./assets/images/banner.png" alt="" />
          </picture>
        </div>
        <Buttons></Buttons>
        <Tabs
          v-model="tabs"
          :tabs="tabs"
          :selected-tab="selectedTab"
          @setActiveTab="changeActiveTab"
        ></Tabs>
        <div class="main__grid grid">
          <Card
            v-for="item in filterCategories"
            :key="item.id"
            :item="item"
            @toggleModalWindow="toggleModalWindow"
            @openCard="openCard"
          ></Card>
        </div>
        <ModalWindow
          v-model="isModalOpen"
          :is-open="isModalOpen"
          :info-user="infoUser"
          @toggleModalWindow="toggleModalWindow"
          :modal-data="modalData"
          @removeScores="updateUserBalance"
        ></ModalWindow>
      </main>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import Buttons from './components/Buttons.vue';
import Tabs from './components/Tabs.vue';
import Card from './components/Card.vue';
import ModalWindow from './components/ModalWindow.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Navbar,
    Buttons,
    Tabs,
    Card,
    ModalWindow,
    Footer,
  },
  data() {
    return {
      clothes: [],
      accessories: [],
      tabs: [
        {
          name: 'Все товары',
          slug: 'all',
        },
        { name: 'Одежда', slug: 'clothes' },
        {
          name: 'Аксессуары',
          slug: 'accessories',
        },
      ],
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
      selectedTab: 'all',
      selectedLink: 'shop',
      isModalOpen: false,
      infoUser: {},
      modalData: {},
    };
  },
  computed: {
    allItems() {
      return [...this.clothes, ...this.accessories];
    },
    allItemsSorted() {
      return this.allItems
        .slice()
        .sort((item) => (item.isNew !== true ? 1 : -1));
    },
    filterCategories() {
      if (this.selectedTab === 'all') {
        return this.allItemsSorted;
      }
      if (this.selectedTab === 'clothes') {
        return this.clothes;
      }
      return this.accessories;
    },
  },
  methods: {
    toggleModalWindow() {
      this.isModalOpen = !this.isModalOpen;
    },
    changeActiveTab(tab) {
      this.selectedTab = tab.slug;
    },
    changeActiveLink(link) {
      this.selectedLink = link.slug;
    },
    fetchClothes() {
      fetch('https://api.json-generator.com/templates/-_RLsEGjof6i/data', {
        headers: {
          Authorization: 'Bearer rhhrmjvdvcv0ka4e6ouao9a1gj42fbjim5bcu60f',
        },
      })
        .then((response) => {
          if (!response.ok) {
            console.log(response.status);
          }
          return response.json();
        })
        .then((data) => {
          this.clothes = data;
        })
        .catch((err) => {
          console.log('Fetch Error', err);
        });
    },
    fetchAccessories() {
      fetch('https://api.json-generator.com/templates/q3OPxRyEcPvP/data', {
        headers: {
          Authorization: 'Bearer rhhrmjvdvcv0ka4e6ouao9a1gj42fbjim5bcu60f',
        },
      })
        .then((response) => {
          if (!response.ok) {
            console.log(response.status);
          }
          return response.json();
        })
        .then((data) => {
          this.accessories = data;
        })
        .catch((err) => {
          console.log('Fetch Error', err);
        });
    },
    updateUserInfo(userInfo) {
      this.infoUser = userInfo;
    },
    updateUserBalance(price) {
      this.infoUser.score -= price;
    },
    openCard(item) {
      this.toggleModalWindow();
      this.modalData = item;
    },
  },
  created() {
    this.fetchClothes();
    this.fetchAccessories();
  },
};
</script>

<style lang="scss">
@import './styles/variables';
@import './styles/container';
@import './styles/main';

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
