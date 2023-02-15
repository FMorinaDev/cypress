/// <reference types='cypress'/>
describe('Hooks', () =>{
    before(()=>{
        cy.log('Esto inicia antes que todo solo una vez');
    });
    beforeEach(()=>{
        cy.log('Esto se repite en cada uno de los test muy importante');
    });
    afterEach(()=>{
        cy.log('Esto se hace al final de todos los test');
    });
    after(()=>{
        cy.log('########### Final de Todo #############');
    });
    it('test uno', () => {
        cy.log('test uno');
    });
    it('test dos', () => {
        cy.log('test dos');
    });
});