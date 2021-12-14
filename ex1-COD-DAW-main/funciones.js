//@ts-check
/**
 * Temperaturas
 * Temperaturas Celsius y Farenhaid
 * @param {number}  grados - Grados con los que se quiere operar
 * @var {number}  operacon_paso_temperaturas - operacion para el paso de temperaturas
 * @returns {number}  operacon_paso_temperaturas - Un numero
 * @var {number} grados_farenhaid - grados en farenhaid
 * @var {number} grados_celsius - grados en celsius
 * @var {number} contador - recuento de los grados
 * @var {number} temperatura - muestra por pantalla una serie de temperaturas para decir si hace frio o calor
 */

function paso_de_temperaturas (grados) {
var operacon_paso_temperaturas = 5 / 9 * ( grados - 32 );
return operacon_paso_temperaturas;
}

var grados_farenhaid = [60, 32, 100]; var grados_celsius = []; var contador;

function contador_temperaturas () {
for (contador = 2; contador >= 0; contador--) {
document.write ("Valor " + contador +" es " + grados_farenhaid[contador] +" F ");

document.write (" el cual es " + grados_celsius[contador] + " C");

contador_celsius (grados_celsius[contador])
}
}

function contador_diferencia_temperaturas () {for (contador = 0; contador <= 2; contador++) {grados_celsius[contador] = paso_de_temperaturas(grados_farenhaid[contador]);}
}

function contador_celsius (temperatura) {
if ( temperatura > 25 ) { document.write(" Hace calor <br />" ); } 
else
if ( temperatura < 15 ) {
document.write ( "Hace frio <br />" ); } 
else {
document.write ( "Ni fu ni fa <br />" ) } }