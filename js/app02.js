/*
Nome      : app02
Finalidade: Curso de Lógica de programação: praticando com desafios
Observação: 03 Projeto Carrinho de Compras
Data      : 23/09/2024
*/

const read = require('readline-sync');
const { pare, ok, pula } = require('./app00.js');
const color = require('@colors/colors');
console.clear();

//# 4 #######################################################################
console.log("Faça a soma de duas variáveis numéricas e apresente no console com uma mensagem amigável em Template String.".cyan);
pula();
let num1 = Number(read.question("Informe o numero: "));
let num2 = Number(read.question("Informe o numero: "));
pula();
console.log(`A soma desses dois numeros eh ${num1 + num2}`);
pare();
//# 5 #######################################################################
console.log("Receba, no mínimo, duas sentenças como uma string e utilize split() para quebrá-la em frases menores com base em um ponto e vírgula como delimitador.".cyan);
pula();
let texto = read.question("Digite varias frase separadas por ponto e virgula :");
let frases = texto.split(";");
console.log(frases);
pare();
//# 6 #######################################################################
console.log("Receba uma string contendo números separados por vírgulas. Utilize split() para separar os números e exibi-los no console.".cyan);
pula();
let stringDeNumero = read.question("Digite varios numeros separadas por ponto e virgula :");
stringDeNumero.split(",");
console.log(stringDeNumero);
pula();
console.log('End-of-Job'.green);