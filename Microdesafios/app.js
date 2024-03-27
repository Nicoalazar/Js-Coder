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

let cantidad = parseInt(prompt('INGRESE CANTIDAD DE REPETICIONES'));
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
}
alert(`lado ${index+1}`);
}
//No le salió ni al profesor, una verga