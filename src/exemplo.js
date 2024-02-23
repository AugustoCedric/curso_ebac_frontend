"use strict";
// Multiplicação
const multiplicar = (numero1, numero2) => {
    return numero1 * numero2;
};
// Saudação
const saudacao = (nome) => {
    return `Olá ${nome}`;
};
// Uso
const resultadoMultiplicacao = multiplicar(70, 3);
const mensagemSaudacao = saudacao("Cedric");
console.log(resultadoMultiplicacao);
console.log(mensagemSaudacao);
