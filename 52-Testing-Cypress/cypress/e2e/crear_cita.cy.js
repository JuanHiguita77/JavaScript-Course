describe('Cargar pagina principal', () => {
  it('load main page', () => {
    cy.visit('index.html');

    //Simular llenado de campos
    cy.get('[data-cy=mascota]')
      .type('Sekki');

    cy.get('[data-cy=propietario]')
      .type('Juan');

    cy.get('[data-cy=telefono]')
      .type('4646565');

    cy.get('[data-cy=fecha]')
      .type('2023-06-27');

    cy.get('[data-cy=hora]')
      .type('12:00');

    cy.get('[data-cy=sintomas]')
      .type('Come mucho como gordaaa');

    //Enviando el formulario
    cy.get('[data-cy=submit-button]')
      .click();

    cy.get('[data-cy=citas-heading]')
      .invoke('text')
      .should('equal', 'Administra tus Citas'); 

    //Seleccionar la alerta
    cy.get('[data-cy=alerta]')
      .invoke('text')
      .should('equal','Se agregó correctamente');

    //Validar la clase
    cy.get('[data-cy=alerta]')
      .should('have.class','alert-success');
      
  });
});