"use strict";

import { printOut } from "../../common/script/utils.mjs";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/


//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const task2Words = [];

function txtTask2WordKeyPress(event) {
    if (event.key === "Enter") {
        const inputWords = txtTask2Word.value.trim().split(/\s+/); 

        inputWords.forEach(word => {
            if (word) task2Words.push(word); 
        });

        txtTask2Output.innerText =
            "Number of words: " + task2Words.length + "\n" +
            "Words: " + task2Words.join(" ");

        txtTask2Word.value = "";
    }
}

txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress);



//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
function evaluateCheckboxes() {
  const checkboxes = document.querySelectorAll("input[name='chkTask3']");

  const selected = [];

  
  checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
          selected.push(checkbox.value); 
      }
  });

  const output = document.getElementById("txtTask3Output");
  if (selected.length > 0) {
      output.innerText = "Selected checkboxes: " + selected.join(", ");
  } else {
      output.innerText = "No checkboxes selected.";
  }
}

document.getElementById("cmbTask3CheckAnswer").addEventListener("click", evaluateCheckboxes);


//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
function createRadioButtons() {
  const divTask4Cars = document.getElementById("divTask4Cars");

  for (let i = 0; i < CarTypes.length; i++) {
      const car = CarTypes[i];

      const radioButton = document.createElement("input");
      radioButton.type = "radio";
      radioButton.name = "carType"; 
      radioButton.value = car.value; 

      const label = document.createElement("label");
      label.textContent = car.caption; 

      divTask4Cars.appendChild(radioButton);
      divTask4Cars.appendChild(label);
      divTask4Cars.appendChild(document.createElement("br")); 
  }
}

function getSelectedCar() {
  const radios = document.querySelectorAll("input[name='carType']");
  let selectedCar = null;

  for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
          selectedCar = CarTypes.find(car => car.value === parseInt(radios[i].value));
          break;
      }
  }

  const output = document.getElementById("txtTask4Output");
  if (selectedCar) {
      output.innerText = "Selected car: " + selectedCar.caption;
  } else {
      output.innerText = "No car selected.";
  }
}

createRadioButtons();

document.getElementById("divTask4Cars").addEventListener("click", getSelectedCar);


//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
function handleDropdownChange() {
  const dropdown = document.getElementById("selectTask5Animals");

  const selectedAnimal = dropdown.options[dropdown.selectedIndex].text;

  const output = document.getElementById("txtTask5Output");
  output.innerText = "Selected animal: " + selectedAnimal;
}


document.getElementById("selectTask5Animals").addEventListener("change", handleDropdownChange);


//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
function populateDropdown() {
  const dropdown = document.getElementById("selectTask6Girls");

 
  GirlsNames.forEach(name => {
      const option = document.createElement("option");
      option.value = name; 
      option.textContent = name; 
      dropdown.appendChild(option); 
  });
}


function handleDropdownChange() {
  const dropdown = document.getElementById("selectTask6Girls");


  const selectedName = dropdown.value;

 
  const output = document.getElementById("txtTask6Output");
  output.innerText = "You selected: " + selectedName;
}


populateDropdown();


document.getElementById("selectTask6Girls").addEventListener("change", handleDropdownChange);


//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
function populateGenreDropdown() {
  const genreDropdown = document.getElementById("selectMovieGenre");

  MovieGenre.forEach(genre => {
      const option = document.createElement("option");
      option.value = genre;
      option.textContent = genre;
      genreDropdown.appendChild(option);
  });
}


function addMovieToTable() {
  const title = document.getElementById("txtMovieTitle").value.trim();
  const genre = document.getElementById("selectMovieGenre").value;
  const director = document.getElementById("txtMovieDirector").value.trim();
  const rate = document.getElementById("txtMovieRate").value.trim();

  
  if (!title || !director || rate < 1 || rate > 10) {
      alert("Please fill in all fields correctly. Rate must be between 1 and 10.");
      return;
  }

 
  const table = document.getElementById("tblMovies");


  const newRow = table.insertRow();

 
  const nrCell = newRow.insertCell(0); 
  const titleCell = newRow.insertCell(1); 
  const genreCell = newRow.insertCell(2); 
  const directorCell = newRow.insertCell(3); 
  const rateCell = newRow.insertCell(4); 


  const rowNumber = table.rows.length - 1;

  
  nrCell.textContent = rowNumber;
  titleCell.textContent = title;
  genreCell.textContent = genre;
  directorCell.textContent = director;
  rateCell.textContent = rate;

  document.getElementById("txtMovieTitle").value = "";
  document.getElementById("txtMovieDirector").value = "";
  document.getElementById("txtMovieRate").value = 5;
}

populateGenreDropdown();

document.getElementById("cmbAddMovie").addEventListener("click", addMovieToTable);
