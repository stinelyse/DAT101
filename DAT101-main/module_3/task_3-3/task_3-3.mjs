"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
function printTodaysdate() {
let today = new Date();

let date1 = today.toLocaleDateString('no-NB',{
weekday: "long",
year: "numeric",
month: "long",
day: "numeric"
} );

printOut(date1);
}

printTodaysdate();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
function showDateAndCountdown() {
   
    let today = new Date();
    
    
    let releaseDate = new Date('2025-05-14');
    
    let daysLeft = Math.round((releaseDate - today) / (24 * 60 * 60 * 1000));
    
    let norwegianDate = today.toLocaleDateString('no-NB', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        
    });
    
   printOut("Dagens dato: " + norwegianDate);
   printOut("Bare " + daysLeft + "dager igjen til den episke lanseringen av 2XKO!");
}
showDateAndCountdown();
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
function circle(radius) {
   
    let diameter = 2 * radius;
    let circumference = 2 * Math.PI * radius;
    let area = Math.PI * Math.pow(radius, 2);
    
    printOut("Diameter is " + diameter);
    printOut("Circumference is " + circumference.toFixed(2));
    printOut("Area is " + area.toFixed(2)); 
}

circle(5);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
function object(rectangle) {
   
    let circumference = 2 * (rectangle.width + rectangle.height);
    let area = rectangle.width * rectangle.height;
    
    printOut("Cirumference is " + circumference);
    printOut("Areal is " + area);
}

object({ width: 5, height: 10 });
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
function convertTemperature(temp, scale) {
    let celsius, fahrenheit, kelvin;

    if (scale === "C") {
        celsius = temp;
        fahrenheit = Math.round((celsius * 9/5) + 32);
        kelvin = Math.round(celsius + 273.15);
    } else if (scale === "F") {
        fahrenheit = temp;
        celsius = Math.round((fahrenheit - 32) * 5/9);
        kelvin = Math.round(celsius + 273.15);
    } else if (scale === "K") {
        kelvin = temp;
        celsius = Math.round(kelvin - 273.15);
        fahrenheit = Math.round((celsius * 9/5) + 32);
    } else {
        printOut("Ugyldig skala");
        return;
    }

    printOut("Celsius: " + celsius);
    printOut("Fahrenheit: " + fahrenheit);
    printOut("Kelvin: " + kelvin);
}

convertTemperature(25, "C");

printOut(newLine);


printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
function calculateNetPrice(gross, vatGroup) {
    let vatRate;

    if (vatGroup.toLowerCase() === "normal") {
        vatRate = 25;
    } else if (vatGroup.toLowerCase() === "food") {
        vatRate = 15;
    } else if (vatGroup.toLowerCase() === "hotel" || vatGroup.toLowerCase() === "transport" || vatGroup.toLowerCase() === "cinema") {
        vatRate = 10;
    } else {
        printOut("Unknown VAT group!");
        return NaN;
    }

  
    let netPrice = (gross * 100) / (vatRate + 100);
    return netPrice;
}


printOut(calculateNetPrice(1000, "normal"));  
printOut(calculateNetPrice(1000, "food"));    
printOut(calculateNetPrice(1000, "hotel"));   
printOut(calculateNetPrice(1000, "goblins")); 


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
