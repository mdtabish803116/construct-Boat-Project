import navbar from "./navbar.js";
let navheader = document.querySelector(".nav-header");

navheader.innerHTML = navbar();

//Rendering items
var itemslists = [
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/viper-green_540x.png?v=1642405569",
    title: "boAt Airdopes 131 - Wireless Earbuds",
    price: "Rs. 1,299.00 ",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5f7d33ad-39a9-4426-836e-c300814839b9_255x255.png?v=1625046105",
    title: "boAt Rockerz 235 V2",
    price: "Rs. 999.00",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3.1_540x.png?v=1644401072",
    title: "Watch Blaze",
    price: "Rs. 3,499.00",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main4_540x.png?v=1641801688",
    title: "boAt Rockerz 330",
    price: "Rs. 1,399.00",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/245v2_main_1_255x255.png?v=1627276362",
    title: "boAt Airdopes 141",
    price: "Rs. 3,499.00",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_529ecf13-c993-4fe7-a2d6-9357f1a47db4_540x.png?v=1645164257",
    title: "Watch Blaze",
    price: "Rs. 3,499.00",
  },
];
let bodydiv = document.querySelector(".bodydiv");
for (var i = 0; i < 5; i++) {
  itemslists.forEach((element) => {
    let div = document.createElement("div");
    div.setAttribute("class", "box");
    let img = document.createElement("img");
    img.src = element.img;
    let innerdiv = document.createElement("div");
    innerdiv.setAttribute("class", "content");
    let title = document.createElement("p");
    title.textContent = element.title;
    title.setAttribute("class", "title");
    let price = document.createElement("p");
    price.textContent = element.price;
    price.setAttribute("class", "price");
    //RAdio buttons section
    let radiobtns = document.createElement("div");
    let imgb = document.createElement("img");
    imgb.src = "https://img.icons8.com/emoji/48/000000/blue-circle-emoji.png";
    let imgr = document.createElement("img");
    imgr.src = "https://img.icons8.com/emoji/48/000000/red-circle-emoji.png";
    radiobtns.append(imgb, imgr);
    radiobtns.setAttribute("class", "r-images");
    imgb.setAttribute("class", "r-img");
    imgr.setAttribute("class", "r-img");
    //Button creation section
    let btn = document.createElement("button");
    btn.textContent = "Add to cart";
    btn.setAttribute("class", "cart-btn");
    btn.classList.add("dailydealscartbtn");
    btn.setAttribute("type", "button");
    innerdiv.append(title, price, radiobtns, btn);
    div.append(img, innerdiv);
    bodydiv.append(div);
  });
}

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
console.log(cartbtn);
cartbtn.forEach(function (element) {
  element.addEventListener("click", function (e) {
    console.log("llll");
    cartitems = JSON.parse(localStorage.getItem("cartitems"));
    e.preventDefault();
    console.log("ppp");
    const boxitem = element.closest(".box");
    cartitems.push(boxitem);
    localStorage.setItem("cartitems", JSON.stringify(cartitems));
    displaycarditems(cartitems);
  });
});
