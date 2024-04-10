
const grupoGrama = ["bulbasaur","venusaur","ivysaur"]
const grupoFogo = ["charmander","charmeleon","charizard"]
const grupoAgua = ["squirtle","wartortle","blastoise"]
const grupoInseto = ["caterpie","metapod","weedle","kakuna","butterfree","beedrill"]
const grupoVoador = ["pidgey","pidgeotto","pidgeot"]
const grupoTerra = ["rattata","raticate"]

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

    console.log(pokemon)
    const imagemElemento = document.createElement("img")
    imagemElemento.setAttribute("src", pokemon.imagem)

    const textoElemento = document.createElement("h1")
    textoElemento.innerHTML = pokemon.name
    if(grupoGrama.includes(pokemon.name)){
        textoElemento.classList.add("grama")
    }else if(grupoAgua.includes(pokemon.name)){
        textoElemento.classList.add("agua")
    }else if(grupoFogo.includes(pokemon.name)){
        textoElemento.classList.add("fogo")
    }else if(grupoTerra.includes(pokemon.name)){
        textoElemento.classList.add("terra")
    }else if(grupoInseto.includes(pokemon.name)){
        textoElemento.classList.add("inseto")
    }else if(grupoVoador.includes(pokemon.name)){
        textoElemento.classList.add("voador")
    }

    const divElemento = document.getElementById("conteudo-pokemon")
    divElemento.classList.add("card")
    divElemento.appendChild(imagemElemento)
    divElemento.appendChild(textoElemento)

}
