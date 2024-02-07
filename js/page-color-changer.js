const body = document.querySelector("body");
const redSlider = document.querySelector("#red");
const greenSlider = document.querySelector("#green");
const blueSlider = document.querySelector("#blue");

redSlider.addEventListener('change', colorNumber);

blueSlider.addEventListener('change', colorNumber);

greenSlider.addEventListener('change', colorNumber);

function colorNumber() {
    let redLight = Number(redSlider.value);
    let blueLight = Number(blueSlider.value);
    let greenLight = Number(greenSlider.value);
    body.style.backgroundColor = rgb(redLight, greenLight, blueLight);
}

