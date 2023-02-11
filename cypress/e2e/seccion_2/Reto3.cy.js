/// <reference types='cypress'/>
describe('Reto 3', () =>{
    it('Asserts', () => {
        cy.visit('https://demo.seleniumeasy.com/basic-first-form-demo.html');
        cy.wait(1000);

        cy.get('#sum1').should('be.visible').and('have.class','form-control').type(10);
        cy.get('#sum2').should('be.visible').and('have.class','form-control').type(20);
        //cy.get('#gettotal > .btn').should('be.visible').click();
        cy.contains('[type="button"]','Get Total').should('be.visible').click();
    });
});