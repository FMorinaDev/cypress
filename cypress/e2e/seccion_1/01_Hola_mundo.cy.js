/// <reference types="cypress"/>
describe("Primer Test con Cypress", () =>{
    it('Hola mundo desde cypress', () => {
        cy.log('Hola Mundo');
        cy.visit('https://testingqarvn.com.es/datos-personales/');
        cy.wait(3000);
        cy.get('#wsf-1-field-21').type('Franco');
        cy.get('#wsf-1-field-22').type('Morina');
        cy.get('#wsf-1-field-23').type('francomorinaa@gmail.com');
        cy.get('#wsf-1-field-24').type('3513165992');
        cy.get('#wsf-1-field-28').type('Demo de la direccion');
        cy.get('#wsf-1-field-27').click();
        cy.wait(4000);
    });
});