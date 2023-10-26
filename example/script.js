let input = document.querySelector('input'),
    anchor = document.querySelector('a');

anchor.addEventListener('click', function(e) {
    // e.preventDefault()
    let userInput = input.value.trim()
    if(userInput !== '') {
        localStorage.setItem('user', userInput)
        input.style.borderColor = 'black'
    } else {
        input.style.borderColor = 'red'
    }
})