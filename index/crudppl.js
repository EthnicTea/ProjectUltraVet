function validateForm(){
    let rut = document.getElementById('rutInput').value;
    let name = document.getElementById('nameInput').value;
    let last = document.getElementById('lastInput').value;
    let email = document.getElementById('emailInput').value;
    let com = document.getElementById('comInput').value;
    let cel = document.getElementById('celInput').value;

    if (rut == "") {
        alert('ERROR: Debes escribir un RUT.');
        return false;
    };

    if (name == ""){
        alert('ERROR: Debes escribir un nombre.');
        return false;
    };

    if (last == ""){
        alert('ERROR: Debes escribir un apellido.');
        return false;
    };

    if (email == "") {
        alert('ERROR: Debes escribir un correo eléctronico.');
        return false;
    }else if(!email.includes("@")) {
        alert('El correo no es valido');
        return false;
    };
    
    if (com == "") {
        alert('ERROR: Debes escribir una comuna.');
        return false;
    };


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
        html += "<td>"+ element.last+"</td>";
        html += "<td>"+ element.email+"</td>";
        html += "<td>"+ element.com+"</td>";
        html += "<td>"+ element.cel+"</td>";
        html += '<td><button class="delete" onclick="deleteData('+index+')">Eliminar Dato</button> <button class="update" onclick="updateData('+index+')">Editar dato</button></td>';
        html += "</tr>";
    });

    document.querySelector('#tableData tbody').innerHTML = html;
};

document.onload = readData();

function addData(){
    if (validateForm() == true){
        let rut = document.getElementById('rutInput').value;
        let name = document.getElementById('nameInput').value;
        let last = document.getElementById('lastInput').value;
        let email = document.getElementById('emailInput').value;
        let com = document.getElementById('comInput').value;
        let cel = document.getElementById('celInput').value;

        var listPeople;

        if (localStorage.getItem('listPeople') == null){
            listPeople = [];
        }else{
            listPeople = JSON.parse(localStorage.getItem('listPeople'));
        };
        if (cel == "") {
            cel = "Sin Número."
        };
        listPeople.push({
            rut: rut,
            name: name,
            last: last,
            email: email,
            com: com,
            cel: cel
        });

        

        localStorage.setItem('listPeople', JSON.stringify(listPeople));

        readData();

        document.getElementById('rutInput').value="";
        document.getElementById('nameInput').value="";
        document.getElementById('lastInput').value="";
        document.getElementById('emailInput').value="";
        document.getElementById('comInput').value="";
        document.getElementById('celInput').value="";
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
    document.getElementById('lastInput').value = listPeople[index].last;
    document.getElementById('emailInput').value = listPeople[index].email;
    document.getElementById('comInput').value = listPeople[index].com;
    document.getElementById('celInput').value = listPeople[index].cel;

    document.querySelector("#updateInput").onclick = function(){
        if (validateForm() == true) {
            listPeople[index].rut = document.getElementById('rutInput').value;
            listPeople[index].name = document.getElementById('nameInput').value;
            listPeople[index].last = document.getElementById('lastInput').value;
            listPeople[index].email = document.getElementById('emailInput').value;
            listPeople[index].com = document.getElementById('comInput').value;
            listPeople[index].cel = document.getElementById('celInput').value;

            localStorage.setItem('listPeople', JSON.stringify(listPeople));
            readData();

            document.getElementById('rutInput').value="";
            document.getElementById('nameInput').value="";
            document.getElementById('lastInput').value="";
            document.getElementById('emailInput').value="";
            document.getElementById('comInput').value="";
            document.getElementById('celInput').value="";

            document.getElementById("addInput").style.display = 'block';
            document.getElementById("updateInput",addInput).style.display = 'none';
        }
    };
}
//html += '<td><button on click="editData('+index+')">Editar Dato</button>';
