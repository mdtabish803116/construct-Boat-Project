
 import navbar from "./navbar.js";


 let header = document.getElementById("header");



  header.innerHTML = navbar();


let data = [{img : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_14283327-13d2-44d7-8849-7f1e103b2968_255x255.png?v=1645014291",
title : "Airdopes 441 Sunburn Edition",
price : "2999.00",
  },
{img : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_477b0686-02b2-4289-9e53-d663dfb08e37_255x255.png?v=1645016541",
title : "boAt Rockerz 550 Sunburn Edition",
price : "1999.00",

 },
{img : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_d46d18bd-17a2-417a-af86-9f851bdf7068_255x255.png?v=1645083010",
title : "boAt BassHeads 172 Sunburn Edition",
price : "549.00",

 },
{img : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_3359e1b6-e859-4856-a01f-94fa78a5777e_255x255.png?v=1645082189",
title : "boAt Stone 1200F Sunburn Edition",
price : "3999.00",

  },
{img : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_f295a600-2857-4ff8-940c-3873fc2f1367_255x255.png?v=1645015211",
title : "boAt BassHeads 152 Sunburn Edition",
price : "549.00",

  },
{img : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_f42fc2b0-06e8-4b30-b570-b88583c504a1_255x255.png?v=1645083199",
title : "boAt Airdopes 381 Sunburn Edition",
price : "2499.00",

  },
{img : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_b87626c2-936f-4ee6-a35a-7fddc8ad9746_255x255.png?v=1645017832",
title : "boAt Stone 1200 Sunburn Edition ",
price : "3999.00",

  }

];
let container  = document.getElementById("container");



let sortbtn = document.getElementById("sort_item");

boat(data);




let product = JSON.parse(localStorage.getItem("cart"));
if(product == null){
localStorage.setItem("cart",JSON.stringify([]));
}



function boat(data){
container.innerHTML = "";
data.forEach((user) =>{
let data_card = document.createElement("div");
let img = document.createElement("img");
img.src = user.img;
let title = document.createElement("p");
title.textContent = user.title;
let price = document.createElement("p");
price.textContent = `Rs. ${user.price}`;

let cart_btn = document.createElement("button");
cart_btn.textContent = "Add to Cart";
cart_btn.onclick = function(){
add_to_cart(user);
}
data_card.append(img , title , price , cart_btn);

container.append(data_card);

});
}

function add_to_cart(prod){
setTimeout(function() {
  display(prod);
}, 1000);
let cart = JSON.parse(localStorage.getItem("cart")); 
cart.push(prod);

localStorage.setItem("cart",JSON.stringify(cart));

}

function display(prod){  
let prod_div = document.createElement("div");
prod_div.textContent = prod.title;
alert(`${prod_div.textContent}\n  Added to the cart succesfully `);

}

  sortbtn.addEventListener("change" , sortProducts);
  
function sortProducts(){

let sort_criteria = sortbtn.value; //"featured" , "low" , "high"
let updated_data = data.sort((prodA , prodB) =>{
if(sort_criteria == "low"){
 return parseInt(prodA.price) - parseInt(prodB.price);
}
else if(sort_criteria == "high"){
 return parseInt(prodB.price) - parseInt(prodA.price);
}
});
console.log(updated_data);
boat(updated_data);

}
