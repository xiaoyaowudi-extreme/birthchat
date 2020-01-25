$(window).scroll(function () {
  if ($(window).width() < 768) {
    $("#collapsibleNavbar a[scroll='true']").click(function () {
      $("#collapsibleNavbar").collapse('hide');
    });
    $(window).scroll(function () {
      $("#collapsibleNavbar").collapse('hide');
    });
  }
});