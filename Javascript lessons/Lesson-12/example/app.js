let categories = document.querySelector('.categories'),
    selectSide = categories.querySelector('.selected-option'),
    selectedText = selectSide.querySelector('.selected-text'),
    optionsMenu = categories.querySelector('.options'),
    options = optionsMenu.querySelectorAll('.option');
    
//classList

selectSide.addEventListener('click', function(e) {
    categories.classList.toggle('active')
})

options.forEach((option) => {
    option.addEventListener('click', function (e) { 
        categories.classList.remove('active')
        selectedText.innerText = e.target.textContent
        // console.log(e.target.textContent);
     })
})