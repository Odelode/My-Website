const toggleButton = document.getElementById('darkModeToggle');
const darkModeStylesheets = ['../CSS/dark-mode-styles.css', ''];

toggleButton.addEventListener('click', function() {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';

  if (isDarkMode) {
    localStorage.setItem('darkMode', 'false');
    removeDarkModeStylesheets();
    this.textContent = 'Toggle Dark Mode';
  } else {
    localStorage.setItem('darkMode', 'true');
    addDarkModeStylesheets();
    this.textContent = 'Toggle Light Mode';
  }
});

window.onload = function() {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
    addDarkModeStylesheets();
    toggleButton.textContent = 'Toggle Light Mode';
  } else {
    toggleButton.textContent = 'Toggle Dark Mode';
  }
};

function addDarkModeStylesheets() {
  darkModeStylesheets.forEach((stylesheet) => {
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = stylesheet;
    linkElement.id = 'darkModeStylesheet';
    document.head.appendChild(linkElement);
  });
}

function removeDarkModeStylesheets() {
  darkModeStylesheets.forEach((stylesheet) => {
    const linkElement = document.querySelector(`link[href="${stylesheet}"]`);
    linkElement && linkElement.parentNode.removeChild(linkElement);
  });
}