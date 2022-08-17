
let usuario = "";
let visitas = 0;

const $parrafo = document.getElementById("paragraph");

/* const $parrafo = document.querySelector("#paragraph").innerText;

$parrafo.onclick = () => (identificarUsuario()); */

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
}

obtenerValores()





