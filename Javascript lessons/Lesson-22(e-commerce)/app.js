let cardsContainer = document.querySelector(".cards");
let cardItem = document.querySelector(".card-item");
let categoryBtns = document.querySelectorAll(".section__content ul li");

/*! Cart */
let cartContainer = document.querySelector(".cart-container");
let closeCart = document.querySelector(".close_cart");
let cartBtn = document.querySelector(".header__icon");

let cart_items_container = document.querySelector(".cart_items_container");

let allProducts = [];

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products) => {
    allProducts = products;
    cardsContainer.innerHTML = "";
    allProducts.forEach((product) => {
      createCard(product);
    });
  });

categoryBtns.forEach((category) => {
  category.addEventListener("click", () => {
    fetch(
      `https://fakestoreapi.com/products/category/${category.textContent.toLowerCase()}`
    )
      .then((res) => res.json())
      .then((productsByCategory) => {
        allProducts = productsByCategory;
        cardsContainer.innerHTML = "";
        productsByCategory.forEach((productByCategory) => {
          createCard(productByCategory);
        });
      });
  });
});

closeCart.addEventListener("click", (e) => {
  cartContainer.classList.remove("active");
});

cartBtn.addEventListener("click", (e) => {
  cartContainer.classList.add("active");
});

let cartItems = [];
function addToCart(e) {
  let addedProduct = e.parentElement.parentElement.parentElement;
  fetch("https://fakestoreapi.com/products/" + addedProduct.id)
    .then((res) => res.json())
    .then((product) => {
      // cartItem(product);
      // console.log(product);
      // console.log(cartItems);
      let productPrice = Number(product.price);
      cart_items_container.innerHTML += `
        <div class="cart_item">
            <div class="cart_item_img">
              <img src="${product.image}" alt="">
            </div>
            <div class="cart_item_content">
              <p class="cart_item_title">
                ${product.title.substring(0, 20)}
              </p>
              <div class="cart_item_payment">
              <span class="cart_item_price">${productPrice}$</span>
                <input type='number' class="cart_item_count" onchange='updateCount(this, ${productPrice})' value='1'></input>
              </div>
            </div>
          </div>
      `;
      getTotalPrice();
    });
}

function updateCount(e, count) {
  let container = e.parentElement;
  let span = container.querySelector("span");
  // let itemPrice = Number(span.textContent.slice(0, -1));
  span.textContent = Number(e.value * count).toFixed(2) + "$";
}

function createCard(card) {
  let { title, price, image, id } = card;
  cardsContainer.innerHTML += `
      <div class="card-item" id="${id}">
        <div class="card__img">
          <img src="${image}" alt="Alt" />
        </div>
        <div class="card__content">
          <p>${title.substring(0, 30)}</p>
          <div class="card__content-footer">
            <span class="card__content-footer-price">${price}</span>
            <span onclick='addToCart(this)' class="card__content-footer-icon"
              ><i class="fa-solid fa-bag-shopping"></i
            ></span>
          </div>
        </div>
    </div>
      `;
}

// function cartItem(card) {
//   let selectedCardObj = {
//     cardID: card.id,
//     cardCount: 1,
//     cardPrice: card.price,
//   };
//   if (cartItems.length === 0) {
//     cartItems.push(selectedCardObj);
//     console.log("first item", cartItems);
//   } else {
//     console.log(cartItems);
//     for (let i = 0; i < cartItems.length; i++) {
//       if (card.id === cartItems[i].cardID) {
//         console.log("existed element");
//         cartItems[i].cardCount++;
//       } else {
//         console.log("new element");
//         cartItems.push(selectedCardObj);
//       }
//     }
//   }
// }

// let totalPrice =
//   document.querySelector(".cart-container p").lastElementChild.lastElementChild;
// function getTotalPrice() {
//   let allProducts = document.querySelectorAll(
//     ".cart_item .cart_item_content cart_item_price"
//   );
//   console.log(allProducts);
// }
