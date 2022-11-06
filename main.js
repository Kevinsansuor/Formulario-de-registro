const fechanacimiento = document.querySelector("#fechanacimiento");

fechanacimiento.addEventListener("blur", (evento)=>{
    validacionnacimiento(evento.target);
})

function validacionnacimiento(input) {
    const fechainput = new Date( input.value);
    mayorDeEdad(fechainput);
    let mensaje = "";

    if (!mayorDeEdad(fechainput)) {
        mensaje = "Para registrarte tienes que ser mayor de 18 años";
    }

    input.setCustomValidity(mensaje);
}

function mayorDeEdad(fecha) {
    const difFechas = new Date(fecha.getUTCFullYear() + 18
    , fecha.getUTCMonth()
    , fecha.getUTCDate())
    const fechaActual = new Date();

    return difFechas <= fechaActual;

    if (difFechas <= fechaActual) {
        console.log("ERES MAYOR DE EDAD");
    } else{
        console.log("ERES MENOR DE EDAD");
    }
}

