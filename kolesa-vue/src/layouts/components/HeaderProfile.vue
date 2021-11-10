<template>
  <a class="header__profile-link" href="#">
    <div class="header__profile-container profile">
      <div class="profile__image-container">
        <img :src="userInfo.avatarUrl" alt="Аватарка профиля" />
      </div>
      <div class="profile__descr">
        <h3 class="profile__name">{{ userInfo.name }}</h3>
        <p class="profile__scores">{{ userInfo.score }} баллов</p>
      </div>
    </div>
  </a>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HeaderProfile',
  computed: mapState({
    userInfo: 'userInfo',
  }),
  created() {
    this.$store.dispatch('fetchUserInfo');
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables';
@import '@/styles/profile';
.header {
  &__profile-link {
    color: $blackPrimary;

    &:hover {
      & > .header__profile-container {
        background-color: #e7e7e7;
        border-radius: 8px;
      }
    }
  }
}
</style>
