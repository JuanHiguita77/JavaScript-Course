describe('Eliminar boton', () => {
  it('Eliminando una cita', () => {
    cy.visit('index.html')

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

    cy.get('[data-cy=botonEliminar]')
      .click();

    cy.get('[data-cy=citas-heading]')
      .invoke('text')
      .should('equal', 'No hay Citas, comienza creando una');

    cy.screenshot();
  });
});