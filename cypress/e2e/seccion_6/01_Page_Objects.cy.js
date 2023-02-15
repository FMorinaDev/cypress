/// <reference types='cypress'/>
import ProyectoUno from "../../support/pageObjects/proyectoUno_PO/proyecto1.cy";
describe('Page Objects Models', () =>{
    const master = new ProyectoUno();
    master.inicio();
    it('Poner nombre', () => {
        cy.get('#wsf-1-field-21').should('be.visible').should('be.enabled').type('Franco');
    });
    it('Poner Apellido', () => {
        cy.get('#wsf-1-field-22').should('be.visible').should('be.enabled').type('Morina');
    });
});