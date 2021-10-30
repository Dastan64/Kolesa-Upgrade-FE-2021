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
      @toggleModalWindow="toggleModalWindow"
      :modal-data="modalData"
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
  data() {
    return {
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
      return [...this.$store.state.clothes, ...this.$store.state.accessories];
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
        return this.$store.state.clothes;
      }
      return this.$store.state.accessories;
    },
  },
  methods: {
    toggleModalWindow() {
      this.isModalOpen = !this.isModalOpen;
    },
    changeActiveTab(tab) {
      this.selectedTab = tab.slug;
    },
    openCard(item) {
      this.toggleModalWindow();
      this.modalData = item;
    },
  },
  created() {
    this.$store.dispatch('fetchClothes');
    this.$store.dispatch('fetchAccessories');
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/main';
</style>
