/*
const prod1 = {
    nome: '---',
    preco: 45,
}

const prod2 = {
    nome: '___',
    preco: 123012
}
*/

function criarPessoa (nome, sobrenome) {
    return {
        nome: nome,
        sobrenome: sobrenome
    }
}

console.log(criarPessoa('ana', 'banana'))


criarProduto = (nome, preco, desconto = .50) => {
    return {
        nome: nome,
        preco: preco,
        precoComDesconto: preco - preco * desconto,
    }
}

console.log(criarProduto('xampu', 11.99))