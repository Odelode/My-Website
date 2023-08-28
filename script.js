window.addEventListener('load', function() {
    setTimeout(function() {
        document.body.style.opacity = 1; 
        document.body.style.transform = 'translateX(0)'; 
    }, 300); 
});

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    localStorage.setItem('darkModeEnabled', body.classList.contains('dark-mode'));

    updateToggleLabel(); // Update the button text when the mode is toggled
}

const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', toggleDarkMode); // Listen for the click event

if (localStorage.getItem('darkModeEnabled') === 'true') {
    document.body.classList.add('dark-mode');
    updateToggleLabel(); // Update the button text when starting in dark mode
}

function updateToggleLabel() {
    const darkModeLabel = document.querySelector('.dark-mode-toggle label');
    darkModeLabel.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
}