let filterContainer = document.querySelector(".filter-options"),
  filterOptions = document.querySelectorAll(".filter-option"),
  filterSelect = document.querySelector(".filter-selected"),
  selectText = filterSelect.querySelector("span");

filterSelect.addEventListener("click", function () {
  filterContainer.classList.toggle("active");
});

filterOptions.forEach((option) => {
  option.addEventListener("click", function () {
    const optionText = option.firstElementChild.textContent; //option.querySelector('p').textContent
    selectText.innerText = optionText;
    filterContainer.classList.toggle("active");
  });
});
