let themeChanger = document.querySelector(".header-theme-changer");

themeChanger.addEventListener("click", function () {
  themeChanger.offsetParent.classList.add("dark-theme");
});
