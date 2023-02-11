/// <reference types='cypress'/>
describe('Fechas', () =>{
    it('Campos de tipo fecha', () => {
        cy.visit('http://demo.seleniumeasy.com/bootstrap-date-picker-demo.html');
        cy.title().should('eq','Selenium Easy - Best Demo website for Bootstrap Date picker');
        cy.wait(1000);
        cy.get('#sandbox-container1 > .input-group > .form-control').should('be.visible').type('19/10/2021 {esc}');   
    });
});