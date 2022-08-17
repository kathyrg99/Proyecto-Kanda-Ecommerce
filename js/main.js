
let usuario = "";
let visitas = 0;

const $parrafo = document.getElementById("paragraph").innerText;

/* const $parrafo = document.querySelector("#paragraph").innerText;

$parrafo.onclick = () => (identificarUsuario()); */

$parrafo.addEventListener("click", function(){console.log("Hola")});

function identificarUsuario(e){
    console.log(e.target);
    let nombre = prompt("Ingrese su nombre para identificarse");
    let nombreIdentificado = usuario = nombre;
    console.log(nombreIdentificado);
};








