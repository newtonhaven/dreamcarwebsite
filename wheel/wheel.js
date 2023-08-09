// Path: wheel\wheel.js
const rotatingImage = document.getElementById("imageContainer");
const rotateButton = document.getElementById("rotate-button");
var changeSRC = document.getElementById("imageContainer2");
var carName = document.getElementById("carNamesText");
var displayText = document.getElementById("displayText");
let rotationDegree = 0;
let jsonData = null;
let rand = null;

fetch("wheel/wheel.json")
  .then((response) => response.json())
  .then((data) => {
    jsonData = data; // Store the JSON data in the variable
    console.log("Data loaded successfully"); //debug statement
  })
  .catch((error) => {
    console.log("Error loading JSON data"); //debug statement
    alert("Sorry, there was a problem, please report.");
  });

rotateButton.addEventListener("click", () => {
  rand = getRndInteger();
  console.log("Random number: " + rand); //debug statement
  jsonDisplayer(rand);
  rotationDegree += 3600;
  rotatingImage.style.transform = `rotate(${rotationDegree}deg)`;
});

function jsonDisplayer(rand) {
  console.log("JSON data displayed"); //debug statement

  let foundCar = null;
  if (jsonData) {
    console.log("searching, first if statement");
    for (var car of jsonData) {
      if (car.id == rand) {
        foundCar = car;
        console.log("Car found"); //debug statement
        break;
      }
    }
  }

  if (foundCar) {
    console.log("loading, second if statement"); //debug statement
    setTimeout(() => {
      changeSRC.src = foundCar.path;
      carName.innerHTML = foundCar.title;
      displayText.innerHTML = foundCar.description;
      console.log(changeSRC.src); //debug statement
    }, 1000);
  }
}

function getRndInteger() {
  console.log("Random number generated"); //debug statement
  return Math.floor(Math.random() * 30) + 1;
}