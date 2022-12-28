/*
2) Faça um programa que receba N quantidade de números e seus respectivos valores.
Imprima o maior número par e o menor número impar.

    Exemplo:
        Entrada:
            5
            3
            4
            1
            10
            8

        Saída:
            Maior número par: 10
            Menor número impar: 1
*/
const {gets, print} = require('./funcoes_auxiliares_2');
const n = gets();
let maiorPar = null;
let menorImpar = null;

for (let i = 0; i < n; i++) {
   // console.log(i);
    const numeroLido = gets();
    //print(numeroLido);
    if(numeroLido % 2 === 0){
        if(maiorPar === null || numeroLido > maiorPar){
            maiorPar=numeroLido;
        }   
    }
    else {
        if(menorImpar === null || numeroLido < menorImpar){
            menorImpar = numeroLido;
        }
    }
}

print('O maior numero par eh: '+maiorPar);
print('O menor numero impar eh: '+menorImpar);