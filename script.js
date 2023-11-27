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

// Call the function
fetchData();

function selectWordPair() {
    fetchData() // Use the fetched data
        .then(data => {
            if (!data) return; // Exit if there was an error fetching data

            const randomIndex = Math.floor(Math.random() * data.length);
            const randomWordPair = data[randomIndex];

            console.log(randomWordPair.english);
            console.log(randomWordPair.dutch);
            return randomWordPair
        });
}

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
            populateOverlay();
            currentIndex = 0;
        }
    } else {
        // TODO: Add a more interactive 'wrong key' notification
        console.log('Nah ahh');
    }
});
