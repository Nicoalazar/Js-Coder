const changeText=()=>{
document.getElementById('title').innerHTML= "Texto modificado con JS"
}

//                  Microdesafio S1                 //

let number = 3.14
let string = 'Texto'
let boolean = true

console.log(number)
console.log(string)
console.log(boolean)

//                  Microdesafio S2                 //

//Actividad 01:

let cantidad = prompt('INGRESE CANTIDAD DE REPETICIONES');
let texto = prompt('INGRESE TEXTO A REPETIR');
for (let index = 0; index < cantidad; index++) { //index++ agregado para que no rompa
console.log(texto);
}

/*
¿Qué tiene que hacer este código?
Repetir un texto N veces
¿Por qué no cumple con su función?
Porque el index no tiene incremental
*/

//Actividad 02:

/* Find The Bug:
let lados = prompt('INGRESE CANTIDAD DE LADOS');
for (let index = 0; index < lados; index++) {
if (index > 3) {
}
alert("lado");
}
*/

/*
¿Qué tiene que hacer este código? Mostrar la cantidad de lados de un poligono
¿Por qué no cumple con su función? Porque el alert esta fuera de la funcion if
¿Qué propuesta podrías hacer para que tenga sentido su uso? Poner el alert dentro de la funcion y anidar con lados
Propuesta: 
*/
let lados = prompt('INGRESE CANTIDAD DE LADOS');
for (let index = 0; index < lados; index++) {
if (index > 3) {
    alert("Es un poligono");
    break; //Detiene el bucle si tiene mas de 3 lados
}else {
    alert("No es un poligono");
}

//              Desafíos complementarios            //

/*
Actividad 01:
Crea un algoritmo que le pida al usuario que ingrese un número y luego evalúe si ese
número es par o impar.
*/
let numero = prompt('INGRESE UN NUMERO PARA SABER SI ES PAR O IMPAR');
if (numero % 2 == 0) {
    console.log('El numero ' + numero + ' es par');
}else {
    console.log('El numero ' + numero + ' es impar');
}}
/*
Actividad 02:
Crea un algoritmo que le pida al usuario un número y luego utiliza while para evaluar
cuántos números son pares y cuantos impares, hasta que el usuario ingrese "salir".*/
let numero1 = prompt('INGRESE UN NUMERO PARA EVALUAR O INGRESE "SALIR" PARA SALIR');
let par = 0;
let impar = 0;
while (numero1 != 'salir' && numero1 != 'SALIR') {
    if (numero1 % 2 == 0) {
        par++;
    }else {
        impar++;
    }
    numero1 = prompt('INGRESE UN NUMERO PARA EVALUAR O INGRESE "SALIR" PARA SALIR');
}
console.log('La cantidad de pares es ' + par);
console.log('La cantidad de impares es ' + impar);