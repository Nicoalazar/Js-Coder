const changeText=()=>{
    document.getElementById('title').innerHTML= "Texto modificado con JS"
    }
//              Desafíos complementarios            //

/*
Actividad 01:
Crea un algoritmo que le pida al usuario que ingrese un número y luego evalúe si ese
número es par o impar.
*/
let numero = prompt('INGRESE UN NUMERO PARA SABER SI ES PAR O IMPAR');
if (numero % 2 === 0) {
    console.log(`El numero ${numero} es par`);
}else {
    console.log(`El numero ${numero} es impar`);
}
/*
Actividad 02:
Crea un algoritmo que le pida al usuario un número y luego utiliza while para evaluar
cuántos números son pares y cuantos impares, hasta que el usuario ingrese "salir".*/
let numero1 = prompt('INGRESE UN NUMERO PARA EVALUAR O INGRESE "SALIR" PARA SALIR');
let par = 0;
let impar = 0;
while (numero1 !== '') {
    if (numero1 == null) {
        alert('Canceló el proceso');
        break;
    }
    else if (numero1.toLocaleLowerCase() == 'salir') {
            alert('Salió correctamente del proceso');
            break;
    }	
    else if (numero1 % 2 === 0) {
        par++;
    }else {
        impar++;
    }
    numero1 = prompt('INGRESE UN NUMERO PARA EVALUAR O INGRESE "SALIR" PARA SALIR');
}
console.log('La cantidad de pares es: ' + par);
console.log('La cantidad de impares es: ' + impar);