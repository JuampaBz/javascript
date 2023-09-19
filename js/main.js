alert ("Segunda pre-entrega");

function sumar (a,b) {
    return a+b;
}

let resultado = sumar (3,5);
console.log(resultado);

let nombre = prompt ("Ingrese su nombre");
let apellido = prompt ("Ingrese su apellido");
let age = prompt ("Ingrese su Edad")
alert ("Bienvenido"+ " " + nombre + " " + apellido);
alert ("Usted tiene"+ " " + age + " " + "años")

alert ("¿Cuanto es 2000 + 23?")
let resultados = 2000 + 23;
alert ("El resultado es: " + resultados ) ;

const contraseñaCorrecta = "12345"
const correoCorrecto = "correo correcto"

let correo = prompt ("Ingrese su Correo");
let contraseña = prompt ("Ingrese su Contraseña");

while(contraseña !== contraseñaCorrecta || correo !== correoCorrecto) {
    alert ("Contraseña o Correo Electronico Incorrectos");
    correo = prompt ("Ingrese su Correo");
    contraseña = prompt ("Ingrese su Contraseña");
}
alert ("Inicio de sesion exitoso, bienvenido "+ correo + "!!")


let dia = prompt ("Ingrese un dia de la semana")
switch (dia){
case "lunes":
alert ("hoy es lunes");
break;
case "martes":
alert ("hoy es martes")   
case "miercoles":
alert ("hoy es miercoles");
break;
case "jueves":
alert ("hoy es jueves");
break;
case "viernes":
alert ("hoy es viernes");
break;
case "sabado":
alert ("hoy es sabado");
break;
case "domingo":
alert ("hoy es domingo");
break;

default:
    alert("No se reconoce el dia ingresado");
}

 // Declaración de Array
let nombres = ["Juan", "Federico", "Laura", "José", "Malena", "Jorge", "Cristian"];
// Pregunta al Usuario su Nombre
let buscarNombre = prompt("Ingrese su nombre");

// Buscando nombres dentro del array "nombres"
let nombreEncontrado = false;
for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === buscarNombre) {
        nombreEncontrado = true;
        break;
    }
}
// Resultado de la busqueda
if (nombreEncontrado) {
    alert("Nombre encontrado correctamente");
} else {
    alert("No se encontró el nombre");
}

// Objetos
// Solicitar al usuario que ingrese datos utilizando prompt
let nombr = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su edad");
let direccion = prompt("Ingrese su dirección");

// Crear un objeto con los datos ingresados por el usuario
let persona = {
    nombr: nombr,
    edad: edad,
    direccion: direccion,
    saludar: function() {
        alert (`Hola, mi nombre es ${this.nombr}, tengo ${this.edad} años y vivo en ${this.direccion}.`);
    }
};

// Función saludar para mostrar un saludo
persona.saludar();




