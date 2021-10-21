<template>
  <div class="app">
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
              <li
                class="list__item"
                v-for="(link, index) in navLinks"
                :key="index"
              >
                <a
                  class="list__link"
                  :class="{ 'list__link--active': selectedLink === link }"
                  href="#"
                  @click="selectedLink = link"
                  >{{ link }}</a
                >
              </li>
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
              v-for="(tab, index) in tabs"
              :key="index"
              class="tabs__nav-btn"
              :class="{ 'tabs__nav-btn--active': selectedTab === tab.slug }"
              @click="setActiveTab(tab)"
            >
              {{ tab.name }}
            </button>
          </div>
        </div>
        <div class="main__grid grid">
          <div
            class="grid__item card"
            v-for="item in filterCategories"
            :key="item.id"
          >
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
                <p class="card__sizes" v-if="item.sizes">
                  Размеры: {{ item.sizes.join(', ') }}
                </p>
                <button
                  class="card__btn"
                  type="button"
                  title="Заказать"
                  :data-id="item.id"
                  @click="toggleModalWindow"
                >
                  Заказать
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal" v-if="isModalOpen">
          <div class="modal__overlay" @click="toggleModalWindow"></div>
          <div class="modal__window modal-window">
            <div class="modal-window__container">
              <div class="modal-window__images">
                <div class="modal-window__main-image-container">
                  <picture>
                    <source
                      srcset="./assets/images/t-shirt.webp"
                      type="image/webp"
                    />
                    <img
                      src="./assets/images/t-shirt.png"
                      alt="Изображение футболки"
                      width="330px"
                      height="330px"
                    />
                  </picture>
                </div>
                <div class="modal-window__preview-images preview">
                  <div class="preview__image-container">
                    <picture>
                      <source
                        srcset="./assets/images/preview-1.webp"
                        type="image/webp"
                      />
                      <img
                        class="preview__image"
                        src="./assets/images/preview-1.jpg"
                        alt=""
                      />
                    </picture>
                  </div>
                  <div class="preview__image-container">
                    <picture>
                      <source
                        srcset="./assets/images/preview-2.webp"
                        type="image/webp"
                      />
                      <img
                        class="preview__image preview__image_active"
                        src="./assets/images/preview-2.jpg"
                        alt=""
                      />
                    </picture>
                  </div>
                  <div class="preview__image-container">
                    <picture>
                      <source
                        srcset="./assets/images/preview-3.webp"
                        type="image/webp"
                      />
                      <img
                        class="preview__image"
                        src="./assets/images/preview-3.jpg"
                        alt=""
                      />
                    </picture>
                  </div>
                </div>
              </div>
              <div class="modal-window__info info">
                <h3 class="info__heading">
                  Футболка "Эволюционируй или сдохни"
                </h3>
                <p class="info__scores">100 баллов</p>
                <button class="info__btn" type="button">Заказать</button>

                <div class="info__balance">
                  <div class="info__balance-text">
                    <p class="info__balance-heading">Твой баланс</p>
                    <p class="info__balance-number">3 945 баллов</p>
                  </div>
                  <div class="info__balance-icon-container">
                    <picture>
                      <source
                        srcset="./assets/images/bags.webp"
                        type="image/webp"
                      />
                      <img
                        src="./assets/images/bags.png"
                        alt="Картинка сумок"
                      />
                    </picture>
                  </div>
                </div>

                <div class="info__colors">
                  <p class="info__colors-heading">Цвета:</p>
                  <div class="info__colors-options colors">
                    <div class="colors__option">
                      <label class="colors__radio-label">
                        <input class="colors__radio" type="radio" /><span
                          style="background-color: #00458a"
                          class="box"
                        ></span
                        >Синий</label
                      >
                    </div>
                    <div class="colors__option">
                      <label class="colors__radio-label">
                        <input class="colors__radio" type="radio" /><span
                          style="background-color: #efe8d8"
                          class="box"
                        ></span
                        >Бежевый</label
                      >
                    </div>
                    <div class="colors__option">
                      <label class="colors__radio-label">
                        <input class="colors__radio" type="radio" /><span
                          style="background-color: #d4d4da"
                          class="box"
                        ></span
                        >Серый</label
                      >
                    </div>
                  </div>
                </div>

                <div class="info__sizes">
                  <p class="info__size-heading">Размер:</p>
                  <div class="info__size-options sizes">
                    <div class="sizes__option">
                      <p>S</p>
                    </div>
                    <div class="sizes__option">
                      <p>M</p>
                    </div>
                    <div class="sizes__option">
                      <p>L</p>
                    </div>
                  </div>
                </div>

                <div class="info__details">
                  <strong>
                    <p class="info__details-heading">Детали:</p>
                  </strong>
                  <p class="info__details-text">
                    Брендированная толстовка от Qazaq Republic. Материал: Хлопок
                    80%, Вискоза 20%
                  </p>
                </div>

                <div class="info__how-to">
                  <strong>
                    <p class="info__how-to-heading">Как выбрать размер?</p>
                  </strong>
                  <p class="info__how-to-answer">
                    Написать дяде Рику для уточнения.
                  </p>
                </div>
              </div>

              <button class="modal-window__close-btn" @click="closeModalWindow">
                <picture>
                  <source
                    srcset="./assets/images/close-icon.svg"
                    type="image/webp"
                  />
                  <img src="./assets/images/close-icon.svg" />
                </picture>
              </button>
            </div>
            <div class="modal-window__bottom-balance bottom-balance">
              <div class="bottom-balance__container">
                <p class="bottom-balance__caption">Твои баллы:</p>
                <strong>
                  <p class="bottom-balance__number">450 баллов</p>
                </strong>
              </div>
              <button class="bottom-balance__btn" type="button">
                Заказать
              </button>
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
          webpSrc: './assets/images/t-shirt-card.webp',
          placeholderImage: './assets/images/image-placeholder.jpg',
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
          webpSrc: './assets/images/t-shirt.webp',
          placeholderImage: './assets/images/image-placeholder.jpg',

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
          webpSrc: './assets/images/belt.webp',
          placeholderImage: './assets/images/image-placeholder.jpg',

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
          webpSrc: './assets/images/cap.webp',
          placeholderImage: './assets/images/image-placeholder.jpg',

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
          webpSrc: './assets/images/handkerchief.webp',
          placeholderImage: './assets/images/image-placeholder.jpg',

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
          webpSrc: './assets/images/hat.webp',
          placeholderImage: './assets/images/image-placeholder.jpg',

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
          webpSrc: './assets/images/mask.webp',
          placeholderImage: './assets/images/image-placeholder.jpg',

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
          webpSrc: './assets/images/polo.webp',
          placeholderImage: './assets/images/image-placeholder.jpg',

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
          webpSrc: './assets/images/socks.webp',
          placeholderImage: './assets/images/image-placeholder.jpg',

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
          tName: 'glasses',

          webpSrc: './assets/images/glasses.webp',
          placeholderImage: './assets/images/image-placeholder.jpg',

          isNew: true,
          id: 10,
          type: 'Очки',
          name: '"Авиатор"',
          description: 'Очки в стиле "Авиатор" прибавят вам +30 к харизме.',
          scores: '120 баллов',
        },
        {
          src: './assets/images/hanger.png',
          tName: 'hanger',

          webpSrc: './assets/images/hanger.webp',
          placeholderImage: './assets/images/image-placeholder.jpg',

          isNew: true,
          id: 11,
          type: 'Вешалка-плечики',
          name: '',
          scores: '90 баллов',
        },
        {
          src: './assets/images/pen.png',
          tName: 'pen',

          webpSrc: './assets/images/pen.webp',
          placeholderImage: './assets/images/image-placeholder.jpg',

          id: 12,
          isNew: false,
          type: 'Ручка',
          name: '',
          description: 'Шариковая ручка, которая не измажет бумагу',
          scores: '40 баллов',
        },
        {
          src: './assets/images/phone-handler.png',
          tName: 'phone-handler',
          webpSrc: './assets/images/phone-handler.webp',
          placeholderImage: './assets/images/image-placeholder.jpg',

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
          tName: 'powerbank',

          webpSrc: './assets/images/powerbank.webp',
          placeholderImage: './assets/images/image-placeholder.jpg',

          id: 14,
          isNew: false,
          type: 'Powerbank',
          name: '',
          description: 'Мощный Powerbank, который спасёт тебя в любой ситуации',
          scores: '320 баллов',
        },
        {
          src: './assets/images/usb.png',
          tName: 'usb',

          webpSrc: './assets/images/usb.webp',
          placeholderImage: './assets/images/image-placeholder.jpg',

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
          tName: 'umbrella',

          webpSrc: './assets/images/umbrella.webp',
          placeholderImage: './assets/images/image-placeholder.jpg',

          id: 16,
          isNew: false,
          type: 'Зонт',
          name: '',
          description: 'Широкий зонт не даст тебе промокнуть',

          scores: '140 баллов',
        },
        {
          src: './assets/images/cable.png',
          tName: 'cable',

          webpSrc: './assets/images/cable.webp',
          placeholderImage: './assets/images/image-placeholder.jpg',

          id: 17,
          isNew: false,
          type: 'Кабель быстрой зарядки',
          name: '',
          scores: '185 баллов',
        },
        {
          src: './assets/images/pencilcase.png',
          tName: 'pencilcase',

          webpSrc: './assets/images/pencilcase.webp',
          placeholderImage: './assets/images/image-placeholder.jpg',

          id: 18,
          isNew: false,
          type: 'Пенал',
          name: '',
          description: 'Удобный пенал для всех твоих принадлежностей',
          scores: '110 баллов',
        },
      ],
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
        'Оргсхема',
        'Kolesa Team',
        'Kolesa Shop',
        'Картина компании',
        'Новости',
        'Education',
        'Guidelines',
        'Библиотека',
        'FAQ',
      ],
      selectedTab: 'all',
      selectedLink: 'Kolesa Shop',
      isModalOpen: false,
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
        return this.allItems;
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
    setActiveTab(tab) {
      this.selectedTab = tab.slug;
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
