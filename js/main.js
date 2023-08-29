function primeraPreEntrega() {
    alert("primera pre-entrega");

    function sumar(a, b) {
        return a + b;
    }

    let resultado = sumar(3, 5);
    console.log(resultado);

    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let edad = prompt("Ingrese su Edad");
    alert("Bienvenido" + " " + nombre + " " + apellido);
    alert("Usted tiene" + " " + edad + " " + "años");

    alert("¿Cuanto es 2000 + 23?");
    let resultados = 2000 + 23;
    alert("El resultado es: " + resultados);

    const contraseñaCorrecta = "12345";
    const correoCorrecto = "correo correcto";

    let correo = prompt("Ingrese su Correo");
    let contraseña = prompt("Ingrese su Contraseña");

    while (contraseña !== contraseñaCorrecta || correo !== correoCorrecto) {
        alert("Contraseña o Correo Electronico Incorrectos");
        correo = prompt("Ingrese su Correo");
        contraseña = prompt("Ingrese su Contraseña");
    }
    alert("Inicio de sesion exitoso, bienvenido " + correo + "!!");

    let dia = prompt("Ingrese un dia de la semana");
    switch (dia) {
        case "lunes":
            alert("hoy es lunes");
            break;
        case "martes":
            alert("hoy es martes");
            break;
        case "miercoles":
            alert("hoy es miercoles");
            break;
        case "jueves":
            alert("hoy es jueves");
            break;
        case "viernes":
            alert("hoy es viernes");
            break;
        case "sabado":
            alert("hoy es sabado");
            break;
        case "domingo":
            alert("hoy es domingo");
            break;
        default:
            alert("No se reconoce el dia ingresado");
    }
}
