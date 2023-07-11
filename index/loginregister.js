document.getElementById("buttonReg").addEventListener("click", register);
document.getElementById("buttonLog").addEventListener("click", login);
window.addEventListener("resize", webwide);
//Declarando variables
var varFormLogin = document.querySelector(".formLogin");
var varFormRegister = document.querySelector(".formRegister");
var varContainerLogReg = document.querySelector(".containterLogReg");
var varBoxBackLogin = document.querySelector(".boxBackLogin");
var varBoxBackRegister = document.querySelector(".boxBackRegister");

    //FUNCIONES

function webwide(){
    if(window.innerWidth > 850){
        varBoxBackRegister.style.display = "block";
        varBoxBackLogin.style.display = "block";
    }else{
        varBoxBackRegister.style.display = "block";
        varBoxBackRegister.style.opacity = "1";
        varBoxBackLogin.style.display = "none";
        varFormLogin.style.display = "block";
        varContainerLogReg.style.left = "0px";
        varFormRegister.style.display = "none";
    }
}

webwide();

function login(){
    if(window.innerWidth > 850){
        varFormLogin.style.display = "block";
        varContainerLogReg.style.left = "10px";
        varFormRegister.style.display = "none";
        varBoxBackRegister.style.opacity = "1";
        varBoxBackLogin.style.opacity = "0";
    }else{
        varFormLogin.style.display = "block";
        varContainerLogReg.style.left = "0px";
        varFormRegister.style.display = "none";
        varBoxBackRegister.style.display = "block";
        varBoxBackLogin.style.display = "none";
    }
}

function register(){
    if(window.innerWidth > 850){
        varFormRegister.style.display = "block";
        varContainerLogReg.style.left = "410px";
        varFormLogin.style.display = "none";
        varBoxBackRegister.style.opacity = "0";
        varBoxBackLogin.style.opacity = "1";
    }else{
        varFormRegister.style.display = "block";
        varContainerLogReg.style.left = "0px";
        varFormLogin.style.display = "none";
        varBoxBackRegister.style.display = "none";
        varBoxBackLogin.style.display = "block";
        varBoxBackLogin.style.opacity = "1";
    }
}

let regAccMail, regAccPass;

function registeraccount() {
    regAccMail = document.getElementById("regMail").value;
    regAccPass = document.getElementById("regPass").value;

    if (regAccMail == "") {
        alert('ERROR: Debes escribir un mail.');
    }else if (!regAccMail.includes("@")) {
        alert('ERROR: El correo no es valido.');
        return false;
    };
    if (regAccPass == "") {
        alert('ERROR: Debes escribir una contraseña.');
        return false;
    };
    alert("Datos Registrados con éxito.");
    return true;
};

function logaccount() {
    let logAccMail = document.getElementById("logMail").value;
    let logAccPass = document.getElementById("logPass").value;

    if (logAccMail === regAccMail && logAccPass === regAccPass) {
        alert("Datos Correctos");
        window.location.href = "crudmenu.html"
    } else {
        alert("Datos Incorrectos");
    }
};