"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
let numbers = [];

for (let i = 1; i <=20; i++){
numbers.push(i);
}

for (let i=0; i < numbers.length; i++){
printOut((numbers[i]).toString());
}
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
printOut(numbers.join(" , "));
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
const text = "Hei på deg, hvordan har du det?";


const wordsArray = text.split(" ");


for (let i = 0; i < wordsArray.length; i++) {
    
    printOut("Ord nummer " + (i + 1) + " (Indeks " + i + "): " + wordsArray[i]);
}
printOut(newLine);


printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
const names = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
    "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", 
    "Maria", "Elisabeth", "Kristin"];


function removeElement(array, element) {
  
    const index = array.indexOf(element);

    if (index !== -1) {
      
        array.splice(index, 1);
        printOut("Elementet " + element + " er fjernet fra arrayen.");
    } else {
    
        printOut("Elementet " + element + " finnes ikke i arrayen.");
    }
}

removeElement(names, "Kari");      
removeElement(names, "Ola");       

printOut(newLine);



printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
const boyNames = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", 
    "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", 
    "Håkon", "Theodor", "Magnus"];


const allNames = names.concat(boyNames);


printOut(allNames.join(", "));
printOut(newLine);





printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
class TBook {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

   
    toString() {
        return "Title: " + this.title + ", Author: " + this.author + ", ISBN: " + this.isbn;
    }
}


const books = [
    new TBook("To Kill a Mockingbird", "Harper Lee", "978-0-06-112008-4"),
    new TBook("1984", "George Orwell", "978-0-452-28423-4"),
    new TBook("The Great Gatsby", "F. Scott Fitzgerald", "978-0-7432-7356-5")
];

for (let i = 0; i < books.length; i++) {
    printOut(books[i].toString());
}

printOut(newLine);


printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
const EWeekDays = {
    WeekDay1: { value: 0x01, name: "Mandag" },
    WeekDay2: { value: 0x02, name: "Tirsdag" },
    WeekDay3: { value: 0x04, name: "Onsdag" },
    WeekDay4: { value: 0x08, name: "Torsdag" },
    WeekDay5: { value: 0x10, name: "Fredag" },
    WeekDay6: { value: 0x20, name: "Lørdag" },
    WeekDay7: { value: 0x40, name: "Søndag" },
    Workdays: { value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager" },
    Weekends: { value: 0x20 + 0x40, name: "Helg" },
};


const dayKeys = Object.keys(EWeekDays);


for (let i = 0; i < dayKeys.length; i++) {
    const key = dayKeys[i];
    const day = EWeekDays[key];
    printOut("Key: " + key + ", Value: " + day.value + ", Name: " + day.name);
}


printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
const randomNumbers = [];
for (let i = 0; i < 35; i++) {

    randomNumbers.push(Math.ceil(Math.random() * 20));
}

const ascendingOrder = randomNumbers.slice().sort(function(a, b) {
    return a - b;
});

const descendingOrder = randomNumbers.slice().sort(function(a, b) {
    return b - a;
});

printOut("Ascending order: " + ascendingOrder.join(", "));
printOut("Descending order: " + descendingOrder.join(", "));
printOut(newLine);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
const frekvens = {};
randomNumbers.forEach(num => frekvens[num] = (frekvens[num] || 0) + 1);

printOut("Number frequencies:");
Object.entries(frekvens).forEach(([num, freq]) => {
    printOut("Number " + num + ": " + freq + " times");
});

const sortedFrequencies = Object.entries(frekvens)
    .map(([num, freq]) => [parseInt(num), freq])
    .sort((a, b) => b[1] - a[1] || a[0] - b[0]);

printOut("Frequencies sorted from most to least frequent:");
sortedFrequencies.forEach(([num, freq]) => {
    printOut(freq + " occurrences of number " + num);
});
printOut(newLine);

printOut("--- Part 10 ----------------------------------------------------------------------------------------------");

const twoDimensionalArray = [];


for (let row = 0; row < 5; row++) {
    const currentRow = []; 
    for (let col = 0; col < 9; col++) {
        currentRow.push("Row " + row + ", Col " + col); 
    }
    twoDimensionalArray.push(currentRow); 
}


printOut("Printing the two-dimensional array:");
for (let row = 0; row < twoDimensionalArray.length; row++) {
    for (let col = 0; col < twoDimensionalArray[row].length; col++) {
        printOut(twoDimensionalArray[row][col]); 
    }
}
printOut(newLine);

