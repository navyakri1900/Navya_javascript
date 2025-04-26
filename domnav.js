/** 
DOM Navigation -> The process of navigating through the structure of an html document using javascript

firstElementChild----
lastElementChild----
nextElementSibling---
*/
const element = document.getElementById("dessert");
console.log(element);
const firstChild = element.firstElementChild;
console.log(firstChild);
firstChild.style.backgroundColor ="pink"

const ulElements = document.querySelectorAll("ul");
console.log(ulElements);//all ul
ulElements.forEach((i) => {
    const firstchild = i.firstElementChild;
    console.log(firstchild)
    firstChild.style.backgroundColor = "springgreen";
});

const element3 = document.getElementById("vegetables");
const nextSibling = element3.nextElementSibling;
nextSibling.style.color ="red";

const element4 = document.getElementById("dessert");
console.log(element4)
const prevSibling = element4.previousElementSibling;
console.log(prevSibling)
prevSibling.style.textDecoration = "underline";

const element5 = document.getElementById("cream");
const parent = element5.parentElement;
console.log(parent);
parent.style.fontSize = "30px" ;

const element6 = document.getElementById("fruits");
const childern = element6.childern;
children[0].style.backgroundColor = "blue";
console.log(children);