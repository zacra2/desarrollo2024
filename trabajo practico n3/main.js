// 1. Introducción a JavaScript
// Ejercicio 2: Suma de dos números
let a = 5;
let b = 10;
let c = a + b;
console.log(`La suma de ${a} y ${b} es ${c}`);

// Ejercicio 3: Saludo al usuario
let nombre = prompt("Por favor, ingresa tu nombre:");
console.log(`¡Hola, ${nombre}! Bienvenido.`);

// 2. Operadores lógicos y condicionales
// Ejercicio 1: Determinar el número mayor entre tres números
let num1 = 5;
let num2 = 10;
let num3 = 14;

let mayor;

if (num1 > num2 && num1 > num3) {
    mayor = num1;
} else if (num2 > num1 && num2 > num3) {
    mayor = num2;
} else {
    mayor = num3;
}

console.log(`El mayor de los 3 numeros es: ${mayor}`);

// Ejercicio 2: Determinar si un número es par o impar
let numeroIngresado = prompt("Por favor, ingresa un número y te dire si es par o impar:");
let numero = parseInt(numeroIngresado);

if (numero % 2 === 0) {
    console.log(`El número ${numero} es par`);
} else {
    console.log(`El número ${numero} es impar`);
}

// 3. Operadores de asignación y bucles
// Ejercicio 1: Bucle while para restar 1 hasta llegar a 0
let contador = 10;

while (contador >= 0) {
    console.log(`Valor actual del contador: ${contador}`);
    contador--;
}

// Ejercicio 2: Bucle do...while para pedir un número mayor a 100
let numeroMayorCien;

do {
    numeroMayorCien = prompt("Por favor, ingresa un número mayor a 100:");
    numeroMayorCien = parseInt(numeroMayorCien);
} while (numeroMayorCien <= 100);

console.log(`Ingresaste un numero mayor a 100: ${numeroMayorCien}`);

// 4. Funciones de JavaScript
// Ejercicio 1: Función esPar
function esPar(numero) {
    return numero % 2 === 0;
}
// Pruebas 
console.log(`¿Es 4 par? ${esPar(4)}`); 
console.log(`¿Es 7 par? ${esPar(7)}`); 
console.log(`¿Es 0 par? ${esPar(0)}`); 
console.log(`¿Es 22 par? ${esPar(-2)}`); 
console.log(`¿Es 15 par? ${esPar(15)}`); 

// Ejercicio 2: Función convertirCelsiusAFahrenheit
function convertirCelsiusAFahrenheit() {
    let celsius = prompt("Por favor, ingresa un valor en grados Celsius:");
    celsius = parseFloat(celsius);
    let fahrenheit = celsius * 1.8 + 32;
    console.log(`${celsius} grados Celsius son ${fahrenheit} grados Fahrenheit`);
}
// Llamada a la función 
convertirCelsiusAFahrenheit();

// 5. Objetos en JavaScript
// Ejercicio 1: Objeto persona
let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
    cambiarCiudad: function(nuevaCiudad) {
        this.ciudad = nuevaCiudad;
    }
};

// Cambiar la ciudad de la persona
persona.cambiarCiudad("Barcelona");

// Mostrar las propiedades actualizadas en la consola
console.log(`Nombre: ${persona.nombre}`);
console.log(`Edad: ${persona.edad}`);
console.log(`Ciudad: ${persona.ciudad}`);

// Ejercicio 2: Objeto libro
let libro = {
    titulo: "1984",
    autor: "George Orwell",
    año: 1949,
    esAntiguo: function() {
        let añoActual = new Date().getFullYear();
        return añoActual - this.año > 10;
    }
};

// Determinar si el libro es antiguo o reciente
if (libro.esAntiguo()) {
    console.log(`El libro "${libro.titulo}" es antiguo.`);
} else {
    console.log(`El libro "${libro.titulo}" es reciente.`);
}

// 6. Arrays
// Ejercicio 1: Array de números y multiplicación por 2
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosMultiplicados = [];

for (let i = 0; i < numeros.length; i++) {
    numerosMultiplicados.push(numeros[i] * 2);
}

console.log("Array original:", numeros);
console.log("Array multiplicado por 2:", numerosMultiplicados);

// Ejercicio 2: Array de números pares
let pares = [];

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        pares.push(i);
        if (pares.length === 10) {
            break;
        }
    }
}

console.log("Array de números pares:", pares);

// 7. Introducción al DOM
// Ejercicio 1: Cambiar el color de los párrafos a azul
function cambiarColorParrafos() {
    let parrafos = document.querySelectorAll('p');
    parrafos.forEach(function(parrafo) {
        parrafo.style.color = 'blue';
    });
}

// Asociar la función al evento click del botón de cambiar color
document.getElementById('cambiarColorBtn').addEventListener('click', cambiarColorParrafos);

// Ejercicio 2: Mostrar una alerta con el valor ingresado en el campo de texto
function mostrarAlerta() {
    let campoTexto = document.getElementById('campoTexto');
    let valor = campoTexto.value;
    alert(`Valor ingresado: ${valor}`);
}

// Asociar la función al evento click del botón de mostrar alerta
document.getElementById('mostrarAlertaBtn').addEventListener('click', mostrarAlerta);

//8. Eventos en DOM
// Ejercicio 1: Mostrar el texto del elemento <li> en la consola
function mostrarTextoEnConsola(event) {
    let elemento = event.target;
    console.log(`Texto del elemento: ${elemento.textContent}`);
}

// Asociar la función al evento click de cada elemento <li>
let elementosLista = document.querySelectorAll('#miLista li');
elementosLista.forEach(function(elemento) {
    elemento.addEventListener('click', mostrarTextoEnConsola);
});

// Ejercicio 2: Deshabilitar y habilitar el campo de texto
function deshabilitarCampo() {
    let campoTexto2 = document.getElementById('campoTexto2');
    campoTexto2.disabled = true;
}

function habilitarCampo() {
    let campoTexto2 = document.getElementById('campoTexto2');
    campoTexto2.disabled = false;
}

// Asociar la función al evento click del botón de deshabilitar campo
document.getElementById('deshabilitarBtn').addEventListener('click', deshabilitarCampo);

// Asociar la función al evento click del botón de habilitar campo
document.getElementById('habilitarBtn').addEventListener('click', habilitarCampo);

//9. LocalStorage 
// Ejercicio 1: Guardar y mostrar el correo electrónico en localStorage
function guardarCorreo(event) {
    event.preventDefault();
    let correoInput = document.getElementById('correoInput');
    let correo = correoInput.value;
    localStorage.setItem('correo', correo);
    mostrarCorreo();
}

function mostrarCorreo() {
    let correoGuardado = document.getElementById('correoGuardado');
    let eliminarCorreoBtn = document.getElementById('eliminarCorreoBtn');
    let correo = localStorage.getItem('correo');
    if (correo) {
        correoGuardado.textContent = `Correo guardado: ${correo}`;
        eliminarCorreoBtn.style.display = 'inline';
    } else {
        correoGuardado.textContent = '';
        eliminarCorreoBtn.style.display = 'none';
    }
}

function eliminarCorreo() {
    localStorage.removeItem('correo');
    mostrarCorreo();
}

// Asociar la función al evento submit del formulario de correo
document.getElementById('correoForm').addEventListener('submit', guardarCorreo);

// Asociar la función al evento click del botón de eliminar correo
document.getElementById('eliminarCorreoBtn').addEventListener('click', eliminarCorreo);

// Mostrar el correo al cargar la página si existe en localStorage
mostrarCorreo();

