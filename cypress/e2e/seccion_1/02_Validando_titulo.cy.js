/// <reference types="cypress"/>
describe("Validando el titulo", () =>{
    it('Test validar el titulo', () => {
        cy.visit('https://testingqarvn.com.es/');
        cy.title().should('eq','TestingQaRvn | Mundo del Testing');
        cy.log('Ok la funcion title funciono bien');
    });
});