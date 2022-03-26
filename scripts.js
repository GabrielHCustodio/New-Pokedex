function pegarPokemons() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=40')
    .then(response => response.json())
    .then(allPokemons => {
        var pokemons = []

        allPokemons.results.map((val) => {
            const name = val.name

            pokemons.push(name)
        })

        console.log(pokemons)
    })
}

pegarPokemons()

const buttonSearch = document.querySelector('#buttonSearch')

buttonSearch.addEventListener('click' , () => {
    const nameSearch = document.querySelector('#nameSearch')

    function research() {
        const search = nameSearch.value
        console.log(search)
    }

    research()
})