
let usuario = "";
let visitas = 0;
let stringVacio = ""

const $parrafo = document.getElementById("paragraph");
const $parrafo2 = document.getElementById("mostrarVisitas")

$parrafo.addEventListener("click", (e) => identificarUsuario(e));

function identificarUsuario(e){
    let nombre = prompt("Ingrese su nombre para identificarse");
    let nombreIdentificado = usuario = nombre;
    localStorage.setItem("user", nombreIdentificado);
    location.reload();
};


function obtenerValores(){
    let valor = localStorage.getItem("user");
    $parrafo.innerHTML = `Bienvenid@ ${valor || null || ""}`
};

obtenerValores()

let contador =+ localStorage.getItem("visitas") || 0;

function contadorVisitas(){
    contador = contador + 1;
    localStorage.setItem("visitas", contador)
    $parrafo2.innerHTML = `Visitas: ${contador}`
}

contadorVisitas()


