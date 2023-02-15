/// <reference types='cypress'/>
describe('Selects', () =>{
    it('Select', () => {
        cy.visit('http://demo.seleniumeasy.com/basic-select-dropdown-demo.html');
        cy.wait(1000);

        cy.get('#select-demo').should('be.visible').select('Friday').should('have.value','Friday');
    });
    it('Select en google', () => {
        cy.visit('https://www.google.com/');
        cy.wait(1000);

        cy.get('[name="q"]').should('be.visible').type('Ferrari').type('{enter}');
    });
    it.only('Multi Select', () => {
        cy.visit('http://demo.seleniumeasy.com/basic-select-dropdown-demo.html');
        cy.wait(1000);
        cy.get('#multi-select').should('be.visible').select(['Florida','Ohio']).then(()=>{
            cy.get('#printMe').should('be.visible');
        });
    });
});