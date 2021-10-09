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

if (tabsBtn.length > 0) {
    tabsBtn.forEach(onTabClick);
    document.querySelector('.tabs__nav-btn').click();
}

const cards = [
    {
        src:     '/src/assets/images/t-shirt-card.png',
        webpSrc: '/src/assets/images/t-shirt-card.webp',
        status:  'New',
        type:    'Футболка',
        name:    'Эволюционируй или умри',
        scores:  '220 баллов',
        sizes:   'S/M/L',
    },
    {
        src:     '/src/assets/images/t-shirt-card.png',
        webpSrc: '/src/assets/images/t-shirt-card.webp',
        status:  'New',
        type:    'Футболка',
        name:    'Эволюционируй или умри',
        scores:  '220 баллов',
        sizes:   'S/M/L',
    },
    {
        src:     '/src/assets/images/t-shirt-card.png',
        webpSrc: '/src/assets/images/t-shirt-card.webp',
        status:  'New',
        type:    'Футболка',
        name:    'Эволюционируй или умри',
        scores:  '220 баллов',
        sizes:   'S/M/L',
    },
    {
        src:     '/src/assets/images/t-shirt-card.png',
        webpSrc: '/src/assets/images/t-shirt-card.webp',
        status:  'New',
        type:    'Футболка',
        name:    '',
        scores:  '220 баллов',
        sizes:   'S/M/L',
    },
    {
        src:     '/src/assets/images/t-shirt-card.png',
        webpSrc: '/src/assets/images/t-shirt-card.webp',
        status:  'New',
        type:    'Футболка',
        name:    '',
        scores:  '220 баллов',
        sizes:   'S/M/L',
    },
    {
        src:     '/src/assets/images/t-shirt-card.png',
        webpSrc: '/src/assets/images/t-shirt-card.webp',
        status:  'New',
        type:    'Футболка',
        name:    '',
        scores:  '220 баллов',
        sizes:   'S/M/L',
    },
    {
        src:     '/src/assets/images/t-shirt-card.png',
        webpSrc: '/src/assets/images/t-shirt-card.webp',
        status:  'New',
        type:    'Футболка',
        name:    '',
        scores:  '220 баллов',
        sizes:   'S/M/L',
    },
    {
        src:     '/src/assets/images/t-shirt-card.png',
        webpSrc: '/src/assets/images/t-shirt-card.webp',
        status:  'New',
        type:    'Футболка',
        name:    '',
        scores:  '220 баллов',
        sizes:   'S/M/L',
    },
    {
        src:     '/src/assets/images/t-shirt-card.png',
        webpSrc: '/src/assets/images/t-shirt-card.webp',
        status:  'New',
        type:    'Свитшот',
        name:    '',
        scores:  '220 баллов',
        sizes:   'S/M/L',
    },
];

if (cards.length > 0) {
    cards.forEach((item) => {
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
            <p class="card__sizes">Размеры ${sizes}</p>
            <button class="card__btn" type="button" title="Заказать">Заказать</button>
        </div>
    </div>`;

        grid.append(gridItem);
    });
}
