$(function () {
  // var link = $('#navbar a.dot');
  var link = $(".mynav .mynav__links");

  // Move to specific section when click on menu link
  // link.on("click", function (e) {
  //   var target = $($(this).attr("href"));
  //   $("html, body").animate(
  //     {
  //       scrollTop: target.offset().top,
  //     },
  //     600
  //   );
  //   // $(this).addClass("active");
  //   // e.preventDefault();
  // });

  // Run the scrNav when scroll
  $(window).on("scroll", function () {
    scrNav();
  });

  // scrNav function
  // Change active dot according to the active section in the window
  function scrNav() {
    var sTop = $(window).scrollTop();
    $("header, section").each(function () {
      var id = $(this).attr("id"),
        offset = $(this).offset().top - 1,
        height = $(this).height();
      if (sTop >= offset && sTop < offset + height) {
        link.removeClass("active");
        $(".mynav")
          .find('[data-scroll="' + id + '"]')
          .addClass("active");
      }
    });
  }
  scrNav();
});
