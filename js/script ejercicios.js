// /** CONDICIONALES **
// Ejercicio 1 ***********************************************************************

//1. Crea un algoritmo que a partir de la respuesta del usuario pueda determinar si.
// A. Esta lloviendo
// B. Esta soleado
//En caso de estar lloviendo debe devolver por consola un mensaje que diga "Lleva paraguas"
//En caso de estar soleado debe devolver por consola un mensaje que diga "No olvides tus shorts"

//alert("Hola! Veamos como está el clima hoy?");
//let clima = prompt("Dime, esta lloviendo o está soleado?");

//if((clima=="lloviendo")||(clima=="Lloviendo")){
//    alert("Lleva paraguas");
//}else if((clima=="soleado")||(clima=="Soleado")){
//    alert("No olvides tus shorts")
//}else{
//    alert("Por favor repite la respuesta");
//}
// Ejercicio 2 **********************************************************************

// 1. Crea un algoritmo que a partir de la respuesta del usuario pueda determinar si te alcanza para comprar figuritas del mundial.
// A. Si tienes menos de $20 ó $20 debe devolver por consola un mensaje que diga "Te puedo ofrecer 2 caramelos"
// B. Si tienes entre de $21 y $49 debe devolver por consola un mensaje que diga "Estas cerca, pero no puedo fiarte, vuelve mañana."
// C. Si tienes $50 o más debe devolver por consola un mensaje que diga "Aquí tienes tus figuritas del mundial"

// alert("Hola! Visite a comprar Figus? Cada una vale $50...")
// let budget = parseInt(prompt("Cuanto dinero tenes para gastar?"))
// let price = 50;
// if(budget<=0){
//     alert("Regresa cuando tengas plata");
// } else if ((budget>=1)&&(budget<=20)){
//     alert("Te puedo ofrecer 2 caramelos");
// }else if ((budget>=21)&&(budget<=49)){
//     alert("Estas cerca, pero no puedo fiarte, vuelve mañana.");
// } else if(Math.trunc(budget/price)>1){
//     alert("Aquí tienes: "+(Math.trunc(budget/price))+" paquetes de figuritas del mundial");
// } else{
//     alert("Aquí tienes: "+(Math.trunc(budget/price))+" paquete de figuritas del mundial");
// }
// Ejercicio 3 **********************************************************************
// 1. Crea un algoritmo que a partir de la respuesta del usuario pueda determinar Cuántos mundiales vivió una persona.
// Ten en cuenta que se juega un mundial cada 4 años y que se han jugado 21 copas del mundo.
// let FirstCup = 1930; // Defino cuando comenzaron los torneos
// let currentDate = new Date(); //defino la fecha actual
// let currentYear = currentDate.getFullYear();
//      console.log(currentYear);
// let Max = (currentYear - FirstCup)/4;
// let Nacimiento = parseInt(prompt("En qué año naciste?")); // defino el año de nacimiento de la persona
// let Mundiales = (currentYear - Nacimiento)/4;
//      console.log(Math.trunc(Mundiales)); // defino cuantos mundiales se jugaron a la fecha
// if(Nacimiento<=FirstCup){
//     alert("Si naciste en "+Nacimiento+" entonces desde tu nacimiento se han jugado "+Math.trunc(Max)+" Mundiales");
// }else{
//     alert("Si naciste en "+Nacimiento+" entonces desde tu nacimiento se han jugado "+Math.trunc(Mundiales)+" Mundiales");
// }

// Actividad 01:
/*let cantidad = prompt('INGRESE CANTIDAD DE REPETICIONES');
let texto = prompt('INGRESE TEXTO A REPETIR');
for (let index = 0; index < cantidad; index) { //cambiar "index" por "index++
console.log(texto);
}*/

//¿Qué tiene que hacer este código? -> Busca repetir un texto una cantidad de veces designada por el usuario
//¿Por qué no cumple con su función? -> le falta incrementra el valor de index en cada iteracion con index++

// Actividad 02:
/*let lados = prompt('INGRESE CANTIDAD DE LADOS');
for (let index = 0; index < lados; index++) {
if (index > 3) {
}
alert("lado");
}
// ¿Qué tiene que hacer este código? Pide que se ingrese una cantidad y muestra un mensaje cada vez que la cantidad exceda los 3 lados
// ¿Por qué no cumple con su función? El alert esta fuera del if
// ¿Qué propuesta podrías hacer para que tenga sentido su uso? Mover el alert dentro del IF
*/

// Crea un algoritmo que le pida al usuario que ingrese un número y luego evalúe si ese número es par o impar.
/*
let input = parseInt(prompt("Ingrese un numero del 1 al 10"))

if (input<0){
     alert("Ingresaste un numero negativo, por favor ingresa otro del 1 al 10")
}else if(input>=11){
     alert("Ingresaste un numero mayor a 10, por favor ingresa otro del 1 al 10")   
}else if((input==0)||(input==2)||(input==4)||(input==6)||(input==8)||(input==10)){
     alert("El número "+input+" es par")
}else {
     alert("El número "+input+" es impar")
}
*/

// Crea un algoritmo que le pida al usuario un número y luego utiliza while para evaluar cuántos números son pares y cuantos impares,
//hasta que el usuario ingrese "salir".
/*
let input = 0;
let par = 0;
let impar = 0;

do{
    input = prompt("Ingresa un numero del 1 al 10. Cuando desees terminar, escribe 'alir'");
    console.log("Número Ingresado: "+input);
    if((input==0)||(input==2)||(input==4)||(input==6)||(input==8)||(input==10)){
       par = par+1;
       alert("El numero ingresado ("+input+") es par. Hasta el momento has ingresado "+par+" números pares");
       console.log(input+" es par");
    }else if((input==1)||(input==3)||(input==5)||(input==7)||(input==9)){
     impar = impar+1
     alert("El numero ingresado ("+input+") es impar. Hasta el momento has ingresado "+impar+" números impares");
     console.log(input+" es impar");
    }else {
     alert("No has ingresado un numbero del 1 al 10");
     console.log(input+" no es un número válido");
    }
}while((input!="Salir")||(input!="salir"));
alert("Has decidido salir. Ingresaste un total de "+par+" números pares y "+impar+" impares");
*/