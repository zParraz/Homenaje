// const edad = prompt("Cuál es tu edad?");
// let usuario = prompt("¿Usuario?")
// let contraseña = prompt("¿Contraseña?")

alert("Bienvenido al homenaje de mi hermosa madre")
document.body.classList.add("todo");

function permiso() {
    if (usuario === "Admin" && contraseña === "1234") {
        document.body.classList.remove("todo"); // ✅ acceso permitido
    } else if (!usuario && !contraseña){
        document.body.classList.add("todo");    // ❌ acceso denegado
    }
}
permiso();


// if (edad >= 18 && edad <= 100 && edad >= 1 ) {
// alert("Eres mayor de edad");
// }
// else if (edad <= 17 && edad >= 1) {
//     alert("Eres menor de edad")
// }
// else if (edad <= 0) {
//     alert("No has ni nacido hermano")
// }
// else if (edad >= 101){
//     alert("El limite es 100")
// }
// else {
//     alert("Ingresa valores permitidos")
// }
// function saludar(nombre) {
//     return "hola, " +  nombre
// }

