<template>
  <main class="main">
    <div class="main__banner-container">
      <picture>
        <source srcset="@/assets/images/banner.webp" type="image/webp" />
        <img src="@/assets/images/banner.png" alt="" />
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
</template>

<script>
import Buttons from './components/Buttons.vue';
import Tabs from './components/Tabs.vue';
import Card from './components/Card.vue';
import ModalWindow from './components/ModalWindow.vue';

export default {
  name: 'Shop',
  components: {
    Buttons,
    Tabs,
    Card,
    ModalWindow,
  },
  props: {
    infoUser: Object,
    updateUserBalance: Function,
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
      selectedTab: 'all',
      isModalOpen: false,
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

<style lang="scss" scoped>
@import '@/styles/main';
</style>
