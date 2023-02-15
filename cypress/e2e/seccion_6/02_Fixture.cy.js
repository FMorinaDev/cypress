/// <reference types='cypress'/>
require('cypress-plugin-tab')
describe('Fixtures', () =>{
    let data;
    beforeEach(()=>{
        cy.fixture('datos').then((d)=>{
            data=d;
        });
        cy.visit('https://testingqarvn.com.es/datos-personales/');
        cy.wait(1000);
        cy.title().should('eq','Datos Personales | TestingQaRvn');
    });
    it('Fixture', () => {
        cy.get('#wsf-1-field-21').type(data.nombre).tab()
        .type(data.apellido).tab()
        .type(data.email).tab()
        .type(data.telefono).tab()
        .type(data.direccion);
    });
});