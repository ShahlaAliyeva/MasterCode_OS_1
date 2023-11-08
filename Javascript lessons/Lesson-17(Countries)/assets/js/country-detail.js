let countryName = new URLSearchParams(location.search).get("name");

let countryIMG = document.querySelector(".country-img-container img");
(countryTitle = document.querySelector(".country-title")),
  (countryNativeName = document.querySelector(".country__native-name")),
  (countryPopulation = document.querySelector(".country__population")),
  (countryRegion = document.querySelector(".country__region")),
  (countrySubRegion = document.querySelector(".country__sub-region")),
  (countryCapital = document.querySelector(".country__capital")),
  (countryDomain = document.querySelector(".country__domain")),
  (countryCurrency = document.querySelector(".country__currency")),
  (countryLanguages = document.querySelector(".country__languages")),
  (countryBorders = document.querySelector(
    ".border-countries-container"
  ).lastElementChild);

fetch(`https://restcountries.com/v3.1/name/${countryName}`)
  .then((res) => res.json())
  .then((res) => {
    res.forEach((country) => {
      console.log(country);

      countryIMG.src = country.flags.svg;

      countryTitle.innerHTML = country.name.common;

      if (country.name.nativeName) {
        countryNativeName.innerHTML = `Native Name: <span>${
          Object.values(country.name.nativeName)[0].common
        }</span>`;
      } else {
        countryNativeName.innerHTML = `Native Name: <span>${country.name.common}</span>`;
      }

      countryPopulation.innerHTML = `Population: <span>${country.population.toLocaleString()}</span>`;

      countryRegion.innerHTML = `Region: <span>${country.region}</span>`;

      countrySubRegion.innerHTML = `Sub Region: <span>${
        country.subregion ? country.subregion : "None"
      }</span>`;

      countryCapital.innerHTML = `Capital: <span>${
        country.capital?.[0] || "None"
      }</span>`;

      countryDomain.innerHTML = `Top Level Domain: <span>${country.tld}</span>`;

      countryCurrency.innerHTML = `Currencies: <span>${
        Object.values(country.currencies)[0].name
      }</span>`;

      countryLanguages.innerHTML = `Languages: <span>${Object.values(
        country.languages
      ).map((element) => element)}</span>`;

      if (country.borders) {
        country.borders.forEach((border) => {
          fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((response) => response.json())
            .then((res) => {
              let countryTag = document.createElement("a");
              countryTag.href = `./country-detail.html?name=${res[0].name.common}`;
              countryTag.innerHTML = `${res[0].name.common}`;
              countryBorders.appendChild(countryTag);
            });
        });
      }
    });
  });

