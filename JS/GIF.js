const apiKey = 'e2RiSoNR0YVkIVcRrzAY5suhaDuGOzrU';
const gifContainer = document.getElementById('gif-container');
const countdownTimer = document.getElementById('countdown-timer');

function loadRandomGif() {
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
            const gifUrl = data.data.image_original_url;
            gifContainer.innerHTML = `<img src="${gifUrl}" alt="Random GIF">`;
        })
        .catch((error) => {
            console.error('Failed to load GIF:', error);
        });
}

function updateCountdown() {
    let seconds = 3600; 
    setInterval(() => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        countdownTimer.textContent = `${hours}:${minutes}:${secs}`;
        seconds--;
    }, 1000);
}

loadRandomGif();
updateCountdown();

setInterval(() => {
    loadRandomGif();
    updateCountdown();
}, 3600000);
