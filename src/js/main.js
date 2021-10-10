import '../components/style.scss';

const listLinks = document.querySelectorAll('.list__link');
const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const grid = document.querySelector('.main__grid');

Array.from(listLinks).forEach(item => item.addEventListener('click', () => {
    if (!item.classList.contains('list__link_active')) {
        Array.from(listLinks).forEach(link => link.classList.remove('list__link_active'));
        item.classList.add('list__link_active');
    }
}));

/* Домашнее задание №5 */

const clothes = [
    {
        src:              '/src/assets/images/t-shirt-card.png',
        webpSrc:          '/src/assets/images/t-shirt-card.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',
        id:               1,
        isNew:            true,
        type:             'Футболка',
        name:             '"Эволюционируй или умри"',
        description:      'Брендированная толстовка от Qazaq Republic. Материал:Хлопок 80%, Вискоза 20%',
        scores:           '220 баллов',
        sizes:            ['S', 'XS', 'M'],
        colors:           [
            {
                name:  'Синий',
                value: '#00458a',
                id:    'blue',
            },
            {
                name:  'Бежевый',
                value: '#efe8d8',
                id:    'beige',
            },
            {
                name:  'Серый',
                value: '#d4d4da',
                id:    'grey',
            },
        ],
    },
    {
        src:              '/src/assets/images/t-shirt.png',
        webpSrc:          '/src/assets/images/t-shirt.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',

        id:          2,
        isNew:       true,
        type:        'Свитшот',
        name:        '"По заветам бабушки"',
        description: 'Невероятно тёплый свитшот, который поможет согреться в зимние вечера. Материал:Хлопок 100%',

        scores: '230 баллов',
        sizes:  ['M', 'L'],
        colors: [
            {
                name:  'Хаки',
                value: '#F0E68C',
                id:    'khaki',
            },
            {
                name:  'Красный',
                value: '#ff0000',
                id:    'red',
            },
            {
                name:  'Зелёный',
                value: '#388828',
                id:    'green',
            },
        ],
    },
    {
        src:              '/src/assets/images/belt.png',
        webpSrc:          '/src/assets/images/belt.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',

        id:          3,
        isNew:       false,
        type:        'Ремень',
        name:        '',
        description: 'Качественный ремень от бренда Qazaq Republic',

        scores: '80 баллов',
        sizes:  ['XS', 'XL'],
        colors: [
            {
                name:  'Чёрный',
                value: '#000000',
                id:    'black',
            },
            {
                name:  'Коричневый',
                value: '#46332e',
                id:    'brown',
            },
        ],
    },
    {
        src:              '/src/assets/images/cap.png',
        webpSrc:          '/src/assets/images/cap.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',

        id:          4,
        isNew:       false,
        type:        'Кепка',
        name:        '',
        description: 'Кепка от Kolesa Group, полностью изготовленная из хлопка',

        scores: '85 баллов',
        sizes:  ['L', 'XL'],
        colors: [
            {
                name:  'Зелёный',
                value: '#2b7500',
                id:    'green',
            },
            {
                name:  'Синий',
                value: '#00458a',
                id:    'blue',
            },
            {
                name:  'Красный',
                value: '#ff0000',
                id:    'green',
            },
        ],
    },
    {
        src:              '/src/assets/images/handkerchief.png',
        webpSrc:          '/src/assets/images/handkerchief.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',

        id:          5,
        isNew:       false,
        type:        'Карманный платок',
        name:        '',
        description: 'Элегантный платок. Материал: хлопок',

        scores: '50 баллов',
        sizes:  ['45x45 см'],
    },
    {
        src:              '/src/assets/images/hat.png',
        webpSrc:          '/src/assets/images/hat.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',

        id:    6,
        isNew: false,
        type:  'Шапочка',
        name:  '',

        scores: '100 баллов',
        sizes:  ['XS', 'M'],
        colors: [
            {
                name:  'Чёрный',
                value: '#000',
                id:    'black',
            },
            {
                name:  'Красный',
                value: '#ff3300',
                id:    'red',
            },
        ],
    },
    {
        src:              '/src/assets/images/mask.png',
        webpSrc:          '/src/assets/images/mask.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',

        id:          7,
        isNew:       false,
        type:        'Маска',
        name:        '',
        description: 'Маска, которая даёт Вам +10 к социальной ответственности, а ещё согреет область лица зимой',
        scores:      '40 баллов',
        sizes:       ['XS'],
        colors:      [
            {
                name:  'Чёрный',
                value: '#000000',
                id:    'black',
            },
            {
                name:  'Бежевый',
                value: '#efe8d8',
                id:    'beige',
            },
        ],
    },
    {
        src:              '/src/assets/images/polo.png',
        webpSrc:          '/src/assets/images/polo.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',

        id:          8,
        isNew:       false,
        type:        'Поло',
        name:        '',
        description: "Поло, не уступающее по качеству бренду Marc O'Polo",
        scores:      '240 баллов',
        sizes:       ['S', 'M', 'L', 'XL'],
        colors:      [
            {
                name:  'Белый',
                value: '#fff',
                id:    'white',
            },
            {
                name:  'Лаймовый',
                value: '#00ff00',
                id:    'lime',
            },
        ],
    },
    {
        src:              '/src/assets/images/socks.png',
        webpSrc:          '/src/assets/images/socks.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',

        id:          9,
        isNew:       false,
        type:        'Носки',
        name:        '',
        description: 'Тёплые носочки, сделанные из 100%-ного хлопка',

        scores: '40 баллов',
        sizes:  ['S'],
        colors: [
            {
                name:  'Серый',
                value: '#666B80',
                id:    'grey',
            },
        ],
    },
];

