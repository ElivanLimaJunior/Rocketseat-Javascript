// função scope

let subject // note que não definimos o valor da variável.

function createThink() { // também se não definirmos o return para a função ela irá retornar undefined, mas a variável declarada irá receber o valor que declaramos dentro da função. 
    subject = 'study'
}

console.log(subject) // chamamos a variável vazia
createThink() // ativamos a função
console.log(subject) // chamaos a variável novamente