"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let result = "";
const countTo = 10;
for(let i = 1; i <= countTo; i++){
    result += " " + i.toString();
} 
printOut(result + newLine);

let result2 = "";
const countTo1 = 0;
for (let i = 10; i > countTo1; i-- ){
    result2 += " " + i.toString();
}
printOut(result2 + newLine);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const rightNumber = 45;
let number = Math.floor(Math.random() * 60) + 1;

while (number !== rightNumber) {
   number = Math.floor(Math.random() * 60) + 1;
}
printOut("Number is " + number.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let number1= Math.floor(Math.random() * 1000000) + 1;
let rightNumber1 = 456;
let guessCount = 1;

let startTime= Date.now();

while (number1 !== rightNumber1) {
    number1 = Math.floor(Math.random() * 1000000) + 1;
    guessCount++;
}

let endTime = Date.now();

let timeTaken = endTime - startTime;

printOut("The number is: " + number1.toString());
printOut("Guesses: " + guessCount.toString());
printOut("Time taken in millisec: " + timeTaken.toString());
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let number3= 2; number3 < 200; number3++){
let prime= true;

let Divi= 2;
while(Divi <= Math.sqrt(number3)){
    if (number3 % Divi === 0) {
        prime = false;
        break;
    }
    Divi++;
}
if (prime){
    printOut(number3.toString());
}
}
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let row = 1; row <= 7; row++){
    let line = "";

for (let column = 1; column <= 9; column++) {
    line += "K" + column + "R" + row+ " ";
}
printOut(line.toString());
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let i = 0; i < 5; i++) {
    let points = Math.floor(Math.random() * 236) + 1;
    let percentage = ((points / 236) * 100).toFixed();
    let grade;

    if (points >= 212) {
        grade = 'A';
    } else if (points >= 182) {
        grade = 'B';
    } else if (points >= 154) {
        grade = 'C';
    } else if (points >= 127) {
        grade = 'D';
    } else if (points >= 98) {
        grade = 'E';
    } else {
        grade = 'F';
    }

    printOut("Student " + (i + 1) + ": Poeng = " + points + ", Prosent = " + percentage + "%, Karakter = " + grade);
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
let attempts = 0;

let FullStraight = false;

while (!FullStraight) {
    attempts++;

    let number10 = Math.floor(Math.random() * 6) + 1;
    let number11 = Math.floor(Math.random() * 6) + 1;
    let number12 = Math.floor(Math.random() * 6) + 1;
    let number13 = Math.floor(Math.random() * 6) + 1;
    let number14 = Math.floor(Math.random() * 6) + 1;
    let number15 = Math.floor(Math.random() * 6) + 1;

    let diceRolls = [number10, number11, number12, number13, number14, number15];

    diceRolls.sort();

    if (diceRolls.toString() === "1,2,3,4,5,6") {
        FullStraight = true;
    }
}
printOut("Det tok " + attempts + " forsøk for å få full straight(1, 2, 3, 4, 5, 6)!");

printOut(newLine);
let attemptsPair = 0;
let threePair = false;

while (!threePair) {
    attemptsPair++;

    let number16 = Math.floor(Math.random() * 6) + 1;
    let number17 = Math.floor(Math.random() * 6) + 1;
    let number18 = Math.floor(Math.random() * 6) + 1;
    let number19 = Math.floor(Math.random() * 6) + 1;
    let number20 = Math.floor(Math.random() * 6) + 1;
    let number21 = Math.floor(Math.random() * 6) + 1;

    let diceRolls = [number16, number17, number18, number19, number20, number21];
    
    let counts = {};
    for (let i = 0; i < diceRolls.length; i++) {
        let value = diceRolls[i];
        counts[value] = (counts[value] || 0) + 1;
    }

    let pairs = 0;
    for (let key in counts) {
        if (counts[key] === 2) {
            pairs++;
        }
    }

    if (pairs === 3) {
        threePair = true;
    }
}

printOut("Det tok " + attemptsPair + " forsøk for å få tre par!");

printOut(newLine);
let attemptsTower = 0;
let Tower = false;

while (!Tower) {
    attemptsTower++;

    let number22 = Math.floor(Math.random() * 6) + 1;
    let number23 = Math.floor(Math.random() * 6) + 1;
    let number24 = Math.floor(Math.random() * 6) + 1;
    let number25 = Math.floor(Math.random() * 6) + 1;
    let number26 = Math.floor(Math.random() * 6) + 1;
    let number27 = Math.floor(Math.random() * 6) + 1;

    let diceRolls = [number22, number23, number24, number25, number26, number27];
    
    let counts = {};
    for (let i = 0; i < diceRolls.length; i++) {
        let value = diceRolls[i];
        counts[value] = (counts[value] || 0) + 1;
    }

    let twoOfAKind = false;
    let fourOfAKind = false;
    
    for (let key in counts) {
        if (counts[key] === 2) {
            twoOfAKind = true;
        }
        if (counts[key] === 4) {
            fourOfAKind = true;
        }
    }

    if (twoOfAKind && fourOfAKind) {
        Tower = true;
    }
}

printOut("Det tok " + attemptsTower + " forsøk for å få 'tower' (2 og 4 like)!");

printOut(newLine);
let attemptsYahtzee = 0;
let Yahtzee = false;

while (!Yahtzee) {
    attemptsYahtzee++;

    let number1 = Math.floor(Math.random() * 6) + 1;
    let number2 = Math.floor(Math.random() * 6) + 1;
    let number3 = Math.floor(Math.random() * 6) + 1;
    let number4 = Math.floor(Math.random() * 6) + 1;
    let number5 = Math.floor(Math.random() * 6) + 1;
    let number6 = Math.floor(Math.random() * 6) + 1;

    if (number1 === number2 && number2 === number3 && number3 === number4 && number4 === number5 && number5 === number6) {
        Yahtzee = true;
    }
}
printOut("Det tok " + attemptsYahtzee + " forsøk for å få Yahtzee!");






