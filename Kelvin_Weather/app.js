// Todays forecast in kelvin.
const kelvin = 0;
// Todays forecast in celcius which is kelvin - 273.
const celcius = kelvin - 273;
//Todays forecast in Fahrenheit which is Ceçlcius * (9/5) + 32
let fahrenheit = celcius * (9/5) + 32;

//Use math foor to round down the previous result. 
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//Newton scale is converted by Ceclius * (33/100)
let newton = celcius * (33/100);

//Round down the previous result.
newton = Math.floor(newton);

console.log(`The temperature is ${newton} in the newton scale.`)