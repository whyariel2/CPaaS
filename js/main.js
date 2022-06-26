jQuery(document).ready(function ($) {
  // FIXED HEADER
  window.onscroll = function () {
    if (window.pageYOffset > 140) {
      $("header").addClass("sticky-top");
    } else {
      $("header").removeClass("sticky-top");
    }
  };

  // SCROLL PARA SESSÕES
  let navBtn = $('.nav-item');

  let contactSection = $('#footer');

  let scrollTo = '';

  $(navBtn).click(function () {
    let btnId = $(this).attr('id');

    if (btnId == 'contact-menu') {
      scrollTo = contactSection;
    }

    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(scrollTo).offset().top - 92,
      },
      150
    );
  });
});
