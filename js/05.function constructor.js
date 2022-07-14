/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando."
    }
}

const mayk = new Person('mayk')
const joao = new Person('joão')
console.log(mayk.name)
console.log(joao)

console.log(joao.walk())