async function fetchData() {
    try {
        // Assuming your JSON file is in the same directory as your HTML file
        const response = await fetch('./wordJSON/firstFiftyWords.json');
        const data = await response.json();

        // Do something with the data
        console.log(data);
        return data; // Returning the data from the function
    } catch (error) {
        console.error('Error fetching JSON:', error);
        return null; // Returning null in case of an error
    }
}

function selectWordPair() {
    return fetchData()
        .then(data => {
            if (!data) return null;

            const randomIndex = Math.floor(Math.random() * data.length);
            const randomWordPair = data[randomIndex];

            return randomWordPair;
        });
}

function populateOverlay() {
    selectWordPair()
        .then(wordPair => {
            if (!wordPair) {
                console.error('Error: Word pair is undefined.');
                return;
            }

            const overlayTextElement = document.querySelector('#overlayText');
            for (let i = 0; i < 5; i++) {
                overlayTextElement.textContent += wordPair.english + ' ';
                overlayTextElement.textContent += wordPair.dutch + ' ';
            }
        });
}

// Call the function
populateOverlay();



const typingBoardElement = document.querySelector('#typingBoard');
const overlayTextElement = document.querySelector('#overlayText');

let currentIndex = 0;

document.addEventListener('keydown', function (event) {
    const overlayText = overlayTextElement.textContent;

    if (event.key === overlayText.charAt(currentIndex)) {
        typingBoardElement.textContent += event.key;
        currentIndex++;

        // Check if the typed text matches the entire overlay text
        if (typingBoardElement.textContent === overlayText) {
            // Clear typing board, generate new overlay text, and reset index
            typingBoardElement.textContent = '';
            overlayTextElement.textContent = '';
            populateOverlay();
            currentIndex = 0;
            console.log('im triggered')
        }
    } else {
        // TODO: Add a more interactive 'wrong key' notification
        console.log('Nah ahh');
    }
});
