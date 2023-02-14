/// <reference types='cypress'/>
describe('Tablas', () =>{
    it('Seleccionar de una tabla', () => {
        cy.visit('http://demo.seleniumeasy.com/table-records-filter-demo.html');
        cy.title().should('eq','Selenium Easy - Table Data Filter Demo');
        cy.wait(1000);

        cy.get('.btn-group').children('.btn-success').should('contain','Green').click().wait(500);
        cy.get('.btn-group').children('.btn-danger').should('contain','Red').click().wait(500);
        cy.get('.btn-group').children('.btn-default').should('contain','All').click().wait(500);
    });

    it('Seleccionar de una tabla por filter', () => {
        cy.visit('http://demo.seleniumeasy.com/table-records-filter-demo.html');
        cy.title().should('eq','Selenium Easy - Table Data Filter Demo');
        cy.wait(1000);

        cy.get('[type="button"]').filter('.btn-warning').should('contain','Orange').click().wait(500);
        
    });
    it('Seleccionar de una tabla por find', () => {
        cy.visit('http://demo.seleniumeasy.com/table-records-filter-demo.html');
        cy.title().should('eq','Selenium Easy - Table Data Filter Demo');
        cy.wait(1000);

        cy.get('.btn-group').find('.btn-warning').should('contain','Orange').click().wait(500);
        
    });
    it('Seleccionar de una tabla por last y first', () => {
        cy.visit('http://demo.seleniumeasy.com/table-records-filter-demo.html');
        cy.title().should('eq','Selenium Easy - Table Data Filter Demo');
        cy.wait(1000);

        cy.get('.btn-group').find('button').first().click().wait(1500);
        cy.get('.btn-group').find('button').last().click().wait(1500);
        
    });

    it('Seleccionar el siguiente elemento por NextAll ', () => {
        cy.visit('http://demo.seleniumeasy.com/table-records-filter-demo.html');
        cy.title().should('eq','Selenium Easy - Table Data Filter Demo');
        cy.wait(1000);

        cy.get('[type="button"]').should('contain','Green').nextAll().should('have.length', 4);
        
    });
    it('Seleccionar el elemento Padre ', () => {
        cy.visit('http://demo.seleniumeasy.com/table-records-filter-demo.html');
        cy.title().should('eq','Selenium Easy - Table Data Filter Demo');
        cy.wait(1000);

        cy.get('.btn-warning').parent().should('have.class','btn-group');
        
    });
    it.only('Reto check de una tabla', () => {
        cy.visit('http://demo.seleniumeasy.com/table-records-filter-demo.html');
        cy.title().should('eq','Selenium Easy - Table Data Filter Demo');
        cy.wait(1000);

        cy.get('.btn-default').click().wait(500);
        cy.get('[type="checkbox"]').check({force:true});
    });
});