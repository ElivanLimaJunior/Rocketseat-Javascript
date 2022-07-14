// Callback function

function sayMyName(name) { // 1. note que o parametro para essa função é name, isso é importante para entender o callback.
    console.log('antes de executar a funcao callback')

    name() // 3. aqui estamos usando a função que foi passada para o parametro name. Ao executar podemos notar que foi exatamente a função que criamos para o parametro name.

    console.log('depois de executar a callback')
}

sayMyName( // 2. aqui fora estamos passando o valor para dentro do parametro name que está na função 'sayMyName'. E esse valor é uma função que será executada dentro da função 'sayMyName
    () => {
        console.log('estou em uma callback')
    }
)

// com isso ele roda o console.log() dps roda o name e dps roda o outro console.log()