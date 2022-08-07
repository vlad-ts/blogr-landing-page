const subMenus = document.querySelectorAll(".sub-menu");
const menuItems = document.querySelectorAll(".menu-items");
const hamburger = document.querySelector(".nav-toggle");
const menu = document.querySelector(".menu");
const btnClose = document.querySelector(".btn-close");
const menuWrapper = document.querySelector(".menu-wrapper");

btnClose.addEventListener("click", menuHideShow);
hamburger.addEventListener("click", menuHideShow);

function menuHideShow() {
  menu.classList.toggle("menu-hide");
  hamburger.classList.toggle("hamburger-hide");
}

// hamburger.addEventListener("click", function () {
//   menu.classList.add("menu-shown");
//   hamburger.classList.add("hide");
// });

// btnClose.addEventListener("click", function () {
//   menu.classList.remove("menu-shown");
//   hamburger.classList.remove("hide");
//   btnClose.classList.add("hide");
//   menuItems.forEach(function (menuItem) {
//     menuItem.classList.remove("sub-menu-shown");
//   });
// });

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", function (e) {
    menuItems.forEach(function (e) {
      if (e !== menuItem) {
        e.classList.remove("sub-menu-shown");
      }
    });
    menuItem.classList.toggle("sub-menu-shown");
  });
});
