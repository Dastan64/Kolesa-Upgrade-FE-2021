<template>
  <div id="app" class="app">
    <header class="header">
      <div class="header__wrapper">
        <div class="header__container">
          <div class="header__logo-search">
            <div class="header__logo-container">
              <a href="#">
                <picture>
                  <source srcset="./assets/images/kolesa-logo.svg" type="image/webp" />
                  <img src="./assets/images/kolesa-logo.svg" alt="Логотип Kolesa" />
                </picture>
              </a>
            </div>
            <div class="header__search search">
              <form class="search__form">
                <input type="text" class="search__input" placeholder="Поиск" required />
                <button type="submit" class="search__btn">
                  <img src="./assets/images/search-icon.svg" alt="Иконка поиска" />
                </button>
              </form>
            </div>
          </div>
          <a class="header__profile-link" href="#">
            <div class="header__profile-container profile">
              <div class="profile__image-container">
                <picture>
                  <source srcset="./assets/images/profile-avatar.webp" type="image/webp" />
                  <img src="./assets/images/profile-avatar.png" alt="Аватарка профиля" />
                </picture>
              </div>
              <div class="profile__descr">
                <h3 class="profile__name">Мортиджан</h3>
                <p class="profile__scores">300 баллов</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </header>
    <div class="app__container container">
      <aside class="aside">
        <div class="aside__wrapper">
          <nav class="aside__nav">
            <ul class="aside__list list">
              <li class="list__item"><a class="list__link" href="#">Оргсхема</a></li>
              <li class="list__item"><a class="list__link" href="#">Kolesa Team</a></li>
              <li class="list__item">
                <a class="list__link list__link--active" href="#">Kolesa Shop</a>
              </li>
              <li class="list__item"><a class="list__link" href="#">Картина компании</a></li>
              <li class="list__item"><a class="list__link" href="#">Новости</a></li>
              <li class="list__item"><a class="list__link" href="#">Education</a></li>
              <li class="list__item"><a class="list__link" href="#">Guidelines</a></li>
              <li class="list__item"><a class="list__link" href="#">Библиотека</a></li>
              <li class="list__item"><a class="list__link" href="#">FAQ</a></li>
            </ul>
          </nav>
        </div>
      </aside>
      <main class="main">
        <div class="main__banner-container">
          <picture>
            <source srcset="./assets/images/banner.webp" type="image/webp" />
            <img src="./assets/images/banner.png" alt="" />
          </picture>
        </div>
        <div class="main__buttons buttons">
          <button class="buttons__get-scores" type="button">
            <picture>
              <source srcset="./assets/images/plus-icon.webp" type="image/webp" />
              <img src="./assets/images/plus-icon.png" alt="" />
            </picture>
            Получить баллы
          </button>
          <button class="buttons__how-to" type="button">
            <picture>
              <source srcset="./assets/images/question-icon.webp" type="image/webp" />
              <img src="./assets/images/question-icon.png" alt="" />
            </picture>
            Как получить баллы
          </button>
          <button class="buttons__gift" type="button">
            <picture>
              <source srcset="./assets/images/gift-icon.webp" type="image/webp" />
              <img src="./assets/images/gift-icon.png" alt="" />
            </picture>
            Подарить баллы
          </button>
        </div>
        <div class="main__tabs tabs">
          <div class="tabs__nav">
            <button
              class="tabs__nav-btn tabs__nav-btn--active"
              type="button"
              data-category="allItems"
            >
              Все товары
            </button>
            <button class="tabs__nav-btn" type="button" data-category="clothes">Одежда</button>
            <button class="tabs__nav-btn" type="button" data-category="accessories">
              Аксессуары
            </button>
          </div>
        </div>
        <div class="main__grid grid"></div>
      </main>
    </div>
    <footer class="footer">
      <div class="footer__wrapper">
        <div class="footer__container">
          <div class="footer__links">
            <p>&copy; Kolesa Group</p>
            <div class="footer__social-media">
              <a class="footer__social-media-link" href="#">
                <img src="./assets/images/instagram-icon.svg" alt="Иконка Инстаграма" />
              </a>
              <a class="footer__social-media-link" href="#">
                <img src="./assets/images/youtube-icon.svg" alt="Иконка YouTube" />
              </a>
              <a class="footer__social-media-link" href="#">
                <img src="./assets/images/vk-icon.svg" alt="Иконка ВКонтакте" />
              </a>
            </div>
          </div>
          <div class="footer__action">
            <div class="footer__action-text-container">
              <p class="footer__action-text">Есть идеи что улучшить?</p>
              <p class="footer__action-text">Не знаешь, с кем решить проблему?</p>
            </div>
            <button class="footer__btn" type="button">Написать</button>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import "./styles/variables";
@import "./styles/container";
@import "./styles/header";
@import "./styles/search";
@import "./styles/profile";
@import "./styles/aside";
@import "./styles/main";
@import "./styles/buttons";
@import "./styles/tabs";
@import "./styles/grid";
@import "./styles/card";
@import "./styles/modal-window";
@import "./styles/footer";

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
  font-family: "Open Sans", sans-serif;
}

a {
  text-decoration: none;
}

button {
  font-family: "Open Sans", sans-serif;
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
