const professor = {
    nome: "Vitor",
    idade: 27,
    email: "vitor@gmail.com",
}

//console.log('Nome: ' ,professor.nome,'\n','Idade: ',professor.idade,'\n','E-mail: ',professor.email)

professor.nome = 'Diéssica'
professor.idade = 30

//console.log(professor.nome,'\n',professor.idade)

const bicicleta = {
    cor: 'azul',
    marchas: 21,
    estilo: "speed",
}

//console.log(bicicleta['cor'],'\n',bicicleta['marchas'],'\n',bicicleta['estilo'])

bicicleta.estilo = 'biker'
bicicleta.cor = 'amarelo'

//console.log(bicicleta.estilo,'\n', bicicleta.cor)

/* Crie um objeto que represente um filme. Ele deve ter:
Dados da direção
Nome
Ano de lançamento
lista com o elenco 
e propriedade que diga se você já viu ou não. 

Acesse e imprima no console cada uma das propriedades:
metade usando notação do ponto e a outra metade com notação de colchetes. 
*/

/*const asBranquelas = {
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
*/

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

//console.log(`O nome da pessoa é ${rafael.nome}, ele tem ${rafael.idade} anos e gosta muito de ${rafael.generoMusical}.`)


const maima = {
    nome: 'Maima',
    idade: 26,
    generoMusical: 'Funk'

}

//console.log(`O nome da pessoa é  ${maima.nome}, ela tem ${maima.idade} anos e gosta muito de ${maima.generoMusical}.`)



const pietro = {
    nome: 'pietro',
    idade: 9,
    generoMusical: 'eletrônica'

}

//console.log(`O nome da pessoa é ${pietro.nome}, ele tem ${pietro.idade} anos e gosta muito de ${pietro.generoMusical}.`)


const professores = [
    {nome: 'Diéssica', modulo: 1},
    {nome: 'Pietro', modulo: 2}
]

//console.log(professores)
//console.log(professores[1])
//console.log(professores[1].nome)


const curso = {
    nome: 'FrontEnd'//string
}

//Adicionando atributo
curso.numeroEstudantes = 50;
curso['numeroEstudantes'] = 80;

//console.log(curso.nome) // Irá aparecer o FrontEnd
//console.log(curso.numeroEstudantes)

//EXERCICIO 1 - NOVO FILME 

//const pulpFiction = {
  //  diretor: 'Quentin Tarantino',
  //  anoDeLançamento: 1994,
  //  listaDeElenco: ['John Travolta','Samuel L. Jackson','Uma Thurman'],
  //  assistiuFilme: 'S',
//}

//Adicione ao objeto do exercicio 1 uma lista com os nomes dos personagens do filme. 

//pulpFiction.nomePersonagens = ['Vicent Vega','Jules Winnfield', 'Mia Wallace'];

//Acesse e imprima no console cada pessoa do elenco junto com seu respectivo personagem 

//console.log(pulpFiction.listaDeElenco[0] +' = ' + pulpFiction.nomePersonagens[0],
     //'\n' + pulpFiction.listaDeElenco[1] +' = ' + pulpFiction.nomePersonagens[1],
     //'\n' + pulpFiction.listaDeElenco[2] +' = ' + pulpFiction.nomePersonagens[2])

//Altere a primeira pessoa do elenco por 'Xuxa'. 

//pulpFiction.listaDeElenco[1] = 'Xuxa';
//console.log(pulpFiction.listaDeElenco[1])

//Imprima no console todas as propriedades do objeto. 

//console.log(pulpFiction)

// criando ojeto dentro de objeto 

const pulpFiction = {
    diretor: 'Quentin Tarantino',
    anoDeLançamento: 1994,
    //estrutura de como fazer o objeto
    elenco: [
    { ator: 'John Travolta', personagem: 'Vicent Vega'},
    { ator: 'Samuel L. Jackson', personagem: 'Jules Winnfield'},
    { ator: 'Uma Thurman', personagem: 'Mia Wallace'},
    ]
    //
    }

console.log(pulpFiction.elenco[2].ator, ' como ', pulpFiction.elenco[2].personagem)


let carros = ['monza','corsa','belina']
carros [0]= 'marea'

console.log(carros)
console.log(...carros)
console.log(...carros[0])



const usuario = {
    nome: 'Diéssica',
    idade: 30,
    email: 'diessicarrc@gmail.com',
    cidade: 'são leopoldo',
    marcas: ['Dell', 'Apple','Xaomi'],
}

console.log(usuario.marcas)


const userNovo = {
    ...usuario,
    nome: 'James Hetfield'


}
console.log(userNovo.nome)
// spread é os ...


//Crie uma função que receba um objeto de pessoa (Exercicio 2) 

const usuarioTeste = { nome: 'Rafael', idade: 26, }


function novoUsuario(pessoa) {
     console.log(pessoa)
     const pessoaNova = {
        ...pessoa,
        comidas:['pizza','lasanha','xis'],
        amigue:{ nome:'Jéssica', idade: '23'}
    }
    return pessoaNova;
    }
let teste = novoUsuario(usuarioTeste);

console.log(`O nome da pessoa é ${teste.nome} e suas comidas preferidas são ${teste.comidas[0]}, ${teste.comidas[1]} e ${teste.comidas[2]}. Sua melhor amiga é ${teste.amigue.nome} e tem ${teste.amigue.idade} anos.` )
    



//Crie um novo objeto mantendo as propriedades originais e acrescentando:
//Uma propriedade com a lista de suas comidas preferidas;
//Uma propriedade que seja um objeto, como nome e idade, para representar o melhor amigo da pessoa. 

//Ainda na função, imprima no console as propriedades desse objeto seguindo o modelo abaixo:

//"O nome da pessoa é ______ e suas comidas preferidas são ___, ____ e ______. Seu melhor amigo se chama ____ e tem ___ anos"






