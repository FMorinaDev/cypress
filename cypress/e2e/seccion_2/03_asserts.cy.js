/// <reference types='cypress'/>
describe('Asserts', () =>{
    it('contains', () => {
        cy.visit('https://www.xbox.com/es-AR');
        cy.wait(1000);
        cy.get('#uhf-g-nav').contains('PC Game Pass​​').click({force:true});
    });
    it('find, eq', () => {
        cy.visit('https://www.xbox.com/es-ar/xbox-game-pass/games');
        cy.wait(4000);
        cy.get('.gameDivLink').find('.c-image').eq(0).click();
    });
    it.only('text', () => {
        cy.visit('https://www.xbox.com/es-ar/xbox-game-pass/games');
        cy.wait(6000);
        cy.get('.gameDivLink').find('.x1GameName').eq(0).then((e)=>{
            let nombre = e.text();
            
            if (nombre == "Persona 4 Golden") {
                cy.log('Yes');
            }
        });
    });
}); 