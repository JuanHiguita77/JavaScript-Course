/// <reference types="cypress"/>

describe('Cargar la pagina principal',()=>
{
  it('Carga la page principal', ()=>
  {
    //Primero conectarlo al sitio a probar
    cy.visit('index.html');

    //Empezar las pruebas
    //Nunca usas este tipo de identificador por etiquetas
    //cy.contains('h1','Administrador de Pacientes de Veterinaria');

    cy.contains('[data-cy=titulo-proyecto]','Administrador de Pacientes de Veterinaria');

    //Mejor usar data-cy para identificar los elementos
    cy.get('[data-cy=titulo-proyecto]').should('exist');

    //Verificar que exista el elemento y contenga un texto
    cy.get('[data-cy=titulo-proyecto]')
         .invoke('text')
         .should('equal', 'Administrador de Pacientes de Veterinaria');

    //verificando otro texto de ñas citas
    cy.get('[data-cy=citas-heading]')
      .invoke('text')
      .should('equal', 'No hay Citas, comienza creando una');     

    cy.get('[data-cy=citas-heading]')
      .invoke('text')
      .should('not.equal', 'No hay Citas, comienza creando');
  });
});