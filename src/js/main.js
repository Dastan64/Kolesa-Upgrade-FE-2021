import '../components/style.scss';

const modalWindowCloseBtn = document.querySelector('.modal-window__close-btn');
const sizesContainer = document.querySelector('.info__size-options');
const modalWindowOverlay = document.querySelector('.overlay');
const colorsContainer = document.querySelector('.colors');
const listLinks = document.querySelectorAll('.list__link');
const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const grid = document.querySelector('.main__grid');

colorsContainer.addEventListener('click', (e) => {
    if (!e.target.closest('.colors__option').classList.contains('.colors__option_active')) {
        document.querySelectorAll('.colors__option').forEach((item) => {
            item.classList.remove('colors__option_active');
        });
        e.target.closest('.colors__option').classList.add('colors__option_active');
    }
});

modalWindowCloseBtn.addEventListener('click', () => {
    modalWindowOverlay.classList.add('overlay_hidden');
});

sizesContainer.addEventListener('click', (e) => {
    if (!e.target.closest('.sizes__option').classList.contains('sizes__option_active')) {
        document.querySelectorAll('.sizes__option').forEach(item => item.classList.remove('sizes__option_active'));
        e.target.closest('.sizes__option').classList.add('sizes__option_active');
    }
});

Array.from(listLinks).forEach(item => item.addEventListener('click', () => {
    if (!item.classList.contains('list__link_active')) {
        Array.from(listLinks).forEach(link => link.classList.remove('list__link_active'));
        item.classList.add('list__link_active');
    }
}));

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

const clothes = [
    {
        src:     '/src/assets/images/t-shirt-card.png',
        webpSrc: '/src/assets/images/t-shirt-card.webp',
        isNew:   true,
        status:  'New',
        type:    'Футболка',
        name:    '"Эволюционируй или умри"',
        scores:  '220 баллов',
        sizes:   'S/M/L',
    },
    {
        src:     '/src/assets/images/t-shirt.png',
        webpSrc: '/src/assets/images/t-shirt.webp',
        isNew:   true,
        status:  'New',
        type:    'Свитшот',
        name:    '"По заветам бабушки"',
        scores:  '230 баллов',
        sizes:   'M/L',
    },
    {
        src:     '/src/assets/images/belt.png',
        webpSrc: '/src/assets/images/belt.webp',
        status:  '',
        type:    'Ремень',
        name:    '',
        scores:  '80 баллов',
        sizes:   'XS/XL',
    },
    {
        src:     '/src/assets/images/cap.png',
        webpSrc: '/src/assets/images/cap.webp',
        status:  '',
        type:    'Кепка',
        name:    '',
        scores:  '85 баллов',
        sizes:   'L/XL',
    },
    {
        src:     '/src/assets/images/handkerchief.png',
        webpSrc: '/src/assets/images/handkerchief.webp',
        status:  '',
        type:    'Карманный платок',
        name:    '',
        scores:  '50 баллов',
        sizes:   '45x45 см',
    },
    {
        src:     '/src/assets/images/hat.png',
        webpSrc: '/src/assets/images/hat.webp',
        status:  '',
        type:    'Шапочка',
        name:    '',
        scores:  '100 баллов',
        sizes:   'XS/M',
    },
    {
        src:     '/src/assets/images/mask.png',
        webpSrc: '/src/assets/images/mask.webp',
        status:  '',
        type:    'Маска',
        name:    '',
        scores:  '40 баллов',
        sizes:   'XS',
    },
    {
        src:     '/src/assets/images/polo.png',
        webpSrc: '/src/assets/images/polo.webp',
        status:  '',
        type:    'Поло',
        name:    '',
        scores:  '240 баллов',
        sizes:   'S/M/L/XL',
    },
    {
        src:     '/src/assets/images/socks.png',
        webpSrc: '/src/assets/images/socks.webp',
        status:  '',
        type:    'Носки',
        name:    '',
        scores:  '40 баллов',
        sizes:   'S',
    },
];

