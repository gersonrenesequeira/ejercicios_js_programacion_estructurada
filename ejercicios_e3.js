// Función anónima asignada a una variable
const sumar = function(a, b) {
return a + b;
};
console.log(sumar(3, 4));
// Función con asignación de nombre
function sumar (a, b) {
return a + b;
};
console.log(sumar(3, 4));

// Sintaxis normal
const multiplicar = function(a, b) {
return a * b;
};
// Función flecha
const multiplicarFlecha = (a, b) => a * b;
console.log(multiplicarFlecha(3, 4)); // 12

const edad = 10;
const tieneID = true;
if (edad >= 18) {
if (tieneID) {
console.log("Acceso permitido");
} else {
console.log("Necesitas identificación");
}
} else {
console.log("Eres menor de edad");
}

