console.log(window.location.href);

initializeDropdownLinks();
setThemeIcon(document.documentElement.dataset.theme);
screenSizeAlert();


document.querySelector('#topbar > .tri-dash-menu > .dash-menu-toggle').addEventListener('pointerdown', toggleLinkDropdown);



function screenSizeAlert() {
	/*const FONT_SIZE_CONSTANT = 17.5;*/
	const fontSize = parseInt(getComputedStyle(document.documentElement).fontSize.match(/\d+/));
	const supportedSize = 15.3 * fontSize;
	if (screen.width < supportedSize) {
		alert(`Your screen size is unsupported!\nYou might experience issues because the width of your screen is less than ${Math.round(supportedSize)}px. Try lowering your default font size to prevent this.\n\nScreen width = ${screen.width}px\nFont size = ${fontSize}px`);
	}
}

document.querySelector('#topbar > .theme-toggle').addEventListener('pointerdown', toggleTheme);

function toggleTheme(eventData) {
    const rootDataset = document.documentElement.dataset;
	let newTheme;
    if (rootDataset.theme === 'light') {
		newTheme = 'dark';
    } else if (rootDataset.theme === 'dark') {
		newTheme = 'light';
    }

	rootDataset.theme = newTheme;
	setThemeIcon(newTheme);
	localStorage.setItem('web-theme', newTheme);
}

function setThemeIcon(theme) {
	const iconElement = document.querySelector('#topbar > .theme-toggle > img');
	if (theme === 'dark') {
		iconElement.src = '/sprites/images/moon-icon.png';
		iconElement.alt = 'moon icon';
	}
	if (theme === 'light') {
		iconElement.src = '/sprites/images/sun-icon.png';
		iconElement.alt = 'sun icon';
	}
}

function initializeDropdownLinks() {
	const links = document.querySelector('#topbar > .links-container').innerHTML;
	const dropdownElement = document.querySelector('#topbar > .tri-dash-menu > .links-dropdown');
	dropdownElement.innerHTML = links;
}

function toggleLinkDropdown(eventData) {
    const menuElement = document.querySelector('#topbar > .tri-dash-menu');
    const iconElement = document.querySelector('#topbar > .tri-dash-menu > .dash-menu-toggle > img');
    if (menuElement.classList.contains('open')) {
        menuElement.classList.remove('open');
        iconElement.src = "/sprites/images/tri-dash-icon.svg";
    } else {
        menuElement.classList.add('open');
        iconElement.src = "/sprites/images/tri-dash-icon-open.svg";
    }
}