const accessories = [
    {
        src:              '/src/assets/images/glasses.png',
        webpSrc:          '/src/assets/images/glasses.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',

        isNew:       true,
        id:          10,
        type:        'Очки',
        name:        '"Авиатор"',
        description: 'Очки в стиле "Авиатор" прибавят вам +30 к харизме.',
        scores:      '120 баллов',
    },
    {
        src:              '/src/assets/images/hanger.png',
        webpSrc:          '/src/assets/images/hanger.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',

        isNew:  true,
        id:     11,
        type:   'Вешалка-плечики',
        name:   '',
        scores: '90 баллов',
    },
    {
        src:              '/src/assets/images/pen.png',
        webpSrc:          '/src/assets/images/pen.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',

        id:          12,
        isNew:       false,
        type:        'Ручка',
        name:        '',
        description: 'Шариковая ручка, которая не измажет бумагу',
        scores:      '40 баллов',
    },
    {
        src:              '/src/assets/images/phone-handler.png',
        webpSrc:          '/src/assets/images/phone-handler.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',

        id:          13,
        isNew:       false,
        type:        'Поп-сокет',
        name:        '',
        description: 'Надоело держать телефон в машине? Купи этот поп-сокет и облегчи себе жизнь!',
        scores:      '110 баллов',
    },
    {
        src:              '/src/assets/images/powerbank.png',
        webpSrc:          '/src/assets/images/powerbank.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',

        id:          14,
        isNew:       false,
        type:        'Powerbank',
        name:        '',
        description: 'Мощный Powerbank, который спасёт тебя в любой ситуации',
        scores:      '320 баллов',
    },
    {
        src:              '/src/assets/images/usb.png',
        webpSrc:          '/src/assets/images/usb.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',

        id:          15,
        isNew:       false,
        type:        'Флешка',
        name:        '',
        description: 'Вместительная флешка объёмом 32ГБ, на которую ты можешь записать всё, что душе угодно',
        scores:      '180 баллов',
    },
    {
        src:              '/src/assets/images/umbrella.png',
        webpSrc:          '/src/assets/images/umbrella.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',

        id:          16,
        isNew:       false,
        type:        'Зонт',
        name:        '',
        description: 'Широкий зонт не даст тебе промокнуть',

        scores: '140 баллов',
    },
    {
        src:              '/src/assets/images/cable.png',
        webpSrc:          '/src/assets/images/cable.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',

        id:     17,
        isNew:  false,
        type:   'Кабель быстрой зарядки',
        name:   '',
        scores: '180 баллов',
    },
    {
        src:              '/src/assets/images/pencilcase.png',
        webpSrc:          '/src/assets/images/pencilcase.webp',
        placeholderImage: '/src/assets/images/image-placeholder.jpg',

        id:          18,
        isNew:       false,
        type:        'Пенал',
        name:        '',
        description: 'Удобный пенал для всех твоих принадлежностей',
        scores:      '110 баллов',
    },
];

const allItems = [...clothes, ...accessories];

const allItemsSorted = allItems.sort(item => (item.isNew !== true ? 1 : -1));

function sizesMarkup(size) {
    return `

        <div class="sizes__option">
                <p>${size}</p>
            </div>`;
}

const colorsMarkup = color => `
    <div class="colors__option">

    <label class="colors__radio-label" for="${color.id}"> <input
            class="colors__radio" type="radio" name="${color.name} цвет"
            id="${color.id}"><span style="background-color: ${color.value}" class="box"></span>${color.name}</label>
</div>
    `;

