// document.querySelector('#app').innerHTML = `
//   <h1>Hello, Dastan Zhamekeshev!</h1>
// `;

const modalWindowCloseBtn = document.querySelector('.modal-window__close-btn');
const modalWindowOverlay = document.querySelector('.overlay');

modalWindowCloseBtn.addEventListener('click', () => {
    modalWindowOverlay.classList.add('overlay_hidden');
});
