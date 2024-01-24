// Inicie a máscara para o campo de telefone
var telefoneInput = document.getElementById("telefone");
var telefoneMask = new IMask(telefoneInput, {
  mask: "(00) 0 0000-0000",
});
