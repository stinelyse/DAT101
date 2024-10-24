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
    vatGroup = vatGroup.toLowerCase();
    
    let vat;
    if (vatGroup === "normal") {
        vat = 25;
    } else if (vatGroup === "food") {
        vat = 15;
    } else if (vatGroup === "hotel" || vatGroup === "transport" || vatGroup === "cinema") {
        vat = 10;
    } else {
        return "Unknown VAT group!"; 
    }
    
    let net = (100 * gross) / (vat + 100);
    return net.toFixed(0); 
}

let netPrice1 = calculateNetPrice(1250, "normal"); 
let netPrice2 = calculateNetPrice(1150, "food");   
let netPrice3 = calculateNetPrice(1100, "hotel");  
let netPrice4 = calculateNetPrice(1000, "textile"); 


printOut("With tax: 1250. Net price for 'normal' VAT: " + netPrice1);
printOut("With tax: 1150. Net price for 'food' VAT: " + netPrice2);
printOut("With tax: 1100. Net price for 'hotel' VAT: " + netPrice3);
printOut(" Net price for textile: " + netPrice4);


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

function calculateSpeedDistanceTime(distance, time, speed) {
    if (
        (distance === null || distance === undefined) && 
        (time === null || time === undefined) ||
        (time === null || time === undefined) && 
        (speed === null || speed === undefined) ||
        (distance === null || distance === undefined) && 
        (speed === null || speed === undefined)
    ) {
        return NaN;
    }

    if (speed === null || speed === undefined) {
        return distance / time;
    }
    
    if (time === null || time === undefined) {
        return distance / speed;
    }
    
    if (distance === null || distance === undefined) {
        return speed * time;
    }

    return NaN;
}

printOut("Speed (when distance = 100, time = 2): " + calculateSpeedDistanceTime(100, 2, null));
printOut("Time (when distance = 100, speed = 50): " + calculateSpeedDistanceTime(100, null, 50));
printOut("Distance (when speed = 50, time = 2): " + calculateSpeedDistanceTime(null, 2, 50));
printOut(newLine);


printOut("--- Part 8  ----------------------------------------------------------------------------------------------");

function adjustString(text, maxSize, char, insertBefore) {
    if (text.length >= maxSize) {
        return text;
    }

    let difference = maxSize - text.length;
    let extraChars = char.repeat(difference);


    if (insertBefore) {
        return extraChars + text;
    } else {
        return text + extraChars;
    }
}

let result1 = adjustString("hello", 10, "*", true);
let result2 = adjustString("world", 8, "-", false);

printOut("Result 1: " + result1); 
printOut("Result 2: " + result2);  
printOut(newLine);


printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
function checkMathExpressions() {
    let leftStart = 1;
    let lineLength = 2; 

    for (let line = 1; line <= 200; line++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let i = 0; i < lineLength; i++) {
            leftSum += leftStart + i;
        }

        for (let i = 0; i < lineLength - 1; i++) {
            rightSum += leftStart + lineLength + i;
        }

        if (leftSum !== rightSum) {
            printOut("Line " + line + " failed: " + leftSum + " != " + rightSum);
            return;
        }

        leftStart += 2 * lineLength - 1;
        lineLength++;
    }

    printOut("Maths fun!");
}

checkMathExpressions();

printOut(newLine);


printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function factorial(n) {
 
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

let number = 7;
let result = factorial(number);
printOut("The factorial of " + number + " is: " + result);
printOut(newLine);
