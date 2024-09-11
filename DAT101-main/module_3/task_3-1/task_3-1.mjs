"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 8;
printOut("Wakeup time:" + wakeUpTime);
if (wakeUpTime === 7) {
  printOut("I can take the bus to school.");
} else if(wakeUpTime === 8) {
  printOut("I can take the train to school");
}
else {
  printOut("I have to take the car to school");
  }
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let number = -5;
printOut("The value is:" + number);
if (number >0) {
  printOut ("Positve");
} else if(number <0) {
  printOut ("Negative");
} else {
  printOut("Zero");
}
printOut(newLine);

printOut("--- Part 6&7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let size = Math.floor (Math.random () * 8 + 1);
printOut("size:" + size);
if (size >= 6) {
  printOut("The image is too large");
} else if (size >= 4) {
  printOut("Thank you");
} else {
  printOut("The image is too small");
} 
printOut(newLine);


printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "Mars", "April", "Mai",
  "Juni", "Juli", "August", "September", "October", "November", "December"];
  const noOfMonth = monthList.length;
  const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
  printOut("The month is:" + monthName);

  if (monthName.includes("r")) {
    printOut("You must take vitamin D");
  } else {
    printOut("You do not need to take vitamin D”");
  }
printOut(newLine);


printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const daysMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const monthPosition = monthList.indexOf(monthName);
printOut ("The month " + monthName + " has " + daysMonth[monthPosition] + " days" );
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (monthName === "Mars" || monthName === "Mai"){
  printOut("The gallery is closed in " + monthName);
} else if (monthName === "April") {
  printOut("The gallery is temporary open in the building next door in " + monthName);
} else {
  printOut("The gallery is open in " + monthName);
}
printOut(newLine);
