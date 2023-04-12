$(function () {
  $('#scroll').click(function () {
    $('html, body').animate(
      { scrollTop: $(document).height() - $(window).height() },
      600
    );
    return false;
  });
});

$(document).ready(function () {
  // Додати плавний скролінг до всіх посилань
  $('a').on('click', function (event) {
    // Перевірка, чи має якір
    if (this.hash !== '') {
      // Зупинка стандартної поведінки посилання
      event.preventDefault();

      // Збереження якоря
      var hash = this.hash;

      // Використання методу animate для додавання плавного скролінгу до якоря
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Додавання якоря в URL після скролінгу
          window.location.hash = hash;
        }
      );
    } // Кінець перевірки
  });
});
