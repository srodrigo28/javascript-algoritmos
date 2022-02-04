/***
 *  Esse algoritmo pecorre uma lista imprindo o menor valor
 */
const precosLivros = [25, 15, 30, 50, 45, 20]

let maisBarato = 0

for(let atual = 0; atual < precosLivros.length; atual++){
    if(precosLivros[atual] < precosLivros[maisBarato]){
        maisBarato = atual
    }
}
console.log(`O livro mais barato é ${precosLivros[maisBarato]}`)