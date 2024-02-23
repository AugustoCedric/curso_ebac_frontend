// Criar array de objetos representando alunos
const nomeAlunos = [
    { nome: 'João', nota: 7 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Pedro', nota: 8 },
    { nome: 'Ana', nota: 4 },
    { nome: 'Carlos', nota: 6 }
  ];
  
  // Função para retornar apenas alunos com nota maior ou igual a 6
  const filtrarAlunosAprovados = (arrayDeAlunos) => arrayDeAlunos.filter(nomeAlunos => nomeAlunos.nota >= 6);
  
  // Chamar a função e exibir o resultado
  const alunosAprovados = filtrarAlunosAprovados(nomeAlunos);
  console.log(alunosAprovados);
  