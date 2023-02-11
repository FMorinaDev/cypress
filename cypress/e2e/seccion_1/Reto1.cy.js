/// <reference types='cypress'/>
require('cypress-plugin-tab')
describe('Primer reto', () =>{
    it('Agregar Elemento', () => {
        cy.visit('http://computer-database.gatling.io/computers');
        cy.wait(1000);

        /* Completamos los campos */
        cy.get('#add').should('be.visible').click();
        cy.get('#name').should('be.visible').type('PC Franco Morina').tab()
        .type('2000-02-03').tab()
        .type('2001-01-01').tab()
        .select('RCA').should('have.value','3').wait(500);

        /* Hacemos click */
        cy.get('[type="submit"]').click();

        /* Buscamos en el filtro */
        cy.get('#searchbox').type('ACE').tab().click();
    });
});