// Функция для установки темы
function setTheme(theme) {
  document.documentElement.classList.remove('dark-theme'); // Удаляем класс dark-theme у корневого элемента
  if (theme === 'dark') {
      document.documentElement.classList.add('dark-theme'); // Добавляем класс dark-theme при выборе темной темы
  }
  localStorage.setItem('theme', theme); // Сохраняем выбранную тему в localStorage
}

// Функция для загрузки текущей темы при загрузке страницы
function loadTheme() {
  const theme = localStorage.getItem('theme'); // Получаем сохраненную тему из localStorage
  if (theme) {
      setTheme(theme); // Устанавливаем тему, если она сохранена
  }
}

// Загружаем текущую тему при загрузке страницы
loadTheme();

// Обработчик события для кнопки переключения темы
const toggleThemeBtn = document.querySelector('.toggle-theme-btn');
toggleThemeBtn.addEventListener('click', () => {
  const currentTheme = localStorage.getItem('theme'); // Получаем текущую тему из localStorage
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark'; // Переключаем тему
  setTheme(newTheme); // Устанавливаем новую тему
});





/* burger */
document.addEventListener('DOMContentLoaded', function () {
  const burgerMenuBtn = document.querySelector('.burger-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const contactInfo = document.querySelector('.contact-info');

  burgerMenuBtn.addEventListener('click', function () {
      burgerMenuBtn.classList.toggle('active');
      navLinks.classList.toggle('active');
      contactInfo.classList.toggle('active');
  });
});






/* карусель */
const swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true, // Остановка автопролистывания при взаимодействии пользователя с слайдером
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // Сделать точки кликабельными
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});




/* плавный скролл */
document.addEventListener('DOMContentLoaded', function () {
  // Получаем все ссылки, которые содержат якорь
  const links = document.querySelectorAll('a[href^="#"]');

  // Функция для плавной прокрутки до якорной ссылки с отступом от верха
  function scrollToAnchor(e) {
    // Предотвращаем стандартное поведение ссылки
    e.preventDefault();

    // Получаем id якоря из атрибута href ссылки
    const targetId = this.getAttribute('href').slice(1);

    // Получаем элемент якоря
    const targetElement = document.getElementById(targetId);

    // Если элемент существует, прокручиваем страницу до него с учетом отступа от верха
    if (targetElement) {
      // Получаем высоту отступа от верха страницы (например, высоту фиксированного заголовка)
      const offset = 75; // Замените это значение на нужный вам отступ

      // Получаем координаты верхней границы элемента относительно окна просмотра с учетом отступа
      const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

      // Плавно прокручиваем страницу до элемента с учетом отступа от верха
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }

  // Добавляем обработчик клика для каждой якорной ссылки
  links.forEach(link => {
    link.addEventListener('click', scrollToAnchor);
  });
});



/* онлайн-подбор */
$(document).ready(function() {
  $('#carForm').submit(function(e) {
    e.preventDefault();

    // Собираем данные формы
    const formData = {
      budget: $('input[name="budget"]:checked').val(),
      option: $('input[name="option"]:checked').val(),
      preferredCar: $('#preferredCar').val(),
      name: $('#name').val(),
      phone: $('#phone').val()
    };

    // Отправляем данные формы на сервер (здесь можно использовать AJAX)

    // Выводим сообщение об успешной отправке формы
    $('#message').text('Спасибо, в ближайшее время с вами свяжется менеджер.');

    // Отображаем всплывающее окно с сообщением
    $('#popup').css('display', 'block');
  });

  // Обработчик клика для закрытия всплывающего окна
  $('#closePopup').click(function() {
    $('#popup').hide();
  });
});






