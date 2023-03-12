const celciusEl = document.getElementById("celcius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");





function calculateTemperature(event) {
    const currentValue = +event.target.value; //the + converts the value to number in case a string is returned

    switch (event.target.name) {
        //.toFixed(2) returns the value to decimal places
        case "celcius":
            fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2)
            kelvinEl.value = (currentValue + 273.15).toFixed(2)
            break;
        case "fahrenheit":
            celciusEl.value = ((currentValue - 32) / 1.8).toFixed(2)
            kelvinEl.value = (((currentValue - 32) * 5 / 9) + 273.15).toFixed(2)
            break;
        case "kelvin":
            fahrenheitEl.value = (((currentValue - 273.15) * 1.8) + 32).toFixed(2)
            celciusEl.value = (currentValue - 273.15).toFixed(2)
            break;

        default:
            break;
    }


    console.log(event.target.name, event.target.value);

}