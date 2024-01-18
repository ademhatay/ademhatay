import { extendedTags } from "./extendTag.js";

var currentTheme;
if (!currentTheme) {
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

export function extendTags(tags) {
    for (const tag in tags) {
        const style = tags[tag];
        document.querySelectorAll(".tag-" + tag).forEach((element) => {
            element.style.backgroundColor = style.backgroundColor;
            element.style.color = style.textColor;
        });
    }
}

extendTags(extendedTags);
