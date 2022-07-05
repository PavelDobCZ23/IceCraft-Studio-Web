console.log(window.location.href);

screenSizeAlert();

function screenSizeAlert() {
	if (screen.width < 280) {
		alert(`Your screen size is unsupported!\nYou might experience issues because width of your screen is less than 280px.\n\nScreen width = ${screen.width}px`);
	}
}