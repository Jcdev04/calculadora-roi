

function obtenerDatos() {
    let nombreCliente = document.querySelector("#nombreCliente");
    let nombreEmpresa = document.querySelector("#nombreEmpresa");

    let nombresClientesCambiar = [];
    nombresClientesCambiar = document.querySelectorAll(".nombre");

    let nombresEmpresaCambiar = [];
    nombresEmpresaCambiar = document.querySelectorAll(".empresa");

    let login = document.querySelector(".contenedor-login");

    nombreCliente = nombreCliente.value;
    nombreEmpresa = nombreEmpresa.value;

    for (i = 0; i<nombresClientesCambiar.length; i++) {
        nombresClientesCambiar[i].innerHTML = nombreCliente;
    }

    for (i = 0; i<nombresEmpresaCambiar.length; i++) {
        nombresEmpresaCambiar[i].innerHTML = nombreEmpresa;
    }

    login.style.display = "none";
}


function cerrar() {
    let login = document.querySelector(".contenedor-login");

    login.style.display = "none";
}




// ANIMACIONES DEL HEADER
function abrirMenu() {
    let header = document.querySelector("header")
    header.classList.toggle("headerActivo");

}



// SCROLL ANIMACIONES DEL HEADER
let portada = document.querySelector(".portada");
let quejas = document.querySelector(".quejas");
let uno = document.querySelector(".area-automatizar");
let dos = document.querySelector(".detalles-procesos");
let tres = document.querySelector(".construccion-proyecto");
let cuatro = document.querySelector(".asesoramiento-personalizado");
let cinco = document.querySelector(".implementar");

const cambiarColor1 = () => {
    let circulo1 = document.querySelector("header .item1 .circulo");
    circulo1.style.backgroundColor = "var(--negro)";
    circulo1.style.color = "#fff";

    let circulo2 = document.querySelector("header .item2 .circulo");
    circulo2.style.backgroundColor = "#fff";
    circulo2.style.color = "var(--negro)";

    let circulo3 = document.querySelector("header .item3 .circulo");
    circulo3.style.backgroundColor = "#fff";
    circulo3.style.color = "var(--negro)";

    let circulo4 = document.querySelector("header .item4 .circulo");
    circulo4.style.backgroundColor = "#fff";
    circulo4.style.color = "var(--negro)";

    let circulo5 = document.querySelector("header .item5 .circulo");
    circulo5.style.backgroundColor = "#fff";
    circulo5.style.color = "var(--negro)";

    let circulo6 = document.querySelector("header .item6 .circulo");
    circulo6.style.backgroundColor = "#fff";
    circulo6.style.color = "var(--negro)";

    let circulo7 = document.querySelector("header .item7 .circulo");
    circulo7.style.backgroundColor = "#fff";
    circulo7.style.color = "var(--negro)";
}
const cambiarColor2 = () => {
    let circulo1 = document.querySelector("header .item1 .circulo");
    circulo1.style.backgroundColor = "#fff";
    circulo1.style.color = "var(--negro)";

    let circulo2 = document.querySelector("header .item2 .circulo");
    circulo2.style.backgroundColor = "var(--negro)";
    circulo2.style.color = "#fff";

    let circulo3 = document.querySelector("header .item3 .circulo");
    circulo3.style.backgroundColor = "#fff";
    circulo3.style.color = "var(--negro)";

    let circulo4 = document.querySelector("header .item4 .circulo");
    circulo4.style.backgroundColor = "#fff";
    circulo4.style.color = "var(--negro)";

    let circulo5 = document.querySelector("header .item5 .circulo");
    circulo5.style.backgroundColor = "#fff";
    circulo5.style.color = "var(--negro)";

    let circulo6 = document.querySelector("header .item6 .circulo");
    circulo6.style.backgroundColor = "#fff";
    circulo6.style.color = "var(--negro)";

    let circulo7 = document.querySelector("header .item7 .circulo");
    circulo7.style.backgroundColor = "#fff";
    circulo7.style.color = "var(--negro)";
}
const cambiarColor3 = () => {

}
const cambiarColor4 = () => {

}
const cambiarColor5 = () => {

}
const cambiarColor6 = () => {

}
const cambiarColor7 = () => {

}

const observador1 = new IntersectionObserver(cambiarColor1, {
    root: null, 
    rootMargin: '0px 0px 0px 0px',    
    threshold: 1.0
});
const observador2 = new IntersectionObserver(cambiarColor2, {
    root: null, 
    rootMargin: '0px 0px 0px 0px',    
    threshold: 1.0
});
const observador3 = new IntersectionObserver(cambiarColor3, {
    root: null, 
    rootMargin: '0px 0px 0px 0px',    
    threshold: 1.0
});
const observador4 = new IntersectionObserver(cambiarColor4, {
    root: null, 
    rootMargin: '0px 0px 0px 0px',    
    threshold: 1.0
});
const observador5 = new IntersectionObserver(cambiarColor5, {
    root: null, 
    rootMargin: '0px 0px 0px 0px',    
    threshold: 1.0
});
const observador6 = new IntersectionObserver(cambiarColor6, {
    root: null, 
    rootMargin: '0px 0px 0px 0px',    
    threshold: 1.0
});
const observador7 = new IntersectionObserver(cambiarColor7, {
    root: null, 
    rootMargin: '0px 0px 0px 0px',    
    threshold: 1.0
});

observador1.observe(portada);
observador2.observe(quejas);
observador3.observe(uno);
observador4.observe(dos);
observador5.observe(tres);
observador6.observe(cuatro);
observador7.observe(cinco);



// SCROLL ANIMACIONES CHECK
let elem1 = document.querySelector(".contenedor-cards>*:nth-child(2)");
let elem2 = document.querySelector(".contenedor-cards>*:nth-child(3)");
let elem3 = document.querySelector(".contenedor-cards>*:nth-child(4)");
let elem4 = document.querySelector(".contenedor-cards>*:nth-child(5)");
let elem5 = document.querySelector(".contenedor-cards>*:nth-child(6)");
let elem6 = document.querySelector(".contenedor-cards>*:nth-child(7)");

const cambiarC1 = () => {
    let circulo1 = document.querySelector("header .item1 .circulo");
    circulo1.style.backgroundColor = "var(--negro)";
    circulo1.style.color = "#fff";

    let circulo2 = document.querySelector("header .item2 .circulo");
    circulo2.style.backgroundColor = "#fff";
    circulo2.style.color = "var(--negro)";

    let circulo3 = document.querySelector("header .item3 .circulo");
    circulo3.style.backgroundColor = "#fff";
    circulo3.style.color = "var(--negro)";

    let circulo4 = document.querySelector("header .item4 .circulo");
    circulo4.style.backgroundColor = "#fff";
    circulo4.style.color = "var(--negro)";

    let circulo5 = document.querySelector("header .item5 .circulo");
    circulo5.style.backgroundColor = "#fff";
    circulo5.style.color = "var(--negro)";

    let circulo6 = document.querySelector("header .item6 .circulo");
    circulo6.style.backgroundColor = "#fff";
    circulo6.style.color = "var(--negro)";

    let circulo7 = document.querySelector("header .item7 .circulo");
    circulo7.style.backgroundColor = "#fff";
    circulo7.style.color = "var(--negro)";
}


// MENU
