// Create a 4 row table
var newTable = document.createElement("table");
//var tableHead = document.createElement("thead");
//var tableBody = document.createElement("tbody");
//newTable.appendChild(tableHead);
//newTable.appendChild(tableBody);

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

for(var i=1; i <= 4; i++) {
  /*
  var newHead = document.createElement("th");
  newHead.textContent = "Header " + i;
  rowContent.appendChild(newHead);
  */
  populateRow("th", "Header " + i);
}

// Add 4 data cells to each of the other 3 rows
for(var i=1; i <= 3; i++) {
  rowContent = rowContent.nextElementSibling;
  
  for(var j=1; j <= 4; j++){
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

for(var i=0; i < thArray.length; i++) {
  thArray[i].style.cssText = dataStyle;
}

for(var i=0; i < tdArray.length; i++) {
  tdArray[i].style.cssText = dataStyle;
}

// Create directional buttons
