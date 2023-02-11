/// <reference types='cypress'/>
describe('Trabajando con archivos', () =>{
    it('Subida de archivo', () => {
        cy.visit('https://testingqarvn.com.es/upload-files/');
        cy.wait(1000);
        cy.get('#wsf-1-field-94').should('be.visible').selectFile('cypress/fixtures/img1.jpg');
    });
});