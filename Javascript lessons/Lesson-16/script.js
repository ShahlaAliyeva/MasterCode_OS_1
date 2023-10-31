//! Callback hell

// let box = document.querySelector(".box"),
//   container = document.querySelector(".container");

// container.addEventListener("click", function () {
//   setTimeout(() => {
//     box.style.transform = "translateX(500px)";
//     box.classList.add("circle");

//     setTimeout(() => {
//       box.style.transform = "translateY(200px)";
//     }, 3000);
//   }, 2000);
// });

//! Promise

// let promise = new Promise(function (resolve, reject) {
// setTimeout(() => {
//   resolve("Resolved");
// }, 2000);

//   setTimeout(() => reject(new Error("Error mesaji gorundu!")), 4000);
// });

// promise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// console.log(promise);

//! fetch

// let container = document.querySelector(".container");

// fetch("./users.json")
//   .then((res) => res.json())
//   .then((users) => {
//     users.map((user) => {
//       container.innerHTML += `
//             <div class="card-container">
//                 <h3>${user.name}</h3>
//                 <span>@${user.username}</span>
//                 <span>${user.email}</span>
//             </div>
//             `;
//     });
//   })
//   .catch((err) => console.log(err.message));

//? QR Code Generator

let form = document.querySelector("form");
let input = document.querySelector("input");
let qrImg = document.querySelector("img");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  generateQR();
  input.value = ''
});

function generateQR() {
  fetch(
    `http://api.qrserver.com/v1/create-qr-code/?data=${input.value}&size=150x150`
  ).then((res) => {
    qrImg.src = res.url;
  });
}
