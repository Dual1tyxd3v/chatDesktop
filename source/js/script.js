const selectHeader = document.querySelector('.header__title');
const selectOptions = document.querySelectorAll('.header__option');
const headerText = document.querySelector('.header__text');
const serversItems = document.querySelectorAll('.servers__item:not(.servers__item--btnAdd)');

// --SERVERS ITEMS SWITCH
serversItems.forEach(server => server.addEventListener('click', (e) => {
  e.preventDefault();

  document.querySelector('.servers__item--active').classList.remove('servers__item--active');
  e.target.classList.add('servers__item--active');
}));
//

// --SELECT LOGIC
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
