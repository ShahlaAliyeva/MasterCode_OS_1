let input = document.querySelector("input"),
  p = document.querySelector("p"),
  ul = document.querySelector(".own-list"),
  button = document.querySelector("button");

// input.addEventListener('keyup', function(e) {
//     if(!(e.keyCode >= 48 && e.keyCode <= 57)) {
//        p.classList.toggle('hidden')
//     }
// })

//! createElement() -> element yaratmaq
// let h1 = document.createElement('h1')
// h1.innerText = 'Text created by JS'

// document.body.append(h1)

// let count = 0;
// button.addEventListener("click", function () {
//   count += 1;
//   let listItem = document.createElement("li");
//   listItem.innerText = `List Item ${count}`;
//   document.body.appendChild(listItem);
// });

//! append, appendChild, prepend

//? prepend()
// let count = 0;
// button.addEventListener("click", function () {
//   count += 1;
//   let listItem = document.createElement("li");
//   listItem.innerText = `List Item ${count}`;
//   //   document.body.prepend(listItem);
//   ul.prepend(listItem);
// });

//?append()

// let count = 0;
// button.addEventListener("click", function () {
//   count += 1;
//   let listItem = document.createElement("li");
//   listItem.innerText = `List Item ${count}`;
//   //   document.body.prepend(listItem);
// //   ul.append(listItem);
//   ul.appendChild(listItem);
// });

//! DocumentFragment

// let languages = ['JS', 'TypeScript', 'Elm', 'Dart','Scala'];

// let listOfLangs = document.querySelector('.own-list')

// let fragment = new DocumentFragment();

// languages.forEach((language) => {
//     let li = document.createElement('li');
//     li.innerHTML = language;
//     fragment.appendChild(li);
// })

// listOfLangs.appendChild(fragment);

//! after()

// const h1 = document.querySelector('h1');

// // create a new paragraph element
// const p = document.createElement('p');
// p.innerText = 'This is JavaScript DOM after() method demo';

// // insert the paragraph after the heading
// h1.after(p);

//! insertAdjacentHTML()

/*
 * 'beforebegin': before the element
 * 'afterbegin': before its first child of the element. (prepend)
 * 'beforeend': after the last child of the element -> (append)
 * 'afterend': after the element
 */

// let count = 0;
// button.addEventListener("click", function () {
//   count += 1;
// //   let listItem = document.createElement("li");
// //   listItem.innerText = `List Item ${count}`;

//   ul.insertAdjacentHTML('afterend', `<li class='list-item' id=${count}>List Item ${count}</li>`)
// });

//! cloneNode()

// let clonedMenu = ul.cloneNode(true);
// clonedMenu.id = "copied-menu";
// document.body.appendChild(clonedMenu);

//! removeChild(), remove()

// let count = 0;
// button.addEventListener("click", function () {
//   count += 1;
//   let listItem = document.createElement("li");
//   listItem.innerText = `List Item ${count}`;
//   listItem.id = count
//   listItem.className = 'list-item'

//   listItem.addEventListener('click', function(e) {
//     console.log(e.target);
//     listItem.remove()
//     // ul.removeChild(listItem);
//   })
//   ul.prepend(listItem);
// });


//! className, classList
let listItem = document.createElement('li')
console.log(listItem);

// ul.className += 'js-list'
console.dir(ul)

button.addEventListener('click', function(e){
    ul.classList.replace('own-list', 'js-list')
})
