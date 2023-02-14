/// <reference types='cypress'/>
describe('Reto tablas', () =>{
    it('Recorrer la tabla y obtener los datos', () => {
        cy.visit('http://demo.seleniumeasy.com/table-sort-search-demo.html');
        cy.title().should('eq','Selenium Easy - Tabel Sort and Search Demo');
        cy.wait(1000);
        let datos = [];
        let cantidad = 0;
        cy.get('.odd td, .even td').each(($el, index, $list)=>{
            datos.push($el.text());
        }).then(()=>{
            for (let i = 0; i < datos.length; i++) {
                cy.log(datos[i]);
                if (Number(datos[i])) {
                    cantidad += Number(datos[i]);
                }
            }
            cy.log(cantidad);
            expect(cantidad).to.eq(394);
        })
    });
});