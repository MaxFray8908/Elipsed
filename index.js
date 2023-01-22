let hamburger = document.querySelector('.hamburger');
let headerModalMenu = document.querySelector('.header__modal-menu');

function changeModal() {
  let headerModal = document.querySelector('.header__modal-menu');

  hamburger.classList.toggle('hamburger_active');
  headerModal.classList.toggle('header__modal-menu_open');
}

function closeModal(event) {

  if (event.target.className !== 'wrapper-modal-menu' && event.target.className !== 'header__navigation') {

    let headerModal = document.querySelector('.header__modal-menu');
    headerModal.classList.remove('header__modal-menu_open');
    hamburger.classList.remove('hamburger_active');
  }
  
}

hamburger.addEventListener('click', changeModal);
headerModalMenu.addEventListener('click', closeModal);