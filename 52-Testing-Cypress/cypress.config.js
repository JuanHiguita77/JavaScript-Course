const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //Establecer url por default
      baseUrl: 'http://localhost:3000'
    },  
  },
  //cambiar tamaño de la pantalla de prueba
  viewportWidth: 1200,
  viewportHeight: 800,
  
  
});


