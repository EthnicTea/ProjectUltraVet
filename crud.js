document.addEventListener("DOMContentLoaded", function() {
    loadTableData();
});

document.getElementById("crudForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;

    if (name && email) {
        var data = {
            name: name,
            email: email
        };

        saveData(data);
        resetForm();
        loadTableData();
    }
});

function saveData(data) {
    var dataList = loadData();

    dataList.push(data);

    localStorage.setItem("dataList", JSON.stringify(dataList));
}

function loadData() {
    var dataList = localStorage.getItem("dataList");

    if (dataList) {
        return JSON.parse(dataList);
    }

    return [];
}

function loadTableData() {
    var table = document.getElementById("data-table");
    table.innerHTML = "";

    var dataList = loadData();

    for (var i = 0; i < dataList.length; i++) {
        var row = table.insertRow(-1);
        var nameCell = row.insertCell(0);
        var emailCell = row.insertCell(1);
        var actionsCell = row.insertCell(2);

        nameCell.innerHTML = dataList[i].name;
        emailCell.innerHTML = dataList[i].email;
        actionsCell.innerHTML = "<button onclick='deleteData(" + i + ")'>Eliminar</button>";
    }
}

function deleteData(index) {
    var dataList = loadData();

    dataList.splice(index, 1);

    localStorage.setItem("dataList", JSON.stringify(dataList));
    loadTableData();
}

function resetForm() {
    document.getElementById("crudForm").reset();
}