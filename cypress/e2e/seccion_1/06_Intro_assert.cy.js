/// <reference types='cypress'/>
describe('Introduccion a los assert', () =>{
    it('Demo de los assert', () => {
        cy.visit('https://testingqarvn.com.es/datos-personales/');
        cy.title().should('eq','Datos Personales | TestingQaRvn');  
        cy.get('#wsf-1-field-21').should('be.visible');
        cy.get('#wsf-1-field-21').should('be.enabled');
    });
}); 
