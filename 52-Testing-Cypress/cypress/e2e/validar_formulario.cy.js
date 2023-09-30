describe('Validar el formulario', () => {
  it('Submit al formulario y mostrar la alerta de error', () => {
    cy.visit('index.html');

    //get: seleccionar un elemento del DOM parecido a querySelector
    cy.get('[data-cy=formulario]')
      .submit();


    //Seleccionar la alerta
    cy.get('[data-cy=alerta]')
      .invoke('text')
      .should('equal','Todos los campos son Obligatorios');

    //Validar la clase
    cy.get('[data-cy=alerta]')
      .should('have.class','alert-danger');
  });
});