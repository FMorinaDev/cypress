/// <reference types="cypress"/>
describe("Cypres Studio", () =>{
    it('Test con cypress studio', () => {
        cy.visit('https://testingqarvn.com.es/datos-personales/');
        cy.wait(1000);
        cy.title().should('eq','Datos Personales | TestingQaRvn');
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#wsf-1-field-21').type('Franco');
        cy.get('#wsf-1-field-22').type('Morina');
        cy.get('#wsf-1-field-wrapper-23').click();
        cy.get('#wsf-1-field-23').type('email@gmail.com');
        cy.get('#wsf-1-field-27').click();
        /* ==== End Cypress Studio ==== */
    });
});