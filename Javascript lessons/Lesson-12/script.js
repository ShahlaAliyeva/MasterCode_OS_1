let box = document.querySelector(".box"),
    input = document.querySelector("input"),
    button = document.querySelector("button"),
    linkTag = document.querySelector('a'),
    form = document.querySelector('form'),
    par = document.querySelector('.input-text')

//! mousedown and mouseup events -> mouseup + mousedown = click eventi

// box.addEventListener('mousedown', function() {
//     box.style.backgroundColor = 'yellow'
// })

// box.addEventListener('mouseup', function() {
//     box.style.backgroundColor = 'darkcyan'
// })

// box.addEventListener("click", function () {
//     console.log(box.style.backgroundColor);
//   if ((box.style.backgroundColor === "yellow")) {
//     box.style.backgroundColor = "darkcyan";
//   } else {
//     box.style.backgroundColor = "yellow";
//   }
// });

//! mouseover and mouseout events

// box.addEventListener('mouseover', function(e) {
//     box.style.backgroundColor = 'initial'
// })

// box.addEventListener('mouseout', function(e) {
//     box.style.backgroundColor = 'darkcyan'
// })

//! double click

// box.addEventListener('dblclick', function(){
//     box.style.backgroundColor = 'initial'
// })

//! Select

// let selectedText = ''
// input.addEventListener('select', function(e) {
//     selectedText = e.target.value
//     // console.log('selected text: ' + selectedText)
// })

// button.addEventListener('click', function(e) {
//     e.preventDefault();
//     console.log(selectedText);
// })

//! Copy

// input.addEventListener('copy', function(e) {
//     console.log('text is copied: ' + e.target.value);
// })

//! Paste

// input.addEventListener('paste', function(e) {
//     console.log('text is pasted');
// })

//! pereventDefault

//? anchor tag-i

// linkTag.addEventListener('click', function(e){
//     e.preventDefault()
//     console.log('clicked to anchor tag');
//     window.location.href = './example/index.html'
// })

//? form submit

// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     par.textContent = input.value
//     input.value = ''
//     console.log('input submitted')
// })


//! key events 

// input.addEventListener('keyup', function(e) {
//     par.textContent = input.value
//     console.log('input submitted')
// })

// input.addEventListener('keydown', function(e) {
//     par.textContent = input.value
//     console.log('input submitted')
// })

//! screenX, screenY || clientX, clientY && pageX, pageY && layerX, layerY === x, y koordinatina ve window-a gore

button.addEventListener('click', function(e) {
    e.preventDefault()
    console.log('Screen coordinate: ' + e.screenX);
    console.log('Client coordinate: ' + e.clientX);
})
