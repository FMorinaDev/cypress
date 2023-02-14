/// <reference types='cypress'/>
describe('Manejo de Invoke', () =>{
    it('Invoke text', () => {
        cy.visit('https://testingqarvn.com.es/datos-personales/');
        cy.title().should('eq','Datos Personales | TestingQaRvn');
        cy.wait(1000);

        cy.get('h2').invoke('text').as('info');

        cy.get('@info').should('contain','Datos Personales Básicos');
    });
    it('Invoke estilos', () => {
        cy.visit('https://testingqarvn.com.es/datos-personales/');
        cy.title().should('eq','Datos Personales | TestingQaRvn');
        cy.wait(1000);

        cy.get('[for="wsf-1-field-21"]').invoke('attr','style','color:Blue; font-size: 15px');
    });
    it('Invoke ocultar y mostrar', () => {
        cy.visit('https://testingqarvn.com.es/datos-personales/');
        cy.title().should('eq','Datos Personales | TestingQaRvn');
        cy.wait(1000);

        cy.get('[for="wsf-1-field-21"]').invoke('hide','2s').wait(1500);
        cy.get('[for="wsf-1-field-21"]').invoke('show').wait(1500);
    });
    it.only('Invoke src', () => {
        cy.visit('https://testingqarvn.com.es/datos-personales/');
        cy.title().should('eq','Datos Personales | TestingQaRvn');
        cy.wait(1000);

        cy.get('.et_pb_image_wrap img').invoke('attr','src').should('include','Formularios.jpg');
        cy.wait(1000);        
    });

});