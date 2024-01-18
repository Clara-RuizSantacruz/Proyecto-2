document.getElementById("saveListButton").onclick = function () { listAlert() };

function listAlert() {
    alert("Lista guardada correctamente");
}
/*document.getElementById("saveListButton").addEventListener("click", function(){
    alert("Lista guardada correctamente");
});*/


function addToTable() {
    let inputFirstName = document.getElementById("first-name").value;
    let inputFirstLastName = document.getElementById("first-lastname").value;
    let inputSecondLastName = document.getElementById("second-lastname").value;
    let inputRol = document.getElementById("rol").value;

    // New table row
    let tableRow = document.createElement("tr");

    // New table data
    let tableDataName = document.createElement("td");
    tableDataName.appendChild(document.createTextNode(inputFirstName));

    let tableDataFirstLastName = document.createElement("td");
    tableDataFirstLastName.appendChild(document.createTextNode(inputFirstLastName));

    let tableDataSecondLastName =  document.createElement("td");
    tableDataSecondLastName.appendChild(document.createTextNode(inputSecondLastName));

    let tableDataRol = document.createElement("td");
    tableDataRol.appendChild(document.createTextNode(inputRol));
    


    /* Create td for button
    let tableDataActions = document.createElement("td");

    // Create "Edit" and "Delete"
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit-button";
    editButton.onclick = function () {
        editRow(tableRow);
    };

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.onclick = function () {
        deleteRow(tableRow);
    };

    // Add buttons to td
    tableDataActions.appendChild(editButton);
    tableDataActions.appendChild(deleteButton);
*/


    // Add table data to table row
    tableRow.appendChild(tableDataName);
    //tableRow.appendChild(tableDataActions);
    tableRow.appendChild(tableDataFirstLastName);
    tableRow.appendChild(tableDataSecondLastName);
    tableRow.appendChild(tableDataRol);


    // Add row to the table
    document.getElementById("tableBody").appendChild(tableRow);

    // Clear input fields
    document.getElementById("first-name").value = "";
    document.getElementById("first-lastname").value = "";
    document.getElementById("second-lastname").value = "";
    document.getElementById("rol").value = "";
}
/*
function editRow(row) {
    // Get row data for editing
    let firstName = row.cells[0].textContent;

    // Fill in input fields with saved data
    document.getElementById("first-name").value = firstName;

    // Delete a line after editing
    deleteRow(row);
}

function deleteRow(row) {
    row.parentNode.removeChild(row);
}*/