async function getAllData() {
  const response = await fetch("http://localhost:3000/users")
  const users = await response.json()

  return users
}

async function postUser(createdUser) {
  const response = await fetch('http://localhost:3000/users', {
    method: 'POST',
    body: JSON.stringify(createdUser),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })

  const user = await response.json()

  return user
}

async function deleteUser(cardID) {
  const response = await fetch(`http://localhost:3000/users/${cardID}`, {
    method: 'DELETE',
  })

  return response
}

const usersContainer = document.querySelector('.container')

async function showUsers() {
  const allUsersArray = await getAllData()

  allUsersArray.forEach(user => {
    const newUserCard = createUserCard(user)
    usersContainer.insertAdjacentHTML('beforeend', newUserCard)
  });
}

showUsers()

// !Post

const form = document.querySelector('.form-container form')
const nameInput = form.querySelector('input[name="name"]')
const eamilInput = form.querySelector('input[name="email"]')


form.addEventListener('submit', async function (e) {
  e.preventDefault()

  const createdUser = {
    name: nameInput.value,
    email: eamilInput.value,
  }

  await postUser(createdUser)

})

async function deleteCard(e) {
  const deletedElementID = e.parentElement.dataset.id
  await deleteUser(deletedElementID)
}

function createUserCard(user) {
  return `
  <div class="user-card" data-id='${user.id}'>
    <h2>${user.id} - ${user.name}</h2>
    <p>@${user.username}</p>
    <p>${user.email}</p>
    <p>${user.phone}</p>
    <button onclick='deleteCard(this)'>Delete</button>
   </div>
  `
}