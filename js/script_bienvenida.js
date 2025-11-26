window.onload = function () {

    let nombre = localStorage.getItem("nombreUsuario");

    if (!nombre) {
        nombre = prompt("Bienvenido/a. Ingresa tu nombre y apellido:");
        localStorage.setItem("nombreUsuario", nombre);
    }

    document.getElementById("saludoUsuario").innerText =
        "Hola, " + nombre + "! 👋 Bienvenido al proyecto.";

};
