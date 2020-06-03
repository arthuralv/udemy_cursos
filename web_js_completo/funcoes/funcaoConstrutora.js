class Carro {
    // atributo privado
    #velocidadeAtual = 0 // sempre que for referenciar na classe, botar this.'#'velocidadeAtual

    // atributo publico
    nome = ''

    // construtor
    constructor (velocidadeMaxima = 200, delta = 5, nome) {
        // velocidadeMaxima e delta sao criados apenas na construcao do objeto
        this.velocidadeMaxima = velocidadeMaxima
        this.delta = delta
        this.nome = nome
    }

    // metodo publico
    acelerar () {
        const velocity = this.#velocidadeAtual + this.delta
        this.#velocidadeAtual = velocity <= this.velocidadeMaxima ? velocity : this.velocidadeMaxima
    }

    get getVelocidadeAtual () { return this.#velocidadeAtual }

    setVelocidade (velocidade) {
        this.#velocidadeAtual = velocidade
    }
}

const uno = new Carro
uno.acelerar()

console.log(uno.getVelocidadeAtual)

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()

console.log(ferrari.getVelocidadeAtual)

console.log(typeof Carro, typeof ferrari)

ferrari.setVelocidade(200)

console.log(ferrari.getVelocidadeAtual)

