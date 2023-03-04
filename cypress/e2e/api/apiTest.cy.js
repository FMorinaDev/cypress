/// <reference types='cypress'/>
describe('Demo de una rest api', () =>{
    it('Test uno', () => {
        const datos = {
            'Nomobre': 'Franco',
            'Apellido': 'Morina',
            'Telefono': '13541531',
            'Direccion': 'Demo direccion'
        }
        cy.log(datos['Nomobre']);
        cy.log(datos['Apellido']);
    });
});