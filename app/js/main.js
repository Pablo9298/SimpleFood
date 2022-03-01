$(function() {

  $('.reviews__slider').slick({
    dots: true
  });

  var mixer = mixitup('.popular__cards');
  
});

document.addEventListener('DOMContentLoaded', () => {

  //Mobile Menu
  const burger = document.querySelector('.burger'); //наша кнопка
  const mobileMenu = document.querySelector('.header__list'); //мобильное меню
  const bodyLock = document.querySelector('body'); //ищем как селектор ТЕГА

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('header__list--active'); //когда меню открыто
    if (mobileMenu.classList.contains('header__list--active')) { //Проверяем, есть ли у меню активный класс
      burger.classList.add('burger--active'); //Когда открыто, иконка становится крестиком
      bodyLock.classList.add('lock'); //Блокируем скролл при открытом меню
    } else { //Когда нету активного класса у меню
      burger.classList.remove('burger--active'); //Возвращает в исходное состояние
      bodyLock.classList.remove('lock'); //Разрешаем скроллить
    }
  });
});

//Клик вне таргета
document.addEventListener('click', function (e) {
  if (e.target !== burger && e.target !== mobileMenu) {
    burger.classList.remove('burger--active');
    mobileMenu.classList.remove('header__list--active');
    bodyLock.classList.remove('lock');
  }
});