

/****** ASINCRONIA ******/


// console.log("Instruccion 1")
// console.log("Instruccion 2")

// setTimeout(() => console.log("Instruccion 3"), 1000);

// console.log("Instruccion 4")
// console.log("Instruccion 5")


// API -> GET -> OBTENCION O LECTURA

// API REST -> GET -> POST -> PUT -> DELETE

// API -> Interfaz de programacion de aplicaciones

const $ul = document.querySelector('ul');


fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        const pokemons = data.results;

        pokemons.forEach(pokemon => {
            const $li = document.createElement('li');
            $li.textContent = pokemon.name;
            $ul.appendChild($li);
        })
    })

