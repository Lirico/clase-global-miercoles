// BUCLE FOR


// var contador = 0;

// while (contador < 10) {
//     console.log(contador)
//     contador++
// }


// variable inicial//condicion// incrementador
// for (var contador = 0; contador < 10; contador++) {
//     console.log(contador)
// }


/* 
    El Zorro pepe debe ir al bosque a recoltar manzanas para su familia. Para ello lleva una canasta
    que solo tiene capacidad para portar 10 manzanas. Una vez que llene la canasta debe regresar.
*/

// var canasta = 0;

// for (var manzanas = 1; manzanas <= 10; manzanas++) {
//     canasta = canasta + 1
//     console.log(`Manzana agregada a la canasta. Total de manazanas en la canasta: ` + canasta)
// }


/* 
    Brenda esta recorriendo un hospital abandonado en una noche de tormenta. Pero, no es un contexto cualquiera.
    Ya que, Brenda, esta en medio de un apocalipsis zombie. De repente decide ingresar a una de las habitaciones
    del hospital. Brenda sabe que si abre la puerta puede haber zombies dentro, spoiler: son 10. Afortunadamente ella esta
    armada con una linterna y una calibre 22. Sin embargo puede que la cantidad de zombies que encuentre
    supere la cantidad de balas que tiene su arma. Para su suerte ella cuenta con cheat de que si dispara
    la bala va directo a la cabeza de un zombie, pero no es posible matar mas de un zombie por bala.

    Crear un programa que represente esta situacion y nos indique al final de la secuencia si brenda sobrevivio
    o le comieron las patas.
*/


// Objeto -> Math -> Funciones -> Para hacer cosas matematicas -> random() -> round()
// var balas = Math.round(Math.random() * 20) 

// for (var zombies = 10; zombies > 0; zombies--) {
//     balas = balas - 1
// }

// if(balas >= 0) {
//     console.log("You survived, mission complete")
// } else {
//     console.log("You died, mission failed")
// }


/********************* FUNCIONES *********************/
// 1. Importanciones de modulos
// 2. Declaracion de variables globales
// 3. Declaracion de funciones
// 4. Llamado o invacion de funciones



// Hoisting -> Elevacion



// Declaracion declarada
// function sumar(a, b) {
//     return a + b
// }

// Funcion expresada
// let sumar = function(a, b) { // Funcio anonima
//     return a + b
// }

// JS -> Funciones flecha (Funcion lambda => Python)
// let sumar = a => a + 4


// console.log(sumar(4))




