const modalWindowCloseBtn = document.querySelector('.modal-window__close-btn');
const sizesContainer = document.querySelector('.info__size-options');
const modalWindowOverlay = document.querySelector('.overlay');
const colorsContainer = document.querySelector('.colors');

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
