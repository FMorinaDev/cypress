/// <reference types='cypress'/>
describe('Referencias a windows', () =>{
    it('windows propiedad charset', () => {
        cy.visit('http://demo.seleniumeasy.com/basic-select-dropdown-demo.html');
        cy.title().should('eq','Selenium Easy Demo - Automate All Scenarios');
        cy.wait(1000);

        cy.document().should('have.property','charset').and('eq','UTF-8');

    });
    it.only('windows url', () => {
        cy.visit('http://demo.seleniumeasy.com/basic-select-dropdown-demo.html');
        cy.title().should('eq','Selenium Easy Demo - Automate All Scenarios');
        cy.wait(1000);

        cy.url().should('include','basic-select-dropdown-demo.html');

    });
});