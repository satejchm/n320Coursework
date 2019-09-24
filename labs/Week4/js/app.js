//Sarah Tejchma
//Animation Lab
//9-22-2019

var longRect = document.querySelector("#longRect");
var cardHolder = document.querySelector("#cardHolder");

//create a for loop to put 6 of the cards/divs onto the page
var i = 0;
for (i = 0; i < 6; i++) {
  //create and customize the card elements(purple divs)
  let newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.style.animationDelay = i * 0.1 + "s";

  //set up connections and events
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
