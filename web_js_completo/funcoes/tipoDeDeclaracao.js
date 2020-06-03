console.log(soma(1, 2)) // como é function declaration então não dá error chamar antes de sua declaração
// console.log(subtracao(1, 2)) como é function expression então vai dar error chamar antes de sua declaração
// console.log(mult(2, 3)) também não irá funcionar, apenas se declarar antes

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const subtracao = function (x, y) {
    return x - y
}
console.log(subtracao(2, 3))

// named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(2, 3))

