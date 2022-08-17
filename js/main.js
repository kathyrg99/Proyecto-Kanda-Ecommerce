
let usuario = "";
let visitas = 0;
let stringVacio = ""

const $parrafo = document.getElementById("paragraph");

$parrafo.addEventListener("click", (e) => identificarUsuario(e));

function identificarUsuario(e){
    let nombre = prompt("Ingrese su nombre para identificarse");
    let nombreIdentificado = usuario = nombre;
    localStorage.setItem("user", nombreIdentificado);
    location.reload();
};


function obtenerValores(){
    let valor = localStorage.getItem("user");
    $parrafo.innerHTML = `Bienvenid@ ${valor}`
    if(valor === null || valor === ""){
        confirm("Debés ingresar un nombre para continuar")
    } 
};

obtenerValores()





