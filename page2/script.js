document.getElementById("saveListButton").onclick = function () { listAlert() };
function listAlert() {
    alert("Lista guardada correctamente");
}
/*document.getElementById("saveListButton").addEventListener("click", function(){
    alert("Lista guardada correctamente");
});*/
function addToTable() {
    let inputTitle = document.getElementById("list-title").value;
    let h1TableTitle = document.getElementById("table-title");
    h1TableTitle.textContent = "Listado: " + '"' + inputTitle + '"';
    
    let inputFirstName = document.getElementById("first-name").value;
    let inputFirstLastName = document.getElementById("first-lastname").value;
    let inputSecondLastName = document.getElementById("second-lastname").value;
    let inputRol = document.getElementById("rol").value;
    let inputLevel = document.getElementById("level").value;
    let inputClass = document.getElementById("class").value;
    let inputEmail = document.getElementById("email").value;


    // New table row
    let tableRow = document.createElement("tr");


    // New table data
    let tableDataName = document.createElement("td");
    tableDataName.appendChild(document.createTextNode(inputFirstName));

    let tableDataFirstLastName = document.createElement("td");
    tableDataFirstLastName.appendChild(document.createTextNode(inputFirstLastName));

    let tableDataSecondLastName = document.createElement("td");
    tableDataSecondLastName.appendChild(document.createTextNode(inputSecondLastName));

    let tableDataRol = document.createElement("td");
    tableDataRol.appendChild(document.createTextNode(inputRol));

    let tableDataLevel = document.createElement("td");
    tableDataLevel.appendChild(document.createTextNode(inputLevel));

    let tableDataClass = document.createElement("td");
    tableDataClass.appendChild(document.createTextNode(inputClass));

    let tableDataEmail = document.createElement("td");
    tableDataEmail.appendChild(document.createTextNode(inputEmail));


    //Create td for button
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


    // Add table data to table row
    tableRow.appendChild(tableDataName);
    tableRow.appendChild(tableDataFirstLastName);
    tableRow.appendChild(tableDataSecondLastName);
    tableRow.appendChild(tableDataRol);
    tableRow.appendChild(tableDataLevel);
    tableRow.appendChild(tableDataClass);
    tableRow.appendChild(tableDataEmail);
    tableRow.appendChild(tableDataActions);


    // Add row to the table
    document.getElementById("tableBody").appendChild(tableRow);


    // Clear input fields
    document.getElementById("first-name").value = "";
    document.getElementById("first-lastname").value = "";
    document.getElementById("second-lastname").value = "";
    document.getElementById("rol").value = "";
    document.getElementById("level").value = "";
    document.getElementById("class").value = "";
    document.getElementById("email").value = "";
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