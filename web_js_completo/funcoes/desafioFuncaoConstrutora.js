// Factory

criarPessoa = () => {
    nome,
    falar = () => console.log(`Meu nome é ${nome}`)
}

// Classe 

class Pessoa {
    constructor (nome) {
        this.nome = nome
    }

    falar() {return console.log(`Meu nome é ${this.nome}`)} 

}

// Função Construtora

function Pessoa(nome) {
    this.nome = nome

    this.falar = console.log(`Meu nome é ${this.nome}.`)
}


const p1 = new Pessoa('João')
p1.falar()