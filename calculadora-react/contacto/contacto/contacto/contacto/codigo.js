function abrirMenu() {
    menu = document.querySelector(".menu-2");
    hamburguesa= document.querySelector(".hamburguesa");
    cerrar = document.querySelector(".cerrar");

    menu.style.transform = "translateY(0%)";
    hamburguesa.style.display = "none";
    cerrar.style.display = "block";
}

function cerrarMenu() {
    menu = document.querySelector(".menu-2");
    hamburguesa = document.querySelector(".hamburguesa");
    cerrar = document.querySelector(".cerrar");

    menu.style.transform = "translateY(-100%)";
    hamburguesa.style.display = "block";
    cerrar.style.display = "none";
}