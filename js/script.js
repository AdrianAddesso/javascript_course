const firstname = 'Adrian';
const lastname = 'Addesso';
let apodo = 'sin definir';
console.log("Tu apodo está ", apodo);

let confirmacion = confirm('Deseas cambiar tu apodo?')
console.log("Cambio de apodo Y/N? ", confirmacion);
apodo = prompt('Cual es tu apodo?'); // ejemplo de prompt
alert('Bienvenido a la plataforma '+ apodo); // ejemplo de concatenacion con strings
console.log("Tu apodo cambió a ", apodo);
console.log("Hola, ", apodo);

let calle = prompt('En que calle vivis?');
let altura = prompt('Cual es la altura de tu casa?');
let barrio = prompt('En que barrio vivis?');
let ubicacion = calle +' '+ altura +', '+ barrio;

alert('Entonces '+apodo+' vos vivis en '+ ubicacion); // ejemplo de concatenacion con strings
console.log("Seteaste tu ubicacion en", ubicacion);

let Taxi = 300;
let combustible = 2500;
let propina = (combustible + Taxi)*0.1;
let total = Taxi+combustible+propina;
alert('Un remis hasta '+ubicacion+' te va a costar '+ total +' ARS c/propina')
console.log("Costo del viaje hasta ",ubicacion," es de ",total);

//Suma
let DeptosPiso1 = 10;
let DeptosPiso2 = 5;
let cantDeptos = DeptosPiso1 + DeptosPiso2; // 10+5=15
console.log("Cantidad de departamentos ", cantDeptos);

//Multiplicacion
let departamentos = 40;
let pisos = 4;
let cantUF = departamentos * pisos; // 40*4=160
console.log("Cantidad de unidades funcionales ", cantUF);

//Resta
let Peso = 70;
let Perdido = 3;
let PesoFinal = Peso - Perdido; // 70-3=67
console.log("Peso perdido", PesoFinal);

//Division
let cuenta = 5000;
let comensales = 5;
let Vaquita = cuenta / comensales; // 5000/5=1000
console.log("Precio de la comida por cabeza ", Vaquita);