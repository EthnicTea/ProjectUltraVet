function validateForm(){
    let cod = document.getElementById('codInput').value;
    let namemsct = document.getElementById('namemsctInput').value;
    let owner = document.getElementById('ownInput').value;
    let peso = document.getElementById('pesoInput').value;
    let raza = document.getElementById('razaInput').value;
    let rutown = document.getElementById('rutownInput').value;

    if (cod == "") {
        alert('ERROR: Debes escribir un código.');
        return false;
    }else if (cod.length > 4){
        alert('ERROR: el código debe ser de cuatro caracteres.')
    };

    if (namemsct == ""){
        alert('ERROR: Debes escribir un nombre de mascota.');
        return false;
    };

    if (owner == ""){
        alert('ERROR: Debes escribir un nombre de dueño.');
        return false;
    };

    return true;
};

//Lectura de datos
function readData(){
    let listAnimal;

    if (localStorage.getItem('listAnimal') == null){
        listAnimal = [];
    }else{
        listAnimal = JSON.parse(localStorage.getItem("listAnimal"));
    };

    var html = "";
    listAnimal.forEach(function(element, index) {
        html += "<tr>";
        html += "<td>"+ element.cod+"</td>";
        html += "<td>"+ element.namemsct+"</td>";
        html += "<td>"+ element.owner+"</td>";
        html += "<td>"+ element.peso+"</td>";
        html += "<td>"+ element.raza+"</td>";
        html += "<td>"+ element.rutown+"</td>";
        html += '<td><button class="delete" onclick="deleteData('+index+')">Eliminar Dato</button> <button class="update" onclick="updateData('+index+')">Editar dato</button></td>';
        html += "</tr>";
    });

    document.querySelector('#tableData tbody').innerHTML = html;
};

document.onload = readData();

function addData(){
    if (validateForm() == true){
        let cod = document.getElementById('codInput').value;
        let namemsct = document.getElementById('namemsctInput').value;
        let owner = document.getElementById('ownInput').value;
        let peso = document.getElementById('pesoInput').value;
        let raza = document.getElementById('razaInput').value;
        let rutown = document.getElementById('rutownInput').value;

        var listAnimal;

        if (localStorage.getItem('listAnimal') == null){
            listAnimal = [];
        }else{
            listAnimal = JSON.parse(localStorage.getItem('listAnimal'));
        };
        if (peso == "") {
            peso = "Peso desconocido."
        };
        if (raza == "") {
            raza = "Raza desconocida."
        }
        listAnimal.push({
            cod: cod,
            namemsct: namemsct,
            owner: owner,
            peso: peso,
            raza: raza,
            rutown: rutown
        });

        

        localStorage.setItem('listAnimal', JSON.stringify(listAnimal));

        readData();

        document.getElementById('codInput').value="";
        document.getElementById('namemsctInput').value="";
        document.getElementById('ownInput').value="";
        document.getElementById('pesoInput').value="";
        document.getElementById('razaInput').value="";
        document.getElementById('rutownInput').value="";
    }
};

function deleteData(index){

    var listAnimal;
    if (localStorage.getItem('listAnimal') == null) {
        listAnimal = [];
    }else{
        listAnimal = JSON.parse(localStorage.getItem("listAnimal"));
    }

    listAnimal.splice(index, 1);
    localStorage.setItem('listAnimal', JSON.stringify(listAnimal));
    readData();
}

/*update */

function updateData(index){
    document.getElementById("addInput").style.display = 'none';
    document.getElementById("updateInput",addInput).style.display = 'block';

    var listAnimal;
    if (localStorage.getItem('listAnimal') == null) {
        listAnimal = [];
    }else{
        listAnimal = JSON.parse(localStorage.getItem("listAnimal"));
    }

    document.getElementById('codInput').value = listAnimal[index].cod;
    document.getElementById('namemsctInput').value = listAnimal[index].namemsct;
    document.getElementById('ownInput').value = listAnimal[index].owner;
    document.getElementById('pesoInput').value = listAnimal[index].peso;
    document.getElementById('razaInput').value = listAnimal[index].raza;
    document.getElementById('rutownInput').value = listAnimal[index].rutown;

    document.querySelector("#updateInput").onclick = function(){
        if (validateForm() == true) {
            listAnimal[index].cod = document.getElementById('codInput').value;
            listAnimal[index].namemsct = document.getElementById('namemsctInput').value;
            listAnimal[index].owner = document.getElementById('ownInput').value;
            listAnimal[index].peso = document.getElementById('pesoInput').value;
            listAnimal[index].raza = document.getElementById('razaInput').value;
            listAnimal[index].rutown = document.getElementById('rutownInput').value;

            localStorage.setItem('listAnimal', JSON.stringify(listAnimal));
            readData();

            document.getElementById('codInput').value="";
            document.getElementById('namemsctInput').value="";
            document.getElementById('ownInput').value="";
            document.getElementById('pesoInput').value="";
            document.getElementById('razaInput').value="";
            document.getElementById('rutownInput').value="";

            document.getElementById("addInput").style.display = 'block';
            document.getElementById("updateInput",addInput).style.display = 'none';
        }
    };
}