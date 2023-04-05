          // Get a reference to the first drop down:
          var selectbox1 = document.getElementById('mySelect');
          var selectbox2 = document.getElementById('mySelect2');
          var selectbox3 = document.getElementById('mySelect3');

          selectbox2.addEventListener("change", changer);

function buttonFunction(carName, event) {
  console.log("carName value:", carName); // debugging statement
  var imagePath = "./cars/";
  var imageSource = imagePath + carName + ".jpg";
  console.log("imageSource value:", imageSource); // debugging statement
  document.getElementById("imageContainer").src = imageSource;
  event.preventDefault(); // prevent form from submitting
}
        
          function changer() {
            // Get the value of the first two select boxes
            const selected = selectbox1.value + selectbox2.value;
            //switch for set the options of the third select box based on the selected value
            
            switch (selected) {
              case 'frontfwd':
                selectbox3.innerHTML = `
                <option disabled="disabled">Induction Type</option>
                <option value="avantime">Turbocharged</option>
                <option value="a2">Supercharged</option>`;
                break;

              case 'frontrwd':
                selectbox3.innerHTML = `
                <option disabled="disabled">Induction Type</option>
                <option value="cygnet">Naturally Aspirated</option>`;
                break;

              case 'frontawd':
                selectbox3.innerHTML = `
                <option disabled="disabled">Induction Type</option>
                <option value="alto">Turbocharged</option>`;
                break;

              case 'midfwd':
                selectbox3.innerHTML = `
                <option disabled="disabled">Induction Type</option>
               <option value="europa">Turbocharged</option>`;
                break;

              case 'midrwd':
                selectbox3.innerHTML = `
                <option disabled="disabled">Induction Type</option>
                <option value="autozam">Turbocharged</option>
                <option value="previa">Supercharged</option>
                <option value="nano">Naturally Aspirated</option>`;
                break;

              case 'midawd':
                selectbox3.innerHTML = `
                <option disabled="disabled">Induction Type</option>
                <option value="previav8">Turbocharged</option>
                <option value="hondaz">Naturally Aspirated</option>`;
                break;

              case 'rearfwd':
                selectbox3.innerHTML = `
                <option disabled="disabled">Induction Type</option>
                <option value="gregory">Naturally Aspirated</option>`;
                break;

              case 'rearrwd':
                selectbox3.innerHTML = `
                <option disabled="disabled">Induction Type</option>
                <option value="meow">Electric</option>
                <option value="smart">Turbocharged</option>
                <option value="peaCar">Naturally Aspirated</option>`;
                break;

              case 'rearawd':
                selectbox3.innerHTML = `
                <option disabled="disabled">Induction Type</option>
                <option value="itaipu">Electric</option>`;
                break;
            }
          }