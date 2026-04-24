// Dark mode toggle functionality
// code from MDN
function toggleDarkMode() {

  document.body.classList.toggle('dark-mode');
  
  // Save the user's preference to localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
    document.getElementById('darkToggleBtn').textContent = '☀️';
  } else {
    localStorage.setItem('darkMode', 'disabled');
    document.getElementById('darkToggleBtn').textContent = '🌙';
  }
}

// Load the user's dark mode preference when the page loads
window.addEventListener('DOMContentLoaded', function() {
  const darkModePreference = localStorage.getItem('darkMode');
  
  if (darkModePreference === 'enabled') {
    document.body.classList.add('dark-mode');
    document.getElementById('darkToggleBtn').textContent = '☀️';
  }
});
