//adding and removing active class based on click
// $(".mynav .mynav__item").on("click", function () {
//   $(".mynav").find(".active").removeClass("active");
//   $(this).addClass("active");
// });

//future features for the shocase area
// const show = document.querySelectorAll(".btn.showcase__item-links--gallery");
// for (let i = 0; i < show.length; i++) {
//   show[i].addEventListener("click", (e) => {
//     console.log(`clicked ${i}`);
//   });
// }

//copyright year
document.getElementById("year").innerHTML = new Date().getFullYear();

// //nav animation on bigger screen
if (screen.availWidth > 767) {
  (window.onscroll = function () {
    // console.log(document.documentElement.scrollTop);
    const nav = document.getElementById("mynav");
    const menu = document.getElementById("mynavMenu");
    const links = document.querySelectorAll(".mynav__links");
    const linkIcons = document.querySelectorAll(".mynav__links ion-icon");

    if (document.documentElement.scrollTop > 80) {
      nav.classList.add("js-transparent-some");
      menu.classList.add("js-transparent");
      links.forEach((link) => {
        link.classList.add("js-link-sm");
      });

      linkIcons.forEach((icon) => {
        icon.classList.add("js-icon-sm");
      });
    } else {
      nav.classList.remove("js-transparent-some");
      menu.classList.remove("js-transparent");

      links.forEach((link) => {
        link.classList.remove("js-link-sm");
      });

      linkIcons.forEach((icon) => {
        icon.classList.remove("js-icon-sm");
      });
    }
  })();
}
