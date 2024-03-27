const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implemente os ouvintes de eventos do node aqui, se necessário
    },
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/relatorio",
    overwrite: true,
    html: true,
    json: false,
    timestamp: "ddmmyyyy_HHMMss",
  },
});
