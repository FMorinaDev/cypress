/// <reference types="cypress"/>
describe('Ejemplo de Type pageUp y pageDown', () =>{
    it('Type pageUp', () => {
        cy.visit('https://testingqarvn.com.es/datos-personales/');
        cy.wait(1000);
        cy.title().should('eq','Datos Personales | TestingQaRvn');

        cy.scrollTo('buttom').wait(1000);
        cy.scrollTo('top').wait(1000);
    });
});