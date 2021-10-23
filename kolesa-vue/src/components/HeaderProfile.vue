<template>
  <a class="header__profile-link" href="#">
    <div class="header__profile-container profile">
      <div class="profile__image-container">
        <picture>
          <source
            srcset="../assets/images/profile-avatar.webp"
            type="image/webp"
          />
          <img
            src="../assets/images/profile-avatar.png"
            alt="Аватарка профиля"
          />
        </picture>
      </div>
      <div class="profile__descr">
        <h3 class="profile__name">Мортиджан</h3>
        <p class="profile__scores">300 баллов</p>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'HeaderProfile',
};
</script>
