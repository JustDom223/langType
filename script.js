document.addEventListener('keydown', function (event){
    const typingBoardElement = document.querySelector('.typingBoard');
    typingBoardElement.textContent += event.key
})

