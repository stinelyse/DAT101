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
    
    let daysLeft = Math.ceil((releaseDate - today) / (24 * 60 * 60 * 1000));
    
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
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
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
