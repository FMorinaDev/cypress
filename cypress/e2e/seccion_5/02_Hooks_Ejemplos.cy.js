/// <reference types='cypress'/>
describe('Hooks Ejemplos', () =>{
    beforeEach(()=>{
        cy.visit('https://testingqarvn.com.es/datos-personales/');
        cy.title().should('eq','Datos Personales | TestingQaRvn');
        cy.wait(1000);
    });
    it('Poner nombre', () => {
        cy.get('#wsf-1-field-21').should('be.visible').should('be.enabled').type('Franco');
    });
    it('Poner Apellido', () => {
        cy.get('#wsf-1-field-22').should('be.visible').should('be.enabled').type('Morina');
    });
});