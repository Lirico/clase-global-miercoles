/*
    PARADIGMAS DE PROGRAMACION

    PROGRAMACION FUNCIONAL

    PROGRAMACION ESTRUCTURADA

    PROGRAMACION ORIENTADA A OBJETOS (POO)
*/

// Clases -> Objetos instanciables con capacidad hereditaria

// let cadena = new String("hola")
// let numero = new Number(32)

// console.log(cadena)
// console.log(numero)

// Las cadenas son colecciones inmutables

// Los arreglos son colecciones mutables


// this.nombre = 'Bienvenidos al objeto window'

// // Elevacion o Hoisting
// const objeto = {
//     nombre: "Contexto del objeto",
//     imprimir: function() {
//         console.log(this.nombre)
//     }
// }

// const objeto2 = {
//     nombre: "Contexto del objeto 2",
//     imprimir: objeto.imprimir
// }


// objeto2.imprimir()


class Persona {
    constructor(nombre, edad, frase){
        this.nombre = nombre
        this.edad = edad
        this.frase = frase
    }
    decirFrase(){
        return this.frase
    }
}

const Ianela = new Persona("Ianela", 30, "Nada puede malir sal")
const Brenda = new Persona("Brenda", 24, "A mi no me jodan")

// class Empleado extends Persona {
//     constructor(nombre, edad, salario, aguinaldo){
//         super(nombre, edad)
//         this.salario = salario
//         this.aguinaldo = aguinaldo
//     }
// }

// const Ibar = new Empleado("Ibar", 24, 800000, 400000)


console.log(Ianela.decirFrase())
console.log(Brenda.decirFrase())