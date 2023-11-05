let cardsContainer = document.querySelector(".main-container");

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((countries) => {
    countries.forEach((country) => {
      // country.name.common
      // country.population
      // country.capital?.[0] || 'None'
      // country.region
      let countryCard = document.createElement("a");
      countryCard.classList.add("country-card-container");
      countryCard.href = "/country-detail.html";

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
  });
