/*
    Faça um programa que caulcule e imprima o salário a ser transferido para um funcionário
    Para realizar o calculo receba o valor bruto do salário e o adicinal dos benefícios
        O salário a ser transferido é calculado da seguinte maneira:
            valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional de benefícios

    para calcular o percentual de impostos segue as alíquotas:
    de 0 a 1100 5%
    de 1100,01 a 2500 = 10%
    maior que 2500 = 15%

    entrada
    2000
    250
    saida 2050
*/

const { gets, print } = require('./funcoesAuxiliares');

const salarioBruto = gets();
const valorBeneficio = gets();

function calcularPercentagem(valor, percentual) {
    return valor * (percentual / 100);
}

function pegarAliquota(salario) {
    if (salario >= 0 && salario <= 1100) {
        return 5;
    } else if (salario >= 1100.01 && salario <= 2500) {
        return 10;
    } else if (salario > 2500.01) {
        return 15;
    } else {
        print("Valor inválido!");
    }
}


const imposto = pegarAliquota(salarioBruto);
const aliquotaImposto = calcularPercentagem(salarioBruto, imposto)

const valorATransferir = salarioBruto  - aliquotaImposto + valorBeneficio; 

print(valorATransferir);

