/// <reference types="cypress"/>
require('cypress-plugin-tab')
describe('Ejemplo funcion tab', () =>{
    it('Type pageUp', () => {
        cy.visit('https://testingqarvn.com.es/datos-personales/');
        cy.wait(1000);
        cy.title().should('eq','Datos Personales | TestingQaRvn');
        
        cy.get('#wsf-1-field-21').type('Franco').tab()
        .type('Morina').tab()
        .type('francomorinaa@gmail.com');
    });
});