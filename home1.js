import navbar from "./navbar.js";
let navheader = document.querySelector(".nav-header");

navheader.innerHTML = navbar();
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
// ALL SLIDER COMPONENTS
var curcard = 0;
let cards = document.querySelectorAll(".box-1");
let cards2 = document.querySelectorAll(".box-2");
let cards3 = document.querySelectorAll(".box-3");
let cards4 = document.querySelectorAll(".box-4");
let cards5 = document.querySelectorAll(".box-5");
let rightred = document.getElementById("right-arrow-red");
let leftred = document.getElementById("left-arrow-red");
let rightred1 = document.getElementById("right-arrow-red1");
let leftred1 = document.getElementById("left-arrow-red1");
let rightred2 = document.getElementById("right-arrow-red2");
let leftred2 = document.getElementById("left-arrow-red2");
let rightred3 = document.getElementById("right-arrow-red3");
let leftred3 = document.getElementById("left-arrow-red3");
let rightred4 = document.getElementById("right-arrow-red4");
let leftred4 = document.getElementById("left-arrow-red4");
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
rightred1.addEventListener("click", function () {
  if ((curcard = cards.length - 1)) {
    curcard = 0;
  } else {
    curcard++;
  }
  cards2.forEach((element, i) => {
    element.style.left = "-30%";
  });
});
leftred1.addEventListener("click", function () {
  if ((curcard = 0)) {
    curcard = curcard.length - 1;
  } else {
    curcard--;
  }
  cards2.forEach((element, i) => {
    element.style.left = "30%";
  });
});
rightred2.addEventListener("click", function () {
  if ((curcard = cards.length - 1)) {
    curcard = 0;
  } else {
    curcard++;
  }
  cards3.forEach((element, i) => {
    element.style.left = "-30%";
  });
});
leftred2.addEventListener("click", function () {
  if ((curcard = 0)) {
    curcard = curcard.length - 1;
  } else {
    curcard--;
  }
  cards3.forEach((element, i) => {
    element.style.left = "30%";
  });
});
rightred3.addEventListener("click", function () {
  if ((curcard = cards.length - 1)) {
    curcard = 0;
  } else {
    curcard++;
  }
  cards4.forEach((element, i) => {
    element.style.left = "-30%";
  });
});
leftred3.addEventListener("click", function () {
  if ((curcard = 0)) {
    curcard = curcard.length - 1;
  } else {
    curcard--;
  }
  cards4.forEach((element, i) => {
    element.style.left = "30%";
  });
});
rightred4.addEventListener("click", function () {
  if ((curcard = cards.length - 1)) {
    curcard = 0;
  } else {
    curcard++;
  }
  cards5.forEach((element, i) => {
    element.style.left = "-30%";
  });
});
leftred4.addEventListener("click", function () {
  if ((curcard = 0)) {
    curcard = curcard.length - 1;
  } else {
    curcard--;
  }
  cards5.forEach((element, i) => {
    element.style.left = "30%";
  });
});
//NEW LAUNCHES SLIDER
var slidedata = [
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/425_300x.png?v=1645772065",
    heading: "ROCKERZ 425",
    description:
      "Immerse in the vibe with Rockerz 425 & its powerful 40mm drivers. With 25H of playback, enjoy every track without a break. Gamers, we got you! Rockerz 425 comes with BEAST™ Mode — enable it with a dedicated button & make precise kills with low latency. Ran out of juice? No problem! With ASAP Charge, get 10H of backup by charging only for 10MINS. With its ENx Technology be clearly heard. What’s more? Enjoy dual pairing, Bluetooth v5.2, Easy Access Control, & a perfect adaptive fit to cater to your long gaming hours!",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Watch-Blaze-Shot-2.4_300x.png?v=1645771960",
    heading: "Watch Blaze",
    description:
      "Whatever you need to hustle to your goal — now do it Faster with Blaze. It’s powered by Apollo 3 Blue Plus high-performance processor that makes its interface 25% faster. Navigate through your world effortlessly with its 1.75” HD display — the largest by boAt. We understand your hustle, that’s why its Fast Charge technology gives 24HRS of backup with just 10MINS of charge. Keep your fitness in check with heart rate and SpO2 monitoring, daily activity tracker, and 14 sport modes. Smart Watch Blaze — for trailblazers like you.",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/nl-1750_300x.jpg?v=1645417150",
    heading: "boAt Aavante Bar 1750",
    description:
      "Make your movie nights 10X better with Aavante Bar 1750's theatre-like sound. Leave behind old ways of entertainment and immerse into a cinematic experience with the 120 Watt RMS boAt Signature Sound and 80W wireless subwoofer. Feel the thump of deep and thrilling bass and revolutionize how you listen to your entertainment. Its multiple EQ Modes is all you need to set the vibe right, including Jazz, Pop, Rock, and Classical. Don't move an inch to navigate through its multiple options with its Easy Access Remote. Revolutionize your entertainment with Aavante Bar 1750.",
  },
];
var curslidedata = 0;
let right_arrow5 = document.getElementById("right-arrow-red5");
let left_arrow5 = document.getElementById("left-arrow-red5");
right_arrow5.addEventListener("click", function () {
  if (curslidedata == slidedata.length - 1) {
    curslidedata = 0;
  } else {
    curslidedata++;
  }
  setTimeout(() => {
    let img = document.getElementById("inner-img");
    img.src = slidedata[curslidedata].img;
    let head = document.querySelector(".inner-right-head");
    head.textContent = slidedata[curslidedata].heading;
    let description = document.querySelector(".inner-right-content");
    description.textContent = slidedata[curslidedata].description;
  }, 500);
});
left_arrow5.addEventListener("click", function () {
  if (curslidedata == 0) {
    curslidedata = slidedata.length - 1;
  } else {
    curslidedata--;
  }
  setTimeout(() => {
    let img = document.getElementById("inner-img");

    img.src = slidedata[curslidedata].img;

    let head = document.querySelector(".inner-right-head");
    head.textContent = slidedata[curslidedata].heading;
    let description = document.querySelector(".inner-right-content");
    description.textContent = slidedata[curslidedata].description;
  }, 500);
});
//More dropdown js
var morelists = [
  "Gifting",
  "Offer zone",
  "Do what FLoats your boAt",
  "Meet the boAtheads",
  "Earn rs100",
];
let more = document.querySelector(".more");
more.addEventListener("mouseenter", function (e) {
  e.preventDefault();
  let div = document.createElement("div");

  let ul = document.createElement("ul");
  ul.style.display = "flex";
  ul.style.flexDirection = "column";
  ul.style.justifyContent = "space-between";
  ul.style.height = "80%";
  ul.style.paddingTop = "10px";
  ul.style.paddingBottom = "10px";
  for (var i = 0; i < morelists.length; i++) {
    let a = document.createElement("a");
    a.href = `${morelists[i]}.html`;
    let li = document.createElement("li");
    li.setAttribute("class", "morelists");
    a.style.textDecoration = "none";

    li.textContent = morelists[i];
    a.append(li);
    ul.append(li);
  }
  div.append(ul);

  div.style.width = "250px";
  div.style.height = "200px";
  div.style.backgroundColor = "black";
  div.style.position = "absolute";
  div.style.zIndex = "1";

  more.append(div);
});
more.addEventListener("mouseleave", function (e) {
  e.preventDefault();
  more.innerHTML = "";
  more.textContent = "More";
});
//Add to cart functionality
var cartitems;
cartitems = JSON.parse(localStorage.getItem("cartitems"));
if (!cartitems) {
  localStorage.setItem("cartitems", JSON.stringify([]));
}
displaycarditems(cartitems);

function displaycarditems(data) {
  let spancart = document.querySelector(".cart-item");
  spancart.textContent = data.length;
}

let cartbtn = document.querySelectorAll(".cart-btn");
cartbtn.forEach(function (element) {
  element.addEventListener("click", function (e) {
    cartitems = JSON.parse(localStorage.getItem("cartitems"));
    e.preventDefault();
    console.log("ppp");
    const boxitem = element.closest(".box");
    cartitems.push(boxitem);
    localStorage.setItem("cartitems", JSON.stringify(cartitems));
    displaycarditems(cartitems);
  });
});


 
