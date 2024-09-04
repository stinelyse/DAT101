"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let result = 2 + 3 * 2 - 4 * 6;
let result1= 2 + (3 * (2 - 4) * 6);
printOut(result1.toString());
printOut(newLine);


printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let meters = 25;
let centimeters = 34;
let MilliM = meters / 1000;
let MilliM1 = centimeters / 10;
const inch = 25.4;
let result2 = (MilliM * inch) + (MilliM1 * inch);
printOut(result2.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let days = 3;
let hours = 12;
let minutes = 14;
let seconds = 45;
let result3 = (days * 60 * 24) + (hours * 60) + (minutes) + (seconds / 60);
printOut(result3.toString());
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let totalminutes = 6322.52;
let days1 = totalminutes / (24*60);
let remaining = totalminutes % (24*60);
let hours1 = remaining / 60;
remaining = remaining % 60;
let seconds1 = (remaining % 1) * 60;
let minutes1 = remaining;
let result4 = Math.round(days1)+" Days " + Math.round(hours1) + " Hours " + Math.round(minutes1) + " Minutes " + Math.round(seconds1) + " Seconds ";
printOut(result4.toString());
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let nokToUsd = 8.6 / 76;
let usdToNok = 76 / 8.6;

let dollars = 54;
let nok = Math.round (dollars * usdToNok);
let result5 = nok + "NOK &" + dollars + "DOllars";
printOut(result5.toString());
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let text="There is much between heaven and earth that we do not understand.";
printOut(text);
printOut("Number of charachters in the text:" + text.length);
printOut("Character at position 19:" + text.charAt(19));
printOut("Characters from position 35, 8 characters forward:" + text.substr(34, 8));
printOut('Index where "earth" starts:' + text.indexOf("earth"));
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut("Is 5 greater than 3? " + (5 > 3).toString());

printOut("Is 7 greater than or equal to 7? " + (7 >= 7).toString());

printOut('Is "a" greater than "b"?' + ("a" > "b").toString());

printOut('Is "1" less than "a"?' + ("1" < "a").toString());

printOut('Is "2500" less than "abcd"?' + ("2500" < "abcd").toString());

printOut('"arne" is not equal to "thomas".' + ("arne" !== "thomas").toString());

printOut("(2 equals 5) is this statement true?" + (2 == 5).toString());

printOut('("abcd" is greater than "bcd") is this statement false?' + ("abcd" > "bcd").toString());
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let number1= Number("254");
printOut("The number is:" + number1);

let number2= Number(57.23);
printOut("The number is:" + number2);

let number3= parseFloat("25 kroner");
printOut("The number is:" + number3);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let r= Math.floor((Math.random() * 360) + 1);
printOut("The random number is: "+ r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let total= 131;
let week10= Math.floor(total / 7);
let days10= total % 7;
printOut("In 131 days it is "+ week10 + " weeks and " + days10 + " days");
printOut(newLine);