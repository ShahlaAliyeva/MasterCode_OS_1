const todosForm = document.querySelector(".input__section__form");
const todoInput = todosForm.querySelector(".input__section__form-input");

const todosList = document.querySelector(".todos__section__list");

const todoLastItem = document.querySelector(".todos__section__list__item");

const todoItemCheckbox = document.querySelector(
  ".todos__section__list__item-checkbox"
);

let allTodos = JSON.parse(localStorage.getItem("todos")) || [];

if (allTodos.length > 0) {
  allTodos.forEach((todo) => {
    let listItem = createTodo(todo.todoContent, todo.id);
    todosList.insertAdjacentHTML("afterbegin", listItem);
  });
}

let listItems = [...allTodos];
let countOfTodos = allTodos.length; //4

toggleFilterside(listItems, countOfTodos);

todosForm.addEventListener("submit", function (event) {
  event.preventDefault();
  countOfTodos++; //5

  let listItem = createTodo(todoInput.value, countOfTodos);
  todosList.insertAdjacentHTML("afterbegin", listItem);
  //! Local storage
  listItems.push({
    id: countOfTodos,
    todoContent: todoInput.value,
    isCompeted: false,
  });

  localStorage.setItem("todos", JSON.stringify(listItems));
  todoInput.value = "";
  toggleFilterside(listItems, countOfTodos);
});

function getElement(element) {
  if (!element.firstElementChild.classList.contains("checked")) {
    element.firstElementChild.classList.add("checked");

    let img = document.createElement("img");
    img.setAttribute("src", "./assets/images/checked.svg");
    img.setAttribute("alt", "checked");
    img.setAttribute("class", "checked-img");

    element.firstElementChild.appendChild(img);

    element.lastElementChild.style.textDecoration = "line-through";
    element.lastElementChild.style.color = "var(--last-list-item-text-color)";
  } else {
    element.firstElementChild.classList.remove("checked");
    element.firstElementChild.firstElementChild.remove();

    element.lastElementChild.style.textDecoration = "none";
    element.lastElementChild.style.color = "black";
  }
}

function createTodo(inputValue, todoID) {
  return `
    <li onclick="getElement(this)" class="todos__section__list__item" id=${todoID}>
        <div class="todos__section__list__item-checkbox">
        
        </div>

        <p class="todos__section__list__item-text">
            ${inputValue}
        </p>
    </li>
    `;
}

function toggleFilterside(todos, todosLength) {
  todoLastItem.firstElementChild.firstElementChild.textContent = todosLength;

  if (todos.length !== 0) {
    todoLastItem.classList.remove("hidden");
  } else {
    todoLastItem.classList.add("hidden");
  }
}
