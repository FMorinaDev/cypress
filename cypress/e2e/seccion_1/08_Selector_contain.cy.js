/// <reference types='cypress'/>
describe('Selector contain', () =>{
    it('contain', () => {
        cy.visit('https://testingqarvn.com.es/radio-buttons/');
        cy.wait(1000);
        cy.title().should('eq','Radio Buttons | TestingQaRvn');
        cy.get('.wsf-label').contains('CypressIO').click();
    });
    
});