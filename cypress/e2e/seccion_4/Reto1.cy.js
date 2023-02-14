/// <reference types='cypress'/>
describe('Reto Invoke', () =>{
    it('Ocultar el formulario y luego ir mostrando de a poco', () => {
        cy.visit('https://testingqarvn.com.es/datos-personales/');
        cy.title().should('eq','Datos Personales | TestingQaRvn');

        /* Ocultamos todos los campos */
        cy.get('.wsf-tile').nextAll().invoke('hide');

        /* Vamos llenando los campos siguientes */
        cy.get('#wsf-1-field-21').type('Franco');

        cy.get('#wsf-1-field-wrapper-22').invoke('show');
        cy.get('#wsf-1-field-22').type('Morina');
        cy.get('#wsf-1-field-wrapper-23').invoke('show');
        cy.get('#wsf-1-field-23').type('Francomorinaa@gmail.com');
        cy.get('#wsf-1-field-wrapper-24').invoke('show');
        cy.get('#wsf-1-field-24').type('3513165992');
        cy.get('#wsf-1-field-wrapper-28').invoke('show');
        cy.get('#wsf-1-field-28').type('Tucuman 54');
        cy.get('#wsf-1-field-wrapper-27').invoke('show');
        cy.get('#wsf-1-field-27').click();
    });
});