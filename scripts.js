function pegarPokemons() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
    .then(response => response.json())
    .then(allPokemons => {
        var pokemons = []

        allPokemons.results.map((val) => {
            console.log(val.name)
        })
    })
}

pegarPokemons()

