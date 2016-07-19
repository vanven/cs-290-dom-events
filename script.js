// Create a 4 row table
var newTable = document.createElement("table");

for(var i=0; i < 4; i++) {
  var newRow = document.createElement("tr");
  newTable.appendChild(newRow);
}

// Function to add cells and content to a row
function populateRow(cellType, cellContent) {
  var newCell = document.createElement(cellType);
  newCell.textContent = cellContent;
  rowContent.appendChild(newCell);
}

// Add 4 header columns to the first row
var rowContent = newTable.firstElementChild;

for(var i=1; i < 5; i++) {
  /*
  var newHead = document.createElement("th");
  newHead.textContent = "Header " + i;
  rowContent.appendChild(newHead);
  */
  populateRow("th", "Header " + i);
}

// Add 4 data cells to each of the other 3 rows
for(var i=1; i < 4; i++) {
  rowContent = rowContent.nextElementSibling;
  
  for(var j=1; j < 5; j++){
    /*
    var newData = document.createElement("td");
    newData.textContent = j + ", " + i;
    rowContent.appendChild(newData);
    */
    var pos = j + ", " + i;
    populateRow("td", pos);
  }
}

// Append new table to HTML body
document.body.appendChild(newTable);

// Apply css to table cells
var dataStyle = "width: 100px; border: 1px solid #000; padding: 2px;"
var thArray = document.body.getElementsByTagName("th");
var tdArray = document.body.getElementsByTagName("td");

newTable.style.borderCollapse = "collapse";

for(var i=0; i < thArray.length; i++) {
  thArray[i].style.cssText = dataStyle;
}

for(var i=0; i < tdArray.length; i++) {
  tdArray[i].style.cssText = dataStyle;
}

// selected cell style
var selectedIndex = 0;
var selectedCell = tdArray[selectedIndex];
var selectStyle = function(event) {
  selectedCell.style.border = "3px solid #000";
};

document.addEventListener("DOMContentLoaded", selectStyle);


// Declare a button-making function
function makeButton(idName, classNames, text, parentNode) {
  var newButton = document.createElement("button");
  newButton.id = idName;
  newButton.className = classNames;
  newButton.textContent = text;
  parentNode.appendChild(newButton);
  //var breakLine = document.createElement("br");
  //parentNode.appendChild(breakLine);
}

// div for buttons
var newDiv = document.createElement("div");
newDiv.id = "buttons";
document.body.appendChild(newDiv);
var buttonDiv = document.getElementById("buttons")
buttonDiv.appendChild(document.createElement("br"));

// directional buttons
makeButton("up-button", "direction-button", "Move Up", buttonDiv);

buttonDiv.appendChild(document.createElement("br"));

makeButton("left-button", "direction-button", "Move Left", buttonDiv);
makeButton("right-button", "direction-button", "Move Right", buttonDiv);

buttonDiv.appendChild(document.createElement("br"));

makeButton("down-button", "direction-button", "Move Down", buttonDiv);

function moveUp(event) {
  if ((selectedIndex - 4) >= 0 ) {
    selectedCell.style.border = "1px solid #000";
    selectedIndex = selectedIndex - 4;
    selectedCell = tdArray[selectedIndex];
    selectStyle();
  }
}

function moveDown(event) {
  if ((selectedIndex + 4) < tdArray.length ) {
    selectedCell.style.border = "1px solid #000";
    selectedIndex += 4;
    selectedCell = tdArray[selectedIndex];
    selectStyle();
  }
}

function moveLeft(event) {
  if (selectedIndex !== 0 && selectedIndex !== 4 && selectedIndex !== 8) {
    selectedCell.style.border = "1px solid #000";
    selectedIndex--;
    selectedCell = tdArray[selectedIndex];
    selectStyle();
  }
}

function moveRight(event) {
  if (selectedIndex !== 3 && selectedIndex !== 7 && selectedIndex !== 11) {
    selectedCell.style.border = "1px solid #000";
    selectedIndex++;
    selectedCell = tdArray[selectedIndex];
    selectStyle();
  }
}

document.getElementById("up-button").addEventListener("click", moveUp);
document.getElementById("down-button").addEventListener("click", moveDown);
document.getElementById("left-button").addEventListener("click", moveLeft);
document.getElementById("right-button").addEventListener("click", moveRight);

// button to mark a cell
buttonDiv.appendChild(document.createElement("br"));
makeButton("mark-button", "", "Mark Cell", buttonDiv);

function markCell(event) {
  selectedCell.style.backgroundColor = "yellow";
}

document.getElementById("mark-button").addEventListener("click", markCell);

// button styles
var directButtons = document.getElementsByClassName("direction-button");
for(var i=0; i < directButtons.length; i++) {
  directButtons[i].style.width = "100px";
  directButtons[i].style.backgroundColor = "skyblue";
}

document.getElementById("up-button").style.marginLeft = "50px";
document.getElementById("down-button").style.marginLeft = "50px";

var markButton = document.getElementById("mark-button");
markButton.style.width = "200px";
markButton.style.backgroundColor = "orange";
markButton.style.marginTop = "10px";


