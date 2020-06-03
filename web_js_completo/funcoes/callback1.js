const fabricantes = ['mercedes', 'audi', 'BMW']

const imprimir = (nome, indice) => { console.log(`${indice + 1}. ${nome}`) }

fabricantes.forEach(imprimir)

fabricantes.forEach((nome, indice) => { console.log(`${indice + 1}. ${nome}`)})