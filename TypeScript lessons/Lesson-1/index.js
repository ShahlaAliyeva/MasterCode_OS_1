// let a = 120;
// let b: number = 40;
// console.log(a / b);
// let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 10];
// let arr2: Array<number> = [1, 2, 34, 5];
// let multiTypeArray: [number, string, boolean, number] = [ // tuple
//   1,
//   "sxdcfv",
//   true,
//   123,
// ];
// multiTypeArray.forEach((element) => {
//   console.log(element);
// });
//! Typscript`de obyektler
//? Typescriptde obyektler bir qayda olaraq enum ile yaradilir
// enum User {
//   name = "Filankes",
//   surname = "Filankesov",
//   age = 12,
// }
// console.log(User.name);
//! Type Assertion
// let userName: string;
// userName = "Filankes";
// let userName = 'Filankes'
// let userName;
// userName = 'Filankes'
// let strArray = (<string>userName).split('') //! 1-ci numune
// let strArray = (userName as string).split('') //! 2-ci numune
//! Function in Typescript
// function calculate(a: number, b, c?): number {
//   let result = a + b + c;
//   return result;
// }
// console.log(calculate(2, 3, 4));
// console.log(calculate(2, 3)); //! NaN cunki c -> undefined qaytarir
// console.log(calculate(2, 3, 4, 5, 6)); //! error
// ! rest operator in Typescript functions
// function calculate(...numbers: number[]): number {
//   let total = 0;
//   let count = numbers.length;
//   numbers.forEach((element) => (total += element));
//   return total / count;
// }
// console.log(calculate(2, 3, 4));
// console.log(calculate(2, 3));
// console.log(calculate(2, 3, 4, 5, 6));
// ! Interfaces
// interface Flight {
//   x: number;
//   y: number;
//   country: string;
//   flight: boolean;
// }
// const travel = (flight: Flight) => {
//   //...
// };
// const otherTravel = (flight: Flight) => {
//   //...
// };
// travel({ x: 2, y: 1, country: "Baku", flight: false });
// ! Todo list in Typescript
var todoInput = document.querySelector(".todo_input");
var addBtn = document.querySelector(".add_btn");
var todoList = document.querySelector(".todos");
addBtn.addEventListener("click", function () {
    createListElement();
});
function createListElement() {
    if (todoInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.classList.add("todo_item");
        li.innerHTML = "\n        <span>".concat(todoInput.value, "</span>\n        <button onclick='deleteTodo(this)'>Delete</button>\n    ");
        todoList.appendChild(li);
    }
    todoInput.value = "";
}
function deleteTodo(deletedItem) {
    var _a;
    (_a = deletedItem.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
}
