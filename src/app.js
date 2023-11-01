import './scss/base.scss';
import './js/rainbows.js';
import './js/unicorns.js';

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let menuBtnClose = document.querySelector('.menu-btn-close');

menuBtn.addEventListener('click', function() {
	menu.classList.toggle('active');
});

menuBtnClose.addEventListener('click', function() {
	menu.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if(!e.target.closest('.menu') && !e.target.closest('.burger')
      ) {
        document.querySelector('.menu').classList.remove('active');
    }
});

//карусель

  /* этот код помечает картинки, для удобства разработки (пронумеровывает их)*/
let i = 1;
let carousel = document.querySelector('#carousel');
for (let li of carousel.querySelectorAll('li')) {
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
}



let viewport = document.getElementById("viewport").offsetWidth; // Получаем видимую часть слайда
let btnNext = document.getElementById("next"); // Получаем кнопку вперёд
let slider = document.querySelector("ul.homepage-categories--carousel"); // Получаем элемент со всеми слайдами
let viewSliders = document.querySelectorAll('.homepage-categories--img'); // Получаем элементы показа слайда
let viewSlide = 0; // Объявляем переменную номера слайда

viewSliders[0].style.backgroundColor = "#E0BEA2"; // Назначаем цвет индикатор слайда зелёный

// Обработка клика на кнопку вперёд
btnNext.addEventListener('click', function() {
  
  viewSliders[viewSlide].style.backgroundColor = "#FFFFFF"; // Делаем индикатор слайда красный
  
  // Условие, если номер слайда меньше четырёх
  if (viewSlide < (viewSliders.length / 4) - 1) { // Если верно то    
      viewSlide++; // Увеличиваем номер слайда на один
    } else { // Иначе
        // Номер слайда равен нулю
        viewSlide = 0;
    }

viewSliders[viewSlide].style.backgroundColor = "#E0BEA2"; // Закрашиваем индикатор слайда в зелёный

slider.style.left = -viewSlide * (viewport + 15)/2 + "px"; // Меняем позицию всего слайда
});


