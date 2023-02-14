/// <reference types='cypress'/>
describe('Alertas', () =>{
    it('Alert', () => {
        cy.visit('http://demo.seleniumeasy.com/bootstrap-modal-demo.html');
        cy.title().should('eq','Selenium Easy Demo - Bootstrap Modal Demo to Automate');
        cy.wait(1000);
        const stub = cy.stub();
        cy.on('window:alert', stub);
        cy.get('.panel-body .btn-primary').eq(0).click().then(()=>{
            expect(stub.getCall(0)).to.be.calledWith('This is the place where the content for the modal dialog displays');
        });

        /* cy.on('window:alert', (str) =>{
            expect(str).to.equal('This is the place where the content for the modal dialog displays')
            return true;
        }) */
    });
});