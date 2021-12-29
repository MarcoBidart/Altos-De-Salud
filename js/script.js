let entrada1 = prompt('Antes de comezar ingresa tu Nombre');
let entrada2 = prompt("Ahora ingresa tu Apellido")
let entrada3 = parseInt(prompt("Cual es tu edad" + " " + entrada1 + ' ' + entrada2 + "?"))
let salida = entrada1 + ' ' + entrada2 + ' ' + 'Has ingresado Correctamente tus Datos';
alert(salida);

if (entrada3 < 13) {
    alert("Lo sentimos mucho" + ' ' + entrada1 + ' ' + entrada2 + ' ' +
        " no tienes la edad requerida para utilizar nuestros productos");
} else if (entrada3 < 18) {
    alert("Bienvenido" + ' ' + entrada1 + ' ' + entrada2 + ' ' +
        "a la hora de reservar un turno debe demostrar su identidad mediante DNI e ir con un adulto al mismo debido a que tienes " + entrada3 + ' ' + "años");
} else {
    alert("Bienvenido" + ' ' + entrada1 + ' ' + entrada2 + ' ' +
    "ya puede disfrutar de nuestras promociones exclusivas de la pagina");
}