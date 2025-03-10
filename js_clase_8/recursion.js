/* 
    Recursion

    Funciones que se llaman a si mismas una y otra vez hasta que una condicion corta el proceso.

    Una funcion recursiva es 3 veces mas lenta que un bucle.
*/

// Quiero crear una cuenta regresiva de baje desde un numero N hasta 0 y corte.

// const cuentaRegresiva = numero => {
//     console.log(numero)

//     let proximoNumero = numero - 1

//     if(proximoNumero >= 0){
//         cuentaRegresiva(proximoNumero)
//     }

// }

// cuentaRegresiva(3)


// Secuencia de Fibonacci

// Formula: Fn = F(n–2) + F(n–1) donde n ≥ 2.
// 0, 1, 1, 2, 3, 5, 8...

// const Fibonacci = n => {
//     if(n < 2) return n

//     return Fibonacci(n - 2) + Fibonacci(n - 1)
// }


// console.log(Fibonacci(50))