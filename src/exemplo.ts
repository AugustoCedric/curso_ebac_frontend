// Multiplicação
const multiplicar = (numero1: number, numero2: number): number => {
    return numero1 * numero2;
  };
  
  // Saudação
  const saudacao = (nome: string): string => {
    return `Olá ${nome}`;
  };
  
  // Uso
  const resultadoMultiplicacao = multiplicar(70, 3);
  const mensagemSaudacao = saudacao("Cedric");
  
  console.log(resultadoMultiplicacao);
  console.log(mensagemSaudacao); 
  