let isMusicPlaying = false; // Track the music state

// Function to handle button clicks
function handleButtonClick(value) {
    const display = document.getElementById('display');
    
    if (value === 'C') {
        display.innerText = '0'; // Clear the display
    } else {
        // If the display is '0', replace it with the new value
        if (display.innerText === '0') {
            display.innerText = value;
        } else {
            display.innerText += value; // Append the value to the display
        }
    }

    // Play click sound
    const clickSound = document.getElementById('click-sound');
    clickSound.currentTime = 0; // Reset sound to start
    clickSound.play();
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    const expression = display.innerText;

    // Basic validation: check for multiple operators in a row
    if (/[\+\-\*\/]{2,}/.test(expression)) {
        display.innerText = 'Error';
        return;
    }

    try {
        // Evaluate the expression and update the display
        display.innerText = eval(expression);
    } catch (error) {
        display.innerText = 'Error';
    }
}

// Function to play or pause background music
function toggleMusic() {
    const backgroundMusic = document.getElementById('background-music');
    const musicToggleButton = document.getElementById('music-toggle');

    if (isMusicPlaying) {
        backgroundMusic.pause();
        musicToggleButton.innerText = 'Play Music';
    } else {
        backgroundMusic.play().catch(error => {
            console.log('Error playing music:', error);
        });
        musicToggleButton.innerText = 'Pause Music';
    }

    isMusicPlaying = !isMusicPlaying; // Toggle the state
}

// Play music when the page loads (optional, can be removed if you want to start with music paused)
window.onload = function() {
    // Optionally, you can comment this out if you want the music to start paused
    // toggleMusic(); 
};