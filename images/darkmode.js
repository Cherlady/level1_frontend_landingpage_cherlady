
const toggle = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');

  // Save user preference
  const isDark = body.classList.contains('dark-theme');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});