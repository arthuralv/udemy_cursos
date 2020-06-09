criarProduto = (nome, preco) => {
    return {
        nome,
        preco, 
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 1999.90))
console.log(criarProduto('iPad', 1199.90))