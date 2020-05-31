const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = prod1.preco - prod1.preco * .2

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

prod2['Desconto Legal'] = prod2.preco - prod2. preco * .3

console.log(prod2)