/*
3) Faça um programa que calcule e imprima o salário salário a ser transferido para um funcionário.
Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
O salário salário a ser transferido é calculado da seguinte maneira: 
   
   valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

Para calcular o percentual de imposto segue as aliquotas:

    De R$ 0.00 a R$ 1100.00 = 5.00%
    De R$ 1100.01 a	R$ 2500.00 = 10.00%
    Maior que 2500.00 = 15.00%

    Exemplo:
        Entrada:
            2000
            250

        Saída:
            2050.00
*/
const { gets, print } = require('./funcoes_auxiliares_3');

const valorBrutoSalario = gets();
const valorAdicionalBeneficios = gets();

function retornaValorImposto(Salariobruto){
    let imposto=0;
    if(Salariobruto >= 0 && Salariobruto <= 1100.00){
        return ((0.05*Salariobruto));
    }
    else if(Salariobruto >1100.00 && Salariobruto <=2500.00){
        return ((0.10*Salariobruto));
    }
    else if(Salariobruto >2500.00){
        return ((0.15*Salariobruto));
    }else{
        return 0;
    }
      
}

const salarioAserTransferido = valorBrutoSalario - retornaValorImposto(valorBrutoSalario) + valorAdicionalBeneficios;
print(salarioAserTransferido);