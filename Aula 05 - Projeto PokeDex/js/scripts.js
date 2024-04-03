


function carregarPokemons(){



    const requisicaoHttp = new XMLHttpRequest()
    requisicaoHttp.open("GET","https://pokeapi.co/api/v2/pokemon",false)
    requisicaoHttp.send()

    const resposta = JSON.parse(requisicaoHttp.responseText)
    const pokemons = resposta.results

    for( let index = 0 ; index < pokemons.length; index ++){
        const pokemon = pokemons[index]
        const id = index + 1
        pokemon.imagem = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + id +".png"
        adicionarCardPokemon(pokemon)
    }
}


function adicionarCardPokemon(pokemon){

    const imagemElemento = document.createElement("img")
    imagemElemento.setAttribute("src", pokemon.imagem)

    const textoElemento = document.createElement("h1")
    textoElemento.innerHTML = pokemon.name

    const divElemento = document.getElementById("conteudo-pokemon")
    divElemento.appendChild(imagemElemento)
    divElemento.appendChild(textoElemento)

}
