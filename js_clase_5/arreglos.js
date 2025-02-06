

// ARRAYS -> ARREGLOS

// Un arreglo es una coleccion de datos.
// Los arreglos son como una estanteria de una 
// biblioteca, donde cada libro es un dato.

// Esta estanteria esta dividida en posiciones.
// Cada posicion tiene un valor en forma de indice.

// Positiones 0,1,2,3,4,5,6 ....

// const arreglo = [2,"Pepe",false,0,2,"Tu vieja"]



const estudiantes = ['Martin', 'Fernando', 'Sara','Samuel', 'Jorge', 'Pedro']
                //      0           1         2      3         4        5

// Patricia -> Quiero ingresar a la comision de los miercoles

// append -> Flaquito, te equivocaste de lenguaje -> Esto es python

// push es agregar un elemento al final del arreglo
// push es un metodo, es decir, una funcion asociada o que se ejecuta sobre un tipo de dato directamente.
// estudiantes.push("Patricia")


// Estrategia de crear un nuevo arreglo, poner un dato y rellenar con lo del arreglo viejo
// function agregarAlumno(listaEstudiantes, estudiante){
//     const nuevaLista = [];
//     nuevaLista[0] = estudiante;
//     for (let i = 0; i < listaEstudiantes.length; i++) {
//         nuevaLista[nuevaLista.length] = listaEstudiantes[i]
//     }
//     return nuevaLista
// }

// console.log(agregarAlumno(estudiantes, "Patricia"))


// Estrategia de reversion de arreglo
// estudiantes.reverse()
// estudiantes.push("Patricia")
// estudiantes.reverse()

// // Agregar un elemento al comienzo del arreglo
// estudiantes.unshift("Patricia")

// // Quitar un elemento del final del arreglo
// estudiantes.pop()

// // Quitar un elemento del comienzo del arreglo
// estudiantes.shift()


