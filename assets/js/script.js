const todosForm = document.querySelector(".input__section__form");
const todoInput = todosForm.querySelector(".input__section__form-input");

const todosList = document.querySelector(".todos__section__list");

const todoLastItem = document.querySelector(".todos__section__list__item");

const todoItemCheckbox = document.querySelector(
  ".todos__section__list__item-checkbox"
);

let listItems = [];
let countOfTodos = 0;

todosForm.addEventListener("submit", function (event) {
  event.preventDefault();
  countOfTodos++;

  let listItem = createTodo(todoInput.value, countOfTodos);
  todosList.insertAdjacentHTML("afterbegin", listItem);
  todoInput.value = "";
  listItems.push({ id: countOfTodos, listItem });

  todoLastItem.firstElementChild.firstElementChild.textContent = countOfTodos;

  if (listItems.length !== 0) {
    todoLastItem.classList.remove("hidden");
  } else {
    todoLastItem.classList.add("hidden");
  }
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
