import navbar from "./navbar.js";
let navheader = document.querySelector(".nav-header");

navheader.innerHTML = navbar();
console.log(navbar());
var slides = document.querySelectorAll(".slide");

slides.forEach((element, i) => {
  element.style.transform = `translateX(${100 * i}%)`;
});
var curslide = 0;
setTimeout(() => {
  setInterval(() => {
    if (curslide === maxslide - 1) {
      curslide = 0;
    } else {
      curslide++;
    }
    slides.forEach((element, i) => {
      element.style.transform = `translateX(${100 * (i - curslide)}%)`;
    });
  }, 5000);
}, 5000);
const btnRight = document.getElementById("right-arrow");
const btnLeft = document.getElementById("left-arrow");
const maxslide = slides.length;
btnRight.addEventListener("click", function () {
  if (curslide === maxslide - 1) {
    curslide = 0;
  } else {
    curslide++;
  }

  slides.forEach((element, i) => {
    element.style.transform = `translateX(${100 * (i - curslide)}%)`;
  });
});
btnLeft.addEventListener("click", function () {
  if (curslide === 0) {
    curslide = maxslide - 1;
  } else {
    curslide--;
  }
  slides.forEach((element, i) => {
    element.style.transform = `translateX(${100 * (i - curslide)}%)`;
  });
});
var curcard = 0;
let cards = document.querySelectorAll(".box");
let rightred = document.querySelector(".right-arrow-red");
let leftred = document.querySelector(".left-arrow-red");
rightred.addEventListener("click", function () {
  if ((curcard = cards.length - 1)) {
    curcard = 0;
  } else {
    curcard++;
  }
  cards.forEach((element, i) => {
    element.style.left = "-30%";
  });
});
leftred.addEventListener("click", function () {
  if ((curcard = 0)) {
    curcard = curcard.length - 1;
  } else {
    curcard--;
  }
  cards.forEach((element, i) => {
    element.style.left = "30%";
  });
});
