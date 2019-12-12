//Sarah Tejchma
//Audio Lab
//get div from index page
var soundButtons = document.getElementById("soundButtons");

//create array of sounds to access
var sounds = [
  "chimes_long.mp3",
  "click_clock_loop.mp3",
  "pop_10.mp3",
  "puff.mp3",
  "rustle_5.mp3"
];

var soundElements = [];

//create array of sound names
var soundNames = ["chimes", "clock", "pop", "puff", "rustle"];

//loop through all sounds and create audio tags
sounds.forEach((soundURL, idx) => {
  //the sound
  var newSound = new Audio("sounds/" + soundURL);

  //store each sound in an array
  soundElements.push(newSound);

  //create button to play the sound
  var newButton = document.createElement("button");
  (newButton.innerHTML = soundNames[idx]), soundURL, idx;

  //store the sound's index
  newButton.setAttribute("data-sound-id", idx);

  //appear onto page
  soundButtons.appendChild(newButton);

  //listen for a click on the button and invoke play sound
  newButton.addEventListener("click", playSoundInArray);
});

function playSoundInArray(event) {
  //get sound index
  var soundIndex = Number(event.target.getAttribute("data-sound-id"));

  //get sound from array
  var selectedSound = soundElements[soundIndex];

  //play selected sound
  selectedSound.play();
}

/*
//get the audio tag
var myAudio = document.getElementById("myAudio");

//myAudio.play();

//play audio
function playAudio() {
  myAudio.play();
}

//pause audio
function stopMainAudio() {
  myAudio.pause();
  myAudio.currentTime = 0;
}
*/
