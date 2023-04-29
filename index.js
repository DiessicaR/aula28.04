const professor = {
    nome: "Vitor",
    idade: 27,
    email: "vitor@gmail.com",
}

console.log('Nome: ' ,professor.nome,'\n','Idade: ',professor.idade,'\n','E-mail: ',professor.email)

professor.nome = 'Diéssica'
professor.idade = 30

console.log(professor.nome,'\n',professor.idade)

const bicicleta = {
    cor: 'azul',
    marchas: 21,
    estilo: "speed",
}

console.log(bicicleta['cor'],'\n',bicicleta['marchas'],'\n',bicicleta['estilo'])

bicicleta.estilo = 'biker'
bicicleta.cor = 'amarelo'

console.log(bicicleta.estilo,'\n', bicicleta.cor)

/* Crie um objeto que represente um filme. Ele deve ter:
Dados da direção
Nome
Ano de lançamento
lista com o elenco 
e propriedade que diga se você já viu ou não. 

Acesse e imprima no console cada uma das propriedades:
metade usando notação do ponto e a outra metade com notação de colchetes. 
*/

const asBranquelas = {
    diretor: 'Keenen Ivory Wayans',
    anoDeLançamento: 2004,
    listaDeElenco: ['Marlon Mayans','Shawn Mayans','Terry Crews','Busy Phillips','Jaime King','Brittany Daniel','Jennifer Carpenter'],
    assistiuFilme: prompt('Você já assistiu as Branquelas?')
}

console.log('O diretor do filme é ',asBranquelas.diretor)
console.log('O ano de lançamento do filme foi ',asBranquelas.anoDeLançamento)
console.log('O elenco do filme são ', asBranquelas['listaDeElenco'])
console.log(asBranquelas.assistiuFilme)

console.log(asBranquelas.listaDeElenco[2], asBranquelas.listaDeElenco[6])


/* Crie um objeto que represente uma pessoa. 
Essa pessoa precisa ter nome, idade, gênero musical preferido. 

Acesse e imprima no console as propriedades desse objeto, seguindo o modelo abaixo:

"O nome da pessoa é ___, ela tem ___ anos e gosta muito de ______."
*/

const rafael = {
    nome: 'Rafael',
    idade: 26,
    generoMusical: 'Pagode',
}

console.log(`O nome da pessoa é ${rafael.nome}, ele tem ${rafael.idade} anos e gosta muito de ${rafael.generoMusical}.`)


const maima = {
    nome: 'Maima',
    idade: 26,
    generoMusical: 'Funk'

}

console.log(`O nome da pessoa é  ${maima.nome}, ela tem ${maima.idade} anos e gosta muito de ${maima.generoMusical}.`)



const pietro = {
    nome: 'pietro',
    idade: 9,
    generoMusical: 'eletrônica'

}

console.log(`O nome da pessoa é ${pietro.nome}, ele tem ${pietro.idade} anos e gosta muito de ${pietro.generoMusical}.`)