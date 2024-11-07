//DOM - DOCUMENT OBJECT MODEL

//Accessing using ID
//get element by id can get one class
let elementWithId = document.getElementById("first-div");
console.log(elementWithId);
elementWithId.textContent = "Div 1"; //update text in HTML

//Accessing using Class
//Sample of HTML collections using class with "sample-div"
//get element by classname can get multiple classes
const elemntwithClass = document.getElementsByClassName("sample-div");
console.log(elemntwithClass); //shows an HTML collection
//HTML collection - groupings of HTML
elemntwithClass[1].textContent = "Div 2"; // updated the second html collection which has the class = second-div

//Accessing Element using Tag Name
//Uses HTML collections because there are many sighted list
let listItems = document.getElementsByTagName("li");
console.log(listItems);
listItems[0].style.color = "tomato";

//Using querySelector
//select only one and the first index
let orderlist = document.querySelector(".ordered-list");
console.log(orderlist);
orderlist.style.backgroundColor = "red";

//Using querySelectorAll
const headings = document.querySelectorAll("h3");
console.log(headings);
//Requires a forEach function
headings.forEach(function (heading) {
  heading.style.backgroundColor = "blue";
  heading.style.color = "white";
});

//Updating Attributes
const day = document.getElementById("day-night-icon");
day.setAttribute(
  "src",
  "https://cdn-icons-png.flaticon.com/512/3688/3688129.png"
);

//Appending New Elements - Try to access element in the parent element
const parent = document.querySelector("#parent-element");
const child = document.createElement("div");
child.textContent = "Child element";
parent.appendChild(child);

//Remove Element
const removed = document.getElementById("element-to-be-removed");
removed.remove();

//Adding EventListeners
//Makes the content dark
let dark = document.querySelector("#dark-mode-btn");
dark.addEventListener("click", function () {
  const page = document.getElementById("page-container");
  page.style.backgroundColor = "black";
  page.style.color = "white";

  let text = document.getElementById("page-mode-text");
  text.textContent = "Dark Mode";
});

//Changes back (technically it changes as well but there's no function of revert)
//Using removeEventListener could be useful tho but more to that later
// let reset = document.getElementById("reset");
// reset.addEventListener("click", function () {
//   const page = document.getElementById("page-container");
//   page.style.backgroundColor = "aliceblue";
//   page.style.color = "black";

//   let text = document.getElementById("page-mode-text");
//   text.textContent = "Light Mode";
// });

let darkModeBtn = document.querySelector("#dark-mode-btn");
darkModeBtn.addEventListener("click", function () {
  let pageContainer = document.getElementById("page-container");
  let pageModeText = document.getElementById("page-mode-text");
  if (darkModeBtn.textContent == "Dark Mode") {
    pageContainer.style.backgroundColor = "black";
    pageContainer.style.color = "white";
    pageModeText.textContent = "Dark Mode";
    darkModeBtn.textContent = "Light Mode";
  } else {
    pageContainer.style.backgroundColor = "white";
    pageContainer.style.color = "black";
    pageModeText.textContent = "Light Mode";
    darkModeBtn.textContent = "Dark Mode";
  }
});

//Different Naming Conventions
//camelCase
//kebab-case
//snake_case
