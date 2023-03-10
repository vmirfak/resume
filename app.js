const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

var scroll_position = window.scrollY;
var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
	let currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("header").style.top = "0";
	} else {
		document.getElementById("header").style.top = "-70px";
	}
	prevScrollpos = currentScrollPos;
}
menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});