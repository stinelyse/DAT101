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
let number = 0;

 while(rightNumber !== number){
number = Math.ceil(Math.random() * 60);
 }

 printOut("Number is " + number.toString());
 printOut(newLine);


printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
number = 0;
let guesses = 0;
const startTime = Date.now();

while(rightNumber !== number){
number = Math.ceil(Math.random() * 1000000);
guesses++;
}
const endTime = Date.now();
const timeTaken = endTime - startTime;

printOut("The number is: " + number.toString());
printOut("Guesses: " + guesses.toString());
printOut("Time taken in millisec: " + timeTaken.toString());
printOut(newLine);


printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let number3= 2; number3 < 200; number3++){
let prime= true;

let Division= 2;
while(Division <= Math.sqrt(number3)){
    if (number3 % Division === 0) {
        prime = false;
        break;
    }
    Division++;
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

let throwCount = 0;
let fullStraight = false;
let threePairs = false;
let tower = false;
let yahtzee = false;

while (!fullStraight || !threePairs || !tower || !yahtzee) {
    throwCount++;

    const d1 = Math.ceil(Math.random() * 6);
    const d2 = Math.ceil(Math.random() * 6);
    const d3 = Math.ceil(Math.random() * 6);
    const d4 = Math.ceil(Math.random() * 6);
    const d5 = Math.ceil(Math.random() * 6);
    const d6 = Math.ceil(Math.random() * 6);

    let dice = [d1, d2, d3, d4, d5, d6];
    let counts = [0, 0, 0, 0, 0, 0]; 

    for (let i = 0; i < dice.length; i++) {
        if (dice[i] === 1) counts[0]++;
        if (dice[i] === 2) counts[1]++;
        if (dice[i] === 3) counts[2]++;
        if (dice[i] === 4) counts[3]++;
        if (dice[i] === 5) counts[4]++;
        if (dice[i] === 6) counts[5]++;
    }

    if (!fullStraight && counts[0] === 1 && counts[1] === 1 && counts[2] === 1 && counts[3] === 1 && counts[4] === 1 && counts[5] === 1) {
        printOut("Full straight funnet etter " + throwCount + " kast!");
        fullStraight = true;
    }

    let pairs = 0;
    for (let i = 0; i < counts.length; i++) {
        if (counts[i] === 2) pairs++;
    }
    if (!threePairs && pairs === 3) {
        printOut("Three pairs funnet etter " + throwCount + " kast!");
        threePairs = true;
    }

    let hasTwo = false;
    let hasFour = false;
    for (let i = 0; i < counts.length; i++) {
        if (counts[i] === 2) hasTwo = true;
        if (counts[i] === 4) hasFour = true;
    }
    if (!tower && hasTwo && hasFour) {
        printOut("Tower funnet etter " + throwCount + " kast!");
        tower = true;
    }

    for (let i = 0; i < counts.length; i++) {
        if (counts[i] === 6) {
            printOut("Yahtzee funnet etter " + throwCount + " kast!");
            yahtzee = true;
        }
    }
}

printOut(newLine);

