console.log() // já se usa o ponto para console
console.log(typeof console)
console.log(Math.ceil(6.1))

const obj1 = {}

obj1.nome = 'Bola'
console.log(obj1.nome)
obj1['nome'] = 'Bola2' // é recomendado usar pois pode usar texto para criar/identificar um atributo do objeto
                       // lembrando não usar atributos com espaço porque vai dificultar o uso e não poderá usar o ponto
console.log(obj1.nome)

function Obj(nome) { //acho melhor usar a palavra reservada Class para criar um tipo de obj
    this.nome = nome // this deixa o atributo como público
    this.exec = function(){
        console.log('Exec...') 
    }
} 

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome, obj3.nome)
obj3.exec()