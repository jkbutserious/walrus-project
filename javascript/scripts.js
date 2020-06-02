$(document).ready(function() {
    $(".clickable").click(function() {
      // $("#walrus-showing").fadeIn();
      // $("#walrus-hidden").fadeOut();
      $("#walrus-showing").fadeToggle();
      $("#walrus-hidden").fadeToggle();
      $("#walrustwo-showing").toggle();
      $("#walrustwo-hidden").toggle();
    });
  });

