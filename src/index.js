import './index.css';
document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.all-furniture__tab');
  const contents = document.querySelectorAll('.all-furniture__content');

  tabs.forEach((tab) => {
    tab.addEventListener('click', function (e) {
      e.preventDefault(); // Предотвращаем переход по ссылке

      const tabId = this.getAttribute('data-tab');

      // Убираем активный класс у всех вкладок и контента
      tabs.forEach((t) => t.classList.remove('active'));
      contents.forEach((c) => c.classList.remove('active'));

      // Добавляем активный класс текущей вкладке и соответствующему контенту
      this.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });
});
