const a = {name: 'Teste'}

console.log(a)

const b = a // vai passar o ENDEREÇO do objeto, logo,
            // caso altere a, irá alterar b, vice-versa.
b.name = 'Opa'

console.log(a)

let c = 3

let d = c

d++ 

console.log(d)

let valor // sem atribuição
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco) // se produto está settado, vai dar true
// delete produto.preco
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)




