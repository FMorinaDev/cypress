/// <reference types='cypress'/>
describe('Opciones de click', () =>{
    it('click sencillo', () => {
        cy.visit('https://testingqarvn.com.es/datos-personales/');
        cy.wait(1000);
        cy.title().should('eq','Datos Personales | TestingQaRvn');
        cy.get('#wsf-1-field-27').should('be.visible').click();
    });
    //Sirve para cuando hay un elemento arriba, un z index por encima de este.
    it('click Force True', () => {
        cy.visit('https://testingqarvn.com.es/datos-personales/');
        cy.wait(1000);
        cy.title().should('eq','Datos Personales | TestingQaRvn');
        cy.get('#wsf-1-field-27').should('be.visible').click({force:true});
    });
    //Hacer click por coordenadas.
    it.only('click por coordenadas', () => {
        cy.visit('https://testingqarvn.com.es/datos-personales/');
        cy.wait(1000);
        cy.title().should('eq','Datos Personales | TestingQaRvn');
        cy.get('.et_pb_row_1').should('be.visible').click(50,5);
    });
});