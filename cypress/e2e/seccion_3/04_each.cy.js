/// <reference types='cypress'/>
describe('Each', () =>{
    it('Each uno', () => {
        cy.visit('https://www.tiendaauka.com/productos/');
        cy.title('Comprá online productos en auka.tienda').should('eq','Comprá online productos en auka.tienda');
        cy.wait(1000);
        cy.get('.js-item-name').each(($el, index, $list) => {
            cy.log($el.text());
        });
    });
    it('Each dos', () => {
        cy.visit('https://www.tiendaauka.com/productos/');
        cy.title('Comprá online productos en auka.tienda').should('eq','Comprá online productos en auka.tienda');
        cy.wait(1000);
        cy.get('.js-item-name').each(($el, index, $list) => {
            let nombre = $el.text();
            if (nombre == 'SEPARADORES KUROMI') {
                cy.wrap($el).click();
            }
        });
    });
    it.only('Each tres', () => {
        cy.visit('https://www.tiendaauka.com/productos/');
        cy.title('Comprá online productos en auka.tienda').should('eq','Comprá online productos en auka.tienda');
        cy.wait(1000);
        
        for (let x = 0; x < 3; x++) {
            cy.get('.js-item-name').eq(x).click().wait(1500);
            cy.get('.js-prod-submit-form').click().wait(2000);
            cy.get('.modal-right-header .js-toggle-cart.m-bottom').click({force:true}).wait(300);
            cy.get('.desktop-nav-item a').eq(1).click({force:true}).wait(1500);
            
        }
    });
});