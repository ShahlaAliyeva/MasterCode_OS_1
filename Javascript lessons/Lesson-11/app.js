let button = document.querySelector("button"),
  paragraph = document.querySelector("p"),
  input = document.querySelector("input"),
  container = document.querySelector(".container"),
  // container = document.querySelectorAll('.container .box'),
  html = document.querySelector("html"),
  secondBox = container.querySelector(".box-2");
// firstBox = container.children[0]
// firstBox.style.backgroundColor = 'blue'

//* parentNode, parentElement difference
// console.dir(container[1].parentElement);
// console.dir(container[1].parentNode);

// console.dir(html.parentElement);
// console.dir(html.parentNode);

// console.dir(container.parentElement);
// console.dir(container.parentNode);

// button.addEventListener('click', function(e){
//     e.target.style.border = '3px solid green';
//     console.log(e.target.style);
// })

//! Text elde etme usullari

//* innerHTML
//* innerText
//* textContent

// paragraph.addEventListener('click', () => {
//     paragraph.innerHTML = '<i>Hello world</i>';
//     console.log(paragraph.textContent);
// })

//! keyup event

// input.addEventListener('keyup', function(e) {
//     paragraph.innerHTML = `<i>${e.target.value}</i>`
// } );

//! mouse up & mouseout & mouseleave events

// secondBox.addEventListener('mouseover', function(e) {
//     secondBox.parentElement.style.backgroundColor = 'darkcyan'
// })

// secondBox.addEventListener('mouseout', function(e) {
//     secondBox.parentElement.style.backgroundColor = '#fff'
// })

//! sibling elements -> previousElementSibling , nextElementSibling

// secondBox.addEventListener('mouseover', function(e) {
//     secondBox.previousElementSibling.innerHTML = '<b>Previous eleemnt of Box 2</b>'
//     secondBox.nextElementSibling.innerHTML = '<b>Next eleemnt of Box 2</b>'

//     secondBox.nextElementSibling.style.backgroundColor  = 'red'
//     secondBox.nextElementSibling.style.color  = '#fff'

// })

//! classlari deyismek ve tutmaq

// let listItems = document.querySelectorAll('.list-item')
// console.log(listItems[1].classList);

// listItems.forEach((listItem) => {
//     listItem.addEventListener('click' , function() {
//         listItem.classList.toggle('active')
//     })
// })

//! nav-i silmek

// let closeNav = document.querySelector('.closing')

// closeNav.addEventListener('click', () => {
//     closeNav.nextElementSibling.classList.toggle('hidden')
// })
