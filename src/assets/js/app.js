var currentTheme;
if(!currentTheme) {
  currentTheme = localStorage.getItem('theme') || null;
}

var toggleSwitch = document.querySelector('.theme-controller');

if (currentTheme) document.documentElement.setAttribute('data-theme', currentTheme);

if (currentTheme === 'dark') toggleSwitch.checked = true;

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

// scroll çıkınca console.log
window.addEventListener('scroll', function() {
  this.alert('scroll');
});
