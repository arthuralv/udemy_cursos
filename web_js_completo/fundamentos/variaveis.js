var numero1 = 3
let numero2 = 4

console.log(numero1, numero2)

/*
* O código a seguir foi comentado porque ele dá erro de
* redeclaração, pois a variável numero2 já foi declarada
* anteriormente


* É recomendado não usar o identificador var para criar
* variáveis, pois você fica mais sujeito a erros
*/

// var numero1 = 30
// let numero2 = 20

var a = 3
var a = 'arthur'

console.log(a)

/* 
* Isto não deveria passar, porém o identificador var faz com que
* faz com que seja possível, induzindo ao error 
*/

numero1 = 20
numero2 = 30

console.log(numero1, numero2)

const c = 20
/* 
* c = 30 depois da declaração não pode mudar, logo caso eu tente
* vai subir um erro
*/