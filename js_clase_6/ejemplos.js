const productos = [
    {id: 1, name: "Xayah", price: "10"}, // 0
    {id: 2, name: "Garen", price: "20"}, // 1
    {id: 3, name: "Twitch", price: "30"}, // 2
    {id: 4, name: "Yasuo", price: "40"}, // 3
    {id: 5, name: "Nasus", price: "50"}, // 4
]

function crearTarjetas(listaProductos){
    for(let producto = 0; producto < productos.length; producto++ ){
        console.log(`
                 ${listaProductos[producto].name}
                  ${listaProductos[producto].price}
                 - 0 +
                AGREGAR    
        `)
    }
}

crearTarjetas(productos)

// Cadena templada
// let nombre = "Gabriela"
// let apellido = "Semorile"

// let cadena1 = "Hola" + " " 
//     + nombre + " " + 
//                 apellido + "," 
//             + " " + "soy el apuesto Gaston."

// let cadena2 = `Hola 
//     ${nombre} 
//                     ${apellido}, 
//         soy el apuesto Gaston`

// console.log(cadena1)
// console.log(cadena2)

