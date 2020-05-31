let a = 3
global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports == this)
console.log(module.exports)

// criando uma variavel maluca: sem var e let!
// botando no ambiente global do node, não fazer isso!

abc = 3
console.log(global.abc)

// module.exports = { e: 465, f: false, g: 'teste'}