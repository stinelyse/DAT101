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

    let diceThrow = d1 + "," + d2 + "," + d3 + "," + d4 + "," + d5 + "," + d6 + ",";
    printOut("Dice throw: " + diceThrow);

    const count1 = (diceThrow.match(/1/g) || []).length;
    const count2 = (diceThrow.match(/2/g) || []).length;
    const count3 = (diceThrow.match(/3/g) || []).length;
    const count4 = (diceThrow.match(/4/g) || []).length;
    const count5 = (diceThrow.match(/5/g) || []).length;
    const count6 = (diceThrow.match(/6/g) || []).length;

    printOut("Count: 1=" + count1 + " 2=" + count2 + " 3=" + count3 + " 4=" + count4 + " 5=" + count5 + " 6=" + count6);

    if (!fullStraight && diceThrow === "1,2,3,4,5,6,") {
        console.log("Full straight found after " + throwCount + " throws!");
        fullStraight = true;
    }

    if (!threePairs && count1 === 2 && count2 === 2 && count3 === 2) {
        console.log("Three pairs found after " + throwCount + " throws!");
        threePairs = true;
    }

    if (!tower && ((count1 === 2 && count2 === 4) || (count1 === 4 && count2 === 2))) {
        console.log("Tower (2 and 4 of a kind) found after " + throwCount + " throws!");
        tower = true;
    }

    if (!yahtzee && (count1 === 6 || count2 === 6 || count3 === 6 || count4 === 6 || count5 === 6 || count6 === 6)) {
        console.log("Yahtzee found after " + throwCount + " throws!");
        yahtzee = true;
    }
}

printOut(newLine);

