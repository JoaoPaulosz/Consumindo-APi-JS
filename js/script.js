async function buscaEndereco(cep){
    var mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = ""
    try{
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCepConvertida = await consultaCep.json();
        if(consultaCepConvertida.erro){
            throw Error("CEP Inexistente")
            mensagemErro.innerHTML = "<p>CEP Inexsistente</p>"
        }
        var rua = document.getElementById('endereco')
        var bairro = document.getElementById('bairro')
        var cidade = document.getElementById('cidade')
        var estado = document.getElementById('estado')
        rua.value = consultaCepConvertida.logradouro
        bairro.value = consultaCepConvertida.bairro
        cidade.value = consultaCepConvertida.localidade
        estado.value = consultaCepConvertida.uf

        console.log(consultaCepConvertida);
        return consultaCepConvertida
    }catch(erro){
        console.log(erro);
        mensagemErro.innerHTML += "<p>CEP Invalido. Tente Novamente</p>"
    }

}
let enderecoCompleto = {}
var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value))

