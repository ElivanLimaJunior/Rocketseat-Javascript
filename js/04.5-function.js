// função scope

let subject = 'create video'

function createThink(subject) { // se no parametro eu colocar um novo subject ele começa a existir apenas dentro da função
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink(subject))

console.log()
console.log()
console.log()

