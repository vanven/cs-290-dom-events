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

// Add 4 header columns to the first row
var rowContent = newTable.firstElementChild;

for(var i=1; i <= 4; i++) {
  var newHead = document.createElement("th");
  newHead.textContent = "Header " + i;
  rowContent.appendChild(newHead);
}

// Add 4 data cells to each of the other 3 rows
for(var i=1; i <= 3; i++) {
  rowContent = rowContent.nextElementSibling;
  
  for(var j=1; j <= 4; j++){
    var newData = document.createElement("td");
    newData.textContent = j + ", " + i;
    rowContent.appendChild(newData);
  }
  
}

document.body.appendChild(newTable);