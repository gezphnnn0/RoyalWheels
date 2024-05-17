"use strict";

// Отправка заявки 
document.addEventListener('DOMContentLoaded', function () {
  $(document).ready(function () {
    $('#form1').submit(function () {
      // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
      $.ajax({
        type: "POST",
        url: "/index.php",
        data: $(this).serialize()
      }).done(function () {
        $('.form1').fadeIn();
        $(this).find('input').val('');
        $('#form1').trigger('reset');
      });
      return false;
    });
  });
});