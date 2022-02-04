const livros = require('./exercicio02')
//console.log(livros)
let maisBarato = 0

for(let atual = 0; atual < livros.length; atual++){
    if(livros[atual].preco < livros[maisBarato].preco){
        maisBarato = atual
    }
}
// console.log(livros[maisBarato].preco, livros[maisBarato].titulo)

console.log(`O livro mais barato é ${livros[maisBarato].titulo} valor R$ ${livros[maisBarato].preco}`+',00')

