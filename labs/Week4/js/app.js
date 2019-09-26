//Sarah Tejchma
//Animation Lab
//9-22-2019

let newHeader = document.createElement("div");
newHeader.classList.add("header");
newHeader.innerHTML = "<h1>Animation Lab</h1>";
headerHolder.appendChild(newHeader);

//set up connections and events for this rectangle div
newHeader.addEventListener("mouseover", onh1Over);
newHeader.addEventListener("mouseout", onh1Out);
newHeader.addEventListener("mousedown", onh1Click);

//this function refers to the css class to add animation for when you hover over rect
function onh1Over(event) {
  event.target.style.animationDelay = "0s";
  event.target.classList.add("h1Over");
  event.target.classList.remove("h1Out");
}

//this functionr refers to the css class to add animation for when you move outside the rect
function onh1Out(event) {
  event.target.classList.add("h1Out");
  event.target.classList.remove("h1Over");
}

//this function refers to css class so that when you click the rect it exits and dissapears off the page.
function onh1Click(event) {
  event.target.classList.add("h1Click");
}

//creating the longer rectangle div across the top of the other divs
let newRect = document.createElement("div");
newRect.classList.add("longRect");
rectHolder.appendChild(newRect);

//set up connections and events for this rectangle div
newRect.addEventListener("mouseover", onRectOver);
newRect.addEventListener("mouseout", onRectOut);
newRect.addEventListener("mousedown", onRectClick);

//this function refers to the css class to add animation for when you hover over rect
function onRectOver(event) {
  event.target.style.animationDelay = "0s";
  event.target.classList.add("rectOver");
  event.target.classList.remove("rectOut");
}

//this functionr refers to the css class to add animation for when you move outside the rect
function onRectOut(event) {
  event.target.classList.add("rectOut");
  event.target.classList.remove("rectOver");
}

//this function refers to css class so that when you click the rect it exits and dissapears off the page.
function onRectClick(event) {
  event.target.classList.add("rectClick");
}

//create a for loop to put 6 of the cards/divs onto the page
var i = 0;
for (i = 0; i < 6; i++) {
  //create and customize the card elements(purple divs)
  let newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.style.animationDelay = i * 0.1 + "s";

  //set up connections and events for the card divs below rectangle div
  newCard.addEventListener("mouseover", onCardOver);
  newCard.addEventListener("mouseout", onCardOut);
  newCard.addEventListener("mousedown", onCardClick);

  //put the cards onto the page
  cardHolder.appendChild(newCard);
}

//this function refers to the css class to add animation for when you hover over a car
function onCardOver(event) {
  event.target.style.animationDelay = "0s";
  event.target.classList.add("cardOver");
  event.target.classList.remove("cardOut");
}

//this functionr refers to the css class to add animation for when you move outside the div/card
function onCardOut(event) {
  event.target.classList.add("cardOut");
  event.target.classList.remove("cardOver");
}

//this function refers to css class so that when you click on a card it exits and dissapears off the page.
function onCardClick(event) {
  event.target.classList.add("cardClick");
}
