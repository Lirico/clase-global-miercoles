/* DOM -> Document Object Model */

// console.log(document)
// console.log(document.doctype)
// console.log(document.documentElement)
// console.log(document.head)
// console.log(document.body)
// console.log(document.body)

/* SELECTORES */
// Etiqueta -> getElementsByTagName(elemento)
// Clase -> getElementsByClassName(elemento)
// ID -> getElementById(elemento)

// console.log(document.getElementsByTagName('section'))
// console.log(document.getElementsByClassName('container'))
// console.log(document.getElementById('unico'))

// SELECTORES UNIVERSALES
// Unico elemento -> querySelector(elemento)
// Grupo elementos -> querySelectorAll(elemento)

// console.log(document.querySelectorAll('section'))

// console.log(document.querySelectorAll('.container'))

// console.log(document.querySelector('#unico'))

/* ACCESO E INSERCION DE ATRIBUTOS */

// const $articulo = document.querySelector('#articulo');

// let texto = `
//     <p>
//         Lorem ipsum dolor <b>sit amet</b> consectetur
//         <mark>adipisicing elit</mark>. Quisquam, nemo.
//     </p>
// `

// $articulo.textContent = texto;
// $articulo.innerHTML = texto;

/* CREACION E INSERSION DE ELEMENTOS */

const d = document;

const pokemons = [
    {
        img: "https://i0.wp.com/lordlibidan.com/wp-content/uploads/2019/03/Running-Pikachu-GIF.gif?resize=480%2C342&ssl=1",
        name: "Pikachu",
        type: "Electric",
        bgColor: "yellow"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/it/archive/4/43/20120529174523%21Bulbasaur.png",
        name: "Bulbasaur",
        type: "Plant/Venom",
        bgColor: "green"
    },
    {
        img: "https://freepngimg.com/thumb/pokemon/117717-charmander-png-image-high-quality-thumb.png",
        name: "Charmander",
        type: "Fire",
        bgColor: "orange"
    },
    {
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8355c42b-bec4-426e-a0fa-f39523ea6c02/da74aa6-367253cd-ef9e-41fe-83df-64b857675335.png/v1/fill/w_848,h_720/vamo_a_calmarno_render_by_taringamemes_da74aa6-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvODM1NWM0MmItYmVjNC00MjZlLWEwZmEtZjM5NTIzZWE2YzAyXC9kYTc0YWE2LTM2NzI1M2NkLWVmOWUtNDFmZS04M2RmLTY0Yjg1NzY3NTMzNS5wbmciLCJ3aWR0aCI6Ijw9ODQ4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ZNF3N5MBYnZKSWpRRuWvSYFLbTvxacfR439C1L60lDk",
        name: "Squirtle",
        type: "Water",
        bgColor: "blue"
    },
    {
        img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/017.png",
        name: "Pidgeotto",
        type: "Flying/Normal",
        bgColor: "gold"
    },
]

const $cards = d.querySelector(".cards");

pokemons.forEach(pokemon => {
    const $card = d.createElement("div"),
      $cardImg = d.createElement("img"),
      $cardH3 = d.createElement("h3"),
      $cardP = d.createElement("p");
    
    // Insercion de elementos
    $cards.appendChild($card);
    $card.appendChild($cardImg);
    $card.appendChild($cardH3);
    $card.appendChild($cardP);
    
    // Insercion de atributos
    $card.className = "card";
    $cardImg.src = pokemon.img;
    $cardImg.alt = "Yoda the Jedi";
    $cardH3.textContent = pokemon.name;
    $cardP.textContent = pokemon.type;

    // Insercion de estilos
    $card.style.backgroundColor = pokemon.bgColor;
})






// INSERCION POR RECORRIDO
// const estaciones = ["Verano", "Otoño", "Invierno", "Primavera"]

// const $ul = d.createElement('ul');

// d.write("<h3>Estaciones del anio</h3>")
// d.body.appendChild($ul)

// estaciones.forEach(estacion => {
//     const $li = d.createElement('li');
//     $li.textContent = estacion;
//     $ul.appendChild($li);
// })