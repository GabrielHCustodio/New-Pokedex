/*pegarPokemons(40)

function pegarPokemons(quantidade) {
    fetch('https://pokeapi.co/api/v2/pokemon?limit='+quantidade)
    .then(response => response.json())
    .then(allPokemons => {
        var pokemons = []

        allPokemons.results.map((val) => {
            fetch(val.url)
            .then(response => response.json())
            .then(pokemonSingle => {
                pokemons.push({
                    imagem: pokemonSingle.sprites.front_default
                })
            })

            if(pokemons.length == quantidade) {
                var containerBoxes = document.querySelector('.container-boxes')
                containerBoxes.innerHTML = ""

                pokemons.map((val) => {
                    containerBoxes.innerHTML +=`
                        <div class="box">
                            <img src="`+val.imagem+`">
                        </div>
                        <!--box-->
                    `
                })
            }
        })
    })
} */
pokemons(3)
function pokemons(quantidade) {
    fetch('https://pokeapi.co/api/v2/pokemon?limit='+quantidade)
    .then(response => response.json())
    .then(allPokemons => {
        var imagePokemon = []

        allPokemons.results.map((val) => {
            var image = val.url
            imagePokemon.push(image)
        })

            var containerBoxes = document.querySelector('.container-boxes')
            containerBoxes.innerHTML+=`
                <div class="box">
                    <img src="`+imagePokemon+`">
                </div>
                <!--box-->
            `

            console.log(imagePokemon)
    })
}



/* Procurar pokemons 
const buttonSearch = document.querySelector('#buttonSearch')

buttonSearch.addEventListener('click' , () => {
    const nameSearch = document.querySelector('#nameSearch')

    function research() {
        const search = nameSearch.value
        console.log(search)
    }

    research()
})*/