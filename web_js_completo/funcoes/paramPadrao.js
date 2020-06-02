// estrategia 1: gerar valor padrao

function soma1 (a, b, c) {
    a = a || 1 // leitura: ou ele vai ter o valor passado por parametro, ou caso nao tenha passado ele vai ser 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1())
console.log(soma1(3))
console.log(soma1(1, 2, 3))
console.log(soma1(0, 0, 0)) // nesse caso ele vai retornar 3 porque pela linguagem 0 é falso, logo ele não favorece a condicao que tem algum valor

// estrategia 2, 3 e 4: para gerar valor padrao

function soma2 (a, b, c) {
    a = a !== undefined ? a : 1
    b = b !== undefined ? b : 1
    c = c !== undefined ? c : 1
    return a + b + c
}

console.log(soma2())
console.log(soma2(3))
console.log(soma2(1, 2, 3))
console.log(soma2(0, 0, 0))

function soma3 (a, b, c) {
    a = 1 in arguments ? a : 1
    b = 1 in arguments ? b : 1
    c = 1 in arguments ? c : 1
    return a + b + c
}

console.log(soma3())
console.log(soma3(3))
console.log(soma3(1, 2, 3))
console.log(soma3(0, 0, 0))

function soma4 (a, b, c) {
    a = isNaN(a) ? 1 : a
    b = isNaN(b) ? 1 : b
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma4())
console.log(soma4(3))
console.log(soma4(1, 2, 3))
console.log(soma4(0, 0, 0))

// valor padrão do es2015

function soma5 (a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma5())
console.log(soma5(3))
console.log(soma5(1, 2, 3))
console.log(soma5(0, 0, 0))
