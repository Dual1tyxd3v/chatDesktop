const selectHeader = document.querySelector('.header__title');
const selectOptions = document.querySelectorAll('.header__option');
const headerText = document.querySelector('.header__text');
const serversItems = document.querySelectorAll('.servers__item:not(.servers__item--btnAdd)');
const groupItems = document.querySelectorAll('.group__item');
const headTitle = document.querySelector('.head__title');
const messageInput = document.querySelector('.new-message__input');
const slider = document.querySelector('.slider');
const nextBtn = document.querySelector('.info__slideBtn--next');
const prevBtn = document.querySelector('.info__slideBtn--prev');
const slides = document.querySelectorAll('.info__item');

const INPUT_PLACEHOLDER = 'Message in';
const SLIDER_OFFSET = 200;
const MAX_SLIDES = slides.length;

function switchActiveClass(e, className) {
  e.preventDefault();

  document.querySelector(`.${className}`).classList.remove(className);
  e.target.classList.add(className);

  if (className.includes('group__item')) {
    const formatedText = e.target.textContent.replace('# ', '#');
    headTitle.textContent = formatedText;
    messageInput.placeholder = `${INPUT_PLACEHOLDER} ${formatedText}`;
  }
}

// --SERVERS ITEMS SWITCH
serversItems.forEach(server => server.addEventListener('click', (e) => switchActiveClass(e, 'servers__item--active')));
//

// --GROUP ITEM SWITCH
groupItems.forEach(groupItem => groupItem.addEventListener('click', (e) => switchActiveClass(e, 'group__item--active')));
//

// --SELECT MENU
selectHeader.addEventListener('click', (e) => {
  e.preventDefault();

  selectHeader.classList.toggle('header__title--opened');
});

selectOptions.forEach(option => option.addEventListener('click', (e) => {
  headerText.textContent = e.target.textContent;
  document.querySelector('.header__option--active').classList.remove('header__option--active');
  e.target.classList.add('header__option--active');
  selectHeader.classList.toggle('header__title--opened');
}));
//

// SLIDER
let slideIndex = 0;
function switchSlide(direction) {
  slideIndex = slideIndex + direction;
  if (slideIndex === 0) {
    !prevBtn.classList.contains('info__slideBtn--hidden') && prevBtn.classList.add('info__slideBtn--hidden');
  } else {
    prevBtn.classList.remove('info__slideBtn--hidden');
  }
  if (slideIndex === (MAX_SLIDES - 1)) {
    !nextBtn.classList.contains('info__slideBtn--hidden') && nextBtn.classList.add('info__slideBtn--hidden');
  } else {
    nextBtn.classList.remove('info__slideBtn--hidden');
  }
  slider.style.transform = `translateX(-${SLIDER_OFFSET * slideIndex}px)`;
}

nextBtn.addEventListener('click', () => switchSlide(1));
prevBtn.addEventListener('click', () => switchSlide(-1));
//
