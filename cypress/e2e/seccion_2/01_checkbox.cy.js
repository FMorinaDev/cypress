/// <reference types='cypress'/>
describe('Nueva seccion checkbox', () =>{
    it('check uno', () => {
        cy.visit('http://demo.seleniumeasy.com/basic-checkbox-demo.html');
        cy.wait(1000);

        cy.get('[type="checkbox"]').check().should('be.checked');
        cy.get('[type="checkbox"]').uncheck().should('not.be.checked');
    });
    it('Check por seleccion', () => {
        cy.visit('http://demo.seleniumeasy.com/basic-checkbox-demo.html');
        cy.wait(1000);

        cy.get('#isAgeSelected').check().should('be.checked');
    });
    it.only('Radios Button', () => {
        cy.visit('http://demo.seleniumeasy.com/basic-radiobutton-demo.html');
        cy.wait(1000);
        
        cy.get('.panel-body > :nth-child(3) > input').check();
    });
});