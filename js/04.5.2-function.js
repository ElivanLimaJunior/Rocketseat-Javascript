// função scope

let subject // note que não definimos o valor da variável.

function createThink() { // se eu não passar nem um parametro, ele irá sobrescrever o parametro passado fora da função.
    subject = 'study'
    return subject
}

console.log(subject) // como ainda não tem um valor especifico ele da underfined.
console.log(createThink(subject)) // na função definimos um retorno para o subject.
console.log(subject) // agora podemos notar que ao imprimirmos o subject ele nos mostra o mesmo declarado na função.

console.log()