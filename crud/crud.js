function validateForm(){
    let rut = document.getElementById('rutInput').value;
    let name = document.getElementById('nameInput').value;
    let email = document.getElementById('emailInput').value;


    if (rut == "") {
        alert('ERROR: Debes escribir un RUT.');
        return false;
    };

    if (name == ""){
        alert('ERROR: Debes escribir un nombre.');
        return false;
    };


    if (email == "") {
        alert('ERROR: Debes escribir un correo eléctronico.');
        return false;
    }else if (!email.includes("@")) {
        alert('El correo no es valido');
        return false;
    }

    return true;
};

//Lectura de datos
function readData(){
    let listPeople;

    if (localStorage.getItem('listPeople') == null){
        listPeople = [];
    }else{
        listPeople = JSON.parse(localStorage.getItem("listPeople"));
    };

    var html = "";
    listPeople.forEach(function(element, index) {
        html += "<tr>";
        html += "<td>"+ element.rut+"</td>";
        html += "<td>"+ element.name+"</td>";
        html += "<td>"+ element.email+"</td>";
        html += '<td><button onclick="deleteData('+index+')">Eliminar Dato</button> <button onclick="updateData('+index+')">Editar dato</button></td>';
        html += "</tr>";
    });

    document.querySelector('#tableData tbody').innerHTML = html;
};

document.onload = readData();

function addData(){
    if (validateForm() == true){
        let rut = document.getElementById('rutInput').value;
        let name = document.getElementById('nameInput').value;
        let email = document.getElementById('emailInput').value;

        var listPeople;

        if (localStorage.getItem('listPeople') == null){
            listPeople = [];
        }else{
            listPeople = JSON.parse(localStorage.getItem('listPeople'));
        };
        listPeople.push({
            rut: rut,
            name: name,
            email: email
        });

        localStorage.setItem('listPeople', JSON.stringify(listPeople));

        readData();

        document.getElementById('rutInput').value="";
        document.getElementById('nameInput').value="";
        document.getElementById('emailInput').value="";
    }
};

function deleteData(index){

    var listPeople;
    if (localStorage.getItem('listPeople') == null) {
        listPeople = [];
    }else{
        listPeople = JSON.parse(localStorage.getItem("listPeople"));
    }

    listPeople.splice(index, 1);
    localStorage.setItem('listPeople', JSON.stringify(listPeople));
    readData();
}

/*update */

function updateData(index){
    document.getElementById("addInput").style.display = 'none';
    document.getElementById("updateInput",addInput).style.display = 'block';

    var listPeople;
    if (localStorage.getItem('listPeople') == null) {
        listPeople = [];
    }else{
        listPeople = JSON.parse(localStorage.getItem("listPeople"));
    }

    document.getElementById('rutInput').value = listPeople[index].rut;
    document.getElementById('nameInput').value = listPeople[index].name;
    document.getElementById('emailInput').value = listPeople[index].email;

    document.querySelector("#updateInput").onclick = function(){
        if (validateForm() == true) {
            listPeople[index].rut = document.getElementById('rutInput').value;
            listPeople[index].name = document.getElementById('nameInput').value;
            listPeople[index].email = document.getElementById('emailInput').value;

            localStorage.setItem('listPeople', JSON.stringify(listPeople));
            readData();

            document.getElementById('rutInput').value = "";
            document.getElementById('nameInput').value = "";
            document.getElementById('emailInput').value = "";

            document.getElementById("addInput").style.display = 'block';
            document.getElementById("updateInput",addInput).style.display = 'none';
        }
    };
}
//html += '<td><button on click="editData('+index+')">Editar Dato</button>';

