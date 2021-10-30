<template>
  <a class="header__profile-link" href="#">
    <div class="header__profile-container profile">
      <div class="profile__image-container">
        <img :src="infoUser.avatarUrl" alt="Аватарка профиля" />
      </div>
      <div class="profile__descr">
        <h3 class="profile__name">{{ infoUser.name }}</h3>
        <p class="profile__scores">{{ infoUser.score }} баллов</p>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'HeaderProfile',
  data() {
    return {
      userInfo: {},
    };
  },
  props: {
    infoUser: Object,
  },
  methods: {
    fetchUserInfo() {
      fetch('https://api.json-generator.com/templates/7ZW3y5GAuIge/data', {
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
          this.userInfo = data;
          this.$emit('updateUserInfo', this.userInfo);
        })
        .catch((err) => {
          console.log('Fetch Error', err);
        });
    },
  },
  created() {
    this.fetchUserInfo();
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/variables';
@import '../../styles/profile';
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
