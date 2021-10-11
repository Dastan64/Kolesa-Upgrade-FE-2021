import '../components/style.scss';

import { clothes, accessories } from './goods';

const listLinks = document.querySelectorAll('.list__link');
const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const grid = document.querySelector('.main__grid');

Array.from(listLinks).forEach(item => item.addEventListener('click', () => {
    if (!item.classList.contains('list__link--active')) {
        Array.from(listLinks).forEach(link => link.classList.remove('list__link--active'));
        item.classList.add('list__link--active');
    }
}));

/* Домашнее задание №5 */

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

const nameAndType = (item) => {
    let heading;

    if (item.name !== '' && item.type === '') {
        heading = `<h3 class="info__heading">${item.name}</h3>`;
    } else if (item.name === '' && item.type) {
        heading = `<h3 class="info__heading">${item.type}</h3>`;
    } else if (item.name && item.type) {
        heading = `<h3 class="info__heading">${item.type} ${item.name}</h3>`;
    }
    return heading;
};

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
        ${nameAndType(item)}
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
            <img src="/src/assets/images/close-icon.svg" />
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
}

function assignModalWindow(gridItem) {
    const cardBtn = gridItem.querySelector('.card__btn');

    cardBtn.addEventListener('click', function () {
        const specificItem = allItemsSorted.find(item => item.id === +this.dataset.id);

        generateModalWindow(specificItem);
    });
}

function closeModalWindow(e) {
    if (e.target.parentNode.classList.contains('modal-window__close-btn')) {
        e.target.closest('.overlay').classList.add('overlay--hidden');
    }
}

document.getElementById('app').addEventListener('click', closeModalWindow);

function generateCardsFromCategory(category) {
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
                tabBtn.classList.remove('tabs__nav-btn--active');
            });

            currentBtn.classList.add('tabs__nav-btn--active');
        }
    });
}

document.querySelector('.tabs').addEventListener('click', (e) => {
    switch (e.target.dataset.category) {
        case 'clothes':
            generateCardsFromCategory(clothes);
            break;
        case 'accessories':
            generateCardsFromCategory(accessories);
            break;
        default:
            generateCardsFromCategory(allItemsSorted);
            break;
    }
});

if (tabsBtn.length > 0) {
    tabsBtn.forEach(onTabClick);
    document.querySelector('.tabs__nav-btn').click();
}
