document.getElementById("saveListButton").onclick = function () { listAlert() };

function listAlert() {
    alert("Lista guardada correctamente");
}
/*document.getElementById("saveListButton").addEventListener("click", function(){
    alert("Lista guardada correctamente");
});*/


function addToTable() {
    let inputFirstName = document.getElementById("first-name").value;

    // New table row
    let tableRow = document.createElement("tr");

    // New table data
    let tableDataName = document.createElement("td");
    tableDataName.appendChild(document.createTextNode(inputFirstName));

    // Create td for button
    let tableDataActions = document.createElement("td");

    // Create "Edit" та "Delete"
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

    // Add table data to table row
    tableRow.appendChild(tableDataName);
    tableRow.appendChild(tableDataActions);

    // Add row to the table
    document.getElementById("tableBody").appendChild(tableRow);

    // Clear input fields
    document.getElementById("first-name").value = "";
}

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
}