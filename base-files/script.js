console.log(window.location.href);

screenSizeAlert();
initializeDropdownLinks();
setThemeIcon(document.documentElement.dataset.theme);


document.querySelector('#topbar > .tri-dash-menu > .button').addEventListener('pointerdown', toggleLinkDropdown);



function screenSizeAlert() {
	if (screen.width < 280) {
		alert(`Your screen size is unsupported!\nYou might experience issues because width of your screen is less than 280px.\n\nScreen width = ${screen.width}px`);
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
    const iconElement = document.querySelector('#topbar > .tri-dash-menu > .button > img');
    if (menuElement.classList.contains('open')) {
        menuElement.classList.remove('open');
        iconElement.src = "/sprites/images/tri-dash-icon.svg";
    } else {
        menuElement.classList.add('open');
        iconElement.src = "/sprites/images/tri-dash-icon-open.svg";
    }
}