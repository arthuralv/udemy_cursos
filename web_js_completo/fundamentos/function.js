// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6)
imprimirSoma()

// Funcao com retorno
function soma(a = 1, b = 1) {
    return a + b
}

console.log(soma(1, 2))
console.log(soma(1))
console.log(soma())