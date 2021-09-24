import '../css/style.css';

// document.querySelector('#app').innerHTML = `
//   <h1>Hello, Dastan Zhamekeshev!</h1>
// `;

const modalWindowCloseIcon = document.querySelector('.modal-window__close-icon');
const modalWindowOverlay = document.querySelector('.overlay');

modalWindowCloseIcon.addEventListener('click', () => {
    modalWindowOverlay.classList.add('overlay_hidden');
});
