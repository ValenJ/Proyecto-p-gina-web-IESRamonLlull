
function muestraFraseFecha() {
    var saludo = "¡Hola! "; 
    document.getElementById('fecha').innerHTML = saludo + Date ();
}

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}


