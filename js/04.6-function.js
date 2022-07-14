// funcion hoisting

// Observe que primeiro nós chamamos a função e depois a declaramos.
// Uma função criada dessa forma irá sofrer o hoisting.
console.log('Parte 1')
console.log()

sayMyName()

 function sayMyName() {
    console.log('Elivan')
 }

 console.log()
 console.log('Parte 2:')
 console.log()

//  agora o que acontece se eu usar o const para a nossa função ?

sayMyName2()

const sayMyName2 = function() { // uma função dessa forma não sofre o hoisting, dessa não sofre elevação por que é uma função de expressão.
    console.log('Elivan')
}