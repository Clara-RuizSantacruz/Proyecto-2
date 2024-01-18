document.getElementById("saveListButton").onclick = function () { listAlert() };

function listAlert() {
    alert("Lista guardada correctamente");
}
/*document.getElementById("saveListButton").addEventListener("click", function(){
    alert("Lista guardada correctamente");
});*/


function addToTable() {
    var inputFirstName = document.getElementById("first-name").value;

    // New table row
    var tableRow = document.createElement("tr");

    // New table data
    var tableDataName = document.createElement("td");
    tableDataName.appendChild(document.createTextNode(inputFirstName));

    // Create td for button
    var tableDataActions = document.createElement("td");

    // Create "Edit" та "Delete"
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit-button";
    editButton.onclick = function () {
        editRow(tableRow);
    };

    var deleteButton = document.createElement("button");
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
    var firstName = row.cells[0].textContent;

    // Fill in input fields with saved data
    document.getElementById("first-name").value = firstName;

    // Delete a line after editing
    deleteRow(row);
}

function deleteRow(row) {
    row.parentNode.removeChild(row);
}