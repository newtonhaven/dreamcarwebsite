var catSelection1 = document.getElementById('catSelection');

function buttonFunction(catSelection1, event) {
    console.log("catSelection1 value:", catSelection1); // debugging statement
    var imagePath = "cats/";
    var imageSource = imagePath + catSelection1 + ".jpg";
    console.log("imageSource value:", imageSource); // debugging statement
    document.getElementById("imageContainer2").src = imageSource;
    event.preventDefault(); // prevent form from submitting
}
