// ==========================
// Declaración de variables
// ==========================

// 1. Variable nombre y mostrar en consola
let nombre = "Carlos Andrés López";
console.log(nombre);

// 2. Variables edad y ciudad, mostrar juntas
let edad = 20;
let ciudad = "Managua";
console.log("Edad:", edad, "Ciudad:", ciudad);

// 3. Constante PI
const PI = 3.1416;
console.log("PI:", PI);

// 4. Promedio de tres números
let num1 = 8, num2 = 12, num3 = 20;
let promedio = (num1 + num2 + num3) / 3;
console.log("Promedio:", promedio);

// 5. Variable booleana esMayorDeEdad
let esMayorDeEdad = true;
console.log("¿Es mayor de edad?:", esMayorDeEdad);

// ==========================
// Operaciones básicas
// ==========================

// 6. Suma de dos números
let a = 10, b = 5;
console.log("Suma:", a + b);

// 7. Resta, multiplicación y división
console.log("Resta:", a - b);
console.log("Multiplicación:", a * b);
console.log("División:", a / b);

// 8. Potencia
console.log("Potencia:", a ** b);

// 9. Precio con descuento
let precio = 100, descuento = 20; // 20%
let precioFinal = precio - (precio * descuento / 100);
console.log("Precio final:", precioFinal);

// ==========================
// Ciclos for
// ==========================

// 10. Números del 1 al 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 11. Tabla de multiplicar del 5
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// ==========================
// Ciclo while
// ==========================

// 12. Números pares del 2 al 20
let par = 2;
while (par <= 20) {
    console.log(par);
    par += 2;
}

// ==========================
// Funciones explícitas
// ==========================

// 13. Función saludar
function saludar(nombre) {
    console.log(`Hola, ${nombre}!`);
}
saludar("Carlos");

// 14. Función sumar
function sumar(x, y) {
    return x + y;
}
console.log("Suma:", sumar(4, 6));

// 15. Función esPar
function esPar(numero) {
    return numero % 2 === 0;
}
console.log("¿Es par?:", esPar(8));

// 16. Función área de rectángulo
function areaRectangulo(base, altura) {
    return base * altura;
}
console.log("Área del rectángulo:", areaRectangulo(5, 10));

// ==========================
// Funciones flecha
// ==========================

// 17. Función flecha multiplicar
const multiplicar = (x, y) => x * y;
console.log("Multiplicación:", multiplicar(3, 4));

// 18. Celsius a Fahrenheit
const convertirCelsiusAFahrenheit = c => (c * 9/5) + 32;
console.log("Fahrenheit:", convertirCelsiusAFahrenheit(30));

// 19. Mayor de dos números
const mayorDeDos = (x, y) => x > y ? x : y;
console.log("Mayor:", mayorDeDos(15, 10));

// 20. Calcular IVA (15%)
const calcularIVA = precio => precio + (precio * 0.15);
console.log("Precio con IVA:", calcularIVA(100));

// ==========================
// Recorrido de arreglos y objetos
// ==========================

// 21. Arreglo de nombres
let nombres = ["Ana", "Luis", "Pedro", "María", "Carlos"];
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

// 22. Números mayores que 10
let numeros = [5, 12, 18, 7, 25];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {
        console.log(numeros[i]);
    }
}

// 23. Longitud de palabras
let palabras = ["hola", "javascript", "web", "programa", "mundo"];
for (let i = 0; i < palabras.length; i++) {
    console.log(`"${palabras[i]}" tiene ${palabras[i].length} caracteres`);
}

// 24. Objeto persona
let persona = { nombre: "Carlos", edad: 20, ciudad: "Managua" };
for (let clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
}

// 25. Arreglo de objetos productos
let productos = [
    { nombre: "Laptop", precio: 800 },
    { nombre: "Mouse", precio: 20 },
    { nombre: "Teclado", precio: 40 }
];
for (let i = 0; i < productos.length; i++) {
    console.log(productos[i].nombre);
}
