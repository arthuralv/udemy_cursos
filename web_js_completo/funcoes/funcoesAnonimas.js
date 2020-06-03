const soma = function (num1, num2) {
    return num1 + num2
}

const multiplicacao = function (num1, num2) {
    return num1 * num2
}

const divisao = function (num1, num2) {
    return num2 !== 0 ? num1 / num2 : Error ('Não divisível por 0')
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(10, 20)
imprimirResultado(10, 20, multiplicacao)
imprimirResultado(10, 20, divisao)

imprimirResultado(10, 20, function (a, b) {
    return a % b
})

imprimirResultado(10, 20, function (a, b) {
    return a - b
})

imprimirResultado(10, 20, (a, b) => a * b)

const pessoa = {
    falar: function () {
        console.log('Olá')
    }
}

pessoa.falar()