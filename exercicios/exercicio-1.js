/*
Faça um programa que receba N -quantidade de numeros e seus respectivos valores
imprima o maior numero par e o menor numero impar

entrada
5
3
4
1
10
8

saída 
    Maior número par: 10
    Menor número impar: 1
*/

const { gets, print } = require('./funcoesAuxiliares');

const n = gets();

let maiorNumeroPar = null;
let menorNumeroImpar = null;

for (let i = 0; i < n; i++) {
    const item = gets();
    
    if (item % 2 === 0) {
        if (maiorNumeroPar === null || item > maiorNumeroPar) {
            maiorNumeroPar = item;
        }    
    } 
    else {
        if (menorNumeroImpar === null || item < menorNumeroImpar) {
            menorNumeroImpar = item;

        }
    }


}

print(` O maior número par é: ${maiorNumeroPar}`);
print(` O menor número impar é: ${menorNumeroImpar}`);

