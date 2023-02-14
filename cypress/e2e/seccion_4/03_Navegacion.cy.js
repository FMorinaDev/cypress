/// <reference types='cypress'/>
describe('Navegacion entre paginas', () =>{
    it('Back, forward', () => {
        cy.visit('https://testingqarvn.com.es/');
        cy.title().should('eq','TestingQaRvn | Mundo del Testing');
        cy.wait(1000);
        cy.get('#menu-item-314').should('be.visible').click().wait(500);
        cy.go('back');
        cy.go('forward');
    });
    it.only('Recargar pagina', () => {
        cy.visit('https://testingqarvn.com.es/datos-personales/');
        cy.title().should('eq','Datos Personales | TestingQaRvn');

        /* Vamos llenando los campos siguientes */
        cy.get('#wsf-1-field-21').type('Franco');
        cy.reload();
    });
});