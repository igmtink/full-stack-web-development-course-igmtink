// !Get elements by tag name example getting all (list) and it will return an array [li-1, li-2, li-3]
document.getElementsByTagName("li");

// !Getting length of elements by tag name example all (list)
document.getElementsByTagName("li").length;

// !Styling specific (list) in array
document.getElementsByTagName("li")[2].style.color = "purple";

// !Get elements by class name example getting all elemet that have (btn) class name and it will return an array [btn-1, btn-2, btn-3]
document.getElementsByClassName("btn");

// !Get element by id () and it is single element
document.getElementById("title");

// !Setting the value of text of the element
document.getElementById("tittle").innerHTML = "Good Bye";

// !Get element in a specific query selector, also you can combine selector
document.querySelector(".class-name"); // class name
document.querySelector("#id"); // id
document.querySelector("h1"); // tag name
document.querySelector("li a"); // link inside list
document.querySelector("li.item"); // list that have item class name

// !Get all elements in a specific query selector, also you can combine selector and it will return an array
document.querySelectorAll("#list .item"); // element that have item class name inside list id
