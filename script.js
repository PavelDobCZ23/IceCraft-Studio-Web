document.querySelector('#topbar > .tri-dash-menu > .button').addEventListener('pointerdown', toggleLinkDropdown)

function toggleLinkDropdown(eventData) {
    const menuElement = document.querySelector('#topbar > .tri-dash-menu');
    const iconElement = document.querySelector('#topbar > .tri-dash-menu > .button > img');
    if (menuElement.classList.contains('open')) {
        menuElement.classList.remove('open');
        iconElement.src = "/sprites/images/tri-dash-icon.svg"
    } else {
        menuElement.classList.add('open');
        iconElement.src = "/sprites/images/tri-dash-icon-open.svg"
    }
}