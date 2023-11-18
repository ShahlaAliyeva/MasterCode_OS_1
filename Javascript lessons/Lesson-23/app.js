// !Asynchronous and synchronous js
// for(let i=0; i<1e10; i++) {}

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((res) => console.log(res));

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// fetch("https://jsonplaceholder.typicode.com/comments")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

let cardContainer = document.querySelector(".container");
let btn = document.querySelector(".form-container button");
let input = document.querySelector(".form-container input");
let userID;

//? async, await

// ?Fetch methods => post, delete
async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  data.forEach((user) => {
    userID = user.id;
    cardContainer.innerHTML += `
        <div class="userCard">
            <h2>${user.name}</h2>
            <p>City: ${user.address.city}</p>
            <p>${user.username}</p>
            <button onclick='deleteCard(this, ${user.id})'>Delete</button>
        </div>
    `;
  });
}

getData();

btn.addEventListener("click", function (e) {
  e.preventDefault();
  let data = {
    userId: userID++,
    name: input.value,
    username: `@${input.value}`,
  };

  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      cardContainer.innerHTML += `
        <div class="userCard">
            <h2>${json.name}</h2>
            <p>City: ${json.address}</p>
            <p>${json.username}</p>
            <button onclick='deleteCard(this, ${json.userId})'>Delete</button>
        </div>
    `;
      console.log(json);
    });
});

function deleteCard(e, cardID) {
  let deletedCard = e.parentElement;
  console.log(cardID);

  // ? Delete from API
  fetch("https://jsonplaceholder.typicode.com/posts/" + cardID, {
    method: "DELETE",
  });

  //  ? Delete from UI
  deletedCard.remove();
}

// let users = getData();

// users.then((res) => console.log(res));

// users.forEach((user) => {
//   console.log(user);
// });
