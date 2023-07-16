var catSelection1 = document.getElementById('catSelection');
var text = document.getElementById("displayText");
var textNames = document.getElementById("carNamesText");

function buttonFunction(catSelection1, event) {
    console.log("catSelection1 value:", catSelection1); // debugging statement
    var imagePath = "catIMGs/";
    var imageSource = imagePath + catSelection1 + ".jpg";
    console.log("imageSource value:", imageSource); // debugging statement
    document.getElementById("imageContainer2").src = imageSource;
    event.preventDefault(); // prevent form from submitting

    /*replace console.log lines with text.innerHTML = ""; in the switch case code block below*/
    switch (catSelection1) {
          case "persian":
            textNames.innerHTML = "Rolls Royce Phantom";
            text.innerHTML ="*Money, money, money*<br>*Always sunny*<br>*In the rich man's world*<br>(what a hypocrite I am, using this song on the website about cars)";
            break;
          case "siamese":
            textNames.innerHTML = "Porsche 911 Sport Classic";
            text.innerHTML = "Two iconics together";
            break;
          case "mainecoon":
            textNames.innerHTML = " Ford F-250 Super Duty";
            text.innerHTML = "Both are over sized from their kind and one of them is still count as car and other one is cat ";
            break;
          case "savannah":
            textNames.innerHTML = "Mega Track";
            text.innerHTML = "I think their looks explain everything (and both are beautiful and one of thier kind)";
            break;
          case "scottish":
            textNames.innerHTML = "WILL.I.AMG";
            text.innerHTML = "Both shouldn't exit<br>(THIS CAT BORN WITH MUSCHLE PAIN AND HEART PROBLEM)";
            break;
          case "sphynx":
            textNames.innerHTML = "EQB";
            text.innerHTML = "Both are hairless and both are ugly <br>(sorry sphynx owners but you know it is true)";
            break;
          case "bornana":
            textNames.innerHTML = "GTV6";
            text.innerHTML = "Beautiful, fun but problematic. Everybody admires but nobody wants to take care of them";
            break;
          case "black":
            textNames.innerHTML = "E39 M5";
            text.innerHTML = "Elegant, priceless(!) some people think it brings bad luck (or insane repair cost)";
            break;
          case "zelda":
            textNames.innerHTML = "Dump Truck";
            text.innerHTML = "She can eat everything she found, and has a \"dump-truck\". Don't let the her look fools you";
            break;
          default:
            textNames.innerHTML = null;
            text.innerHTML = "(DISCLAIMER: This website believes in cat supremacy.)";
      }
}