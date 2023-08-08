// Path: wheel\wheel.js

const rotatingImage = document.getElementById("imageContainer");
const rotateButton = document.getElementById("rotate-button");
var changeSRC = document.getElementById("imageContainer2");

let rotationDegree = 0;

rotateButton.addEventListener("click", () => {
    rotationDegree += 3600;
    setTimeout(() => {changeSRC.src="https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg"; },1000);
    
    rotatingImage.style.transform = `rotate(${rotationDegree}deg)`;
});


