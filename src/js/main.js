$(document).ready(function () {
  $("#telefone").mask("(00) 0 0000-0000");
  $("#cpf").mask("000.000.000-00");
  $("#cep").mask("00000-000");

  $("form").validate({
    rules: {
      nome: { required: true },
      email: { required: true, email: true },
      telefone: { required: true },
      cpf: { required: true },
      endereco: { required: true },
      cep: { required: true },
    },
    messages: {
      nome: "Insira seu nome completo",
      email: "Insira um email valido",
      telefone: "Insira um numero de celular",
      cpf: "Coloque seu CPF",
      endereco: "Insira seu endenço completo",
      cep: "Insira o CEP de sua rua",
    },
    submitHandler: function (form) {
      alert(`Cadastro concluído com sucesso!`);

      nome.value = "";
      email.value = "";
      telefone.value = "";
      cpf.value = "";
      endereco.value = "";
      cep.value = "";
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Exitem ${camposIncorretos} campos incorretos ou vazios`);
      }
    },
  });
});
