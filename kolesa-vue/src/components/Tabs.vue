<template>
  <div class="main__tabs tabs">
    <div class="tabs__nav">
      <button
        v-for="(tab, index) in tabs"
        class="tabs__nav-btn"
        :class="{ 'tabs__nav-btn--active': selectedTab === tab.slug }"
        :key="index"
        @click="setActiveTab(tab)"
      >
        {{ tab.name }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    tabs: Array,
    selectedTab: String,
  },

  methods: {
    setActiveTab(tab) {
      this.$emit('setActiveTab', tab);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/tabs';
</style>
