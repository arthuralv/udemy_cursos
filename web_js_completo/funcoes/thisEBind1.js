const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) // caso botasse apenas 'saudacao' nao funcionaria
    }
}

pessoa.falar()

const falar = pessoa.falar

falar() // conflito entre paradigmas: funcional e OO


const falarDePessoa = pessoa.falar.bind(pessoa) // dessa forma, o this vai ser do obj pessoa
// bind é o método responsável por amarrar um determinado objeto para ele ser o dono da execução daquele método
// sempre que referenciar o 'this' vai ser do objeto passado pelo parâmetro do método bind

const falar2 = pessoa.falar
falar2()