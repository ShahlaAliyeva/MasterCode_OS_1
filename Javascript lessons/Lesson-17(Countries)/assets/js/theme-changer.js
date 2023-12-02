let themeChanger = document.querySelector(".header-theme-changer");
let body = themeChanger.offsetParent;
let darkTheme = localStorage.getItem("darkTheme");
console.log(darkTheme);

if (darkTheme === "true") {
  body.classList.add("dark-theme");
  localStorage.setItem("darkTheme", "true");
} else {
  body.classList.remove("dark-theme");
  localStorage.setItem("darkTheme", "false");
}

themeChanger.addEventListener("click", function () {
  body.classList.toggle("dark-theme");
  localStorage.setItem("darkTheme", body.classList.contains("dark-theme"));
});
