let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

// aconselhavel sempre tentar usar const invés de let ou var

isAtivo = 1
console.log(!!isAtivo)

isAtivo = 0
console.log(!!isAtivo)

// sempre que for diferente de zero, será true, portanto, será falso
// caso seja igual a 0

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![]) // array
console.log(!!{}) // objeto literal
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar...')
console.log(!!('' || null || 0 || 'epa' || ' '))

let nome = ''
console.log(nome || 'Desconhecido') // deu falso, nesse caso ele vai imprimir 'Desconhecido'
nome = 'lucas'
console.log(nome || 'Desconhecido') // deu true, nesse caso ele vai imprimir 'lucas'