function generateModalWindow(item) {
    if (document.querySelector('.overlay')) {
        document.querySelector('.overlay').remove();
    }

    const overlayDiv = document.createElement('div');

    overlayDiv.setAttribute('class', 'overlay');
    overlayDiv.innerHTML = `
    <div class="modal-window">
    <div class="modal-window__container">
        <div class="modal-window__images">
            <div class="modal-window__main-image-container">
                ${item.src ? `<picture>
                    <source srcset=${item.webpSrc} type="image/webp"><img
                        src=${item.src} alt="Изображение футболки" width="330px"
                        height="330px">
                </picture>` : `<img src=${item.placeholderImage} alt="Нет изображения" width="330px" height="330px">`}
            </div>
        </div>
        <div class="modal-window__info info">
            ${item.name ? `<h3 class="info__heading">${item.name}</h3>` : `<h3 class="info__heading">${item.type}</h3>`}
            ${item.scores ? `<p class="info__scores">${item.scores}</p>`
        : '<p class="info__scores">Цена неизвестна</p>'}
            <button class="info__btn" type="button">Заказать</button>

            <div class="info__balance">
                <div class="info__balance-text">
                    <p class="info__balance-heading">Твой баланс</p>
                    <p class="info__balance-number">3 945 баллов</p>
                </div>
                <div class="info__balance-icon-container">
                    <picture>
                        <source srcset="/src/assets/images/bags.webp" type="image/webp"><img
                            src="/src/assets/images/bags.png" alt="Картинка сумок">
                    </picture>
                </div>
            </div>
            ${item.colors ? `<div class="info__colors">
                <p class="info__colors-heading">Цвета:</p>
                    <div class="info__colors-options colors">
                        ${item.colors.map(color => colorsMarkup(color)).join('')}
                    </div>
                </div>` : ''}

            ${item.sizes ? ` <div class="info__sizes">
            <p class="info__size-heading">Размеры:</p>
                <div class="info__size-options sizes">
                ${item.sizes.map(size => sizesMarkup(size)).join('')}
                </div>
            </div>` : ''}


            ${item.description ? `                        <div class="info__details">
            <strong>
                <p class="info__details-heading">Детали:</p>
            </strong>
            <p class="info__details-text">${item.description}</p>
        </div>` : ''}

            <div class="info__how-to">
            <strong>
                <p class="info__how-to-heading">Как выбрать размер?</p>
            </strong>
            <p class="info__how-to-answer">Написать дяде Рику для уточнения.</p>
        </div>
        </div>



        </div>

        <button class="modal-window__close-btn">
            <picture>
                <source srcset="/src/assets/images/close-icon.svg" type="image/webp"><img
                    src="/src/assets/images/close-icon.svg" />
            </picture>
        </button>
        <div class="modal-window__bottom-balance bottom-balance">
        <div class="bottom-balance__container">
            <p class="bottom-balance__caption">Твои баллы:</p>
            <strong>
                <p class="bottom-balance__number">450 баллов</p>
            </strong>
        </div>
        <button class="bottom-balance__btn" type="button">Заказать</button>
    </div>
    </div>

</div>
    `;

    document.getElementById('app').append(overlayDiv);

    const modalWindowCloseBtn = overlayDiv.querySelector('.modal-window__close-btn');
    const modalWindowOverlay = document.querySelector('.overlay');

    modalWindowCloseBtn.addEventListener('click', () => {
        modalWindowOverlay.classList.add('overlay_hidden');
    });
}

function assignModalWindow(gridItem) {
    const cardBtn = gridItem.querySelector('.card__btn');

    cardBtn.addEventListener('click', function () {
        const specificItem = allItemsSorted.find(item => item.id === +this.dataset.id);

        generateModalWindow(specificItem);
    });
}

function generateCardFromCategory(category) {
    if (category.length > 0) {
        grid.innerHTML = '';
        category.forEach((item) => {
            const gridItem = document.createElement('div');
            const {
                src, webpSrc, placeholderImage, id, isNew, scores, type, name, sizes,
            } = item;

            gridItem.setAttribute('class', 'grid__item card');
            gridItem.innerHTML = `
        <div class="card__wrapper">
            <div class="card__image-container">
                ${src ? `<picture>
                    <source srcset=${webpSrc} type="image/webp"><img
                        src=${src} alt="Изображение футболки">
                </picture>` : `<img src=${placeholderImage} alt="Нет изображения">`}
                ${isNew ? `<div class="card__thumb">
                    <p>New</p>
                </div>` : ''}

            </div>

            <div class="card__info">
                ${scores ? `<h3 class="card__scores">${scores}</h3>` : '<h3 class="card__scores">Цена неизвестна</h3>'}
                <p class="card__name">${type} ${name}</p>
                ${sizes ? `<p class="card__sizes">Размеры: ${sizes.join(', ')}</p>` : ''}
                <button class="card__btn" type="button" title="Заказать" data-id=${id}>Заказать</button>
            </div>

        </div>`;

            grid.append(gridItem);
            assignModalWindow(gridItem);
        });
    }
}

function onTabClick(item) {
    item.addEventListener('click', () => {
        const currentBtn = item;

        if (!currentBtn.classList.contains('active')) {
            tabsBtn.forEach((tabBtn) => {
                tabBtn.classList.remove('tabs__nav-btn_active');
            });

            currentBtn.classList.add('tabs__nav-btn_active');
        }
    });
}

document.querySelector('.tabs').addEventListener('click', (e) => {
    switch (e.target.dataset.category) {
        case 'clothes':
            generateCardFromCategory(clothes);
            break;
        case 'accessories':
            generateCardFromCategory(accessories);
            break;
        default:
            generateCardFromCategory(allItemsSorted);
            break;
    }
});

if (tabsBtn.length > 0) {
    tabsBtn.forEach(onTabClick);
    document.querySelector('.tabs__nav-btn').click();
}
