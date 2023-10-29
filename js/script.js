//toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hubmenu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//ketika klik diluar sidebar menghlang nav
const humburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!humburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
