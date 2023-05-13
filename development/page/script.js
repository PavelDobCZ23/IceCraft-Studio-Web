initializeCompactSidebar();

function jumpTo(selector) {
    document.querySelector(selector).scrollIntoView();
}

function initializeCompactSidebar() {
	const sidebarItems = document.querySelector('main > .sidebar').innerHTML;
	const dropdownElement = document.querySelector('main > .sidebar.compact');
	dropdownElement.innerHTML = sidebarItems;
}

//* Image Container *//