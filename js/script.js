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
let FirstCup = 1930; // Defino cuando comenzaron los torneos

let currentDate = new Date(); //defino la fecha actual
let currentYear = currentDate.getFullYear();
     console.log(currentYear);

let Mundiales = (currentYear - FirstCup);  // defino años pasaron desde el primer mundial
let Resultado = Math.abs(Mundiales);
     console.log(Math.trunc(Resultado/4)); // defino cuantos mundiales se jugaron a la fecha

let Nacimiento = parseInt(prompt("En qué año naciste?")); // defino el año de nacimiento de la persona
let Edad = Math.trunc(currentYear-Nacimiento); // defino la edad de la persona
     console.log(Edad);
let Vistos = Resultado/Edad

if(Nacimiento<=FirstCup){
    alert("Si naciste en "+Nacimiento+" entonces tenes "+Edad+" años, por lo cual desde tu nacimiento se han jugado "+Resultado+" desde entonces");
}else{
    alert("Si naciste en "+Nacimiento+" entonces tenes "+Edad+" años, por lo cual desde tu nacimiento se han jugado "+Vistos+" desde entonces");
}

