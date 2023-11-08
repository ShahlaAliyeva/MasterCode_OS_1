let cardsContainer = document.querySelector(".main-container");
let filterContainer = document.querySelector(".filter-options"),
  filterOptions = document.querySelectorAll(".filter-option"),
  filterSelect = document.querySelector(".filter-selected"),
  selectText = filterSelect.querySelector("span");

let countrySearchInput = document.getElementById("country");
let allCountriesArray;

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((countries) => {
    allCountriesArray = countries;
    createCountryCard(countries);
  });

// ! Filter selected region

filterSelect.addEventListener("click", function () {
  filterContainer.classList.toggle("active");
});

filterOptions.forEach((option) => {
  option.addEventListener("click", function () {
    const optionText = option.firstElementChild.textContent; //option.querySelector('p').textContent
    selectText.innerText = optionText;
    filterContainer.classList.toggle("active");

    filterCountries(optionText);
  });
});

function filterCountries(region) {
  cardsContainer.innerHTML = "";
  fetch(`https://restcountries.com/v3.1/region/${region}`)
    .then((res) => res.json())
    .then((countries) => {
      allCountriesArray = countries;
      createCountryCard(countries);
    });
}

function createCountryCard(countries) {
  cardsContainer.innerHTML = "";
  countries.forEach((country) => {
    let countryCard = document.createElement("a");
    countryCard.classList.add("country-card-container");
    countryCard.href = `./country-detail.html?name=${country.name.common}`;

    countryCard.innerHTML = `
    <div class="country-card">
      <div class="card-img-container">
        <img src="${country.flags.svg}" alt="country-img" />
      </div>

      <div class="card-content">
        <p class="card-header">${country.name.common}</p>

        <div class="card-info">
          <p>Population: <span>${country.population.toLocaleString(
            "en-AZ"
          )}</span></p>
          <p>Region: <span>${country.region}</span></p>
          <p>Capital: <span>${country.capital?.[0] || "None"}</span></p>
        </div>
      </div>
    </div>
  `;

    cardsContainer.appendChild(countryCard);
  });
}

// ! Search for country

countrySearchInput.addEventListener("keyup", function (e) {
  let filteredCardsArray = allCountriesArray.filter((country) => {
    return country.name.common
      .toLowerCase()
      .includes(e.target.value.toLowerCase());
  });

  createCountryCard(filteredCardsArray);
});
