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
function addClass() {
  var v = document.getElementById("navigation");
  v.classList.add("active");
}
var btns = document.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.classList.add("active");
  });
}
function displayNews(response) {
  console.log(response.data.articles[0].title);
  let h_1 = document.querySelector(".h-1");
  let iconElement_1 = document.querySelector("#icon-1");
  let url_1 = document.querySelector(".url-1");
  h_1.innerHTML = response.data.articles[0].title;
  iconElement_1.setAttribute("src", response.data.articles[0].urlToImage);
  url_1.setAttribute("href", response.data.articles[0].url);
  ///////////////////
  let h_2 = document.querySelector(".h-2");
  let iconElement_2 = document.querySelector("#icon-2");
  let url_2 = document.querySelector(".url-2");
  h_2.innerHTML = response.data.articles[1].title;
  iconElement_2.setAttribute("src", response.data.articles[1].urlToImage);
  url_2.setAttribute("href", response.data.articles[1].url);
  /////////////////////
  let h_3 = document.querySelector(".h-3");
  let iconElement_3 = document.querySelector("#icon-3");
  let url_3 = document.querySelector(".url-3");
  h_3.innerHTML = response.data.articles[7].title;
  iconElement_3.setAttribute("src", response.data.articles[7].urlToImage);
  url_3.setAttribute("href", response.data.articles[7].url);
  //////////////////////
  let h_4 = document.querySelector(".h-4");
  let iconElement_4 = document.querySelector("#icon-4");
  let url_4 = document.querySelector(".url-4");
  h_4.innerHTML = response.data.articles[3].title;
  iconElement_4.setAttribute("src", response.data.articles[3].urlToImage);
  url_4.setAttribute("href", response.data.articles[3].url);
  ///////////////////////

  let h_5 = document.querySelector(".h-5");
  let iconElement_5 = document.querySelector("#icon-5");
  let url_5 = document.querySelector(".url-5");
  h_5.innerHTML = response.data.articles[6].title;
  iconElement_5.setAttribute("src", response.data.articles[6].urlToImage);
  url_5.setAttribute("href", response.data.articles[6].url);
  /////////////////////////////////////
  let h_6 = document.querySelector(".h-6");
  let iconElement_6 = document.querySelector("#icon-6");
  let url_6 = document.querySelector(".url-6");
  h_6.innerHTML = response.data.articles[9].title;
  iconElement_6.setAttribute("src", response.data.articles[9].urlToImage);
  url_6.setAttribute("href", response.data.articles[9].url);
}
let apiUrl = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=fc207f5e0f96464d83269deab1a32489`;
axios.get(apiUrl).then(displayNews);
