
window.addEventListener('load', function() {

    setTimeout(function() {
        document.body.style.opacity = 1; 
        document.body.style.transform = 'translateX(0)'; 
    }, 300); 
});


function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('change', toggleDarkMode);


function updateToggleLabel() {
    const darkModeLabel = document.querySelector('.dark-mode-toggle label');
    darkModeLabel.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
}

updateToggleLabel();

document.body.addEventListener('classChange', updateToggleLabel);