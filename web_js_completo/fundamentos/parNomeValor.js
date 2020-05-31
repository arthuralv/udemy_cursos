// par nome/valor

const saudacao = 'Opa' // contexto léxico 1:
                       // na qual a sua variável foi definida fisicamente no seu código
function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
                              // contexto diferente pois é de uma função
    return saudacao
}

// const saudacao = 'Epa' irá da um erro porque const é definido apenas uma vez


// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Tuza',
    idade: 22,
    peso: 70,
    endereco: {
        logradouro: 'Rua Cícero Jacinto',
        numero: 45
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)