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
	delay: 150,
	origin: "right",
	duration: 500,
	distance: "150px",
});

if (window.innerWidth >= 768) {
	// Apply ScrollReveal animation only on larger screens
	ScrollReveal().reveal(".logo, .fe", {
		delay: 100,
		origin: "bottom",
		duration: 2000,
		distance: "100px",
	});
}
ScrollReveal().reveal(".buy-param", {
	delay: 50,
	origin: "left",
	duration: 2000,
	distance: "100px",
});

document.addEventListener("DOMContentLoaded", function () {
	var typedInitialized = false;
	var buySection = document.getElementById("buy");

	// Function to initialize Typed animation
	function initializeTyped() {
		if (!typedInitialized) {
			var typed = new Typed("#typed", {
				strings: [
					"download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.",
				],
				typeSpeed: 0, // typing speed in milliseconds
				loop: false, // loop the animation
				showCursor: false, // hide the cursor
			});
			var typed2 = new Typed("#typed2", {
				strings: [
					"have ETH in your wallet to switch to $PEPE. If you don’t have any ETH, you can buy directly on  metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.",
				],
				typeSpeed: 0, // typing speed in milliseconds
				loop: false, // loop the animation
				showCursor: false, // hide the cursor
			});
			var typed3 = new Typed("#typed3", {
				strings: [
					"connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $PEPE token address into Uniswap, select Pepe, and confirm. When Metamask prompts you  for a wallet signature, sign.",
				],
				typeSpeed: 0, // typing speed in milliseconds
				loop: false, // loop the animation
				showCursor: false, // hide the cursor
			});
			var typed4 = new Typed("#typed4", {
				strings: [
					"switch ETH for $PEPE. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.",
				],
				typeSpeed: 0, // typing speed in milliseconds
				loop: false, // loop the animation
				showCursor: false, // hide the cursor
			});
			typedInitialized = true;
		}
	}

	// Callback function for intersection observer
	function handleIntersect(entries) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting && !typedInitialized) {
				initializeTyped();
			}
		});
	}

	// Set up the Intersection Observer
	var observer = new IntersectionObserver(handleIntersect, {
		root: null,
		rootMargin: "0px",
		threshold: 0,
	});

	// Start observing the "buy" section
	observer.observe(buySection);
});
