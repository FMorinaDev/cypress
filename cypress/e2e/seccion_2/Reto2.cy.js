/// <reference types='cypress'/>
describe('Reto dos', () =>{
    it('Selects', () => {
        cy.visit('http://demo.seleniumeasy.com/jquery-dual-list-box-demo.html');
        cy.wait(1000);

        cy.get(':nth-child(1) > .form-control').select(['Isis','Sophia','Laura']).then(()=>{
            cy.get('.pAdd').should('be.visible').click().then(()=>{
                cy.wait(1000);
                cy.get('.pAddAll').click().then(()=>{
                    cy.wait(1000);
                    cy.get('.pRemoveAll').click();
                });
            });
        });
    });
});