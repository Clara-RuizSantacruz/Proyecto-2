document.getElementById("saveListButton").onclick = function () { listAlert() };
function listAlert() {
    alert("Lista guardada correctamente");
}

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


    let tableRow = document.createElement("tr");


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


    let tableDataActions = document.createElement("td");


    let editImage = document.createElement("img");
    editImage.src = "images/edit-icon.svg";
    editImage.alt = "Editar";
    editImage.className = "edit-icon";
    editImage.onclick = function () {
        editRow(tableRow);
    };
    let deleteImage = document.createElement("img");
    deleteImage.src = "images/delete-icon.svg";
    deleteImage.alt = "Eliminar";
    deleteImage.className = "delete-icon";
    deleteImage.onclick = function () {
        deleteRow(tableRow);
    };

    tableDataActions.appendChild(editImage);
    tableDataActions.appendChild(deleteImage);


    tableDataActions.appendChild(editImage);
    tableDataActions.appendChild(deleteImage);



    tableRow.appendChild(tableDataName);
    tableRow.appendChild(tableDataFirstLastName);
    tableRow.appendChild(tableDataSecondLastName);
    tableRow.appendChild(tableDataRol);
    tableRow.appendChild(tableDataLevel);
    tableRow.appendChild(tableDataClass);
    tableRow.appendChild(tableDataEmail);
    tableRow.appendChild(tableDataActions);


    document.getElementById("tableBody").appendChild(tableRow);


    document.getElementById("first-name").value = "";
    document.getElementById("first-lastname").value = "";
    document.getElementById("second-lastname").value = "";
    document.getElementById("rol").value = "";
    document.getElementById("level").value = "";
    document.getElementById("class").value = "";
    document.getElementById("email").value = "";
}



function editRow(row) {

    let firstName = row.cells[0].textContent;

    document.getElementById("first-name").value = firstName;

    let firstLastName = row.cells[1].textContent;
    document.getElementById("first-lastname").value = firstLastName;

    let secondLastName = row.cells[2].textContent;
    document.getElementById("second-lastname").value = secondLastName;

    let Rol = row.cells[3].textContent;
    document.getElementById("rol").value = Rol;

    let Level = row.cells[4].textContent;
    document.getElementById("level").value = Level;

    let Class = row.cells[5].textContent;
    document.getElementById("class").value = Class;

    let Email = row.cells[6].textContent;
    document.getElementById("email").value = Email;

    deleteRow(row);
}

function deleteRow(row) {
    row.parentNode.removeChild(row);
}
