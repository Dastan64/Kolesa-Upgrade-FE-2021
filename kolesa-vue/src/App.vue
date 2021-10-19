<template>
  <div id="app" class="app">
    <header class="header">
      <div class="header__wrapper">
        <div class="header__container">
          <div class="header__logo-search">
            <div class="header__logo-container">
              <a href="#">
                <picture>
                  <source
                    srcset="./assets/images/kolesa-logo.svg"
                    type="image/webp"
                  />
                  <img
                    src="./assets/images/kolesa-logo.svg"
                    alt="Логотип Kolesa"
                  />
                </picture>
              </a>
            </div>
            <div class="header__search search">
              <form class="search__form">
                <input
                  type="text"
                  class="search__input"
                  placeholder="Поиск"
                  required
                />
                <button type="submit" class="search__btn">
                  <img
                    src="./assets/images/search-icon.svg"
                    alt="Иконка поиска"
                  />
                </button>
              </form>
            </div>
          </div>
          <a class="header__profile-link" href="#">
            <div class="header__profile-container profile">
              <div class="profile__image-container">
                <picture>
                  <source
                    srcset="./assets/images/profile-avatar.webp"
                    type="image/webp"
                  />
                  <img
                    src="./assets/images/profile-avatar.png"
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
        </div>
      </div>
    </header>
    <div class="app__container container">
      <aside class="aside">
        <div class="aside__wrapper">
          <nav class="aside__nav">
            <ul class="aside__list list">
              <li class="list__item">
                <a class="list__link" href="#">Оргсхема</a>
              </li>
              <li class="list__item">
                <a class="list__link" href="#">Kolesa Team</a>
              </li>
              <li class="list__item">
                <a class="list__link list__link--active" href="#"
                  >Kolesa Shop</a
                >
              </li>
              <li class="list__item">
                <a class="list__link" href="#">Картина компании</a>
              </li>
              <li class="list__item">
                <a class="list__link" href="#">Новости</a>
              </li>
              <li class="list__item">
                <a class="list__link" href="#">Education</a>
              </li>
              <li class="list__item">
                <a class="list__link" href="#">Guidelines</a>
              </li>
              <li class="list__item">
                <a class="list__link" href="#">Библиотека</a>
              </li>
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
              <source
                srcset="./assets/images/plus-icon.webp"
                type="image/webp"
              />
              <img src="./assets/images/plus-icon.png" alt="" />
            </picture>
            Получить баллы
          </button>
          <button class="buttons__how-to" type="button">
            <picture>
              <source
                srcset="./assets/images/question-icon.webp"
                type="image/webp"
              />
              <img src="./assets/images/question-icon.png" alt="" />
            </picture>
            Как получить баллы
          </button>
          <button class="buttons__gift" type="button">
            <picture>
              <source
                srcset="./assets/images/gift-icon.webp"
                type="image/webp"
              />
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
            <button class="tabs__nav-btn" type="button" data-category="clothes">
              Одежда
            </button>
            <button
              class="tabs__nav-btn"
              type="button"
              data-category="accessories"
            >
              Аксессуары
            </button>
          </div>
        </div>
        <div class="main__grid grid">
          <div class="grid__item card" v-for="item in clothes" :key="item.id">
            <div class="card__wrapper">
              <div class="card__image-container">
                <img
                  :src="require(`@/assets/images/${item.tName}.png`)"
                  alt=""
                  :id="item.id"
                />
                <div class="card__thumb" v-if="item.isNew">
                  <p>New</p>
                </div>
              </div>
              <div class="card__info">
                <h3 class="card__scores" v-if="item.scores">
                  {{ item.scores }}
                </h3>
                <h3 class="card__scores" v-else>Цена неизвестна</h3>
                <p class="card__name">{{ item.type }} {{ item.name }}</p>
                <p class="card__sizes">Размеры: {{ item.sizes.join(', ') }}</p>
                <button
                  class="card__btn"
                  type="button"
                  title="Заказать"
                  :data-id="item.id"
                >
                  Заказать
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <footer class="footer">
      <div class="footer__wrapper">
        <div class="footer__container">
          <div class="footer__links">
            <p>&copy; Kolesa Group</p>
            <div class="footer__social-media">
              <a class="footer__social-media-link" href="#">
                <img
                  src="./assets/images/instagram-icon.svg"
                  alt="Иконка Инстаграма"
                />
              </a>
              <a class="footer__social-media-link" href="#">
                <img
                  src="./assets/images/youtube-icon.svg"
                  alt="Иконка YouTube"
                />
              </a>
              <a class="footer__social-media-link" href="#">
                <img src="./assets/images/vk-icon.svg" alt="Иконка ВКонтакте" />
              </a>
            </div>
          </div>
          <div class="footer__action">
            <div class="footer__action-text-container">
              <p class="footer__action-text">Есть идеи что улучшить?</p>
              <p class="footer__action-text">
                Не знаешь, с кем решить проблему?
              </p>
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
  data() {
    return {
      clothes: [
        {
          src: 't-shirt-card',
          tName: 't-shirt-card',
          webpSrc: '/src/assets/images/t-shirt-card.webp',
          placeholderImage: '/src/assets/images/image-placeholder.jpg',
          id: 1,
          isNew: true,
          type: 'Футболка',
          name: '"Эволюционируй или умри"',
          description:
            'Брендированная толстовка от Qazaq Republic. Материал:Хлопок 80%, Вискоза 20%',
          scores: '220 баллов',
          sizes: ['S', 'XS', 'M'],
          colors: [
            {
              name: 'Синий',
              value: '#00458a',
              id: 'blue',
            },
            {
              name: 'Бежевый',
              value: '#efe8d8',
              id: 'beige',
            },
            {
              name: 'Серый',
              value: '#d4d4da',
              id: 'grey',
            },
          ],
        },
        {
          src: 't-shirt',
          tName: 't-shirt',
          webpSrc: '/src/assets/images/t-shirt.webp',
          placeholderImage: '/src/assets/images/image-placeholder.jpg',

          id: 2,
          isNew: true,
          type: 'Свитшот',
          name: '"По заветам бабушки"',
          description:
            'Невероятно тёплый свитшот, который поможет согреться в зимние вечера. Материал:Хлопок 100%',

          scores: '230 баллов',
          sizes: ['M', 'L'],
          colors: [
            {
              name: 'Хаки',
              value: '#F0E68C',
              id: 'khaki',
            },
            {
              name: 'Красный',
              value: '#ff0000',
              id: 'red',
            },
            {
              name: 'Зелёный',
              value: '#388828',
              id: 'green',
            },
          ],
        },
        {
          src: './assets/images/belt.png',
          tName: 'belt',
          webpSrc: '/src/assets/images/belt.webp',
          placeholderImage: '/src/assets/images/image-placeholder.jpg',

          id: 3,
          isNew: false,
          type: 'Ремень',
          name: '',
          description: 'Качественный ремень от бренда Qazaq Republic',

          scores: '80 баллов',
          sizes: ['XS', 'XL'],
          colors: [
            {
              name: 'Чёрный',
              value: '#000000',
              id: 'black',
            },
            {
              name: 'Коричневый',
              value: '#46332e',
              id: 'brown',
            },
          ],
        },
        {
          src: './assets/images/cap.png',
          tName: 'cap',
          webpSrc: '/src/assets/images/cap.webp',
          placeholderImage: '/src/assets/images/image-placeholder.jpg',

          id: 4,
          isNew: false,
          type: 'Кепка',
          name: '',
          description:
            'Кепка от Kolesa Group, полностью изготовленная из хлопка',

          scores: '85 баллов',
          sizes: ['L', 'XL'],
          colors: [
            {
              name: 'Зелёный',
              value: '#2b7500',
              id: 'green',
            },
            {
              name: 'Синий',
              value: '#00458a',
              id: 'blue',
            },
            {
              name: 'Красный',
              value: '#ff0000',
              id: 'green',
            },
          ],
        },
        {
          src: './assets/images/handkerchief.png',
          tName: 'handkerchief',
          webpSrc: '/src/assets/images/handkerchief.webp',
          placeholderImage: '/src/assets/images/image-placeholder.jpg',

          id: 5,
          isNew: false,
          type: 'Карманный платок',
          name: '',
          description: 'Элегантный платок. Материал: хлопок',

          scores: '50 баллов',
          sizes: ['45x45 см'],
        },
        {
          src: './assets/images/hat.png',
          tName: 'hat',
          webpSrc: '/src/assets/images/hat.webp',
          placeholderImage: '/src/assets/images/image-placeholder.jpg',

          id: 6,
          isNew: false,
          type: 'Шапочка',
          name: '',

          scores: '100 баллов',
          sizes: ['XS', 'M'],
          colors: [
            {
              name: 'Чёрный',
              value: '#000',
              id: 'black',
            },
            {
              name: 'Красный',
              value: '#ff3300',
              id: 'red',
            },
          ],
        },
        {
          src: './assets/images/mask.png',
          tName: 'mask',
          webpSrc: '/src/assets/images/mask.webp',
          placeholderImage: '/src/assets/images/image-placeholder.jpg',

          id: 7,
          isNew: false,
          type: 'Маска',
          name: '',
          description:
            'Маска, которая даёт Вам +10 к социальной ответственности, а ещё согреет область лица зимой',
          scores: '45 баллов',
          sizes: ['XS'],
          colors: [
            {
              name: 'Чёрный',
              value: '#000000',
              id: 'black',
            },
            {
              name: 'Бежевый',
              value: '#efe8d8',
              id: 'beige',
            },
          ],
        },
        {
          src: './assets/images/polo.png',
          tName: 'polo',
          webpSrc: '/src/assets/images/polo.webp',
          placeholderImage: '/src/assets/images/image-placeholder.jpg',

          id: 8,
          isNew: false,
          type: 'Поло',
          name: '',
          description: 'Поло, не уступающее по качеству бренду Marc O"Polo',
          scores: '240 баллов',
          sizes: ['S', 'M', 'L', 'XL'],
          colors: [
            {
              name: 'Белый',
              value: '#fff',
              id: 'white',
            },
            {
              name: 'Лаймовый',
              value: '#00ff00',
              id: 'lime',
            },
          ],
        },
        {
          src: './assets/images/socks.png',
          tName: 'socks',
          webpSrc: '/src/assets/images/socks.webp',
          placeholderImage: '/src/assets/images/image-placeholder.jpg',

          id: 9,
          isNew: false,
          type: 'Носки',
          name: '',
          description: 'Тёплые носочки, сделанные из 100%-ного хлопка',

          scores: '35 баллов',
          sizes: ['S'],
          colors: [
            {
              name: 'Серый',
              value: '#666B80',
              id: 'grey',
            },
          ],
        },
      ],
      accessories: [
        {
          src: './assets/images/glasses.png',
          webpSrc: '/src/assets/images/glasses.webp',
          placeholderImage: '/src/assets/images/image-placeholder.jpg',

          isNew: true,
          id: 10,
          type: 'Очки',
          name: '"Авиатор"',
          description: 'Очки в стиле "Авиатор" прибавят вам +30 к харизме.',
          scores: '120 баллов',
        },
        {
          src: './assets/images/hanger.png',
          webpSrc: '/src/assets/images/hanger.webp',
          placeholderImage: '/src/assets/images/image-placeholder.jpg',

          isNew: true,
          id: 11,
          type: 'Вешалка-плечики',
          name: '',
          scores: '90 баллов',
        },
        {
          src: './assets/images/pen.png',
          webpSrc: '/src/assets/images/pen.webp',
          placeholderImage: '/src/assets/images/image-placeholder.jpg',

          id: 12,
          isNew: false,
          type: 'Ручка',
          name: '',
          description: 'Шариковая ручка, которая не измажет бумагу',
          scores: '40 баллов',
        },
        {
          src: './assets/images/phone-handler.png',
          webpSrc: '/src/assets/images/phone-handler.webp',
          placeholderImage: '/src/assets/images/image-placeholder.jpg',

          id: 13,
          isNew: false,
          type: 'Поп-сокет',
          name: '',
          description:
            'Надоело держать телефон в машине? Купи этот поп-сокет и облегчи себе жизнь!',
          scores: '160 баллов',
        },
        {
          src: './assets/images/powerbank.png',
          webpSrc: '/src/assets/images/powerbank.webp',
          placeholderImage: '/src/assets/images/image-placeholder.jpg',

          id: 14,
          isNew: false,
          type: 'Powerbank',
          name: '',
          description: 'Мощный Powerbank, который спасёт тебя в любой ситуации',
          scores: '320 баллов',
        },
        {
          src: './assets/images/usb.png',
          webpSrc: '/src/assets/images/usb.webp',
          placeholderImage: '/src/assets/images/image-placeholder.jpg',

          id: 15,
          isNew: false,
          type: 'Флешка',
          name: '',
          description:
            'Вместительная флешка объёмом 32ГБ, на которую ты можешь записать всё, что душе угодно',
          scores: '180 баллов',
        },
        {
          src: './assets/images/umbrella.png',
          webpSrc: '/src/assets/images/umbrella.webp',
          placeholderImage: '/src/assets/images/image-placeholder.jpg',

          id: 16,
          isNew: false,
          type: 'Зонт',
          name: '',
          description: 'Широкий зонт не даст тебе промокнуть',

          scores: '140 баллов',
        },
        {
          src: './assets/images/cable.png',
          webpSrc: '/src/assets/images/cable.webp',
          placeholderImage: '/src/assets/images/image-placeholder.jpg',

          id: 17,
          isNew: false,
          type: 'Кабель быстрой зарядки',
          name: '',
          scores: '185 баллов',
        },
        {
          src: './assets/images/pencilcase.png',
          webpSrc: '/src/assets/images/pencilcase.webp',
          placeholderImage: '/src/assets/images/image-placeholder.jpg',

          id: 18,
          isNew: false,
          type: 'Пенал',
          name: '',
          description: 'Удобный пенал для всех твоих принадлежностей',
          scores: '110 баллов',
        },
      ],
    };
  },
  computed: {
    allItems() {
      return [...this.clothes, ...this.accessories];
    },
  },
};
</script>

<style lang="scss">
@import './styles/variables';
@import './styles/container';
@import './styles/header';
@import './styles/search';
@import './styles/profile';
@import './styles/aside';
@import './styles/main';
@import './styles/buttons';
@import './styles/tabs';
@import './styles/grid';
@import './styles/card';
@import './styles/modal-window';
@import './styles/footer';

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
