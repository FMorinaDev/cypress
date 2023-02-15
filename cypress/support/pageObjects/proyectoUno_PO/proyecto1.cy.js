class ProyectoUno{
    inicio(){
        beforeEach(()=>{
            cy.visit('https://testingqarvn.com.es/datos-personales/');
            cy.title().should('eq','Datos Personales | TestingQaRvn');
            cy.wait(1000);
        });
    }
}
export default ProyectoUno;