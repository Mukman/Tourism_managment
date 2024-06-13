let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-contioner");

let formBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form-contioner");
let formClose = document.querySelector("#form-close");
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let imgBtn = document.querySelectorAll(".img-btn");

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});
formBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
});
formClose.addEventListener("click", () => {
  loginForm.classList.remove("active");
});
imgBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");
    let sr = btn.getAttribute("data-src");
    document.querySelector("#img-slider").src = sr;
  });
});

var swiper = new Swiper(".review-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*var currentIndex = 0;
var accommodationGroups = document.getElementsByClassName(
  "accommodation-group"
);

function showNextAccommodation() {
  accommodationGroups[currentIndex].classList.remove("slide");
  currentIndex = (currentIndex + 1) % accommodationGroups.length;
  accommodationGroups[currentIndex].classList.add("slide");
}

setInterval(showNextAccommodation, 5000); // Change image every 5 seconds (5000 milliseconds)*/
/*var currentIndex = 0;
var accommodationItems = document.getElementsByClassName("accommodation-item");

function showNextAccommodation() {
  accommodationItems[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % accommodationItems.length;
  accommodationItems[currentIndex].classList.add("active");
}

setInterval(showNextAccommodation, 5000); // Change image every 5 seconds (5000 milliseconds)*/

/*const testiSliders = document.querySelectorAll(".js-testimonial-slider");
const rightArrow = document.querySelector(".next-btn");
const leftArrow = document.querySelector(".prev-btn");
// slider
let currentSlide = 0;
testiSliders.forEach((s, i) => {
  s.style.transform = `translateX(${100 * i}%)`;
});
rightArrow.addEventListener("click", () => {
  if (currentSlide === testiSliders.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  testiSliders.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
  });
});

leftArrow.addEventListener("click", () => {
  if (currentSlide === 0) {
    currentSlide = testiSliders.length - 1;
  } else {
    currentSlide--;
  }
  testiSliders.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
  });
});*/
