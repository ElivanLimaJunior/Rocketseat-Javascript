// 1. Declare uma variável de nome weight
let weight

// 2. Que tipo de dado é a variavél acima ?

console.log(typeof weight)

/*
    3. Declare uma variável e atribua valores para cada umd os dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean
*/

// let name = 'Elivan'
// let age = 24
// let stars = 4.5
// let isSubscribed = true

/*
    4. A variável student abaixo é de que tipo de dados?

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:

        <name> de idade <agr> pesa <weight> kg.

        Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
*/ 

console.log()

// objeto
let student = {
    name: 'Elivan',
    age: 42,
    weight: 78.9
}

// tipo de dado
console.log(typeof student)

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

// 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio.

let students = []

// 6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)

students = [
    student
]

console.log(students)

//  7. Coloque no console o valor da posição zero do Array acima

console.log()
console.log(students[0])

// 8. Crie um novo student e coloque na posição 1 do Array students

const john = {
    name: "John",
    age: 23,
    weight: 74.8,
    isSubscribed: true
}

//  uma maneira de fazer isso é abrindo o nosso Array novamente e reorganizando as propriedades:
/*
    studetns = [
        student,
        john
    ]
*/
console.log()
// Ou posso apenas atribuir a posição que eu quero que o jhon entre
students[1] = john
console.log(students)

/* 
9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após resposta, rode o código e veja se você acertou.

console.log(a)
var a = 1
*/

console.log(a)
var a = 1

// da underfine, pois a variável "a" ainda não foi declarada.

