/*
//Declaro la variable resultado con un valor 0
let resultado = 0;

//Declaro una funcion para sumar que opere con dos parámetros
function sumar(numeroA,numeroB){
    resultado = numeroA+numeroB;
}

//Declaro la función que va a mostrar el resultado en consola
function mostrar(mensaje){
    console.log(mensaje);
}

// Ejecuto la suma
sumar(6,3);

//Ejecuto la visualizacion
mostrar(resultado);

// Declaro una variable dentro de la funcion y dentro del bloque if, y las llamo.
// Da error porque la variable dentro del bloque IF se declaró como let, lo cual la hace parte del Scope de ese Bloque
function pasear(){
    let otroAuto = 'Mercedes';
    if (true) {
        let otroAutoMas = 'Tesla';
    }
    console.log('paseando en el '+otroAuto);
    console.log('paseando en el '+otroAutoMas);
}
pasear();

// En cambio si a esa variable del bloque IF la cambio por un var, funciona, porque la hac
// Da error porque la variable dentro del bloque IF se declaró como let, lo cual la hace parte del Scope de la Funcion
function pasear(){
    let otroAuto = 'Mercedes';
    if (true) {
        var otroAutoMas = 'Tesla';
    }
    console.log('paseando en el '+otroAuto);
    console.log('paseando en el '+otroAutoMas);

    pasear();
    */
/*
    // Defineo la variable y le asigno una función
    const multiplicarXdos = function(numero){
        console.log(numero*2);
    }
    // Defineo la variable y elimino el uso de function
    const multiplicarXdos = (numero)=>{
        console.log(numero*2);
    }

     // Defineo la variable y elimino el uso de paréntesis
     const multiplicarXdos = numero=>{
        console.log(numero*2);
    }
      // Defineo la variable y elimino el uso de llaves y solo enfoco en la función a realizar
      const multiplicarXdos = numero=> numero*2;*

// ****** Microdesafio ******
/*
function sumar() {
    let numero1 = 5;
    let resultado = numero1 + 5;
    console.log(resultado);
}
console.log(sumar())
*/
/*
const sumar = numero1 => {resultado = numero1 + 5}
sumar(5);
console.log(resultado);
*/