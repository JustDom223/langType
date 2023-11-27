const typingBoardElement = document.querySelector('#typingBoard');
// const overlayElement = document.querySelector('#typingOverlay');
const overlayTextElement = document.querySelector('#overlayText')

let currentIndex = 0

document.addEventListener('keydown', function (event){
    const overlayText = overlayTextElement.textContent;

    if (event.key === overlayText.charAt(currentIndex)){
        typingBoardElement.textContent += event.key
        currentIndex++;
    }else{
        console.log('Nah ahh')
    }

    // const typedCharacter = typingBoardElement.textContent.charAt(currentIndex);

    // if (typedCharacter === overlayText.charAt(currentIndex)) {
    //     // typed char is correct
    //     currentIndex++;

    // }

})

