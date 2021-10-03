function ToggleMenu() {
	const menuToggle = document.querySelector(".menuToggle");
	const navigation = document.querySelector(".navigation");
	menuToggle.classList.toggle("active");
	navigation.classList.toggle("active");
}
window.addEventListener("scroll", function () {
	var header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
});
