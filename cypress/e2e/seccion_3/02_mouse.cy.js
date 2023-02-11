/// <reference types='cypress'/>
import '@4tw/cypress-drag-drop'
//require('@4tw/cypress-drag-drop');
describe('Eventos Mouse', () =>{
    it('Drag and Drop', () => {
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop');
        cy.title().should('eq','The Internet');
        cy.wait(1000);
        /* Asi deberia de funcionar */
        //cy.get('#column-a',{force:true}).drag('#column-b',{force:true});
        //cy.get('#column-a').move({ deltaX: 100, deltaY: 100 });
    });
});