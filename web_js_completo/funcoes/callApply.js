function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'notebook',
    preco: 4589,
    desc: .15,
    getPreco
}

global.preco = 20
global.desc = .1

console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49990, desc: .2 }

// parametros (contexto, parametros da função contexto)
console.log(getPreco.call(carro))

// parametros (contexto, [array contendo todos os parametros da funcao contexto])
console.log(getPreco.apply(carro, [0.17, '$']))