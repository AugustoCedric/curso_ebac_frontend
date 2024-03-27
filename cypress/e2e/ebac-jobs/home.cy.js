/// <reference types='cypress' />

describe("Teste para a home", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });
  // -- TESTE DE INCLUSÃO
  it("Deve incluir informações no formulário", () => {
    cy.get('input[type="text"]').type("Augusto Cedric"); // Preencher o campo de nome
    cy.get('input[type="email"]').type("npm.cedric@gmail.com"); // Preencher o campo de e-mail
    cy.get('input[type="tel"]').type("11912345678"); // Preencher o campo de telefone
    cy.contains("Adicionar").click(); // Clicar no botão de adicionar
    cy.screenshot("teste-incluir"); // criando um screenshot da inclusão
  });
  // -- TESTE DE EDIÇÃO
  it("Deve alterar a informação da lista", () => {
    cy.get(":nth-child(2) > .sc-gueYoa > .edit").click(); // Clicar no botão de editar do segundo item da lista
    cy.get('input[type="text"]').clear().type("Marcelo Souza"); // Limpar e preencher o campo de nome
    cy.get('input[type="email"]').clear().type("mmarcelo@ebac.com.br"); // Limpar e Preencher o campo de e-mail
    cy.get('input[type="tel"]').clear().type("11912345678"); // Limpar e Preencher o campo de telefone
    cy.get(".alterar").click(); // Clicar no botão de salvar (ou qualquer botão que finalize a edição)
    cy.screenshot("teste-editar"); // criando um screenshot da edição
  });
  // -- TESTE DE REMOÇÃO
  it("Deve remover um contato da lista", () => {
    cy.get(":nth-child(3) > .sc-gueYoa > .delete").click(); // Clicar no botão de remover o contato da lista
    cy.screenshot("teste-remover"); // criando um screenshot da Deletar
  });
});
