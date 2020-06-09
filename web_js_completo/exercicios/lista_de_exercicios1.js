// 1)

getValores = (valor1, valor2) => {
    return `
    soma = ${valor1 + valor2}
    subtração = ${valor1 - valor2}
    multiplicação = ${valor1 * valor2}
    divisão = ${valor2 != 0 ? valor1 / valor2 : 'Não é possível uma divisão por zero!'}`
}

//console.log(getValores(5, 0))

// 2)

getTriangulo = (A, B, C) => {
    if (A === B || B === C || C === A) {
        return A === B && B === C ? 'Equilátero' : 'Isóceles'
    } else {
        return 'Escaleno'
    }
}

/*
console.log(getTriangulo(1, 2, 3)) // escaleno
console.log(getTriangulo(2, 2, 2)) // equilatero
console.log(getTriangulo(1, 2, 2)) // isoceles
console.log(getTriangulo(3, 2, 3)) // isoceles
console.log(getTriangulo(2, 2, 3)) // isoceles
*/

// 3)

getExponenciacao = (base, expoente) => {
    return `exponenciacao = ${Math.pow(base, expoente)}`
}

//console.log(getExponenciacao(2, 10))

// 4)

getDivisao = (dividendo, divisor) => {
    return `
    resultado = ${divisor !== 0 ? dividendo / divisor : 'Não é possível dividir por zero'}
    resto = ${divisor !== 0 ? dividendo % divisor : 'Não é possível dividir por zero'}`
}
console.log(getDivisao(10, 20)) 
console.log(getDivisao(10, 0))
console.log(getDivisao(4, 2))

// 5)

getFormatacao = numero => {
    return `R$ ${parseFloat(numero).toFixed(2)}`.replace('.', ',')
}

//console.log(getFormatacao(0.1 + 0.2))



// o resto continua sendo funções matemáticas que não vem ao caso.