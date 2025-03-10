/* 
    Funciones de orden superior o Funciones callback

    Una funcion de orden superior es un tipo de funcion que recibe otras funciones
    como argumento.
*/

// function saludar(usuario) {
//     return `Hola ${usuario}`
// }

// function despedir(usuario) {
//     return `Adios ${usuario}`
// }

// function crearSaludo(usuario, funcion){
//     return funcion(usuario)
// }

// console.log(crearSaludo("Gaston", despedir))

// const numeros = [1,2,3,4,5,6,7,8,9,10]

// Filtrado hecho a mano (artesanal)
// const filtrar = (arreglo, condicion) => {
//     const nuevoArreglo = []

//     for (let i = 0; i < arreglo.length; i++) {
//         if(condicion(numeros[i])){
//             nuevoArreglo.push(numeros[i])
//         }
//     }

//     return nuevoArreglo
// }

// console.log(filtrar(numeros, (elemento) => elemento % 2 === 0))
// console.log(filtrar(numeros, (elemento) => elemento % 2 === 1))

// Filtrado nativo del lenguaje
// console.log(numeros.filter((elemento) => elemento % 2 === 0))

// forEach -> Recorre un arreglo (en forma de procedimiento)
// map -> Recorre un arreglo y retorna un arreglo nuevo
// reduce -> Recorre un arreglo, opera todos los elementos y devuelve un valor como resultado de la operacion de todos elementos
// find -> Parecido al filter, pero en vez de devolver un arreglo, devuelve un elemento

// Ejemplo de forEach

// console.log(numeros.forEach((numero) => numero))

// const numeros = [1,2,3,4,5,6,7,8,9,10]
// const saludo = ["Hola","Gaston","wacho","pistola"]

// console.log(numeros.map((numero) => numero + 1))

// console.log(saludo.reduce((acumulador, cadena) => {
//     if(acumulador.length === 0){
//        return acumulador + cadena
//     } else {
//        return acumulador + " " + cadena
//     }
// }, ""))

// const frutas = ["Banana", "Mora", "Manzana", "Pera"]

// console.log(frutas.find(fruta => fruta.length === 4))