// Mensaje interactivo en el botón
document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector("#redirectButton");
    button.addEventListener("click", function() {
        alert("¡Redirigiendo a tu canal de YouTube CriptoEduar!");
    });
});

// Cambiar colores del encabezado al pasar el mouse
document.querySelector("header").addEventListener("mouseover", function() {
    this.style.backgroundColor = "#018786";
});

document.querySelector("header").addEventListener("mouseout", function() {
    this.style.backgroundColor = "#6200ee";
});
