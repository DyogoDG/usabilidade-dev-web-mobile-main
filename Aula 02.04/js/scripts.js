



function carregarCEP(){

    const elementoCepInformado = document.getElementById("informacaoCEP")
    const cepURL = elementoCepInformado.value

   
    const requisicaoHttp = new XMLHttpRequest()
    requisicaoHttp.open("GET","https://viacep.com.br/ws/"+cepURL+"/json/",false)
    requisicaoHttp.send()

    const respostaEndereco = JSON.parse(requisicaoHttp.responseText)
    const endereco = respostaEndereco.results
    adicionarCEP(respostaEndereco)
    
 
}

function adicionarCEP(respostaEndereco){
    
    const cepElemento = document.createElement("h4")
    cepElemento.innerHTML = respostaEndereco.cep

    const logradouroElemento = document.createElement("h4")
    logradouroElemento.innerHTML = respostaEndereco.logradouro

    const bairroElemento = document.createElement("h4")
    bairroElemento.innerHTML = respostaEndereco.bairro

    const localidadeElemento = document.createElement("h4")
    localidadeElemento.innerHTML = respostaEndereco.localidade

    const ufElemento = document.createElement("h4")
    ufElemento.innerHTML = respostaEndereco.uf

    const ibgeElemento = document.createElement("h4")
    ibgeElemento.innerHTML = respostaEndereco.ibge


    const divElemento = document.getElementById("conteudo-cep")
    divElemento.appendChild(cepElemento)
    divElemento.appendChild(logradouroElemento)
    
    divElemento.appendChild(bairroElemento)
    divElemento.appendChild(localidadeElemento)
    divElemento.appendChild(ufElemento)
    divElemento.appendChild(ibgeElemento)
    

}