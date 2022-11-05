// !To styling specific element
document.querySelector(".btn").style.color = "black";

// !To get the class name of specific element
document.querySelector("button").classList;

// !To add another class in specific element
document.querySelector(".btn").classList.add("class-bg-red");
document.querySelector("h1").classList.add("huge");

// !Removing another class in specific element
document.querySelector("button").classList.remove("class-bg-red");

// !To add and remove another class in specific element like an toggle on/off
document.querySelector("button").classList.toggle("class-bg-red");

// !Difference between (innerHTML) and (textContent)
// !(innerHTML)
document.querySelector("h1").innerHTML; // this will get the content of the element included <span></span> or <strong></strong> or <em></em> tag
document.querySelector("h1").innerHTML = "<em>Good Bye</em>"; // so you can also change the text content of that element with another tag element

// !(textContent)
document.querySelector("h1").textContent; // this will only get the text value of the element

// !Check the attributes of specific element
document.querySelector("a").attributes;

// !Get attribute of specific element
document.querySelector("a").getAttribute("href");

// !Setting attribute of specific element
document.querySelector("a").setAttribute("href", "https://www.bing.com");
