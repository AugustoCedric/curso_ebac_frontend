const form = document.getElementById("form-ex-m7-js"); // criando a variavel constante do formulario

//desativando o efeito auto-limpar do submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const valorCampoA = Number(document.getElementById("idCampA").value); //variavel constante para manuseio do id campo A
  const valorCampoB = Number(document.getElementById("idCampB").value);//variavel constante para manuseio do id campo B

  //Sem estas variaveis eu não consegui deixar os recursos iguais ao do professor, pois a function 'addEventListener' criticou e levei quase 3h para so resolver assim.
  const vrCampoA = document.getElementById("idCampA");//variavel constante para manuseio do id campo A, diferente do anteriro para poder limpar os inputs
  const vrCampoB = document.getElementById("idCampB");//variavel constante para manuseio do id campo B, diferente do anteriro para poder limpar os inputs

  const msgSucesso = `O valor do Campo B <b>${valorCampoB}</b> é maior que o valor do Campo A <b>${valorCampoA}</b>`;//variavel constante para menssagem de Sucesso
  const msgErro = `O valor do Campo B <b>${valorCampoB}</b> é menor que o valor do Campo A <b>${valorCampoA}</b>`;//variavel constante para menssagem de Erro

  let frmCalculo = false; //variavel declarativa de condição inicial do teste logico, para usar no If ... Else...

  //função de validação de preenchimento dos inputs condicionando para que input A não seja menor que input B
  function vValor(valorCampoA, valorCampoB) {
    return valorCampoA < valorCampoB;
  }

  const mS = document.querySelector(".success-msg");//variavel constante para acionamento da menssagem de Sucesso
  const mErr = document.querySelector(".error-msg");//variavel constante para menssagem de Erro

  frmCalculo = vValor(valorCampoA, valorCampoB);//atribuindo as variaveis para o teste logico If ... Else ...

  //Teste logio 
  if (frmCalculo) {
    mS.innerHTML = msgSucesso;//resultado verdaderiro apresenta mensagem de Sucesso
    mS.style.display = "block"; //apresenta o texto estilizado no Css
    mErr.style.display = "none"; // Oculta a mensagem de erro

    vrCampoA.style.border = "";// remove a bordar do Campo A
    mErr.innerHTML = ""; // menssagem de Erro removida

    vrCampoA.value = ""; //Limpa o Campor A
    vrCampoB.value = ""; //Limpa o Campo B
  } else {
    vrCampoA.style.border = "1px solid red";//resultado Falso apresenta borda vermelha
    mErr.innerHTML = msgErro;//Apresenta menssagem de Erro orientativa ao usuario
    mErr.style.display = "block"; // Apresenta o estilo feito no CSS
    mS.style.display = "none"; // Oculta o estilo da menssagem de Sucesso

    vrCampoB.value = "";//limpa apenas o Campo B, deixando o Campo A preenchido para melhor experiencia corretiva do usuario.
  }
});
