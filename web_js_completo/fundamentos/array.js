const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // irá resultar em um valor undefined


valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)


valores.pop() // isso retorna o valor retirado, caso vc queira deletar a partir de um indice, passe por paramentro o indice
console.log(valores)
delete valores[0] // isso também deleta o valor do array, porém o espaço permanece como vazio
console.log(valores)

