


// const $button = document.querySelector('button');

// function imprimir(){
//     const $p = document.createElement('p');
//     const dato = prompt('Ingrese un dato: ')
//     $p.textContent = dato;

//     document.body.appendChild($p);
// }

// document.addEventListener('click', (event) => console.log('Hiciste click en: ', event.target ))

const $form = document.querySelector('form');
const $username = document.querySelector('#username');
const $email = document.querySelector('#email');

// console.log("Base de datos")

// $username.addEventListener('change', (event) => {
//     console.log(event.target.value)
// })

// const handleSubmit = (event) => {
//     event.preventDefault()

//     const $usernameValidation = document.querySelector('#username_validation');
//     const $emailValidation = document.querySelector('#email_validation');

//     if(!$username.value){
//         $usernameValidation.textContent = "*El nombre de usuario es obligatorio."
//         return;
//     } else {
//          $usernameValidation.textContent = ""
//     }
//     if(!$email.value){
//         $emailValidation.textContent = "*El correo electronico es obligatorio."
//         return;
//     } else {
//         $emailValidation.textContent = ""
//     }

//     console.log({
//         username: $username.value,
//         email: $email.value
//     })
// }

// $form.addEventListener('submit', handleSubmit)


// document.addEventListener('keypress', (event) => {
//     if(event.key === "w"){
//         console.log("Arriba");
//     }
//     if(event.key === "a"){
//         console.log("Izquierda");
//     }
//     if(event.key === "s"){
//         console.log("Abajo");
//     }
//     if(event.key === "d"){
//         console.log("Derecha");
//     }
// })
// document.addEventListener('click', (event) => {
//     console.log("disparo")
// })
// document.addEventListener('keyup', (event) => {
//     if(event.key === "q"){
//         console.log("lluevia de balas")
//     }
// })      