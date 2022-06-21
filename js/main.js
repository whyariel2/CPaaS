jQuery(document).ready(function ($) {
  // FIXED HEADER
  window.onscroll = function () {
    if (window.pageYOffset > 140) {
      $("header").addClass("sticky-top");
    } else {
      $("header").removeClass("sticky-top");
    }
  };
});
