
/*
    CLOSURES (CIERRES)

    Es como una forma de ocultar informacion en un scope muy privado, de imposible acceso desde el exterior.
*/

// function saludar(saludo){
//     return function(nombre) {
//         return `${saludo} ${nombre}`
//     }
// }

// const saludoInterno = saludar("Hola")

// console.log(saludoInterno("Ianela"))


// DILEMA DEL CONTADOR


// function incrementar(){
//     let contador = 0;

//     return function() {
//         return contador += 1
//     }
// }

// const add = incrementar()

// console.log(add())
// console.log(add())
// console.log(add())
// console.log(add())
// console.log(add())

/////////// BREAK 10 MIN /////////