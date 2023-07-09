let alunos = [
    {nome: "Joao", nota: 12.5},
    {nome: "Maria", nota: 17}
]

//Imperatrivo
let total = 0
for(let i = 0; i<alunos.length; i++){
    total += alunos[i].nota
}
let media = total / alunos.length
console.log(media)

//Declarativo

let getNota = aluno => aluno.nota
let soma = (total, atual)=> total + atual
const total1 = alunos.map(getNota).reduce(soma)
const media1 = total1 / alunos.length
console.log(media1)