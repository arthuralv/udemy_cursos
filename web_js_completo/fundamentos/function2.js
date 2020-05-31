// Storing a function in a variable
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Storing a function arrow in a variable
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// Implicit return
const subtracao = (a, b) => a - b
const imprimir2 = a => console.log(a)

imprimir2('Legal!!!')