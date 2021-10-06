function ToggleMenu() {
	const menuToggle = document.querySelector(".menuToggle");
	const navigation = document.querySelector(".navigation");
	menuToggle.classList.toggle("active");
	navigation.classList.toggle("active");
}
window.addEventListener("scroll", function () {
	var header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
})
function addClass() {
	var v = document.getElementById("navigation");
	v.classList.add("active");
}
var btns = document.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  	btns[i].addEventListener("click", function() {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace("active", "");
		this.classList.add("active");
  	});
}
;
