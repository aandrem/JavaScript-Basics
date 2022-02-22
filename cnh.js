function verificarIdade() {

    var nome = document.querySelector('input[name=nome]')
    var idade = document.querySelector('input[name=idade]')

    if (idade.value.length == 0) {
        alert('Campo obrigatório')
        return
    }

    var idadeNum = parseInt(idade.value)

    if (idadeNum >= 18) {
        alert('Você pode tirar sua CNH')
    } else if (idadeNum > 4) {
        alert('Você é menor de idade. Espere mais um pouco...')
    } else {
        alert('Vá chupar chupeta!!')
    }
}