const accessories = [
    {
        src:     '/src/assets/images/glasses.png',
        webpSrc: '/src/assets/images/glasses.webp',
        isNew:   true,
        status:  'New',
        type:    'Очки',
        name:    '"Авиатор"',
        scores:  '120 баллов',
        sizes:   '',
    },
    {
        src:     '/src/assets/images/hanger.png',
        webpSrc: '/src/assets/images/hanger.webp',
        isNew:   true,
        status:  'New',
        type:    'Вешалка-плечики',
        name:    '',
        scores:  '90 баллов',
        sizes:   '',
    },
    {
        src:     '/src/assets/images/pen.png',
        webpSrc: '/src/assets/images/pen.webp',
        status:  '',
        type:    'Ручка',
        name:    '',
        scores:  '40 баллов',
        sizes:   '',
    },
    {
        src:     '/src/assets/images/phone-handler.png',
        webpSrc: '/src/assets/images/phone-handler.webp',
        status:  '',
        type:    'Поп-сокет',
        name:    '',
        scores:  '110 баллов',
        sizes:   '',
    },
    {
        src:     '/src/assets/images/powerbank.png',
        webpSrc: '/src/assets/images/powerbank.webp',
        status:  '',
        type:    'Powerbank',
        name:    '',
        scores:  '320 баллов',
        sizes:   '',
    },
    {
        src:     '/src/assets/images/usb.png',
        webpSrc: '/src/assets/images/usb.webp',
        status:  '',
        type:    'Флешка',
        name:    '',
        scores:  '180 баллов',
        sizes:   '',
    },
    {
        src:     '/src/assets/images/umbrella.png',
        webpSrc: '/src/assets/images/umbrella.webp',
        status:  '',
        type:    'Зонт',
        name:    '',
        scores:  '140 баллов',
        sizes:   '',
    },
    {
        src:     '/src/assets/images/cable.png',
        webpSrc: '/src/assets/images/cable.webp',
        status:  '',
        type:    'Кабель быстрой зарядки',
        name:    '',
        scores:  '180 баллов',
        sizes:   '',
    },
    {
        src:     '/src/assets/images/pencilcase.png',
        webpSrc: '/src/assets/images/pencilcase.webp',
        status:  '',
        type:    'Пенал',
        name:    '',
        scores:  '110 баллов',
        sizes:   '',
    },
];

const allItems = [...clothes, ...accessories];

const allItemsSorted = allItems.sort(item => (item.isNew !== true ? 1 : -1));

function generate(category) {
    if (category.length > 0) {
        category.forEach((item) => {
            const gridItem = document.createElement('div');
            const {
                webpSrc, src, status, scores, type, name, sizes,
            } = item;

            gridItem.setAttribute('class', 'grid__item card');
            gridItem.innerHTML = `
        <div class="card__wrapper">
            <div class="card__image-container">
                <picture>
                    <source srcset=${webpSrc} type="image/webp"><img
                        src=${src} alt="Изображение футболки">
                </picture>
                <div class="card__thumb">
                    <p>${status}</p>
                </div>

            </div>
            <div class="card__info">
                <h3 class="card__scores">${scores}</h3>
                <p class="card__name">${type} ${name}</p>
                <p class="card__sizes">${sizes !== '' ? 'Размеры' : ''} ${sizes}</p>
                <button class="card__btn" type="button" title="Заказать">Заказать</button>
            </div>
        </div>`;

            grid.append(gridItem);
        });
    }
}
document.querySelector('.tabs').addEventListener('click', (e) => {
    switch (e.target.dataset.tab) {
        case 'clothes':
            grid.innerHTML = '';
            generate(clothes);
            break;
        case 'accessories':
            grid.innerHTML = '';
            generate(accessories);
            break;
        default:
            grid.innerHTML = '';
            generate(allItemsSorted);
            break;
    }
});

if (tabsBtn.length > 0) {
    tabsBtn.forEach(onTabClick);
    document.querySelector('.tabs__nav-btn').click();
}
