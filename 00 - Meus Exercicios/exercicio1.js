/*1) Faça um programa que receba a média de um aluno.
Caso a média seja < 5 imprima "Reprovado"
Caso a média seja >= 5 e < 7 imprima "Recuperação"
Caso a média seja >= 7 imprima "Aprovado"

    Exemplo:
        Entrada:
            5.5
        Saída:
            Recuperação
*/
const {gets, print} = require('./funcoes_auxiliares');

const mediaDoAluno = gets();

if(mediaDoAluno >=7 ){
    print('Nota:'+mediaDoAluno+' Aprovado');
}
else if(mediaDoAluno>= 5 && mediaDoAluno < 7 ){
    print('Nota:'+mediaDoAluno+' Recuperação');
}
else if(mediaDoAluno >= 0 && mediaDoAluno <5){
    print('Nota:'+mediaDoAluno+' Reprovado');
}else{
    print('Nota invalida:' +mediaDoAluno);
}
