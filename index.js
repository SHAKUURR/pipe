"use strict";
const header = document.querySelector(".nav-section");
const elements = document.querySelector(".nav-list");
const menu = document.querySelectorAll(".nav-link");
const icon = document.querySelector("#menu-icon i");

menu.forEach((element) => {
	element.addEventListener("click", () => {
		elements.classList.toggle("active");
		icon.classList.toggle("active");
	});
});
//Animation on scroll........................
ScrollReveal({ distance: "60px", duration: 2000, delay: 400 });

ScrollReveal().reveal(".hero-textbox h1, .hero-textbox p", {
	delay: 110,
	origin: "left",
	// interval: 500,
	duration: 2000,
	distance: "100px",
});
ScrollReveal().reveal(".hero-img", {
	delay: 110,
	origin: "right",
	// interval: 500,
	duration: 2000,
	distance: "100px",
});
ScrollReveal().reveal(".memecoin", {
	delay: 110,
	origin: "left",
	// interval: 500,
	duration: 2000,
	distance: "100px",
});

ScrollReveal().reveal(".about p", {
	delay: 110,
	origin: "right",
	interval: 800,
	duration: 1500,
	distance: "150px",
});

ScrollReveal().reveal(".connect-img, .token-img", {
	delay: 110,
	origin: "right",
	duration: 1500,
	distance: "150px",
});
ScrollReveal().reveal(".roadmap-img2", {
	delay: 100,
	origin: "right",
	duration: 1500,
	distance: "150px",
});

if (window.innerWidth >= 768) {
	// Apply ScrollReveal animation only on larger screens
	ScrollReveal().reveal(".logo, .nav-item", {
		delay: 100,
		origin: "bottom",
		duration: 1500,
		distance: "30px",
	});
}